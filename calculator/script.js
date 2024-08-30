function displayvalue(val){
    document.getElementById("inputBox").value=document.getElementById("inputBox").value+ val;
    
}
function cleardisplay(){
    document.getElementById("inputBox").value="";
}
function deleteone()
{

        const inputbox = document.getElementById('inputBox');
        inputbox.value = inputbox.value.slice(0, -1);
    
    
}
function calculate(){
    var userInput= document.getElementById("inputBox").value;
    
        var result=eval(userInput);
        document.getElementById("inputBox").value=result;
    
    }
   