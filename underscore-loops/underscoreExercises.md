##Setup

For the following exercises, you need to load the Underscore library for your code to work. Here are a few options for getting the library:

1. Go to [the Underscore website](http://underscorejs.org/) and then open your browser's console. Run your code in that console (the library is already loaded in that environment because it's loaded for Underscore's site).
2. Use a REPL such as [JS Bin](http://jsbin.com) or [JS Fiddle](http://jsfiddle.net/). These REPLs provide a GUI for writing/running code. They also provide libraries like Underscore with just a few clicks in their menus.
3. Create your own HTML file that loads Underscore and your JavaScript code via `<script>` tags. Open your HTML file in a browser (and open up the browser console to see any `console.log` output).

##Underscore exercises

1. Use _.each to loop through an array and console.log() all the values. Now use it to console.log() the indices. How would this be different if you were looping through an object?

2. Write a function called checkValue that searches an array for a value. It takes an array and a value and returns `true` if the value exists in the array, otherwise it returns `false`. Use a `for`-loop for this exercise (don't use `_.each` just yet).

		var helloArr = ['bonjour', 'hello', 'hola'];
		
		var checkValue = function(arr, val) {
		  //checks if the val is in arr
		}
		
3. Rewrite checkValue using `_.each`. Make sure that you have underscore.js included where you are running your code.

4. Write a loop that pushes all the values in an object to an array. Use `_.each` for this exercise (don't use `_.map` just yet).

		input: {two: 2, four: 4, three: 3, twelve: 12}
		output: [2, 4, 3, 12]

5. Use `_.map` to mimic the previous behavior. 

		input: {two: 2, four: 4, three: 3, twelve: 12}
		output: [2, 4, 3, 12]
6. Use `_.filter` to return all the even numbers in an array. *Hint:* Feel free to Google how to use Underscore's filter method.

		input: [9,8,7,6,5,2]
		output: [8,6,2]
		
