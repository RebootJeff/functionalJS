#Callback Exercises

1. Write a function, `funcCaller`, that takes a `func` (a function) and an `arg` (any data type). The function returns the `func` called with `arg`(as an argument).

2. Write a function, `firstVal`, that takes an array, `arr`, and a function, `func`, and calls `func` with the first element of the `arr`, the corresponding index, and the whole array.

3. Change `firstVal` to work not only with arrays but also objects. Since objects are not ordered, you can use any key-value pair on the object. *Hint:* How do you get a list of keys for an object?

4. [Extra Credit] Write a function, `once`, that takes a function and returns a version of that function which can only be called once.
  You probably don't want to be able to double charge someone's credit card. Here is an example of how to use it:
  ```javascript
    var chargeCreditCard = function(){
      console.log('Credit card charged!');
    };
    var processPaymentOnce = once(chargeCreditCard);
    processPaymentOnce(); // logs 'Credit card charged!'
    processPaymentOnce(); // does nothing on subsequent calls
  ```
  *Hint:* You need a closure.
5. [Extra EXTRA Credit] Write a *better* version of `once` (like the one [seen here](see: http://underscorejs.org/#once)) that takes a function and returns a version of that function which can only be called once *with arguments*. Here is an example of how to use it:

  ```javascript
    var add = function(a, b) {
      return a + b;
    };
    var addOnce = once(add);
    addOnce(1, 2); // returns 3
    addOnce(3, 4); // does nothing on subsequent calls
  ```
*Hint:* You need to use the `arguments` keyword and the `apply` function method (Google them?).
