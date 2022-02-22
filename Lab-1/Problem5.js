/*************   PART___A */
function isVowel(char)
{
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false;
}

function find_leftMost_vowel(str){
    console.log("Hello")
    let i=0;
    let vowel = ""
    let index = 0
    while(i<str.length){
        if(isVowel(str[i].toLowerCase())){
            vowel = str[i]
            index = i
        }
        i++
    }
    
    console.log(`The left most vowel in string is: ' ${vowel} ' on index ${index}`)
}



let str = "afhdsjejkasjdiqeifqwprujcnskda"
find_leftMost_vowel(str)

/*************   PART___B */
console.log("\n\n")

function Reverse_num(num){
    let result = 0
    let mul = 0;
    for (let i = num; i > 0; i = ~~(i/10)) {
        let digit = i % 10;
        result = result * 10 + digit;
    }
    console.log(result)
}

let num = 123456

Reverse_num(num)

