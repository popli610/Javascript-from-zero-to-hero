//normal comparisions
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//(comparison between diff dataTypes.. Sometimes does not give output expectedly)
// console.log("2" > 1);
// console.log("02" > 1);

//js converts null to 0 but sometimes to NaN So such comparisons should be avoided(unexpected results.)
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//should be avoided
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
//compares dataTypes too.. known as strict comparison
console.log("2" === 2);