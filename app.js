//Calculator

function getNumber(number){
    var result =document.getElementById('result');

    result.value +=number;   
}

function resultClear(){
    var resultClear =document.getElementById('result');

    result.value =""
}

function getResult(){
    var result =document.getElementById('result');

    result.value = eval(result.value)
}