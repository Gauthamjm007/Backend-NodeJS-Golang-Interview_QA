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
| 8   | [What is package.json?](#what-is-package.json)                                                                                                                               |
| 9   | [Explain the purpose of module.exports?](#explain-the-purpose-of-module.exports)                                                                                             |
| 10  | [List down the major security implementations within Node.js?](#list-down-the-major-security-implementations-within-node-.-js)                                               |
| 11  | [Explain the concept of URL module?](#explain-the-concept-of-url-module)                                                                                                     |

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

8. ### What is package.json?

   The package.json file in Node.js is the heart of the entire application. It is basically the manifest file that contains the metadata of the project where we define the properties of a package.

**[⬆ Back to Top](#table-of-contents)**

9. ### Explain the purpose of module.exports?

   A module in Node.js is used to encapsulate all the related codes into a single unit of code which can be interpreted by shifting all related functions into a single file

**[⬆ Back to Top](#table-of-contents)**

10. ### List down the major security implementations within Node.js?

    Major security implementations in Node.js are:Authentications,Error Handling

**[⬆ Back to Top](#table-of-contents)**

11. ### Explain the concept of URL module?

    The URL module of Node.js provides various utilities for URL resolution and parsing. It is a built-in module that helps in splitting up the web address into a readable forma

**[⬆ Back to Top](#table-of-contents)**
