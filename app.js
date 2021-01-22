let colors = ['red','orange','yellow','purple','blue']


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