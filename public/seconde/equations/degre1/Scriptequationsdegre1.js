function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function nbreouoppose(a) {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}

function rienplus(a) {
    let rep;
    if (a<0) {rep='';} else {rep='+';}
    return rep;
}

function plusmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function rienmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function parenthesegd(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep = [pg,pd];
}

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

function fracsimp(num,denom) {
    let rep=[num,denom];
    if (num<0 && denom<0) {rep=[-num,-denom];}
    if (num>0 && denom<0) {rep=[num,-denom];}
    if (num<0 && denom>0) {rep=[-num,denom];}
    return rep; 
}

function coefdiff(a) {
    let rep = nbreouoppose(nbrealéa(1,10));
    while (a==rep) {rep = nbreouoppose(nbrealéa(1,10));}
    return rep;
}

function cas(denom) {
    let k;
    if (denom==1) {k=1;}
    else {k=0;}
    return k;
}

function test_réponse(a,b,c) {
    let test;
    let div=a/b;
    if (div==c) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}


let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
let solutions = document.getElementById('solutions');
let correction = document.getElementById('correction');
let recommencer = document.getElementById('recommencer');

let  a ,b ,c ,d ,sb ,sd ,oppc ,soppc ,oppb ,soppb ,coeffx ,coeffreels ,rep ,repsimp ,srepsimple ,k ,rep2;

function genererExercice() {

     a = nbreouoppose(nbrealéa(1,10));
     b = nbreouoppose(nbrealéa(1,10));
     c = coefdiff(a);
     d = nbreouoppose(nbrealéa(1,10));
     sb = rienplus(b);
     sd = rienplus(d);
     oppc = -c;
     soppc = rienplus(oppc);
     oppb = -b;
     soppb = rienplus(oppb);
     coeffx = a-c;
     coeffreels = d-b;
     rep = simplifierfraction(coeffreels,coeffx);
     repsimp = fracsimp(rep[0],rep[1]);
     srepsimple = rienmoins(coeffreels/coeffx);
     k = cas(rep[1]);
     rep2 = coeffreels/coeffx;
    
     enonce = document.getElementById('enonce');
     correctiond = document.getElementById('correctiond');
     correction = document.getElementById('correction');
     solutions = document.getElementById('solutions');
     solution = document.getElementById('solution');

    
    let listecorrections = [`$\\begin{array}{lrcl} & ${a}x${sb}${b} & = & ${c}x${sd}${d} \\\\
    \\iff & ${a}x ${soppc}${oppc}x & = & ${d}${soppb}${oppb} \\\\
    \\iff & ${coeffx}x & = & ${coeffreels} \\\\
    \\iff & x & = & \\dfrac{${coeffreels}}{${coeffx}}=${srepsimple}\\dfrac{${repsimp[0]}}{${repsimp[1]}}~\\text{(simplifiée)}
    \\end{array}$`,
    `$\\begin{array}{lrcl} & ${a}x${sb}${b} & = & ${c}x${sd}${d} \\\\
    \\iff & ${a}x ${soppc}${oppc}x & = & ${d}${soppb}${oppb} \\\\
    \\iff & ${coeffx}x & = & ${coeffreels} \\\\
    \\iff & x & = & \\dfrac{${coeffreels}}{${coeffx}}=${rep2}~\\text{(simplifiée)}
    \\end{array}$`];
    
    let listesolutions = [`$S=\\left\\{ ${srepsimple}\\dfrac{${repsimp[0]}}{${repsimp[1]}} \\right\\}$`,
    `$S=\\left\\{${rep2}\\right\\}$`];
    
    enonce.innerHTML = `Résoudre dans $\\mathbb{R}$ l'équation : $${a}x${sb}${b}=${c}x${sd}${d}$`;
    solution.innerHTML = listesolutions[k];
    correctiond.innerHTML = listecorrections[k];
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
