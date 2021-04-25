 
 function quiz()
 {
 const allQuestions=
   [
    { question: "Q1. Fill in the blank 22 tak padhai, 25 pe naukri, 26 pe _______?\n1.  PYAAR\n2.  CHHOKRI\n3.  SHAADI\n4.  PROMOTION ",
       correct: 2
    },
      { question: "\n\nQ2. In Gangs of Wasseypur who says Beta tumse na ho payega ?\n1.  RAMADHIR SINGH\n2.  SARDAR KHAN\n3.  FAIZAL KHAN\n4.  SHAMSHAD",
        correct: 1
      },
      { question: "\n\nQ3. Which movie is this dialogue from ‘Woh toh main kha gaya … woh main mast tel me fry karke, woh main kha gaya’?\n1.  WELCOME\n2.  HERA PHERI\n3.  HOUSEFUL\n4.  ANDAZ APNA APNA ",
        correct: 2
      },
      { question: "\n\nQ4. Who is Gabbar talking to when he asks ‘Kitne Aadmi The’?\n1.  SAMBH\n2.  JAI\n3.  THAKUR\n4.  KAALIA",
        correct: 4
      },
      { question: "\n\nQ5 Name the character who says ‘Kahin par pahuchne ke liye kahin se nikalna zaroori hai’?\n1.  Rahul\n2.  Anjali\n3.  Naina\n4.  BUNNY",
        correct: 3
      }
     
   ];
 let ans=0;
 let answerArray=[];

 for(let i=0;i<allQuestions.length;i++)
 {
    ans=check(allQuestions[i].question,allQuestions[i].correct);
    answerArray.push(ans);
 }

let count=0;
for(const i of answerArray)
{
  if(i==1)
     count++;
}

console.log(`\n\n***Your total score is ${count} out of ${allQuestions.length}***`);

 }

 console.log("***** WELCOME TO MY BUZZY BOLLYWOOD QUIZ *****\n Answer this multiple choise question quiz by writing the correct option number as accurately as possible. Your score will be displayed on completion of the game.\n ~~~~~~~~~~All the best~~~~~~~~~~\n\n")
 quiz();
 


function check(question,correct)
{
   
  
  console.log(question);
  
const readLineSync = require('readline-sync');
const userInput = readLineSync.question('Enter the correct option number?--->');
console.log(`You choosed---> ${userInput}`);
 
  console.log("The correct answer is---> "+correct);
   
  if(userInput==correct)
  {
     console.log("CORRECT CHOICE,Keeep gooing like this");
     return 1;
  }
  else
  {
      console.log("WRONG CHOICE, Dont loose hope!!!");
       
      
  }
      
}

 
