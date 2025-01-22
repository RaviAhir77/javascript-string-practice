
//using a object 

function nonRepeatingChar(str){
    let char =  new Object; // or we can a write a just {}

    for(let s of str){
        char[s] = (char[s] || 0) + 1
    }

    console.log(char);

    for(let c of str){ //or we can also use "let c in char"
       if(char[c] === 1){
         return c
       }
    }   

    return null
}

console.log(nonRepeatingChar('ravi'));


//using map

function firstNonRepeating(str){
    const storage = new Map();

    for(let i = 0; i<str.length; i++){
        storage.set(str[i],(storage.get(str[i]) || 0) + 1)
    }

    for(let s of str){
        if(storage.get(s) === 1){
            return s;
        }
    }

    return null
}

console.log(firstNonRepeating('there'))