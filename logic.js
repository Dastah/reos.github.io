
/////////////////////////////////////////

// background-color: rgb(59 0 175); 

/////////////////////////////////////////

const TITLE = document.getElementById("title");
const IMAGES = document.getElementById("images");

setTimeout(function () {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("works").classList.remove("hidden");
}, 2000);

function openAll(evt) {
    document.getElementById("works").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
    if (evt.target.id === "lds") { lds(); };
    if (evt.target.id === "microbio") { microbio(); };
    if (evt.target.id === "awakate") { awakate(); };
    if (evt.target.id === "mama") { mama(); };
    if (evt.target.id === "across") { across(); };
    if (evt.target.id === "anser") { anser(); };
    if (evt.target.id === "lpdw") { lpdw(); };
    if (evt.target.id === "montserap") { montserap(); };
    if (evt.target.id === "rie") { rie(); };
    if (evt.target.id === "levico") { levico(); };
    if (evt.target.id === "exodus") { exodus(); };
    if (evt.target.id === "ciniko") { ciniko(); };
    if (evt.target.id === "picapiedra") { picapiedra(); };
    if (evt.target.id === "hardcore") { hardcore(); };
    if (evt.target.id === "autobiografia") { autobiografia(); };
    if (evt.target.id === "jazzwoman") { jazzwoman(); };
    window.scrollTo(0, 0);
}

function back() {
    TITLE.innerHTML = ""
    IMAGES.innerHTML = "";
    document.getElementById("works").classList.remove("hidden");
    document.getElementById("content").classList.add("hidden");
    window.scrollTo(0, 0);
}

function goContact(){
    window.scrollTo(0,document.body.scrollHeight);
}

function goToTop(){
    window.scrollTo(0,0);
}

/////////////////// INSERTS ///////////////////

function lds() {
    TITLE.innerHTML = "Lágrimas de Sangre"
    IMAGES.innerHTML = "<img class='img2' src='LDSPIRAL.jpg'><img class='img2' src='LDSPIRAL2.jpg'><img class='img2' src='LDSPIRAL3.jpg'><img class='img2' src='DE TRANQUIS2.jpg'><img class='img2' src='DE TRANQUIS3.jpg'><img class='img2' src='DE TRANQUIS4.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function microbio() {
    TITLE.innerHTML = "Microbio"
    IMAGES.innerHTML = "<img class='img2' src='MICROBIO.jpg'><img class='img2' src='MICROBIO2.jpg'><img class='img2' src='MICROBIO3.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function awakate() {
    TITLE.innerHTML = "Awakate La Salsa"
    IMAGES.innerHTML = "<img class='img2' src='AWAKATE LA SALSA.jpg'><img class='img2' src='AWAKATE LA SALSA2.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function mama() {
    TITLE.innerHTML = "Mama Dousha"
    IMAGES.innerHTML = "<img class='img2' src='MAMA DOUSHA.jpg'><img class='img2' src='MAMA DOUSHA2.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function across() {
    TITLE.innerHTML = "Acros Massacre"
    IMAGES.innerHTML = "<img class='img2' src='ACROS MASSACRE.jpg'><img class='img2' src='ACROS MASSACRE2.jpg'><img class='img2' src='ACROS MASSACRE3.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function anser() {
    TITLE.innerHTML = "Anser Exilio"
    IMAGES.innerHTML = "<img class='img2' src='ANSER EXILIO.jpg'><img class='img2' src='ANSER EXILIO2.jpg'><img class='img2' src='ANSER EXILIO3.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function lpdw() {
    TITLE.innerHTML = "LPDW"
    IMAGES.innerHTML = "<img class='img2' src='LPDW.jpg'><img class='img2' src='LPDW2.jpg'><img class='img2' src='LPDW3.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function montserap() {
    TITLE.innerHTML = "MONTSERRAP"
    IMAGES.innerHTML = "<img class='img2' src='MONTSERRAP.jpg'><img class='img2' src='MONTSERRAP2.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function rie() {
    TITLE.innerHTML = "Rie Abril"
    IMAGES.innerHTML = "<img class='img2' src='RIE ABRIL.jpg'><img class='img2' src='RIE ABRIL2.jpg'><img class='img2' src='RIE ABRIL3.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function levico() {
    TITLE.innerHTML = "Levico Tonto Listo"
    IMAGES.innerHTML = "<img class='img2' src='LEVICO TONTO LISTO.jpg'><img class='img2' src='LEVICO TONTO LISTO2.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function exodus() {
    TITLE.innerHTML = "Exodus Culture"
    IMAGES.innerHTML = "<img class='img2' src='EXODUS CULTURE.jpg'><img class='img2' src='EXODUS CULTURE2.jpg'><img class='img2' src='EXODUS CULTURE3.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function ciniko() {
    TITLE.innerHTML = "Ciniko La Rabia del Pueblo"
    IMAGES.innerHTML = "<img class='img2' src='CINIKO LA RABIA DEL PUEBLO.jpg'><img class='img2' src='CINIKO LA RABIA DEL PUEBLO2.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function picapiedra() {
    TITLE.innerHTML = "Los Picapiedra"
    IMAGES.innerHTML = "<img class='img2' src='LOS PICAPIEDRA.jpg'><img class='img2' src='LOS PICAPIEDRA2.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function hardcore() {
    TITLE.innerHTML = "Hardcore"
    IMAGES.innerHTML = "<img class='img2' src='HARDCORE.jpg'><img class='img2' src='HARDCORE2.jpg'><img class='img2' src='HARDCORE3.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function autobiografia() {
    TITLE.innerHTML = "Ciniko Autobiografía de un Artista Fracasado"
    IMAGES.innerHTML = "<img class='img2' src='AUTOBIOGRAFIA.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}

function jazzwoman() {
    TITLE.innerHTML = "Jazzwoman Cuervos"
    IMAGES.innerHTML = "<img class='img2' src='JAZZWOMAN CUERVOS.jpg'><img class='img2' src='JAZZWOMAN CUERVOS2.jpg'><img class='img2' src='JAZZWOMAN CUERVOS3.jpg'><img class='img2' src='JAZZWOMAN CUERVOS4.jpg'><div class='goToTop' onclick='goToTop()'>▲</div>";
}
