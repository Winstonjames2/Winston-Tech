let button=document.getElementById("button_pc");
let components =document.getElementById("components");
let plain =document.getElementById("plain");
var iscaret_beta=true;
function caret_beta(){
    if(iscaret_beta==true){ 
        headings.style=headings2;
        nav_bar[0].style=nav_bar2;
        smallheading.style=smallheading2;
        go_to.style=go_to2;
        inputs.style=displayOff;
        caretup.style=displayOff
        caretdown.style="display:block";
        shopchoice.style="top:110px";
        plain.style="margin-top:-140px";
        button.style="top:110px";
        components.style="top:110px";
        iscaret_beta=false;
    }else{
        headings.style=headings1;
        nav_bar[0].style=nav_bar1;
        smallheading.style=smallheading1;
        go_to.style=go_to1;
        inputs.style=displayOff;
        caretup.style="display:flex";
        caretdown.style=displayOff
        shopchoice.style="top:''";
        plain.style="margin-top:-45px";
        components.style="top:200px";
        button.style="top:210px";
        iscaret_beta=true;
    };
};
var PCbutton=true;
function button_pc(){
    if(PCbutton==true){
        components.style=displayOff;
        plain.style="margin-left:160px;width:1200px";
        PCbutton=false;
        if(iscaret_beta==false){
            plain.style="margin-top:-140px;margin-left:160px;width:1200px";
        }
    }else{
        components.style=displayOn;
        plain.style="margin-left:280px;";
        PCbutton=true;
        if(iscaret_beta==false){
            plain.style="width:1100px;margin-top:-140px;";
            components.style="top:110px";
        }
    }
};
var displayON="display:flex";
var o_cpu =document.getElementById("object_cpu");
var o_gpu =document.getElementById("object_gpu");
var o_monitor =document.getElementById("object_monitor");
var o_ram =document.getElementById("object_ram");
var o_storage =document.getElementById("object_storage");
var o_cpufan =document.getElementById("object_cpufan");
var o_fan =document.getElementById("object_fan");
var o_case =document.getElementById("object_case");
var o_accessory =document.getElementById("object_accessory");
var o_motherboard =document.getElementById("object_motherboard");
var offAll =[o_cpu, o_gpu, o_monitor, o_ram,o_storage,o_cpufan,o_fan,o_case,o_accessory,o_motherboard];
function component_switch(event){
    for(var i=0;i<11;i++){
    offAll[i].style=displayOff;
        if(event==1){
            o_cpu.style=displayON;
        }else if(event==2){
            o_gpu.style=displayON;
        }else if(event==3){
            o_monitor.style=displayON;
        }else if(event==4){
            o_ram.style=displayON;
        }else if(event==5){
            o_storage.style=displayON;
        }else if(event==6){
            o_cpufan.style=displayON;
        }else if(event==7){
            o_fan.style=displayON;
        }else if(event==8){
            o_case.style=displayON;
        }else if(event==9){
            o_accessory.style=displayON;
        }else{
            o_motherboard.style=displayON;
        }
    }
};