function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function signe(b) {
    let rep;
    if (b<0) {rep='';} else {rep='+';}
    return rep;
}

function plusmoins() {
    let choix = nbrealéa(1,2);
    let a = nbrealéa(1,10);
    let rep;
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}


let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');

/*let a,b,c,d,s1,s2,s3,b2,a3,choix;*/

function genererExercice() {

let a = plusmoins();
let b = plusmoins();
let c = plusmoins();
let d = plusmoins();
let s1 = signe(b);
let s2 = signe(c);
let s3 = signe(d);
let b2 = 2*b;
let a3 = 3*a;
let choix = nbrealéa(0,3);

let enonces =[`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=${d}$.<br> Calculer $f'(x)$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=${c}x ${s3} ${d}$.<br> Calculer $f'(x)$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=${b}x^2 ${s2} ${c}x ${s3} ${d}$.<br> Calculer $f'(x)$.`,
`Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x)=${a}x^3 ${s1} ${b}x^2 ${s2} ${c}x ${s3} ${d}$.<br> Calculer $f'(x)$.`];

let soluce = [`$f'(x)=0$`,`$f'(x)=${c}$`,`$f'(x)=${b2}x ${s2} ${c}$`,`$f'(x)=${a3}x^2 ${s1} ${b2}x ${s2} ${c}$`];

let corrections = [`$f(x)=${d}$.<br> $f'(x)=0$`,
`$f(x)=${c}x ${s3} ${d}$.<br>$f'(x)=${c}\\times 1 ${s3} ${d}\\times 0=${c}$`,
`$f(x)=${b}x^2 ${s2} ${c}x ${s3} ${d}$.<br>$f'(x)=${b}\\times 2x ${s2} ${c}\\times 1 ${s3} ${d}\\times 0= ${b2}x ${s2} ${c}$`,
`$f(x)=${a}x^3 ${s1} ${b}x^2 ${s2} ${c}x ${s3} ${d}$.<br>$f'(x)=${a}\\times 3x^2 ${s1} ${b}\\times 2x ${s2} ${c}\\times 1 ${s3} ${d} \\times 0=${a3}x^2 ${s1} ${b2}x ${s2} ${c}$`];

enonce.innerHTML = enonces[choix];
solution.innerHTML = soluce[choix];
correctiond.innerHTML = corrections[choix];

}

window.addEventListener('load', function () {
    genererExercice()
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

solutions.addEventListener('click', () => {
    solution.style.display = "block";
})

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
    correctiond.innerHTML;
})

recommencer.addEventListener('click', () => {
    genererExercice();
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

