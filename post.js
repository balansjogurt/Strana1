function Post()
{
    var comment = document.getElementById("PostComment").value;
    var ime = document.getElementById("PostName").value;

    var data = new Date();
    var den = data.getDate().toLocaleString();
    var mesec = data.getMonth().toLocaleString();
    var godina = data.getFullYear().toLocaleString();

    var datata = den + "/" + mesec + "/" + godina;
    var komentar = datata + " ---> " + ime + " : " + comment;

    document.getElementById("DisplayPost").innerHTML = komentar;
}

document.getElementById("PostButton").onclick = Post;