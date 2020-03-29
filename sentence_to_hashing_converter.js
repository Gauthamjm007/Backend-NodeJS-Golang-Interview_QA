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

console.log(
  hashing("How To Allow Cors In Expressjs  Explain With An Example")
);
