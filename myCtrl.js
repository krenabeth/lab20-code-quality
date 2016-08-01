var app = angular.module("myApp");

function primeNumbers() {
// prime number is a whole number greater than 1
// whose only 2 whole-number factors are 1 and itself
    for (var i = 2; i <= 100; i++) {
   		  if (i % 2 === 0 && i !== 2) {
           //not a prime
   		 } else if (i % 3 === 0 && i !== 3){
   		 	//not a prime
   		 } else if (i % 5 === 0 && i !== 5){
           //not a prime
         } else  {
   		 	console.log(i);
   		 }
}
}
primeNumbers();