function Post()
{   
    var comment = document.getElementById("PostComment").value;
    var ime = document.getElementById("PostName").value;

    var data = new Date();
    var den = data.getDate().toLocaleString();
    var mesec = data.getMonth().toLocaleString();
    var godina = data.getFullYear().toLocaleString();

    var datata = den + "/" + mesec + "/" + godina;
    var komentar = datata + " : " + ime + " : " + comment;

    if(ime != '' && komentar != '')
    {
        var par = document.createElement("P");
        par.innerHTML = komentar;
        var tekst = document.createElement("div");
        tekst.appendChild(par);
        document.getElementById("DisplayPost").appendChild(par);
    }
}

document.getElementById("PostButton").onclick = Post;