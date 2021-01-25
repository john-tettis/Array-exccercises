const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

function extractValue(arr, key){
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    },[]);
}

function vowelCount(str){
    return Array.from(str).reduce(function(count, letter){
        if('aeiou'.indexOf(letter.toLowerCase())!== -1){
            if(count[letter.toLowerCase()]){
                count[letter.toLowerCase()]+=1;
            }
            else{
                count[letter.toLowerCase()]=1;
            }
        }
        return count;
    },{})

}
function isEven(val){
    return val % 2 === 0;
  }

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,obj){
        obj[key]=value;
        acc.push(obj);
        return acc;
    },[])
}
function partition(arr, func){
    return arr.reduce(function(acc,value){
        if(func(value)){
            acc[0].push(value)
        }
        else{
            acc[1].push(value);
        }
        return acc;
    },[[],[]])
}