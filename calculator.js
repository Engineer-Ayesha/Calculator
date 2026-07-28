let inputValue=document.querySelectorAll(".inputs");
let placeHolder=document.querySelector("#inputField");
let clearAll=document.querySelector("#clear");
let leftClear=document.querySelector("#leftClear");
let Equal=document.querySelector("#equal");
for(let i=0;i<inputValue.length;i++){
    inputValue[i].addEventListener("click",()=>{
        if(inputValue[i].innerText=="="){
            placeHolder.value=placeHolder.value;
        }else{
            placeHolder.value=placeHolder.value+inputValue[i].innerText;
        }   
    });
}
clearAll.addEventListener("click",()=>{
    placeHolder.value="";
});
leftClear.addEventListener("click",()=>{
    let newString=placeHolder.value.slice(0,placeHolder.value.length-1);
    placeHolder.value=newString;
});
Equal.addEventListener("click",()=>{
    if(placeHolder.value===""){
        placeHolder.value="Error"
        return;
    }
    let operatorsArray=["/","*","+","-","%"];
    let result=placeHolder.value;
    if(operatorsArray.includes(result[0])){
        placeHolder.value="Error";
        return;
    }
    if(operatorsArray.includes(result[result.length-1])){
        placeHolder.value="Error";
        return;
    }
    let flag=0;
    for(let i=0;i<result.length;i++){
        if(operatorsArray.includes(result[i]) && operatorsArray.includes(result[i+1])){
            flag=1;
        }
    }
    if(flag===0){
        placeHolder.value=eval(placeHolder.value);
    }else{
        placeHolder.value="Invalid";
        return;
    }
    
});
