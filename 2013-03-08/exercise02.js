/*
 * exercise02
 * 
 * exercise02a
 * write a function that pushes into an array n random integer numbers
 * 
 * exercise02b
 * filter even numbers and return the odd ones
 * 
 * exercise02c
 * sort obtained numbers from the smallest to the largest
 * 
 */


function exercise02 (n) {
	
	var cont = 1;
	var arrayN2 = [];
	
		do {
			arrayN2.push(Math.floor(Math.random() * 100));
			cont ++;
		}
		while(cont<=n);
		
	return arrayN2.filter(function(item, index, array){return (item%2===0)})
			 	  .sort(function(a,b) { return (a-b)})
	
	
	
}
