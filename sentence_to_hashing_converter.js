function hashing(str) {
  return (
    "#" +
    str
      .split(" ")
      .map((ele) => ele.toLowerCase())
      .join("-")
  );
}

console.log(hashing("What are buffer objects in nodejs"));
