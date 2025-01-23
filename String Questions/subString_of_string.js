

function subStringFinder(str){
    const subStrings = [];
 
    
    for(let i = 0; i < str.length; i++){
        let subString = '';

        for(let j = i; j < str.length; j++){
            subString += str[j]
            subStrings.push(subString)
        }
    }

    return subStrings
}


console.log(subStringFinder('abc'))