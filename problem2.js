var fibonacci = [1, 2];
var sum = 0;

while(fibonacci[fibonacci.length -1] < 4000000){
  var next = fibonacci[fibonacci.length -1] +  fibonacci[fibonacci.length -2];
  if (next < 4000000) {
    fibonacci[fibonacci.length] = next;
  }else{
    break;
  }
};

for (var i = 0; i < fibonacci.length; i++) {
  if(fibonacci[i] % 2 === 0 ){
    sum += fibonacci[i];
  }
}

console.log("The sum of the even-valued terms of fibonacci array is " + sum);
