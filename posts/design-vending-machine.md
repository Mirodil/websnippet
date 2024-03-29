---
title: "How do you design the Vending Machine"
description: "How do you design the Vending Machine. We will write code to implement a Vending machine that has a bunch of products like chocolates, candy, cold-drink, and accept some coins like Nickle, Dime, Quarter, Cent, etc. Make sure you insert a coin, get a product back, and get your chance back."
date: "2021-10-01T00:00:00.854Z"
lastmod: "2021-10-01T00:00:00.854Z"
slug: "design-vending-machine"
categories: 
    - "System Design"
tags: ["Interview"]
thumbnail: "/assets/design-vending-machine.jpg"
image: "/assets/design-vending-machine.jpg"

---


# How do you design the Vending Machine

You need to write code to implement a Vending machine that has a bunch of products like chocolates, candy, cold-drink, and accept some coins like Nickle, Dime, Quarter, Cent, etc. Make sure you insert a coin, get a product back, and get your chance back.

We are going to make some assumtions to simplicity sake:
- We assume we have endless products, so we don't have throw a ProductSoldOutExcepiton
- We assume we have endless coins, so we don't have throw a NotSufficientChangeException


### State transition diagrams

State transition diagram is an efficient form for depicting a finite state machine, and it is called a state transition diagram. We will start with a state transition diagram, and we follow the arrows, and we say the arrows in the `Given-When-Then` form, then you get something like this.
Let's draw state transition diagramm for the Vending Machine.

![vending machine state transition diagram](/assets/design-vending-machine-state-transition-diagram.svg) 

### State transition tables
State transition table is in `given->then->then` form:

| Given State   | Event       | Next State      | Action    |
| -----------   | ----------- | --------------  | ----------|
| ProductsState | select      | ChargeState     | display charge |
| ChargeState   | coin        | CollectState    | return product & refund |
| CollectState  | reset       | ProductsState   | display products |
| ProductsState | coin        | ProductsState   | return changes |
| CollectState  | coin        | CollectState    | display charge // when not enought coin |
| CollectState  | select      | CollectState    | display charge |
| ChargeState   | select      | ChargeState     | display charge // change product |


### Implementation

The simplest way is to implement with switch-case statements. We need to create our events and state as enum and implement VendingMachine finite state machine.


```typescript
enum EVENTS {
    SELECT,
    COIN,
    RESET
}

enum STATE {
    PRODUCTS,
    CHARGE,
    COLLECT
}

type Product = {
    name: string;
    price: number;
};

interface IVendingMachine {
    refund(charges: number): void;
    unloadProduct(selectedProduct: Product): void;
    displayCharges(price: number): void;
    displayProducts(list: Product[]): void;
}

/**
 * VendingMachine - finite state machine
 */
class VendingMachineFSM {
    private products: Array<Product> = [];
    private selectedProduct?: Product;
    private balance: number = 0;
    private state: STATE;
    private vm: IVendingMachine;

    constructor(vm: IVendingMachine) {
        this.vm = vm;
        this.state = STATE.PRODUCTS;
    }

    handleEvents(event: EVENTS, product: Product, coin: number) {
        switch (this.state) {
            case STATE.PRODUCTS:
                switch (event) {
                    case EVENTS.SELECT:
                        this.state = STATE.CHARGE;
                        this.selectedProduct = product;
                        this.balance = this.selectedProduct.price;
                        this.vm.displayCharges(this.balance);
                        break;
                    case EVENTS.COIN:
                    case EVENTS.RESET:
                        this.selectedProduct = undefined;
                        this.balance = 0;
                        this.vm.displayProducts(this.products);
                        break;
                }
                break;
            case STATE.CHARGE:
                switch (event) {
                    case EVENTS.SELECT:
                        this.selectedProduct = product;
                        this.balance = this.selectedProduct.price;
                        this.vm.displayCharges(this.balance);
                    case EVENTS.COIN:
                        this.state = STATE.COLLECT;
                        this.balance -= coin;
                        if (this.balance <= 0) {
                            this.vm.unloadProduct(this.selectedProduct!);
                            this.vm.refund(this.balance);
                            this.state = STATE.PRODUCTS;
                        } else {
                            this.vm.displayCharges(this.balance);
                        }
                    case EVENTS.RESET:
                        this.state = STATE.PRODUCTS;
                        this.selectedProduct = undefined;
                        this.balance = 0;
                }
                break;
            case STATE.COLLECT:
                switch (event) {
                    case EVENTS.COIN:
                        this.balance -= coin;
                        if (this.balance <= 0) {
                            this.vm.unloadProduct(this.selectedProduct!);
                            this.vm.refund(this.balance);
                            this.state = STATE.PRODUCTS;
                        } else {
                            this.vm.displayCharges(this.balance);
                        }
                    case EVENTS.SELECT:
                    case EVENTS.RESET:
                        this.state = STATE.PRODUCTS;
                        this.selectedProduct = undefined;
                        this.balance = 0;
                        this.vm.displayProducts(this.products);
                        break;
                }
        }
    }
}
```
As you can notice we are sperating a state(`VendingMachineFSM`) from a vending machine(`IVendingMachine`) by using interface.
As Vending Machine is a State Machine. The events and actions are what is being controlled, and the finite state machine is how that control is managed, and those two can be encapsulated and kept completely separate from one another. The separation of what from how is one of the most essential aspects of good software design.
Too often we find software systems in which what from how are so intertangled that it's very difficult to separate operation from policy. And when you can't separate what from how, well then you wind up with systems that are pretty fragile.

The other version is implement state transition table using lists or dictionary data structure and it called table driven approach.


### State pattern

> The state pattern is a behavioral software design pattern that allows an object to alter its behavior when its internal state changes
> wiki

```typescript

interface IVendingMachineState {
    reset(vm: VendingMachineFSM_DP): void;
    coin(vm: VendingMachineFSM_DP, coin: number): void;
    select(vm: VendingMachineFSM_DP, product: Product): void;
}

abstract class VendingMachineFSM_DP {
    state: IVendingMachineState;
    balance: number = 0;
    selectedProduct?: Product;
    availableProducts: Product[] = [];

    constructor(state: IVendingMachineState) {
        this.state = state;
    }

    select(product: Product) {
        this.state.select(this, product);
    }

    coin(coin: number) {
        this.state.coin(this, coin);
    }

    reset() {
        this.state.reset(this);
    }

    // methods will be implemented by concrete Vending Machine
    abstract returnChanges(charges: number): void;
    abstract unloadProduct(selectedProduct: Product): void;
    abstract displayCharges(price: number): void;
    abstract displayProducts(list: Product[]): void;
}

class ProductState implements IVendingMachineState {
    reset(vm: VendingMachineFSM_DP): void {
        vm.displayProducts(vm.availableProducts);
    }

    coin(vm: VendingMachineFSM_DP, coin: number): void {
        vm.returnChanges(coin);
        vm.displayProducts(vm.availableProducts);
    }

    select(vm: VendingMachineFSM_DP, product: Product): void {
        vm.state = new ChargeState();
        vm.balance = product.price
        vm.displayCharges(vm.balance);
    }
}

class ChargeState implements IVendingMachineState {
    reset(vm: VendingMachineFSM_DP): void {
        vm.state = new ProductState();
        vm.displayProducts(vm.availableProducts);
    }

    coin(vm: VendingMachineFSM_DP, coin: number): void {
        vm.state = new ChargeState();
        vm.balance -= coin;
        if (vm.balance <= 0) {
            vm.state = new ProductState();
            vm.unloadProduct(vm.selectedProduct!);
            vm.returnChanges(vm.balance);
        } else {
            vm.displayCharges(vm.balance);
        }
    }

    select(vm: VendingMachineFSM_DP, product: Product): void {
        vm.balance = product.price;
        vm.displayCharges(product.price);
    }
}

class CollectState implements IVendingMachineState {
    reset(vm: VendingMachineFSM_DP): void {
        throw new Error("Method not implemented.");
    }

    coin(vm: VendingMachineFSM_DP, coin: number): void {
        vm.balance -= coin;
        if (vm.balance <= 0) {
            vm.state = new ProductState();
            vm.unloadProduct(vm.selectedProduct!);
            vm.returnChanges(vm.balance);
        } else {
            vm.displayCharges(vm.balance);
        }
    }

    select(vm: VendingMachineFSM_DP, product: Product): void {
        throw new Error("Method not implemented.");
    }

}

```

