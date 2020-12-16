window.onbeforeunload = function()
{
    localStorage.setItem("c1", $('#DisplayCount1').text());
    localStorage.setItem("c2", $('#DisplayCount2').text());
    localStorage.setItem("c3", $('#DisplayCount3').text());
    localStorage.setItem("c4", $('#DisplayCount4').text());
    localStorage.setItem("c5", $('#DisplayCount5').text());
    localStorage.setItem("c6", $('#DisplayCount6').text());

    localStorage.setItem("k1", $('#DisplayComment1').html());
    localStorage.setItem("k2", $('#DisplayComment2').html());
    localStorage.setItem("k3", $('#DisplayComment3').html());
    localStorage.setItem("k4", $('#DisplayComment4').html());
    localStorage.setItem("k5", $('#DisplayComment5').html());
    localStorage.setItem("k6", $('#DisplayComment6').html());

    localStorage.setItem("dp", $('#DisplayPost').html());
}

window.onload = function()
{
    var c1=localStorage.getItem("c1");
    var c2=localStorage.getItem("c2");
    var c3=localStorage.getItem("c3");
    var c4=localStorage.getItem("c4");
    var c5=localStorage.getItem("c5");
    var c6=localStorage.getItem("c6");

    var k1=localStorage.getItem("k1");
    var k2=localStorage.getItem("k2");
    var k3=localStorage.getItem("k3");
    var k4=localStorage.getItem("k4");
    var k5=localStorage.getItem("k5");
    var k6=localStorage.getItem("k6");

    var dp=localStorage.getItem("dp");

    if(c1 != null) $('#DisplayCount1').text(`${c1}`);
    if(c2 != null) $('#DisplayCount2').text(`${c2}`);
    if(c3 != null) $('#DisplayCount3').text(`${c3}`);
    if(c4 != null) $('#DisplayCount4').text(`${c4}`);
    if(c5 != null) $('#DisplayCount5').text(`${c5}`);
    if(c6 != null) $('#DisplayCount6').text(`${c6}`);

    if(k1 != null) $('#DisplayComment1').html(`${k1}`);
    if(k2 != null) $('#DisplayComment2').html(`${k2}`);
    if(k3 != null) $('#DisplayComment3').html(`${k3}`);
    if(k4 != null) $('#DisplayComment4').html(`${k4}`);
    if(k5 != null) $('#DisplayComment5').html(`${k5}`);
    if(k6 != null) $('#DisplayComment6').html(`${k6}`);
    
    if(dp != null) $('#DisplayPost').html(`${dp}`);
}