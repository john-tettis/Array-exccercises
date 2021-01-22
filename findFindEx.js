const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];








function findUserByUsername(array, username){
    return array.find(function(object){
        return object['username']===username;
    })

}
function removeUser(arr, username){
    let splice = arr.findIndex(function(object){
        return object['username']===username;
    })
    return arr.splice(splice,1);

}