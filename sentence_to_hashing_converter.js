function hashing(str) {
  return (
    "#" +
    str
      .split(" ")
      .map((ele) => ele.toLowerCase())
      .join("-")
  );
}

console.log(hashing("How can we take advantage of multi-core system in Nodejs as nodejs works on single thread"));
