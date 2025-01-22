
//with a for loop

function reverseStr(str){
    let storage = String();
    
    for(let i = str.length - 1; i>=0; i--){
        storage += str[i]
    }
    console.log('inside function :',storage)
    return storage;
}

reverseStr('hello');

// with js in build functionlity

function reverseStrn(str){
    const rvs = str.split('').reverse().join('') 
    return rvs
}

console.log(reverseStrn('hellow'));


