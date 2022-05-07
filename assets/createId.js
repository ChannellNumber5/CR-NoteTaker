


function createId(idArray) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
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

module.exports = createId;