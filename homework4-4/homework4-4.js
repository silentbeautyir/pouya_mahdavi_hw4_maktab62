// let arr1 = [10,[25, 13],[14,[55]],2];
// arr2 = arr1.flat(Infinity);
// console.log(arr2);
let oldArray = [10,[25,13],[14,[55]],2];
let newArray = Array.prototype.concat.apply([], oldArray);
let new2Array = Array.prototype.concat.apply([], newArray);
console.log(new2Array);
