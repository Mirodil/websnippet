---
title: ".NET Interview Questions with Answers: Senior Developers/Architects"
description: "Here is you find .NET Interview Questions with Answers. .NET Interview Questions mostly from Scott Hanselman website and other resources. I found a list of interview questions which should be known by .net guys at different levels."
date: "2016-09-01T16:24:54.017Z"
lastmod: "2016-09-01T16:53:56.850Z"
slug: "net-interview-questions-with-answers-senior-developers-architects"
categories: ["Web-Development", "Development"]
tags: [".NET"]
thumbnail: "https://3.bp.blogspot.com/-L105BogpSO4/WhCdlPdIfuI/AAAAAAAAD2E/gBYZvPb4zEsnSMn8afHGLvQpGiAzadM7gCLcBGAs/s400/Microsoft-dotNET-logo.jpg"
image: "https://3.bp.blogspot.com/-L105BogpSO4/WhCdlPdIfuI/AAAAAAAAD2E/gBYZvPb4zEsnSMn8afHGLvQpGiAzadM7gCLcBGAs/s1600/Microsoft-dotNET-logo.jpg"
source: ""
---


**What’s wrong with a line like this? DateTime.Parse(myString);**

In addition the locale problem, DateTime.Parse() could also throw an exception which you would then have to catch. Use DateTime.TryParse() or DateTime.TryParseExact() instead.

**What are PDBs? Where must they be located for debugging to work?**  
PDB stands for Program database store debugging symbols and meta information for debugging. Normally they are located at bin or debug folder.

**What is cyclomatic complexity and why is it important?**  
It's a measure of the number of independent linearly executed paths through a program.   
It's important for judging the complexity of software and assisting in determinations of which modules should be refactored into smaller components.

**Write a standard lock() plus “double check” to create a critical section around a variable access.**

Object objLock;   
bool isLocked = true;   
if (isLocked) {  
    lock(objLock){  
        if (isLocked) {  
            notLocked = false;  
            foo = lockingObject;  
            notLocked = true;  
        }  
    }  
}

**What is FullTrust? Do GAC’ed assemblies have FullTrust?**  
FullTrust means all .NET security permissions are granted to the assembly. GAC assemblies have FullTrust by default, but that can be changed by the user's security policy.

**What benefit does your code receive if you decorate it with attributes demanding specific Security permissions?**  
Allows administrators to see exactly which permissions your application needs to run;   
prevents your code from being exploited beyond what permissions it absolutely needs;   
allows your application to forcibly fail instead of having to manually handle situations where it might be denied permissions it requires.

**What does this do? gacutil /l | find /i "Corillian"**  
Lists all assemblies in the GAC, searching for those whose names contain "Corillian".

**What does this do? sn -t foo.dll**  
Shows the token for foo.dll.

**What ports must be open for DCOM over a firewall? What is the purpose of Port 135?**  
Port 135 is for windows RPC. DCOM is distributed COM technology which used to remote procedure call and it used port 135 by default. 

**Contrast OOP and SOA. What are tenets of each?**  
OOP tries to encapsulate functionality required to operate on data with the data structure itself, making objects "self-reliant". (Application is built on objects, with inheritance, abstraction, polymorphism, encapsulation concepts.)  
SOA aims to decouple functionality from data entirely, using interfaces to allow functional components to operate blindly with as   
little understanding of the precise nature of the data they're fed as possible, allowing many types of data sets to be fed into them for the same operation.  
SOA – In SOA we create an abstract layer to define a contract and rules. The client application doesn’t need to know how the service is implemented. The service layer will handle all the details of the implementation.

**How does the XmlSerializer work? What ACL permissions does a process using it require?**  
XmlSerializer used read/write interfaces to deserialize/serialize respectively xml based data. ReflectionPermission is required to use it.

**Why is catch(Exception) almost always a bad idea?**  
This means that you swallow an exception and not do anything about it.   
There are very few cases when it's okay to do that, usually when you have an action you don't care if it failed or not,   
or maybe you just care that it failed.

**What is the difference between Debug.Write and Trace.Write? When should each be used?**  
Debug.Write works on debug mode only. Trace.Write works in both debug and release mode.

**What is the difference between a Debug and Release build? Is there a significant speed difference? Why or why not?**  
Debug build contain debug symbols and can be debugged while release build doesn't contain debug symbols,   
doesn't have [Contional("DEBUG")] methods calls compiled, can't be debugged (easily, that is), less checking, etc.   
There should be a speed difference, because of disabling debug methods, reducing code size etc but that is not a gurantee (at least not a signifcant one)

**Does JITting occur per-assembly or per-method? How does this affect the working set?**  
Per-method. Methods are not called are not compiled, this reduces the working set.

**Contrast the use of an abstract base class against an interface?**  
Abstract classes can provide implementations for methods and properties. Interfaces only provide required declarations.

**What is the difference between a.Equals(b) and a == b?**  
The first uses the object's equivalency constructor to see if it considers itself value-equal to the the second object.   
The second construct compares their memory references to determine if they are the SAME object.

**In the context of a comparison, what is object identity versus object equivalence?**  
Identity means that two references point to the same memory address. Equivalence means that two objects share the same value.

**How would one do a deep copy in .NET?**  
Implement IClonable? That is the way I would do it.

**Explain current thinking around IClonable.**  
The Clone() method in the IClonable interface doesn’t have a parameter to indicate how the object is cloned.   
It could be a full value clone or just reference clone depending on how a class is implemented.

**What is boxing?**  
To convert value type into reference type is called boxing. Take a value type like int in stack and put it to reference type (object) in heap.

**Is string a value type or a reference type?**  
It's an "illusionary value type" that masks an interface to the System.String reference type.

**What is the significance of the "PropertySpecified" pattern used by the XmlSerializer? What problem does it attempt to solve?**  
Defines the specific parameters that .NET class members serialize into.   
Solves the issue of an XML spec needing to have slightly different names for class members than the class itself does.

**Why are out parameters a bad idea in .NET? Are they?**  
 Out parameters create uncertainty about the data which may be returned from the function,   
 and permit the caller to potentially pass bad references which your function must validate before using.   
 From a design standpoint, it's more elegant to define a custom class with multiple   
 properties in the event that you need to return multiple values from a single function.

**Can attributes be placed on specific parameters to a method? Why is this useful?**  
Yes. This might be needed to specify remoting implementations  
Yes. It’s useful if you want to call COM objects and the types in .net need to be marshalled to types in COM.