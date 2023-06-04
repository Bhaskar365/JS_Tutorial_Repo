const country = 'India';
const continent = 'Asia';
let population = 1300000000;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = new Boolean();
isIsland = false;

let language;
language = 'english';

console.log(isIsland);
console.log(language);


if(population > 33000000){
    console.log('population is above 33000000' );
}
else{
    console.log('population is below 330000000');
}


console.log('9'-'5');
console.log('19'-'13'+'17');
console.log('19'-'13'+17);
console.log('123'<57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

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

let input = prompt('Enter language');
switch(input)
{
    case 'chinese':
        alert('most number of native speaker');
        break;

    case 'mandarin':
         alert('most number of native speaker');
        break;

    case 'spanish':
        alert('2nd place in number of native speakers');
        break;
    
    case 'english':
        alert('3nd place in number of native speakers');
        break;

    case 'hindi':
        alert('4th place in number of native speakers');
        break;    

    case 'arabic':
        alert('5th most spoken language');
        break;

    default:
        alert('invalid language entered');    
        break;
}















