function Avaliar(star) {

    var url = window.location;
    url = url.toString();
    url = url.split("index.html");
    url = url[0];

    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    // var avaliacao = 0;

    if (star == 5){        
    if (s5 == url + "img/star0.png") {
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star1.png";
        document.getElementById("s3").src = "img/star1.png";
        document.getElementById("s4").src = "img/star1.png";
        document.getElementById("s5").src = "img/star1.png";
        // avaliacao = 5;
    } else {
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star1.png";
        document.getElementById("s3").src = "img/star1.png";
        document.getElementById("s4").src = "img/star1.png";
        document.getElementById("s5").src = "img/star0.png";
        // avaliacao = 4;
    }}
    
    //star 4
    if (star == 4){  
    if (s4 == url + "img/star0.png") {
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star1.png";
        document.getElementById("s3").src = "img/star1.png";
        document.getElementById("s4").src = "img/star1.png";
        document.getElementById("s5").src = "img/star0.png";
        avaliacao = 4;
    } else {
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star1.png";
        document.getElementById("s3").src = "img/star1.png";
        document.getElementById("s4").src = "img/star0.png";
        document.getElementById("s5").src = "img/star0.png";
        // avaliacao = 3;
    }}

    //star 3
    if (star == 3){  
    if (s3 == url + "img/star0.png") {
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star1.png";
        document.getElementById("s3").src = "img/star1.png";
        document.getElementById("s4").src = "img/star0.png";
        document.getElementById("s5").src = "img/star0.png";
        avaliacao = 3;
    } else {
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star1.png";
        document.getElementById("s3").src = "img/star0.png";
        document.getElementById("s4").src = "img/star0.png";
        document.getElementById("s5").src = "img/star0.png";
        // avaliacao = 2;
    }}
    
    //star 2
    if (star == 2){  
    if (s2 == url + "img/star0.png") {
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star1.png";
        document.getElementById("s3").src = "img/star0.png";
        document.getElementById("s4").src = "img/star0.png";
        document.getElementById("s5").src = "img/star0.png";
        avaliacao = 2;
    } else {
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star0.png";
        document.getElementById("s3").src = "img/star0.png";
        document.getElementById("s4").src = "img/star0.png";
        document.getElementById("s5").src = "img/star0.png";
        // avaliacao = 1;
    }}
    
    //star 1
    if (star == 1){  
    if (s1 == url + "img/star0.png") {
        document.getElementById("s1").src = "img/star1.png";
        document.getElementById("s2").src = "img/star0.png";
        document.getElementById("s3").src = "img/star0.png";
        document.getElementById("s4").src = "img/star0.png";
        document.getElementById("s5").src = "img/star0.png";
        // avaliacao = 1;
    } else {
        document.getElementById("s1").src = "img/star0.png";
        document.getElementById("s2").src = "img/star0.png";
        document.getElementById("s3").src = "img/star0.png";
        document.getElementById("s4").src = "img/star0.png";
        document.getElementById("s5").src = "img/star0.png";
        // avaliacao = 0;
    }}    
    
    document.getElementById('rating').innerHTML = avaliacao;
}

//2-Classificação
function Avaliar2(star){
    var url = window.location;
    url = url.toString();
    url = url.split("index.html");
    url = url[0];
    // Segunda
    var x1 = document.getElementById("x1").src;
    var x2 = document.getElementById("x2").src;
    var x3 = document.getElementById("x3").src;
    var x4 = document.getElementById("x4").src;
    var x5 = document.getElementById("x5").src;
    // var avaliacao = 0;

    if (star == 5){        
    if (x5 == url + "img/star0.png") {
        document.getElementById("x1").src = "img/star1.png";
        document.getElementById("x2").src = "img/star1.png";
        document.getElementById("x3").src = "img/star1.png";
        document.getElementById("x4").src = "img/star1.png";
        document.getElementById("x5").src = "img/star1.png";
        // avaliacao = 5;
    } else {
        document.getElementById("x1").src = "img/star1.png";
        document.getElementById("x2").src = "img/star1.png";
        document.getElementById("x3").src = "img/star1.png";
        document.getElementById("x4").src = "img/star1.png";
        document.getElementById("x5").src = "img/star0.png";
        // avaliacao = 4;
    }}

    //star 4
    if (star == 4){  
    if (x4 == url + "img/star0.png") {
        document.getElementById("x1").src = "img/star1.png";
        document.getElementById("x2").src = "img/star1.png";
        document.getElementById("x3").src = "img/star1.png";
        document.getElementById("x4").src = "img/star1.png";
        document.getElementById("x5").src = "img/star0.png";
        avaliacao = 4;
    } else {
        document.getElementById("x1").src = "img/star1.png";
        document.getElementById("x2").src = "img/star1.png";
        document.getElementById("x3").src = "img/star1.png";
        document.getElementById("x4").src = "img/star0.png";
        document.getElementById("x5").src = "img/star0.png";
        // avaliacao = 3;
    }}

    //star 3
    if (star == 3){  
    if (x3 == url + "img/star0.png") {
        document.getElementById("x1").src = "img/star1.png";
        document.getElementById("x2").src = "img/star1.png";
        document.getElementById("x3").src = "img/star1.png";
        document.getElementById("x4").src = "img/star0.png";
        document.getElementById("x5").src = "img/star0.png";
        avaliacao = 3;
    } else {
        document.getElementById("x1").src = "img/star1.png";
        document.getElementById("x2").src = "img/star1.png";
        document.getElementById("x3").src = "img/star0.png";
        document.getElementById("x4").src = "img/star0.png";
        document.getElementById("x5").src = "img/star0.png";
        // avaliacao = 2;
    }}

    //star 2
    if (star == 2){  
    if (x2 == url + "img/star0.png") {
        document.getElementById("x1").src = "img/star1.png";
        document.getElementById("x2").src = "img/star1.png";
        document.getElementById("x3").src = "img/star0.png";
        document.getElementById("x4").src = "img/star0.png";
        document.getElementById("x5").src = "img/star0.png";
        avaliacao = 2;
    } else {
        document.getElementById("x1").src = "img/star1.png";
        document.getElementById("x2").src = "img/star0.png";
        document.getElementById("x3").src = "img/star0.png";
        document.getElementById("x4").src = "img/star0.png";
        document.getElementById("x5").src = "img/star0.png";
        // avaliacao = 1;
    }}

    //star 1
    if (star == 1){  
    if (x1 == url + "img/star0.png") {
        document.getElementById("x1").src = "img/star1.png";
        document.getElementById("x2").src = "img/star0.png";
        document.getElementById("x3").src = "img/star0.png";
        document.getElementById("x4").src = "img/star0.png";
        document.getElementById("x5").src = "img/star0.png";
        // avaliacao = 1;
    } else {
        document.getElementById("x1").src = "img/star0.png";
        document.getElementById("x2").src = "img/star0.png";
        document.getElementById("x3").src = "img/star0.png";
        document.getElementById("x4").src = "img/star0.png";
        document.getElementById("s5").src = "img/star0.png";
        // avaliacao = 0;
    }}

    document.getElementById('rating').innerHTML = avaliacao;
}

//3-Classificação
function Avaliar3(star){
    var url = window.location;
    url = url.toString();
    url = url.split("index.html");
    url = url[0];
    // Segunda
    var c1 = document.getElementById("c1").src;
    var c2 = document.getElementById("c2").src;
    var c3 = document.getElementById("c3").src;
    var c4 = document.getElementById("c4").src;
    var c5 = document.getElementById("c5").src;
    // var avaliacao = 0;

    if (star == 5){        
    if (c5 == url + "img/star0.png") {
        document.getElementById("c1").src = "img/star1.png";
        document.getElementById("c2").src = "img/star1.png";
        document.getElementById("c3").src = "img/star1.png";
        document.getElementById("c4").src = "img/star1.png";
        document.getElementById("c5").src = "img/star1.png";
        // avaliacao = 5;
    } else {
        document.getElementById("c1").src = "img/star1.png";
        document.getElementById("c2").src = "img/star1.png";
        document.getElementById("c3").src = "img/star1.png";
        document.getElementById("c4").src = "img/star1.png";
        document.getElementById("c5").src = "img/star0.png";
        // avaliacao = 4;
    }}

    //star 4
    if (star == 4){  
    if (c4 == url + "img/star0.png") {
        document.getElementById("c1").src = "img/star1.png";
        document.getElementById("c2").src = "img/star1.png";
        document.getElementById("c3").src = "img/star1.png";
        document.getElementById("c4").src = "img/star1.png";
        document.getElementById("c5").src = "img/star0.png";
        avaliacao = 4;
    } else {
        document.getElementById("c1").src = "img/star1.png";
        document.getElementById("c2").src = "img/star1.png";
        document.getElementById("c3").src = "img/star1.png";
        document.getElementById("c4").src = "img/star0.png";
        document.getElementById("c5").src = "img/star0.png";
        // avaliacao = 3;
    }}

    //star 3
    if (star == 3){  
    if (c3 == url + "img/star0.png") {
        document.getElementById("c1").src = "img/star1.png";
        document.getElementById("c2").src = "img/star1.png";
        document.getElementById("c3").src = "img/star1.png";
        document.getElementById("c4").src = "img/star0.png";
        document.getElementById("c5").src = "img/star0.png";
        avaliacao = 3;
    } else {
        document.getElementById("c1").src = "img/star1.png";
        document.getElementById("c2").src = "img/star1.png";
        document.getElementById("c3").src = "img/star0.png";
        document.getElementById("c4").src = "img/star0.png";
        document.getElementById("c5").src = "img/star0.png";
        // avaliacao = 2;
    }}

    //star 2
    if (star == 2){  
    if (c2 == url + "img/star0.png") {
        document.getElementById("c1").src = "img/star1.png";
        document.getElementById("c2").src = "img/star1.png";
        document.getElementById("c3").src = "img/star0.png";
        document.getElementById("c4").src = "img/star0.png";
        document.getElementById("c5").src = "img/star0.png";
        avaliacao = 2;
    } else {
        document.getElementById("c1").src = "img/star1.png";
        document.getElementById("c2").src = "img/star0.png";
        document.getElementById("c3").src = "img/star0.png";
        document.getElementById("c4").src = "img/star0.png";
        document.getElementById("c5").src = "img/star0.png";
        // avaliacao = 1;
    }}

    //star 1
    if (star == 1){  
    if (c1 == url + "img/star0.png") {
        document.getElementById("c1").src = "img/star1.png";
        document.getElementById("c2").src = "img/star0.png";
        document.getElementById("c3").src = "img/star0.png";
        document.getElementById("c4").src = "img/star0.png";
        document.getElementById("c5").src = "img/star0.png";
        // avaliacao = 1;
    } else {
        document.getElementById("c1").src = "img/star0.png";
        document.getElementById("c2").src = "img/star0.png";
        document.getElementById("c3").src = "img/star0.png";
        document.getElementById("c4").src = "img/star0.png";
        document.getElementById("c5").src = "img/star0.png";
        // avaliacao = 0;
    }}

    document.getElementById('rating').innerHTML = avaliacao;
}