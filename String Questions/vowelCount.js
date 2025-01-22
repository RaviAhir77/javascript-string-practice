// with inbuild functionlity


function vowelCounter(str){
    let vowel = ['a','e','i','o','u'];
    let count = 0;

    let stringLower = str.toLowerCase();

    for(let s of stringLower){
        if(vowel.includes(s)){
            count++;
        }
    }
    return count;
}

console.log(vowelCounter('javascriptsndE'));


//with a for a loop;

function vowelCounters(str){
    // let vowel = ['a','e','i','o','u'];
    let vowel = 'aeiou';  //string or array both will a work 
    let count = 0;

    for(let i=0; i<str.length; i++){
        for(let j =0; j<vowel.length; j++){
            if(str[i] == vowel[j]){
                count++;
                break;
            }
        }
    }

    return count
}

console.log(vowelCounters('javascriptiii'))
