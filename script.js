const rndSents = ['Hello everyone I am her to check my     typing speed','I hope you are enjoying this typing speed test','All the best to you type smoothly'];

const challengeSentence= document.getElementById('sent');
const userSent = document.getElementById('mysent');
const btn=document.getElementById('btn');

let srtTime, endTime;

// const timeTaken = () =>{
//     console.log((endTime-srtTime)*1000);
// }

const startGame = () =>{
    let random=Math.floor(Math.random()*rndSents.length);
    challengeSentence.innerText = rndSents[random];
    console.log(random);
    btn.innerText='Done';
    let date= new Date();
    srtTime = date.getTime();
}

const endGame = () =>{
    let date= new Date();
    endTime = date.getTime();
    let timeTaken = ((endTime-srtTime)/1000);
    
    let typeSentence = userSent.value;
    let wordCount = wordCounter(typeSentence);

    let speed= Math.round((wordCount/timeTaken)*60);
    // 'You typed total ' + wordCount + ' Words at speed ' + speed + ' per minute. '
    let dispMsg=  `Typed Words:- ${wordCount}\n Typing Speed:- ${speed} per minute\n`

    dispMsg += compareWords(challengeSentence.innerText,typeSentence );
    challengeSentence.innerText= dispMsg;
    userSent.innerText='';
}


const compareWords = (str1,str2) =>{
    let sent1= str1.split(" ");
    let sent2= str2.split(" ");
    let count=0;

    sent1.forEach(compareFunc = (item, i) => {
        if(item == sent2[i]){
            count++;
        }

    });

    let errorCount= (sent2.length - count);
    return (`Correct Words:- ${count} out of ${sent1.length}\n Errors:- ${errorCount}`);
}

const wordCounter = (str) =>{
    return str.split(" ").length;
}

btn.addEventListener('click',function(){
    if(this.innerHTML=='Start'){
        userSent.value=''
        userSent.disabled= false;
        startGame();
    }
    else if(this.innerText=='Done'){
        userSent.disabled= true;
        btn.innerText='Start';
        endGame();
    }
})
