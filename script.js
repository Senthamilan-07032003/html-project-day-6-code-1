var random=Math.floor(Math.random()*100)+1;
var attempt=0;
document.getElementById('btn').addEventListener('click',function(){
    attempt++;
    var guess=parseInt(document.getElementById('guessinput').value);
    if(guess===random){
        display("Hay! Joly"+attempt+"attempt la vanthuruchu");
        document.getElementById('btn').disabled=true;
    }
    else if(guess<random){
        display("Vera ethachum pudusa try pannu");
    }
    else if(guess>random){
        display("Yaarraa Neengallam Enga irunthu da kelambi vanthu irukinga");
    }
});
function display(message){
    document.getElementById("msg").textContent=message;}