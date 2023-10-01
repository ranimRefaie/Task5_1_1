let result = document.getElementById('result');


function Display(number){
    result.value+=number;
}
function Delete(){
    result.value = result.value.slice(0,-1);
}
function Clear(){
    result.value = '';
}

function Eval(){
    try{
        result.value = eval(result.value)
    }
    catch(error){
        result.value= 'Invalid input';
    }
}

