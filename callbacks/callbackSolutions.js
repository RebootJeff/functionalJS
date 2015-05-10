// Solutions to callback exercises

// Exercise 1
function funcCaller(func, arg) {
  return func(arg);
}

// Exercise 2
function firstVal(arr, func) {
  return func(arr[0], 0, arr);
}

// Exercise 3
function firstVal(collection, func) {
  if(Array.isArray(collection)) {
    return func(collection[0], 0, arr);
  }

  var arbitraryKey = Object.keys(collection)[0];
  // What does Object.keys() do? Google it!
  return func(collection[arbitraryKey], arbitraryKey, collection);
}

// Exercise 4 (extra credit)
function once(func) {
  var neverCalled = true;

  return function() {
    if(neverCalled) {
      neverCalled = false;
      return func();
    }
  };
}

// Exerise 5 (extra EXTRA credit)
function once(func) {
  var neverCalled = true;

  return function() {
    if(neverCalled) {
      neverCalled = false;
      // What is the .apply() method? Google it. But it's not beginner-friendly!
      return func.apply(null, arguments);
    }
  };
}
