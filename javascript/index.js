var greetUser = function(){
    var userName = prompt('What is your name?');

    if(userName !== ''){
        alert('Hello ' + userName);
    } else {
        greetUser();
    }
};

greetUser();

var currentYear = 2016;
var myCountry = 'USA';
var myPhrase = currentYear + ' is an election year in the ' + myCountry;
console.log(myPhrase);