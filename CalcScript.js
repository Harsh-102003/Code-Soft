let display = document.querySelector(".inputBox");
let btns = document.querySelectorAll("button");
let btnArray = Array.from(btns);
let string = "";

btnArray.forEach((btn) => {
  // console.dir(btn);
  btn.addEventListener("click", (evt) => {
    if (evt.target.innerText === "AC") {
      string = "";
      display.value = string;
    }else if(evt.target.innerText === "DEL"){
      string = string.substring(0, string.length-1);
      display.value = string;
    } else if(evt.target.innerText === "="){
      string = eval(string);
      // console.log(string);
      display.value = string;
    } else {
      string += evt.target.innerText;
      display.value = string;
    }
  });
});
