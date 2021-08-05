const   h3 = document.querySelector('h3'),
        button = document.querySelector('button'),
        span = document.querySelector('span');

const bingo = ['B', 'I', 'N', 'G', 'O'];

let evenNumbers = [];

// function to return even numbers between 1 and 50
function getEvenNummbers(){
  // loop through numbers between 1 and 50
  for(let i = 1; i <= 50; i++){
    // check if number is divisible by 2
    if(i % 2 === 0){
      // If number is divisible by 2 add to evenNumbers array
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}


getEvenNummbers();



button.addEventListener('click', function(){
  let randomNumb = Math.floor(Math.random() * evenNumbers.length );
  let randomBingo = Math.floor(Math.random() * bingo.length );
  span.innerHTML = `<strong>${bingo[randomBingo]}${evenNumbers[randomNumb]}</strong>`;
})

h3.textContent = evenNumbers.join(' ');