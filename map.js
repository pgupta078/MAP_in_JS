//map is a combination of key value pair .
//it can have any type of key
//we can iterate in order on map

var myMap = new Map();

myMap.set('question', 'Capital of India? ');
myMap.set('answers', ['0- Delhi', '1-Mumbai', '2-Kolkata', '3-Chennai']);
myMap.set('correctAnswer', 0);
myMap.set(true, 'Answer is correct');
myMap.set(false, 'Answer is not correct');


console.log(myMap);
console.log(myMap.get('question'));
console.log(...myMap.get('answers'));


var ans = prompt('Kindly input your answer');
if (parseInt(ans) === myMap.get('correctAnswer')) {
    console.log(myMap.get(true))
}
else {
    console.log(myMap.get(false))
}

//to get the size of map
console.log(myMap.size);

//to check if map has any particular key
if (myMap.has(true)) {
    console.log(myMap.get(true))
}

//to delete any key from map
// myMap.delete(false);
// console.log(myMap);

// //to clear the records from map
// myMap.clear();
// console.log(myMap);

// iterating on map
// we can loop on map but not on objects
// loop to get key
for (let key of myMap) {
    console.log('hello ' + key);
}

// loop to get key and values  - here using concept of destructuring 

for (let [key, value] of myMap.entries()) {
    console.log(`using for loop-  key is ${key} and value is ${value}`);
}

console.log("-------------------------");
//using forEach to iteration on map
myMap.forEach(
    (value, key) => console.log(`using forEach key "${key}" and its value is "${value}"`)
);
console.log('below are boolean keys in our map');
let bcount = 0;
let nbcount = 0;
for (let [key, value] of myMap.entries()) {
    if ( typeof key == "boolean" )
    {
        console.log('boolean key is ' + key);
        bcount++;
    }
    else{
        console.log('Nonboolean key is ' + key);
        nbcount++;
    }
}
console.log('Boolean key count is => ' + bcount);
console.log('nonBoolean key count is => ' + nbcount);

