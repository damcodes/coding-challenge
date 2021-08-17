module.exports.run = function(a, b, c) {
/*
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples:
	function(1, 2, 3) => 6
	function(3, 2, 3) => 2
	function(3, 3, 3) => 0

Write your code below the comment.

*/
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
    arr = [a,b,c]
    uniqueOnly = arr.filter( val => countOccurrences(arr, val) === 1)
    return uniqueOnly.length > 0 ? uniqueOnly.reduce( (a, b) => a + b) : 0
};
