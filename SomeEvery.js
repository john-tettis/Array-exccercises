
let arrTest = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]
function hasOddNumber(arr){
    
    return arr.some(function(num){
        return num%2 !==0;

    })

}
function hasAZero(num){
    return Array.from(num.toString()).some(function(dig){
        return dig ==='0';
    })
}
function hasOnlyOddNumbers(arr){
    return arr.every(function(num){
        return num%2!==0;
    })
}
function hasNoDuplicates(arr){
    return arr.every(function(num,i,arr){
        return arr.every(function(numCheck,I){
            if(i===I){
                return true
            }
            else{
                return num !==numCheck;
            }
        })
    })
}
function hasCertainKey(array, key){
    return array.every(function(object){
        return key in object;
    })
}
function hasCertainValue(arr, key, value){
    return arr.every(function(object){
        return object[key]===value;
    })
}
