const txtInput = document.getElementById("txtInput");
const totalresult = document.getElementById("totalresult");



/*
function displayValue(text) {
    if (txtInput.value.length == 0 && text === '0') {
        txtInput.value = "";
    } else {
        txtInput.value += text;
    }
}
*/
function displayValue0(text){
    if(txtInput.value.length === 0){
        txtInput.value = "";
    }
    else{
        txtInput.value += text;
    }
}
function displayValue(text){
    txtInput.value += text;
}
function clearDisplay(){
    txtInput.value = "";
    totalresult.textContent = "0";
}
function equal(){
    totalresult.textContent = eval(txtInput.value);
}
function deleteNum(){
    txtInput.value = txtInput.value.toString().slice(0,-1);
    if(txtInput.value.length == 0){
        totalresult.textContent = "0";
    }
}
