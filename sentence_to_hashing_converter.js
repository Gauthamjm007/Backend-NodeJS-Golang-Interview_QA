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

console.log(hashing("What are JWT"));
