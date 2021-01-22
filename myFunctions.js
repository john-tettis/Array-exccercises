let colors = ['red','orange','yellow','purple','blue']

//custom array methods
function myForEach(array, func){
    for(let i=0; i<array.length; i++){
        func(array[i], i, array);
    }
}
function myMap(array, func){
    let newArr=[];
    for(let i=0; i<array.length; i++){
        newArr.push(func(array[i], i, array));
    }
    return newArr;
}
function myFilter(array, func){
    let newArr=[];
    for(let i=0; i<array.length; i++){
        if(func(array[i], i, array)) newArr.push(array[i]);
    }
    return newArr;
}

function mySome(array, func){
    let final= false;
    array.forEach(function(val){
        if(func(val)){
            final =true;
        }
    })
    return final;
}
function myEvery(array, func){
    let final =0;
    array.forEach(function(val){
        if(func(val)){
            final++;
        }
    })
    return final === array.length;

}
function myFind(arr, func){
    let answer;
    for(let val of arr){
        if (func(val)){
            answer = val;
            break;
        }
    }
    return answer;
}
function myFindIndex(arr, func){
    let answer;
    for(let [i, val] of arr.entries()){
        if (func(val)){
            answer = i;
            break;
        }
    }
    return answer;
}










function capitalize(word){
    return word.toUpperCase();
}
function domCreate(color){
    let newP =document.createElement('p');
    newP.innerText=color;
    newP.style.color=color;
    document.body.appendChild(newP);
}
function isU(letter){
    return letter ==='u';
}
function containsU(word){
    for(let i=0; i<word.length; i++){
        if(isU(word[i])) return true;
    }
    return false;
}
let capColors = myMap(colors,capitalize);

myForEach(colors, domCreate);

let uColors = myFilter(colors, containsU);