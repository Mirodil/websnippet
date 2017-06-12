---
title: ".NET Interview Questions with Answers: Mid-Level .NET Developer"
description: "Here is you find .NET Interview Questions with Answers. .NET Interview Questions mostly from Scott Hanselman website and other resources. I found a list of interview questions which should be known by .net guys at different levels."
date: "2016-09-01T16:20:06.782Z"
lastmod: "2016-09-01T16:35:00.072Z"
slug: "net-interview-questions-with-answers-mid-level-net-developer"
categories: ["Web-Development", "Development"]
tags: [".NET"]
thumbnail: ""
image: ""
source: ""
---


**Describe the difference between Interface-oriented, Object-oriented and Aspect-oriented programming.** Interface-oriented programming – an interface is created to define the contract and rules, without caring about the implementation. All parties follow the contract and rules and communicate through the contract. One example is Web Service.  
Object-oriented programming – classes implements the concept of abstraction, encapsulation, polymorphism and inheritance. Abstraction means loose coupling between components by providing interfaces. Encapsulation means hiding details of class implementation. Polymorphism means different implementation of a same function name in different classes. Inheritance means functionalities of a base class can be shared by child classes.  
Aspect-oriented programming – AOP complements object-oriented programming. It allows a developer to dynamically change or adding behaviour to a static OO model without changing the original code.

**Describe what an Interface is and how it’s different from a Class.**  
An interface is a contract defining the properties and methods should be implemented without implementation. A class holds both properties and member functions and their implementation.  
In an interface class, all methods are abstract - there is no implementation. In an abstract class some methods can be concrete. In an interface class, no accessibility modifiers are allowed. An abstract class may have accessibility modifiers.

**What is Reflection?**  
Reflection is the ways to gather object information at runtime.

**What is the difference between XML Web Services using ASMX and .NET Remoting using SOAP?**  
XML Web Services is an open standard technology, working with HTTP/SOAP protocol for communication. .NET Remoting is a .NET proprietary technology working only with .NET Framework. .NET Remoting is usually used in internal network and provide a higher speed than web service.

**Are the type system represented by XmlSchema and the CLS isomorphic?**  
XmlSchema is a set of rules to define an xml document should meet. The types in XmlSchema include xs:Decimal, xs:Boolean, xs:Int and so on. CLS is Common Language Runtime, which defines a set of data types a .net application should use. These types include System.Decimal, System.Boolean and so on. The data types in XmlSchema and CLS have some difference so we have IXmlSerializable interface to help transfer data between an XML file and CLS objects. When implement IxmlSerializable interface, we write our own code to implement WriteXml() and ReadXml() functions to handle data transfer between xml and CLS objects.

**Conceptually, what is the difference between early-binding and late-binding?**  
Early binding – The call of a function can be resolved at compile time. Late binding – the actual code to call of a function can only be resolved at run time. Example: person.DoSomething() is a early binding.  
Type t; t.InvokeMember("DoSomething") is late binding.

**Is using Assembly.Load a static reference or dynamic reference?**  
This function loads an assembly dynamically at runtime.

**When would using Assembly.LoadFrom or Assembly.LoadFile be appropriate?**  
Assembly.LoadFrom() takes an assembly name as parameter, Assembly.LoadFile() takes an assembly file name as parameter. The two functions are appropriate when building dynamic applications with no dependency on dll files.

**What is an Asssembly Qualified Name? Is it a filename? How is it different?**  
A Qualified Name include Assembly Name, Public Key Token, Culture and Version number. It’s not a file name. File name is a physical name in the file system.

**Is this valid? Assembly.Load("foo.dll");**  
No. Assembly.Load() only takes assembly name as parameter, not file name.

**How is a strongly-named assembly different from one that isn’t strongly-named?**

It's an assembly that has been signed using public/private key pair. It can be placed in the GAC, mainly. It also help is versioning and code verification

**Can DateTimes be null?**  
DateTime is non-nullable value type. It can’t be null.

**What is the JIT? What is NGEN? What are limitations and benefits of each?**  
JIT – Just In Time compilation. The compiler produces the portable executable assembly called MSIL. This MSIL is compiled into native code by .NET JIT for the first time the assembly is called. The benefit of JIT is one assembly can be ported to different systems with different JIT compiler. The limitation is it takes some time to compile for the first run.  
NGEN – NGEN creates true CPU native code from the MSIL on the client machine. It simply calls JIT compiler to produce native images from assembly and store them in the native image cache. The benefit of NGEN is the client application is fast to start up. The limitation of NGEN is it’s not recommended for asp.net applications because the assembly created cannot be shared across app domains.

**How does the generational garbage collector in the .NET CLR manage object lifetime? What is non-deterministic finalization?**  
There are three generations defined by CLR. .NET Garbage Collector determines the life time of an object by the time it is created. The shorter lived objects are more likely to be freed than longer lived objects.  
Non-deterministic finalization means an object’s finalizer function is called by Garbage Collector when it’s freed. The time when the object is freed is not known by the application.

**What is the difference between Finalize() and Dispose()?**  
Finalize() function is non-public and called by GC, it’s unknown when the function is called. Dispose() function is public and called by the application, a developer is responsible to call this function.

**How is the using() pattern useful? What is IDisposable? How does it support deterministic finalization?**  
Using pattern ensures the Dispose() function of an object created with the statement is forced to be called at the end of scope. IDisposable is the interface defines Dispose() function. If a class implement IDisposable interface, then the Dispose() method is implemented and forced to be called at the end of the using scope.

**What does this useful command line do? tasklist /m "mscor*"**  
This command displays all current running processes that loaded the dlls with the name matching the string pattern.

**What is the difference between in-proc and out-of-proc?**  
In-proc procedure calls happen within one process. Out-of-proc procedure calls happen between different processes, thus requires object marshalling and slower.

**What technology enables out-of-proc communication in .NET?**  
.NET remoting enables out-of-proc communications.

**When you are running a component within ASP.NET, what process is it running within on Windows XP? Windows 2000? Windows 2003? **  
In Windows XP and 2000, asp.net is running within aspnet_wp.exe worker process. In Windows 2003, IIS 6 is running. The process is w3wp.exe in IIS 6.