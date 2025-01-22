// with functionality

function replaceWhiteSpace(str){
    // let replacer = str.replace(' ','_') //that work with only one single white space
    let replacer = str.replace(/ /g,'_') 
    return replacer;
}

console.log(replaceWhiteSpace('hello world nothing'));


// without functionality

function replacers(str){

    let newString = '';

    for(let s of str){
        if(s === ' '){
            newString += "_"
        }else{
            newString += s;
        }
    }

    return newString;
}

console.log('second function :', replacers('hello world nothing'));


//let replace a word first letter with a capital letter 

function capital(str){
    return str.replace(/\b\w/g,(c) => c.toUpperCase())
}

console.log(capital('hellow world'))