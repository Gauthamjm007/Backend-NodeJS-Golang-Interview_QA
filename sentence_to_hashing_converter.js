function hashing(str) {
  return (
    "#" +
    str
      .trim("")
      .split(" ")
      .map((ele) => ele.toLowerCase())
      .join("-")
  );
}

console.log(hashing("How to provide file download using express"));
