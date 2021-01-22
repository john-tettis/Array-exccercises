
let numbers = [1,2,3,4,5,6,7,8];
let words = ['colt','matt', 'tim', 'test'];
let people =[
    {first: 'John', last: 'jenkins', iscool: true},
    {first: 'Jim', last: 'jenkins', iscool: false},
    {first: 'Bob', last: 'jenkins'},

]


//forEach--------------------------------------------
function doubleValue(arr){
    let newArray = [];
    arr.forEach(function(num){
        newArray.push(num*2)
    })
    return newArray;

}
function onlyEvenValues(arr){
    let newArray = [];
    arr.forEach(function(num){
        if(num%2===0) newArray.push(num);
    })
    return newArray;
}
function showFirstAndLast(arr){
    let newArray = [];
    arr.map(function(word){
        newArray.push(`${word[0]}${word[word.length-1]}`);
    })
    return newArray;
}
function addKeyAndValue(array, key, value){
     array.forEach(function(object){
        object[key] = value;
    })
    return array;
}
function vowelCount(word){
    let count ={}
    Array.from(word).forEach(function(letter){
        letter=letter.toLowerCase();
        if(count[letter]){
            count[letter]++;
        }
        else{
            count[letter]=1;
        }
    })
    return count;
}
//map--------------------------------------------

function doubleValuesWithMap(arr){
    return arr.map(function(num){
        return num*2;
    })
}
function valTimesIndex(arr){
    return arr.map(function(num, i){
        return num*i;
    })
}
function extractKey(arr, key){
    return arr.map(function(object){
        return object[key];
    })
}
function extractFullName(arr){
    return arr.map(function(object){
        return `${object['first']} ${object['last']}`;
    })
}
//filter--------------------------------------------

function filterByValue(arr, key){
    return arr.filter(function(object){
        for(let keys in object){
            if(keys===key) return true;
        }
        return false;
    })

}
function find(arr, fnd){
    return arr.filter(function(value){
        return value === fnd;
    })[0];
}
function findInObj(arr,key,value){
    return arr.filter(function(object){
        return object[key]===value;
    })[0];
}
function removeVowels(strng){
    let consWord='';
    let consArray = Array.from(strng).filter(function(ltr){
        return 'aeiou'.indexOf(ltr) === -1;
    })
    consArray.forEach(function(ltr){
        consWord+=ltr.toLowerCase();
    })
    return consWord;
}
function doubleOddNumbers(num){
    return doubleValuesWithMap(num).filter(function(num){
        return num%4!==0;
    })
}