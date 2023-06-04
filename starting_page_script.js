// const country = 'India';
// const continent = 'Asia';
// let population = 1300000000;

// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland = new Boolean();
// let isBool = false;


// isIsland = false;

// let language;
// language = 'english';

// console.log(isIsland);
// console.log(language);


// if(population > 33000000){
//     console.log('population is above 33000000' );
// }
// else{
//     console.log('population is below 330000000');
// }


// console.log('9'-'5');
// console.log('19'-'13'+'17');
// console.log('19'-'13'+17);
// console.log('123'<57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// let numNeighbours;
// numNeighbours = prompt('How many neighbour countries  does your country have?');
// if(numNeighbours===1)
// {
//     console.log('only 1 border');
// }
// else if(numNeighbours>1)
// {
//     console.log('more than 1 border');
// }
// else
// {
//     console.log('no borders');
// }

// if(language==='english' && population>5000000 && isIsland==false)
// {
//     alert('you should live here');
// }
// else
// {
//     alert('country not in criteria');
// }

// let input = prompt('Enter language');
// switch(input)
// {
//     case 'chinese':
//     case 'mandarin':
//         alert('most number of native speaker');
//         break;

//     case 'spanish':
//         alert('2nd place in number of native speakers');
//         break;
    
//     case 'english':
//         alert('3nd place in number of native speakers');
//         break;

//     case 'hindi':
//         alert('4th place in number of native speakers');
//         break;    

//     case 'arabic':
//         alert('5th most spoken language');
//         break;

//     default:
//         alert('invalid language entered');    
//         break;
// }

// if(population>3000000){
//     // alert('population is above 30000000');
// }
// else{
//     // alert('population is below 30000000');
// }

// const desc = `${country} describes population ${population} speaking ${language}`;
// // alert(desc);
// console.log(typeof isBool);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// // const numNeighbours = Number(prompt('How many neighbours does country have?'));

// if(numNeighbours===1)
// {
//     alert('Only 1 border');
// }
// else if(numNeighbours >1)
// {
//     alert('more than 1 border');
// }
// else
// {
//     alert('no borders');
// }

// alert(`${country}'s population is ${population > 330000 ? 'above' : 'below'} average`);

// const ageJonas = 2033-1999;
// const ageSarah = 2033-2004;
 
// console.log(ageJonas,ageSarah);

// let x ,y;
// x=y=25-5-2;
// console.log(x , y);

// // const john = 'teacher';
// // const w = `I'm ${john}`;
// // alert(w);

// alert('String with \n\
//  multiple \n\
//  lines  ');

// console.log(`String
// multiple
// lines
// examples`);

// const age = 12;
// const isOldEnough = age>=18;

// if(isOldEnough)
// {
//     console.log('can drive car');
// }
// else
// {
//     const wait = 18 - age;
//     console.log(`You are too young to drive. Wait for another ${wait} years. `);
// }

const inputYear = '1991';
console.log(Number(inputYear) , inputYear);
console.log(Number(inputYear) + 15);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23),23);

console.log(Boolean(0),Boolean(undefined),Boolean('Jonas'),Boolean({}));

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive)
{
    console.log('eligible to drive');
}
else
{
    console.log('not eligible to drive');
}

const isTired = true;
if(hasDriversLicense || hasGoodVision || !isTired)
{
    console.log('yes drive');
}     
else
{
    console.log('no drive');
}

const day = 1;

switch(day)
{
    case 1: 
        console.log('1 entered');
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
        console.log('other than 1 entered');
        break;
    default:
        console.log('not a valid input');
}

const age = 19;
age>=18 ? 'Over 18' : 'Less than 18';

console.log(age);











