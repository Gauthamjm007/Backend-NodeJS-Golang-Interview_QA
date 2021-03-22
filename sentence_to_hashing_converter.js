/* 

This functions converts a hast to setence

Example : 
Input: "What are JWT"
Output: "#what-are-jwt"

this can be used to link questions

*/

function hashing(str) {
  return (
    '#' +
    str
      .trim('')
      .split(' ')
      .map((ele) => ele.toLowerCase())
      .join('-')
  );
}

console.log(hashing('What are JWT'));
