const numbVal = document.getElementById("numb_value");
var expression = "";
numbVal.oninput = function(){
    numbVal.value = numbVal.value.replace(/[^0-9 &.\/\*%+\-$]/g,"");
    expression = numbVal.value;
}
function press(i){
    expression += i;
    numbVal.value = expression;
}
function clears(){
    expression = "";
    numbVal.value = expression;
}
function equals(){
    if(eval(expression)){
        expression,numbVal.value = eval(expression);
    }else{
        numbVal.value = expression;
    }
}