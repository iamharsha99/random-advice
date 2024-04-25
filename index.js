async function getAdvice(){
    let url="https://api.adviceslip.com/advice";
    const response=await fetch(url);
    const data=response.json();
    return data;
}
function updateAdvice(){

    $("#spinner").show();
    $("h1").hide();

    getAdvice().then((data)=>{
        let advice=data.slip.advice;
        $("h1").html(advice);
    
    setTimeout(()=>{
        $("h1").show();
    $("#spinner").hide();
    },1500);
    
    
    });
    
}
$(document).ready(()=>{
   updateAdvice();
});

$("#refresh").click(()=>{
updateAdvice();
})
