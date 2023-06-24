function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function nbreouoppose(a) {
    let rep;
    let choix = nbrealéa(1, 2);
    if (choix == 1) { rep = a; } else { rep = -a; }
    return rep;
}

function rienplus(a) {
    let rep;
    if (a < 0) { rep = ''; } else { rep = '+'; }
    return rep;
}

function plusmoins(a) {
    let rep;
    if (a < 0) { rep = '-'; } else { rep = '+'; }
    return rep;
}

function rienmoins(a) {
    let rep;
    if (a < 0) { rep = '-'; } else { rep = ''; }
    return rep;
}

function parenthesegd(a) {
    let rep;
    let pg;
    let pd;
    if (a < 0) { pg = '('; } else { pg = ''; }
    if (a < 0) { pd = ')'; } else { pd = ''; }
    return rep = [pg, pd];
}

function avecVirgule(nombre) {
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}

function simplifierfraction(numerateur, denominateur) {
    var gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    };
    gcd = gcd(numerateur, denominateur);
    return [numerateur / gcd, denominateur / gcd];
}

function fracsimp(num, denom) {
    let rep = [num, denom];
    if (num < 0 && denom < 0) { rep = [-num, -denom]; }
    if (num > 0 && denom < 0) { rep = [num, -denom]; }
    if (num < 0 && denom > 0) { rep = [-num, denom]; }
    return rep;
}


function test_réponse(a, b, c) {
    let test;
    let div = a / b;
    if (div == c) { test = 'Bonne réponse !!'; } else { test = 'Mauvaise réponse'; }
    return test;
}


let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
let solutions = document.getElementById('solutions');
let correction = document.getElementById('correction');
let recommencer = document.getElementById('recommencer');

let a, b, sb, sol, c, oppb, soppb, droite, repcarre;

function genererExercice() {

    a = nbreouoppose(nbrealéa(2, 10));
    b = nbreouoppose(nbrealéa(1, 10));
    sb = rienplus(b);
    sol = nbrealéa(1, 10);
    c = a * sol ** 2 + b;
    oppb = -b;
    soppb = rienplus(oppb);
    droite = c - b;
    repcarre = sol ** 2;



    enonce.innerHTML = `Résoudre dans $\\mathbb{R}$ l'équation : $${a}x^2${sb}${b} = ${c}$`;
    solution.innerHTML = `$S=\\left\\{-${sol}~;~${sol} \\right\\}$`
    correctiond.innerHTML = `$\\begin{array}{rrcl} & ${a}x^2${sb}${b} & = & ${c} \\\\
    \\iff & ${a}x^2 & = & ${c}${soppb}${oppb}=${droite} \\\\
    \\iff & x^2 & = & \\dfrac{${droite}}{${a}}=${repcarre} \\\\
    \\iff & x  =\\sqrt{${repcarre}} =  ${sol} & \\text{ou} & x=-\\sqrt{${repcarre}}=-${sol}
    \\end{array}$`
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
