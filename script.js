const button =document.querySelector('.btn');
button.addEventListener('click',result);
const showw =document.querySelector("#show");

function result(e){
e.preventDefault()//запрет перезагрузки страницы
let point = 0;
if(document.querySelector('#answer1').checked){//если выбран правильный ответ то плюс бал
    point++; }
if(document.querySelector('#answer2').checked){
    point++; }
if(document.querySelector('#answer3').checked){
    point++ ;}
if(document.querySelector('#answer4').checked){
    point++ ;}
if(document.querySelector('#answer5').checked){
    point++ ;}

 showw.textContent = "Ваши баллы " +point;   //абзацу id="show присваем текст(textContent) и количество посчитанных баллов (point)
}