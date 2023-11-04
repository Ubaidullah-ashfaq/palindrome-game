
function isPalindrome(str) {
    
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
 
    const reversedStr = str.split('').reverse().join('');

 
    return str === reversedStr;
}

function checkPalindrome() {
    const inputText = document.getElementById('inputText').value;
    const resultElement = document.getElementById('result');

    if (isPalindrome(inputText)) {
        resultElement.textContent = "It's a palindrome!";
    } else {
        resultElement.textContent = "It's not a palindrome.";
    }
}


const checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', checkPalindrome);
