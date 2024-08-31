// let price = 500;
// const isLeader = true;

// // if(isLeader === false) {
// //     price = 0;
// // }

// // else {
// //     price = price + 100;
// // }

// price = isLeader === true ? 0 : price + 100;

// console.log(price);



// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk




let age = 47;
let isStudent = false;
let price = 800;

if (age < 10) {
    price = 'Free';
    console.log(price);
}

else if (isStudent === true) {
    discount = price * 50 / 100;
    payAmount = price - discount;
    console.log(payAmount);
}

else if (age >= 60) {
    discount = price * 15 / 100;
    payAmount = price - discount;
    console.log(payAmount);
}

else {
    console.log(price);
}