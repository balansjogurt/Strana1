//Mnogu e losh kodot. Ich ne e eleganten.
//Ama da ne bev mrza ke sednev da go popravam...
//Za kraj posredeno ke go napravam!
var button1 = document.getElementById("LikeButton1");
var button2 = document.getElementById("LikeButton2");
var button3 = document.getElementById("LikeButton3");
var button4 = document.getElementById("LikeButton4");
var button5 = document.getElementById("LikeButton5");
var button6 = document.getElementById("LikeButton6");

var show1 = document.getElementById("DisplayCount1");
var show2 = document.getElementById("DisplayCount2");
var show3 = document.getElementById("DisplayCount3");
var show4 = document.getElementById("DisplayCount4");
var show5 = document.getElementById("DisplayCount5");
var show6 = document.getElementById("DisplayCount6");

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;

function buttonCounter1()
{
    count1++;
    show1.innerHTML = count1;
}

function buttonCounter2()
{
    count2++;
    show2.innerHTML = count2;
}

function buttonCounter3()
{
    count3++;
    show3.innerHTML = count3;
}

function buttonCounter4()
{
    count4++;
    show4.innerHTML = count4;
}

function buttonCounter5()
{
    count5++;
    show5.innerHTML = count5;
}

function buttonCounter6()
{
    count6++;
    show6.innerHTML = count6;
}

button1.onclick = buttonCounter1;
button2.onclick = buttonCounter2;
button3.onclick = buttonCounter3;
button4.onclick = buttonCounter4;
button5.onclick = buttonCounter5;
button6.onclick = buttonCounter6;