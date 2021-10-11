// You have to create a function that replicates filter on the array prototype
// So you must write a function in 1. so that when it is called in 2. the result is exactly the same as in 3.
// we have some if statements at the end to test the first elements match and the length of the array is the same

//Array
const peopleArray = [
    {
        name: 'dave',
        age: 21
    },
    {
        name: 'sarah',
        age: 29
    },
    {
        name: 'glen',
        age: 35
    },
    {
        name: 'martha',
        age: 67
    }
];


//Filter Method

// 1.
//Declaration
function filterIt(arr, filterRules){
    let filteredArray = [];
    for (var i=0; i<=arr.length-1; i++) {
        if (filterRules(arr[i]) === true)   {
        filteredArray.push(arr[i]);
        }}
    return filteredArray;
};

//Expression
let filterIt = function(arr, filterRules){
    let filteredArray = [];
    for (var i=0; i<=arr.length-1; i++) {
        if (filterRules(arr[i]) === true)   {
        filteredArray.push(arr[i]);
        }}
    return filteredArray;
};

//Arrow
let filterIt = (arr, filterRules) => {
    let filteredArray = [];
    for (var i=0; i<=arr.length-1; i++) {
        if (filterRules(arr[i]) === true)   {
        filteredArray.push(arr[i]);
        }}
    return filteredArray;
};


// 2.
// This tests to make sure it works as expected
var yours = filterIt(peopleArray, function (person) {
	return person.age < 30;
});

console.log(yours);

// 3.
// expected result
var expected = peopleArray.filter(function (person) {
	return person.age < 30;
});


if (expected.length == yours.length){
    console.log("Correct number of elements");
}


if (expected[0] == yours[0]){
    console.log("First element matches");
}


//Map Method

//Declaration
function mapIt(arr, mapRules) {
    let mappedArray = [];
    for (var i=0; i<=arr.length-1; i++) {
        mappedArray.push(mapRules(arr[i]));
    }
    return mappedArray;
}

//Expression
let mapIt = function(arr, mapRules) {
    let mappedArray = [];
    for (var i=0; i<=arr.length-1; i++) {
        mappedArray.push(mapRules(arr[i]));
    }
    return mappedArray;
}

//Arrow
let mapIt = (arr, mapRules) => {
    let mappedArray = [];
    for (var i=0; i<=arr.length-1; i++) {
        mappedArray.push(mapRules(arr[i]));
    }
    return mappedArray;
}


// Your code
var names = mapIt(peopleArray, (person) => {return person.name});
console.log(names);

// Must match
const expected = peopleArray.map((person) => {return person.name});




//Some Method

//Declaration
function hasSome(arr, someRules) {
    for (var i=0; i<=arr.length-1; i++) {
        return someRules(arr[i]) 
    }
}

//Expression
let hasSome = function(arr, someRules) {
    for (var i=0; i<=arr.length-1; i++) {
        return someRules(arr[i]) 
    }
}

//Arrow
let hasSome = (arr, someRules) => {
    for (var i=0; i<=arr.length-1; i++) {
        return someRules(arr[i]) 
    }
}


// Your codeha
var anyUnder30 = hasSome(peopleArray, (person) => {return person.age < 30});
console.log(anyUnder30);

// Must match

var expected = peopleArray.some(function (person) {
	return  person.age < 30;
});
