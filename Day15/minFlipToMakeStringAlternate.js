function minFlipToMakeStringAlternate(string){
  return Math.min(flipHelper(string,'0'), flipHelper(string,'1'))
}

function flipHelper(string,expected){

    let count = 0;

    for(let i=0; i < string.length; i++){
        if(string[i] != expected){
            count++;
        }

        expected = expected == 0 ? 1 : 0; // flip
    }

    return count;
}



console.log(minFlipToMakeStringAlternate("0001010111"));
console.log(minFlipToMakeStringAlternate("10"))