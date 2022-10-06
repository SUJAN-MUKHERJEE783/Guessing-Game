hint ="";
let num = Math.floor(Math.random() * 25) +1;
let turn = 5;
console.log(num);
document.querySelector('.annc').innerHTML="You Have Only 5 Turns";
let getNum = document.querySelector('.getnum');
let but = document.querySelectorAll('.button');

Array.from(but).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (e.target.value == "Check"){
           
            if (turn > 1){
                if (getNum.value > 25){
                    document.querySelector('.annc').innerHTML="You Have Only "+ --turn +" Turns";
                    document.querySelector('.hint').value="Number Must in Range";
                    document.querySelector('.getnum').value="";
                }
                else{
                    if (getNum.value > num){
                        document.querySelector('.annc').innerHTML="You Have Only "+ --turn +" Turns";
                        document.querySelector('.hint').value="It's Much Greater";
                        document.querySelector('.getnum').value="";
                        document.querySelector('.getnum').setAttribute('placeholder','Enter Another Number');
                    }
                    else if (getNum.value < num){
                        document.querySelector('.annc').innerHTML="You Have Only "+ --turn +" Turns";
                        document.querySelector('.hint').value="It's Much Smaller";
                        document.querySelector('.getnum').value="";
                        document.querySelector('.getnum').setAttribute('placeholder','Enter Another Number');
                    }
                    else{
                        document.querySelector('.annc').innerHTML="You Have Infinite Turns";
                        document.querySelector('.hint').value="Let's Play Again";
                        document.querySelector('.footer').innerHTML="!!! You Won Bro !!!";
                        document.querySelector('.getnum').value="";
                        document.querySelector('.check').setAttribute('disabled','disabled');
                        document.querySelector('.getnum').setAttribute('disabled','disabled');
                    }

                }
                
                
            }
            else if (turn <= 1){
                    if (getNum.value == num){
                        document.querySelector('.annc').innerHTML="You Have Infinite Turns";
                        document.querySelector('.footer').innerHTML="!!! You Won Bro !!!";
                        
                    }
                    else{
                        document.querySelector('.annc').innerHTML="You Have No Turns";
                        document.querySelector('.footer').innerHTML="@@@ Game Over Bro @@@";
                    }
                    document.querySelector('.getnum').value="";
                    document.querySelector('.hint').value="Let's Play Again";
                    document.querySelector('.check').setAttribute('disabled','disabled');
                    document.querySelector('.getnum').setAttribute('disabled','disabled');
                }
            console.log(turn);
        }
        else if (e.target.value == "Reset"){
            window.location.reload(true);
        }
        
    })
})