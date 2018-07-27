// var coupon = prompt('What % off is this?') / 100 || 0;
var tax = 1.20;
var output = document.querySelector('#output');
var books = {
    'Harry Potter and The Curse of While Loops': {
        'price': '15',
        'sale': false,
    },
    'Little Monsters': {
        'price': '20',
        'sale': true,
    },
    'The Go-Giver': {
        'price': '8',
        'sale': false,
    },
    'The Hitch-hikers Guide to the Galaxy': {
        'price': '17',
        'sale': true,
    }
};

var harr = books['Harry Potter and The Curse of While Loops'];
var litt = books['Little Monsters'];
var theG = books['The Go-Giver'];
var hitc = books['The Hitch-hikers Guide to the Galaxy'];

console.log('The book costs ' + harr['price'] * tax);
var checkOut = function(selection){
    var price = selection['price'];

    if(selection['sale']){
        // 40%
        console.log("It's on sale!");
    }
    // var total = (price - (price * coupon)) * tax;

    console.log(price * tax);
    
    // console.log('coupon price is ' + coupon);
    // console.log('pre-tax price is ' + (price - (price * coupon)));
    // console.log('the toatl is ' + total);
};