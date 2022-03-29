var heart =false;
function heart_red(k){
    if(heart ==false){
        document.getElementById("h"+k).innerHTML="<i class='fa-solid fa-heart' title='Remove from Wish List'></i>"
        heart=true;
    }else{
        document.getElementById("h"+k).innerHTML="<i class='fa-regular fa-heart' title='Add to Wish List'></i>"
        heart=false;
    }
}
let headings2="border-bottom:none";let headings1="border-bottom:''";
let nav_bar2="display: flex;flex-direction: row;";let nav_bar1="display: '';flex-direction: '';";
let smallheading2="display:none";let smallheading1="display:''";
let go_to2="margin:0;margin-left:50px;padding-top:30px";let go_to1="margin:'';margin-left:'';padding-top:''";
let displayOff="display:none";let displayOn="display:''";
var iscaret =true;
let headings =document.getElementById("headings");
let nav_bar=document.getElementsByClassName("nav_bar");
let smallheading=document.getElementById("smallheading");
let go_to=document.getElementById("go_to");
let inputs=document.getElementById("inputs");
let caretup=document.getElementById("caretup");
let caretdown=document.getElementById("caretdown");
var shopchoice=document.getElementById("shop_choice");
//----------------------//
var ps_pl=document.getElementById("console_plain");
function caret(){
    if(iscaret==true){
        headings.style=headings2;
        nav_bar[0].style=nav_bar2;
        smallheading.style=smallheading2;
        go_to.style=go_to2;
        inputs.style=displayOff;
        caretup.style=displayOff
        caretdown.style="display:block";
        shopchoice.style="top:110px";
        ps_pl.style="margin-top:-140px";
        iscaret=false;
    }else{
        headings.style=headings1;
        nav_bar[0].style=nav_bar1;
        smallheading.style=smallheading1;
        go_to.style=go_to1;
        inputs.style=displayOff;
        caretup.style="display:flex";
        caretdown.style=displayOff
        shopchoice.style="top:''";
        ps_pl.style="margin-top:-45px";
        iscaret=true;
    }
};
var search_att=true;
function search(){
    if(search_att==true){
        inputs.style="display:inline;width:400px";
        search_att=false;
    }else{
        inputs.style.display="none";
        search_att=true;
    }
};
function searching() {
    let input = document.getElementById('input').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('objects');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
searching()
