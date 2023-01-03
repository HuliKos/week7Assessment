// 1) Sum Zero
// runtime complexity: O(n^2)
// space complexity: O(1)

function addToZero (arr) {
    for(i=0; i<arr.length; i++){
        for(k=1; k<arr.length; k++){
        if(arr[i] + arr[i+k] === 0){
            console.log('true')
            return arr
        }
    }
} console.log('false')
}

addToZero([1, 2, 3])
addToZero([1, 2, 3, -2])

// 2) Unique Characters
// runtime complexity: O(n^2)
// space complexity: O(1)

function hasUniqueChars(str) {
    let letterArr = str.split('')
    for (i=0; i<letterArr.length; i++)
    for(k=1; k<letterArr.length; k++){
        if(letterArr[i] === letterArr[i+k]){
            console.log('false')
            return letterArr
}
} console.log('true')
}

hasUniqueChars("Monday");
hasUniqueChars("Moonday");

// 3) Pangram Sentence
// runtime complexity: O(n^2)
// space complexity: O(1)

function isPangram(sen) {
    let alp = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let senArr = sen.toLowerCase().split('')
    for(i=0; i<senArr.length; i++){
        for(k=0; k<alp.length; k++){
            if(senArr[i] === alp[k]){
                alp.splice(k,1)
            }
        }
    }
    if(alp.length === 0){
        console.log('true')
    } else {
        console.log('false')
    }
    }   

isPangram("The quick brown fox jumps over the lazy dog!");
isPangram("I like cats, but not mice");

// 4) Longest Word
// runtime complexity: O(n)
// space complexity: O(1)

function findLongestWord (inp){
    for(i=0; i<inp.length-1; i=0){
        if(inp[i].toString().length>inp[i+1].toString().length){
            inp.splice(i+1,1)
        } else{
            inp.splice(i,1)
        }
    } console.log(inp[0].toString().length)
}

findLongestWord(["hi", "hello", "whatever","longgggggggggg"])
