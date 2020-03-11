# Node JS Interview Questions & Answers

> Click :star:if you like the project. Pull Request are highly appreciated. 

### Table of Contents

| No. | Questions |
| --- | --------- |
|   | **Node JS** |
|1  | [What is NodeJS?](#what-is-nodejs) |
|2  | [How can you avoid callback hells?](#how-can-you-avoid-callback-hells) |
|3  | [When are background/worker processes useful?](#when-are-background/worker-processes-useful) |



## Node Js


    
1. ### What is NodeJS?

    Node.js is an open-source, cross-platform, **JavaScript runtime environment that executes JavaScript code outside of a browser**.  Node JS was created by [Ryan Dahl](https://github.com/ry), Ryan Dahl is a software engineer and the original developer of the Node.js JavaScript runtime.


   **[⬆ Back to Top](#table-of-contents)**
   
2. ### How can you avoid callback hells?

   There are lots of ways to solve the issue of callback hells:  <br /> 1.modularization: break callbacks into independent functions,  <br /> 2.use a control flow library, like async.  <br /> 3.use generators with Promises,  <br /> 4.use async/await (note that it is only available in the latest v7 release and not in the LTS version


   **[⬆ Back to Top](#table-of-contents)**
   
 3. ### When are background/worker processes useful?

	Worker processes are extremely useful if you'd like to do data processing in the background, like sending out emails or processing images.
	<br/>
	There are lots of options for this like RabbitMQ or Kafka.


   **[⬆ Back to Top](#table-of-contents)**
