function hashing(str) {
  return (
    "#" +
    str
      .split(" ")
      .map((ele) => ele.toLowerCase())
      .join("-")
  );
}

console.log(hashing("Mention few properties of request parameter in express "));
