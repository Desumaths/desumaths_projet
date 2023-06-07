function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function plusmoins() {
    let choix;
    let result;
    choix = nbrealéa(1, 2);
    if (choix == 1) {
        result = '+';
    } else {
        result = '-';
    }
    return result;
}

function sign1() {
    let sig1;
    sig1 = plusmoins();
    if (sig1 == '+') {
        sig1 = '';
    } else {
        sig1 = '-';
    }
    return sig1;
}


function signe() {
    let a = nbrealéa(1,2);
    let sig;
    if (a==1) {sig='+';} else {sig='-';}
    return sig;
}

function signedeuxiemeparenthese(s1,s2) {
    let reponse;
    if (s1=='+' && s2=='') {reponse='+';}
    else if (s1=='+' && s2=='+') {reponse='+';}
    else if (s1=='-' && s2=='-') {reponse='+';}
    else {reponse='-';}
    return reponse;
}

let a = nbrealéa(1, 9);
let b = nbrealéa(1, 9);
let identité = nbrealéa(0,2);
let signe1 = sign1();
let acarré = a * a;
let ab2 = 2 * a * b;
let bcarré = b * b;
let sig1 = signedeuxiemeparenthese('+',signe1);
let sig2 = signedeuxiemeparenthese('-',signe1);
let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');


let listenonces = [`Développer : $\\boldsymbol{\\left(${signe1} ~ ${a}x + ${b}\\right)^2}$`,
    `Développer : $\\boldsymbol{\\left(${signe1} ~ ${a}x - ${b}\\right)^2}$`,
    `Développer : $\\boldsymbol{\\left(${a}x + ${b}\\right) \\left(${a}x - ${b}\\right)}$`
]

let listeSolutions = [`Solution : $${acarré}x^2 ${sig1} ${ab2}x + ${bcarré}$`,
    `Solution : $${acarré}x^2 ${sig2} ${ab2}x + ${bcarré}$`,
    `Solution : $${acarré}x^2 - ${bcarré}$`
]

let listeCorrections = [`$\\begin{array}{rcl} \\left(${signe1} ~ ${a}x + ${b}\\right)^2 & = & \\underbrace{(${signe1} ${a}x)^2}_{a^2} + \\underbrace{2\\times (${signe1} ${a}x) \\times ${b}}_{2ab} + \\underbrace{(${b})^2}_{b^2} \\\\
& = & ${acarré}x^2 ${sig1} ${ab2}x + ${bcarré} \\end{array}$`,
`$\\begin{array}{rcl} \\left(${signe1} ~ ${a}x - ${b}\\right)^2  & = & \\underbrace{(${signe1} ${a}x)^2}_{a^2} - \\underbrace{2\\times (${signe1} ${a}x) \\times ${b}}_{2ab} + \\underbrace{(${b})^2}_{b^2} \\\\
& = & ${acarré}x^2 ${sig2} ${ab2}x + ${bcarré} \\end{array}$`,
`$\\begin{array}{rcl} \\underbrace{\\left(${a}x + ${b}\\right)}_{a+b} \\underbrace{\\left(${a}x - ${b}\\right)}_{a-b} & = & \\underbrace{(${a}x)^2}_{a^2} - \\underbrace{${b}^2}_{b^2} \\\\
& = & ${acarré}x^2 - ${bcarré} \\end{array}$`
]

enonce.innerHTML = listenonces[identité];
solution.innerHTML = listeSolutions[identité];
correctiond.innerHTML = listeCorrections[identité];

enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
})

recommencer.addEventListener('click', () => {
    location.reload(true);
})

solutions.addEventListener('click', () => {
    solution.style.display = "block";
})

accueil.addEventListener('click', () => {
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSeconde.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/MenuSecondeDeveloppements.html";
})