//SOLUTIONS

//1. Use _.reduce to multiply all the values in an array.

var input= [4,3];

var answer = _.reduce(input, function(product,num) {return product *=num;}, 1);
console.log(answer);

//2. Use _.reduce to concatenate all strings in an array

var answer = _.reduce(input, function(a,b) {return a.concat(b)});
console.log(answer);

//3. Write a function that takes an array of names and congratulates them. Make sure to use _.reduce as part of the function.

var input= ['Steve', 'Sally', 'George', 'Gina']

var myfunc = function(thisarr) {
  var newarr =  _.reduce(thisarr, function(a, b) {return a.concat(" " + b);});
  console.log(" Congrats " + " " + newarr);
};

console.log(myfunc(input));

//4._.pluck takes an object and a property name and returns the property name's value. Write your own version called myPluck.

var myObject = {name: "Neil", age: 120, afunc: function() {console.log("howdy");}
};

var myPluck = function(obj, propName){
    console.log(obj[propName]);
};  

myPluck(myObject, 'afunc');
