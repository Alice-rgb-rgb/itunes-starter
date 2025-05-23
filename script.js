let word;
let words = ["Apple", "Happy"]
let guesses = 6;

// Marcelo random word generator

function wordGen(){
    let fill = Math.floor(Math.random() * words.length);
    word = words[fill];
    console.log(word);
    console.log(word.length);
}
//document.getElementById("submit").addEventListener("click",wordGen);
 
wordGen();

function checkWord(){
    let guess=document.getElementById("guessWord");
    for(let i = 0; i < word.length; i++){
        if (guess[i]==word[i]){
            makeGreen(guess[i]);
        }else if (word.includes(guess[i])==true){
            makeYellow(guess[i]);
        }else{
            makeGray(guess[i]);
        }
    }
guesses = guesses - 1;
if (guesses == 0){
    
}
}


document.getElementById("submit").addEventListener("click",checkWord);
function makeGrid(letters=5){
    table = document.getElementById("wordGrid");
    let row = document.createElement("tr");
    for (let i=0; i<letters; i++){
        let col = document.createElement("td");
        col.innerHTML="test";
        row.appendChild(col);
    }
    table.appendChild(row);
}
makeGrid();
