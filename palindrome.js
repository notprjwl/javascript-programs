// 'radar', 'racecar'

function palindrome(word) {
    let reverse = word.split("").reverse().join("")
    if (word === reverse) {
        console.log(word, "is a palindrome")
    }
    else {
        console.log(word, "is not a palindrome")
    }
}


palindrome('radar')