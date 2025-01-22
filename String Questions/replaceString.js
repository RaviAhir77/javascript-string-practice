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
