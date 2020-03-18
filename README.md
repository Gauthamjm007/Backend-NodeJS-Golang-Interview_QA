# Node JS Interview Questions & Answers

> Click :star:if you like the project. Pull Request are highly appreciated.

### Table of Contents

| No. | Questions                                                                                                                                                                    |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     | **Node JS**                                                                                                                                                                  |
| 1   | [What is NodeJS?](#what-is-nodejs)                                                                                                                                           |
| 2   | [How can you avoid callback hells?](#how-can-you-avoid-callback-hells)                                                                                                       |
| 3   | [When are background or worker processes useful?](#when-are-background-or-worker-processes-useful)                                                                           |
| 4   | [Why is NodeJS Single threaded?](#why-is-nodejs-single-threaded)                                                                                                             |
| 5   | [Name the types of API functions in Node?](#name-the-types-of-api-functions-in-node)                                                                                         |
| 6   | [Explain chaining in Nodejs?](#explain-chaining-in-nodejs)                                                                                                                   |
| 7   | [What are streams in Nodejs Explain the different types of streams present in Nodejs?](#what-are-streams-in-nodejs-explain-the-different-types-of-streams-present-in-nodejs) |
| 8   | [What is package json?](#what-is-package-json)                                                                                                                               |
| 9   | [Explain the purpose of module exports?](#explain-the-purpose-of-module-exports)                                                                                             |
| 10  | [List down the major security implementations within Node.js?](#list-down-the-major-security-implementations-within-nodejs)                                                  |
| 11  | [Explain the concept of URL module?](#explain-the-concept-of-url-module)                                                                                                     |
| 12  | [Explain the concept of middleware in Nodejs?](#explain-the-concept-of-middleware-in-nodejs)                                                                                 |
| 13  | [Explain libuv?](#explain-libuv)                                                                                                                                             |

| 14 | [List down the two arguments that async queue takes as input?](#list-down-the-two-arguments-that-async-queue-takes-as-input) |
| 15 | [Differentiate between spawn() and fork() methods in Nodejs?](<#differentiate-between-spawn()-and-fork()-methods-in-nodejs>) |
| 16 | [Explain the purpose of ExpressJS package?](#explain-the-purpose-of-expressjs-package) |
| 17 | [Explain the usage of a buffer class in Nodejs?](#explain-the-usage-of-a-buffer-class-in-nodejs) |
| 18 | [How does Nodejs handle the child threads?](#how-does-nodejs-handle-the-child-threads) |
| 19 | [Explain stream in Nodejs along with its various types?](#explain-stream-in-nodejs-along-with-its-various-types) |

## Node Js

1. ### What is NodeJS?

   Node.js is an open-source, cross-platform, **JavaScript runtime environment that executes JavaScript code outside of a browser**. Node JS was created by [Ryan Dahl](https://github.com/ry), Ryan Dahl is a software engineer and the original developer of the Node.js JavaScript runtime.

**[⬆ Back to Top](#table-of-contents)**

2. ### How can you avoid callback hells?

   There are lots of ways to solve the issue of callback hells: <br /> 1.modularization: break callbacks into independent functions, <br /> 2.use a control flow library, like async. <br /> 3.use generators with Promises, <br /> 4.use async/await (note that it is only available in the latest v7 release and not in the LTS version

**[⬆ Back to Top](#table-of-contents)**

3. ### When are background or worker processes useful?

   Worker processes are extremely useful if you'd like to do data processing in the background, like sending out emails or processing images.
   <br/>
   There are lots of options for this like RabbitMQ or Kafka.

**[⬆ Back to Top](#table-of-contents)**

4. ### Why is NodeJS Single threaded?

   Node.js is single-threaded for async processing. By doing async processing on a single-thread under typical web loads, more performance and scalability can be achieved as opposed to the typical thread-based implementation.

**[⬆ Back to Top](#table-of-contents)**

5. ### Name the types of API functions in Node?

   There are two types of functions in Node.js. <br/>
   1.Blocking functions - In a blocking operation, all other code is blocked from executing until an I/O event that is being waited on occurs. Blocking functions execute synchronously. <br/>2.Non-blocking functions - In a non-blocking operation, multiple I/O calls can be performed without the execution of the program being halted. Non-blocking functions execute asynchronously.

**[⬆ Back to Top](#table-of-contents)**

6. ### Explain chaining in Nodejs?

   Chaining is a mechanism whereby the output of one stream is connected to another stream creating a chain of multiple stream operations.

**[⬆ Back to Top](#table-of-contents)**

7. ### What are streams in Nodejs Explain the different types of streams present in Nodejs?

   Streams are objects that allow the reading of data from the source and writing of data to the destination as a continuous process.<br/>
   There are four types of streams.<br/>
   <Readable> to facilitate the reading operation.<br/>
   <Writable> to facilitate the writing operation.<br/>
   <Duplex> to facilitate both read and write operations.<br/>
   <Transform> is a form of Duplex stream that performs computations based on the available input.<br/>

**[⬆ Back to Top](#table-of-contents)**

8. ### What is package json?

   The package.json file in Node.js is the heart of the entire application. It is basically the manifest file that contains the metadata of the project where we define the properties of a package.

**[⬆ Back to Top](#table-of-contents)**

9. ### Explain the purpose of module exports?

   A module in Node.js is used to encapsulate all the related codes into a single unit of code which can be interpreted by shifting all related functions into a single file

**[⬆ Back to Top](#table-of-contents)**

10. ### List down the major security implementations within Nodejs?

    Major security implementations in Node.js are:Authentications,Error Handling

**[⬆ Back to Top](#table-of-contents)**

11. ### Explain the concept of URL module?

    The URL module splits up a web address into readable parts

**[⬆ Back to Top](#table-of-contents)**

12. ### Explain the concept of middleware in Nodejs?

    In general, middleware is a function receives the Request and Response objects. In other words, in an application’s request-response cycle these functions have access to various request & response objects along with the next function of the cycle,The next function of middleware is represented with the help of a variable, usually named next. Most commonly performed tasks by the middleware functions are <br/>

    Execute any type of code<br/>
    Update or modify the request and the response objects<br/>
    Finish the request-response cycle<br/>
    Invoke the next middleware in the stack

**[⬆ Back to Top](#table-of-contents)**

13. ### Explain libuv?

    Libuv is a multi-platform support library of Node.js which majorly is used for asynchronous I/O. It was primarily developed for Node.js, with time it is popularly practiced with other systems like as Luvit, pyuv, Julia, etc. Libuv is basically an abstraction around libev/ IOCP depending on the platform, providing users an API based on libev. A few of the important features of libuv are: <br/>

    Full-featured event loop backed<br/>
    File system events<br/>
    Asynchronous file & file system operations<br/>
    Asynchronous TCP & UDP sockets<br/>
    Child processes

**[⬆ Back to Top](#table-of-contents)**

14. ### List down the two arguments that async.queue takes as input?

    Below are the two arguments that async.queue takes as input - Task Function & Concurrency Value

**[⬆ Back to Top](#table-of-contents)**

15. ### Differentiate between spawn() and fork() methods in Nodejs?

    In Node.js, the spawn() is used to launch a new process with the provided set of commands. This method doesn’t create a new V8 instance and just one copy of the node module is active on the processor. When your child process returns a large amount of data to the Node you can invoke this method.

**[⬆ Back to Top](#table-of-contents)**

16. ### Explain the purpose of ExpressJS package?

    Express.js is a framework built on top of Node.js that facilitates the management of the flow of data between server and routes in the server-side applications. It is a lightweight and flexible framework that provides a wide range of features required for the web as well as mobile application development. Express.js is developed on the middleware module of Node.js called connect. The connect module further makes use of http module to communicate with Node.js. Thus, if you are working with any of the connect based middleware modules, then you can easily integrate with Express.js.

**[⬆ Back to Top](#table-of-contents)**

17. ### Explain the usage of a buffer class in Nodejs?

    Buffer class in Node.js is used for storing the raw data in a similar manner of an array of integers. But it corresponds to a raw memory allocation that is located outside the V8 heap. It is a global class that is easily accessible can be accessed in an application without importing a buffer module. Buffer class is used because pure JavaScript is not compatible with binary data. So, when dealing with TCP streams or the file system, it’s necessary to handle octet streams.

**[⬆ Back to Top](#table-of-contents)**

18. ### How does Nodejs handle the child threads?

    In general, Node.js is a single threaded process and doesn’t expose the child threads or thread management methods. But you can still make use of the child threads using spawn() for some specific asynchronous I/O tasks which execute in the background and don’t usually execute any JS code or hinder with the main event loop in the application. If you still want to use the threading concept in your application you have to include a module called ChildProcess explicitly.

**[⬆ Back to Top](#table-of-contents)**

19. ### Explain stream in Nodejs along with its various types?

    Streams in Node.js are the collection of data similar to arrays and strings. They are objects using which you can read data from a source or write data to a destination in a continuous manner. It might not be available at once and need not to have fit in the memory. These streams are especially useful for reading and processing a large set of data. In Node.js, there are four fundamental types of streams:<br/>
    Readable: Used for reading large chunks of data from the source.<br/>
    Writeable: Use for writing large chunks of data to the destination.<br/>
    Duplex: Used for both the functions; read and write.<br/>
    Transform: It is a duplex stream that is used for modifying the data.

**[⬆ Back to Top](#table-of-contents)**
