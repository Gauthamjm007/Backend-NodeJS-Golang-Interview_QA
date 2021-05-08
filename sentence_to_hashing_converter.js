/* 

This functions converts a hast to setence

Example : 
Input: "What are JWT"
Output: "#what-are-jwt"

this can be used to link questions

*/
// | 3 | [What kind of projects are suitable to be built in go?](#what-kind-of-projects-are-suitable-to-be-built-in-go)|
function hashing(num=0,str) {
  
  const hashed =str
  .trim('')
  .split(' ')
  .map((ele) => ele.toLowerCase())
  .join('-')
  return `| ${num} | [${str}?](#${hashed})`
}

console.log(hashing(10,'What is difference between index scan and index only scan'));
