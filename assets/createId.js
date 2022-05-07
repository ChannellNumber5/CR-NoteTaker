
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const errorArray = [{
    title:"Test Title",
    text:"Test text"
}];

const testArray = errorArray.map(el => {return el.id});
console.log(testArray);

function createId(idArray) {
    let randId;
    if(idArray === undefined || idArray === null) {
        randId = Math.floor(Math.random()*1000) + alphabet[Math.floor(Math.random()*26)]
    } else {
        let isMatch = true;
        do {
            randId = Math.floor(Math.random()*1000) + alphabet[Math.floor(Math.random()*26)];
            for (let i = 0; i < idArray.length; i++) {
                if(randId === idArray[i]) {
                    isMatch = false;
                }
            }
        } while (!isMatch);
    }
        
 return randId;
}

console.log(createId(['900B', '476A', '592C', '786K']));
console.log(createId(testArray));