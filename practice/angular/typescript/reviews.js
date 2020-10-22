var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
/*
for (let i=0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
*/
//enhanced for loop
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var i = reviews_1[_i];
    console.log(i);
    total = total + i;
}
var average = total / reviews.length;
console.log("Review average = " + average);
