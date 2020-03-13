# Node JS Interview Questions & Answers

> Click :star:if you like the project. Pull Request are highly appreciated. 

### Table of Contents

| No. | Questions |
| --- | --------- |
|   | **Node JS** |
|1  | [What is NodeJS?](#what-is-nodejs) |
|2  | [How can you avoid callback hells?](#how-can-you-avoid-callback-hells) |
|3  | [When are background or worker processes useful?](#when-are-background-or-worker-processes-useful) |
|4  | [Why is NodeJS Single threaded?](#why-is-nodejs-single-threaded) |
|5  | [Name the types of API functions in Node?](#name-the-types-of-api-functions-in-node) |




## Node Js


    
1. ### What is NodeJS?

    Node.js is an open-source, cross-platform, **JavaScript runtime environment that executes JavaScript code outside of a browser**.  Node JS was created by [Ryan Dahl](https://github.com/ry), Ryan Dahl is a software engineer and the original developer of the Node.js JavaScript runtime.


   **[⬆ Back to Top](#table-of-contents)**
   
2. ### How can you avoid callback hells?

   There are lots of ways to solve the issue of callback hells:  <br /> 1.modularization: break callbacks into independent functions,  <br /> 2.use a control flow library, like async.  <br /> 3.use generators with Promises,  <br /> 4.use async/await (note that it is only available in the latest v7 release and not in the LTS version


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
   
  
