
//with inbuild functionality

function isPalidrom(str){
    let reverse = str.split('').reverse().join('')
    return str === reverse;
}

console.log(isPalidrom('raars'))


// with a for loop


function isPalidroms(str){
    let Rstorage = '';

    for(let i = str.length - 1; i>=0; i--){
        Rstorage += str[i]
    }

    console.log('debugging :',Rstorage)
    return str === Rstorage;
}

console.log(isPalidroms('raar'));


// let check with a pointers


function isPalidromm(str){
    for(let left = 0,right = str.length - 1; left < right; left++ , right--){
        if(str[left] !== str[right]){
            return false
        }
    }
    return true
}

console.log(isPalidromm('raar'))