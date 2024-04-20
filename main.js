let options =  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
let opts = document.querySelectorAll("input[type='radio']")
let passwordLength =  document.querySelector("#len")
let copied = document.querySelector(".copied")
let num = document.querySelector("span")
let len = 20 ;//value of passwordLength 
let gen = document.querySelector(".gen")
let copyButton = document.querySelector(".copy")

let inputText = document.querySelector("#text")
let password = ""
passwordLength.onchange = function (){
  len = +(passwordLength.value)
  num.innerHTML = len
}
opts.forEach(opt => {
  opt.onclick = function(){
    if (opt.value == "Letters")
    {
       options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    else if (opt.value == "Letters & Numbers")
    {
       options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    }
    else if (opt.value == "Letters , Numbers & chars")
    {
       options =  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
    }
  }
    
  });

gen.onclick = () => {
  password = ""
for (let i = 0 ; i< len ; i++){
  let randNum = Math.floor(Math.random()* options.length)
  password += options [randNum]
}
inputText.value = password
}
copyButton.onclick = function (){

  navigator.clipboard.writeText(inputText.value)
copied.style.display ="inline"
setTimeout(() => {
  copied.style.display = "none"
}, 3000);


}