# How do you design the Vending Machine

You need to write code to implement a Vending machine that has a bunch of products like chocolates, candy, cold-drink, and accept some coins like Nickle, Dime, Quarter, Cent, etc. Make sure you insert a coin, get a product back, and get your chance back.

We are going to make some assumtions to simplsiity sake:
- We assume we have endless products, so we don't have throw a ProductSoldOutExcepiton
- We assume we have endless coins, so we don't have throw a NotSufficientChangeException

As Vending Machine is a State Machine. The events and actions are what is being controlled, and the finite state machine is how that control is managed, and those two can be encapsulated and kept completely separate from one another. The separation of what from how is one of the most essential aspects of good software design.
All too often we find software systems in which what from how are so intertangled that it's very difficult to separate operation from policy. And when you can't separate what from how, well then you wind up with systems that are pretty fragile.

Let's draw state transition diagramm for the Vending Machine.
(ProductState) --- select a product ---> (ProductSelectedState|ChargeState) --- insert a coin ---> (get product) --- auto changes ---> (InitState)

```
graph TD
    A(ProductState) -->|select| B(ChargeState)
    B -->|coin| C(ReturnState)
    C -->|reset and invoke refund and product| A
    C -->|coin| C
```
[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBKFByb2R1Y3RTdGF0ZSkgLS0-fHNlbGVjdHwgQihDaGFyZ2VTdGF0ZSlcbiAgICBCIC0tPnxjb2lufCBDKFJldHVyblN0YXRlKVxuICAgIEMgLS0-fHJlc2V0IGFuZCBpbnZva2UgcmVmdW5kIGFuZCBwcm9kdWN0fCBBXG4gICAgQyAtLT58Y29pbnwgQ1xuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid.live/edit#eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBKFByb2R1Y3RTdGF0ZSkgLS0-fHNlbGVjdHwgQihDaGFyZ2VTdGF0ZSlcbiAgICBCIC0tPnxjb2lufCBDKFJldHVyblN0YXRlKVxuICAgIEMgLS0-fHJlc2V0IGFuZCBpbnZva2UgcmVmdW5kIGFuZCBwcm9kdWN0fCBBXG4gICAgQyAtLT58Y29pbnwgQ1xuIiwibWVybWFpZCI6IntcbiAgXCJ0aGVtZVwiOiBcImRlZmF1bHRcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)

