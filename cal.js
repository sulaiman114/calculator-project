function dis(val){
    document.getElementById("display").value=document.getElementById("display").value+val;

}
function clean(){
    document.getElementById("display").value="";
}
function tot(){
    result=eval(document.getElementById("display").value);
    document.getElementById("display").value=result;

}