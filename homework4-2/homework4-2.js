function equal(teststring) {
  return teststring.split("").reverse().join("") === teststring;
}
console.log(equal("wrt"));
