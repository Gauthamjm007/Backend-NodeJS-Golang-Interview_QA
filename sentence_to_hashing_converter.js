function hashing(str,number) {
  const changedString= 
    "#" +
    str
      .trim("")
      .split(" ")
      .map((ele) => ele.toLowerCase())
      .join("-")
  ;

console.log(`| ${number} | [${str}?](${changedString})`)
console.log(`${number}.  ### ${str}?`)

  return [`| ${number} | ${str}?](${changedString})`,`${number}.  ### ${str}?`]
}



console.log(hashing("Name any few popular libraries in GoLang ",5));
