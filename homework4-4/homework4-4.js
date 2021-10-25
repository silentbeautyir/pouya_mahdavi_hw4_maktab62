
let list = [10, [25, 13], [14, [55]], 2];
let new_list = [];
function flat(list) {
for (let i of list) {
if (!Array.isArray(i)) {
new_list.push(i);
} else {
flat(i);
}
}
return new_list;
}
console.log(flat(list));
