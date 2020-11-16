//Mnogu e losh kodot. Ich ne e eleganten.
//Ama da ne bev mrza ke sednev da go popravam...
//Za kraj posredeno ke go napravam!

var paste1 = document.getElementById("PasteComment1");
var paste2 = document.getElementById("PasteComment2");
var paste3 = document.getElementById("PasteComment3");
var paste4 = document.getElementById("PasteComment4");
var paste5 = document.getElementById("PasteComment5");
var paste6 = document.getElementById("PasteComment6");

var display1 = document.getElementById("DisplayComment1");
var display2 = document.getElementById("DisplayComment2");
var display3 = document.getElementById("DisplayComment3");
var display4 = document.getElementById("DisplayComment4");
var display5 = document.getElementById("DisplayComment5");
var display6 = document.getElementById("DisplayComment6");

function SubmitComment1()
{
    var x = document.getElementById("Comment1");
    display1.innerHTML = x.value;
}

function SubmitComment2()
{
    var x = document.getElementById("Comment2");
    display2.innerHTML = x.value;
}

function SubmitComment3()
{
    var x = document.getElementById("Comment3");
    display3.innerHTML = x.value;
}

function SubmitComment4()
{
    var x = document.getElementById("Comment4");
    display4.innerHTML = x.value;
}

function SubmitComment5()
{
    var x = document.getElementById("Comment5");
    display5.innerHTML = x.value;
}

function SubmitComment6()
{
    var x = document.getElementById("Comment6");
    display6.innerHTML = x.value;
}

paste1.onclick = SubmitComment1;
paste2.onclick = SubmitComment2;
paste3.onclick = SubmitComment3;
paste4.onclick = SubmitComment4;
paste5.onclick = SubmitComment5;
paste6.onclick = SubmitComment6;