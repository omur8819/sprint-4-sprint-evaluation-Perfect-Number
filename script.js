const firstNumber = document.querySelector("#checkButton");

firstNumber.addEventListener("click", perfectNumber);
numberPreCheck.addEventListener("keyup", enter);


function perfectNumber(){
    var count = 0;
    const number = document.getElementById("numberPreCheck").value;
    
    
    for(var i=1; i<number; i++) {
        if(number%i==0){
            count = count+i;
        }
    }

    if(count==number){
        document.querySelector("#result").innerHTML = `Your number ${number} is Perfect!`;
        reset();
    }

    else{
        document.querySelector("#result").innerHTML = `Your number ${number} is NOT Perfect!`;
        reset();
    }

    if(number<=0){
        
        document.querySelector("#result").innerHTML = "";
        reset();
        alert("Please enter a positive number!");
        
    }
    
};

function reset(){
    document.getElementById("numberPreCheck").value = "";
    document.getElementById("numberPreCheck").focus();
};

function enter(event) {
    if (event.keyCode===13){
      perfectNumber();
    }
  };

