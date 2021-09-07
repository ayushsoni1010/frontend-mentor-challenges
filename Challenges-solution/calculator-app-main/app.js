let input = document.getElementById("screen");

let screenValue = "";

buttons = document.querySelectorAll('button');

for (item of buttons) {
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    console.log("Button text is ", buttonText);
      
    if (buttonText == "x") {
        buttonText = "*";
        screenValue += buttonText;
        input.value = screenValue;
    }
    else if(buttonText == 'RESET'){
        screenValue = "";
        input.value = screenValue;
    }
    else if (buttonText == 'DEL') {
        screenValue -= screenValue;
        input.value = screenValue;
    }
        
    else if (buttonText == '=') {
        input.value = eval(screenValue);    
    }
    else {
        screenValue += buttonText;
        input.value = screenValue;
    }
  });
}


