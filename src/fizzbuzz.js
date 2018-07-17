var

var FizzBuzz = function(x){
    if((x % 15) === 0){
        console.log('FizzBuzz');
    }
    else if((x % 5) === 0){
        console.log('Buzz');
    }
    else if((x % 3) === 0){
        console.log('Fizz');
    }
    else{
        console.log(x);
    }
};

var num = prompt(num);

FizzBuzz(num);