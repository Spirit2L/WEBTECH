const letterTemplate = document.querySelector("[data-letter-template]");
const wordContainer = document.querySelector("#word-container");

function shuffle() {
    let word = "auto"
    let newWord = "";
    word.split('').map(function() {
        let hash = Math.floor(Math.random() * word.length);
        newWord += word[hash];
        word = word.replace(word.charAt(hash), '');
    });
    for (let i = 0; i < newWord.length; i++){
        const letterContainer = letterTemplate.content.cloneNode(true).children[0];
        const letter = letterContainer.querySelector("[data-letter]");
        letter.innerHTML = newWord[i];
        wordContainer.append(letterContainer);
    }
}

