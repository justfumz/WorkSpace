// 'use strict';

// // // console.log("Hello world");
// // // document.write("Hello World")

// // // let firstName = "Esther";
// // // firstName = "Funmi"

// // // console.log(firstName);

// // // const birthYear = 1998;

// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 192;
// // const heightJohn = 1.95;

// // const bmiMark = massMark/(heightMark**2);
// // const bmiJohn = massJohn/heightJohn**2;

// // if (bmiMark > bmiJohn){
// //     console.log (`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})`)
// // }else{
// //     console.log (`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark})`)
// // }


// // const firstName = "Esther";
// // const lastName = "Gbagbeolu";
// // const job = "programmer";
// // const birthYear = 1998;
// // const year = 2023;

// // console.log (`I'm ${firstName} ${lastName}, a ${year - birthYear} years old ${job}`)


// // const person = 12;

// // const vote = person >= 18 ? "Congratulations! You're eligible to vote :)" : "Sorry! You're not eligible";
// // console.log(vote);

// // //Coding challenge 3......

// // let dolphinsAVG = (96 + 108 + 89) / 3 ;
// // let koalasAVG = (88 + 91 + 110) / 3;
// // console.log( `Team Dolphin score ${dolphinsAVG} while Team Koala scores ${koalasAVG}`)


// //     if (dolphinsAVG > 100 && koalasAVG > 100){
// //         if (dolphinsAVG > koalasAVG){
// //                 console.log("Congratulations to team DOLPHINS!!! :)")
// //         }else if(koalasAVG > dolphinsAVG){
// //                 console.log("Congratulations to team KOALA!!! :)")
// //         }else if(dolphinsAVG === koalasAVG){
// //             console.log("There's beeen a draw! We have a tie!!!")
// //         }
// //     }else{
// //         console.log("No team wins the trophy! Average score is lower than 100")
// //     }

// //     //Switchhhhhh

// //     let day = 1;
    
// //     switch (day){
// //         case 1: console.log("Today is a Sunday!")
// //             break;
// //         case 2: console.log("It's a work day")
// //             break;
// //         case 3: console.log("It's mid-week")
// //             break;
// //         case 4: console.log("It's a weekend");
// //             break;
// //         default: console.log("Invalid day of the week!")
// //     }

// // //Coding challenge 4........>>>>>

// //     let bill = 300;
// //     let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

// //     console.log (`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`)

// function letSee(){
//     console.log("Let's see if i've still got this!");
//     console.log("Yup!")
// }

// letSee();
// letSee();
// letSee();

// //Arrow Function......

// const sum = (a,b) => a+b;
// console.log (sum (2,9));


// //Function expression
// const fruit = (oranges, apples) => {
//     return `We have ${oranges} oranges and ${apples} apples 
//     to make the fruit juice`
// }
// console.log(fruit (9,24))


// //Function Declaration
// function age (birthYear){
//     return (2023 - birthYear);
// }

// console.log(`You're ${age(1995)} years old`);


// // coding challenge 5 -- Functions

// const calcAverage = (scoreA, scoreB, scoreC) => (scoreA+scoreB+scoreC)/3;

// const checkWinner = (avgDolphins, avgKoalas) => {
//     avgDolphins = calcAverage (85,54,41);
//     avgKoalas = calcAverage (23,34,27);
//     if (avgDolphins > avgKoalas * 2) {
//         return `Dolphin wins (${avgDolphins} vs. ${avgKoalas})`
//     }else if (avgKoalas > avgDolphins * 2){
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
//     }else{
//         return `No team wins! Dolphins have a score of ${avgDolphins} 
//         while Koalas have a score of ${avgKoalas}`
//     }
// }

// console.log (checkWinner());

// // Coding challenge 6........>>>>> Functions && Array

//     let tip;

//     const calcTip = bill => {
//         if (bill >= 50 && bill <= 300){
//             tip = 0.15 * bill;
//             return (`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`)
//         }else{
//             tip = 0.2 * bill;
//             return(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`)
//         }
//     }

//     console.log (calcTip(100));

//     const bills = [125,555,44];
//     const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

//     console.log (bills, tips); 


//     const arr = ["Anu", "Feyisara", "Folashade", 2008-1998, ["Anu","moyosore", "Feyisara"]];
//     console.log(arr[4][1])

//      arr.push("boy");
//     console.log (arr);

//     arr.pop();
//     console.log (arr)

//     // //Objects

//     // const obj = {
//     //     firstName: "Funmi", 
//     //     lastName: "Gbagbeolu", 
//     //     age : 2023-1998,
//     //     friends : ["Anu", "Feyisara", "Folashade"]
//     // }

//     // console.log (obj.friends[2])

//     // console.log(obj["age"])

//     // const interestedIn = prompt ("What do you wanna know about obj? firstName,lastName, age or friends?")
 
//     // console.log (obj[interestedIn])

    
//     //challenge 0bj...>>array

//     const person = {
//         name: "Jonas", 
//         birthYear : 1991,
//         friends : ["Micheal", "Peter", "Steven"],
//         job: "teacher" ,
//         hasDriversLicense: true,
//         calcAge : function (){
//             return 2023 - this.birthYear;
//         },
//      //Challenge..>>>This/Objects/Methods
// //"Jonas is a 46-year old teacher, and he has a driver's license"
//         getSummary : function (){
//             return (`${this.name} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`)
//         }
//     } 

//     //Dot Notation
//     console.log(`${person.name} has ${(person.friends).length} friends and his best friend is called ${person.friends[2]}`)

//     //Bracket notation
//     console.log(`${person['name']} has ${person['friends'].length} friends and his best friend is called ${person['friends'][0]} `)

//     console.log (person.calcAge());
//     console.log(person['calcAge']()) 

// console.log (person.getSummary());


const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        return this.mass / (this.height * 2);
    }
}
const markBMI = mark.calcBMI();

const john = {
    fullName: "John Smith",
    mass: 92,
    height:1.95,
    calcBMI: function(){
        return this.mass / (this.height * 2);
    }
}
const johnBMI = john.calcBMI();

console.log(markBMI, johnBMI);

if ( markBMI > johnBMI){
    console.log (`${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s BMI (${johnBMI})`)
}else{
    console.log (`${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}'s BMI (${markBMI})`)
}

//The FOR LOOP



// for (let i=1; i<=12; i++){
//     product=5*i;
//     console.log(`5 * ${i} = ${product}`);
// }

// for (let rep=1; rep<=10; rep++){
//     console.log(`Lifting Weights ${rep}!🏋️‍♀️`)
// }

const fumz = ["Mark", "Miller", 78, 1.69]

for (let i=0; i<fumz.length; i++){
    console.log(fumz[i])
}

console.log("-------------")

for (let d of fumz){
    console.log(d)
}

console.log("-------------")

for (let m in mark){
    console.log(m)
}
console.log("-------------")

const yearOfBirth = [1996, 2019, 2007, 1985];
const calcAge = [];

for (i=0; i < yearOfBirth.length; i++){
    calcAge.push (2023 - yearOfBirth[i]);
}
console.log(calcAge)

console.log("-------------")


const arr = [
    "Anu", 
    "Feyisara", 
    "Folashade", 
    2008-1998,
    ["Anu","moyosore", "Feyisara"]
];


for (let i=arr[4].length; i>=0; i--){
    console.log(arr[4][i]);
}