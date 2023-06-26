function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function signeinitial() {
    let a = nbrealéa(1,2);
    let signe;
    if (a==1) {signe='';} else {signe='-';}
    return signe;
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

function sommex(a,b,s1,s2) {
    let somx;
    if (s1=='' && s2=='+') {somx=a+b;}
    else if (s1=='' && s2=='-') {somx=a-b;}
    else if (s1=='+' && s2=='-') {somx=a-b;}
    else if (s1=='+' && s2=='+') {somx=a+b;}
    else if (s1=='-' && s2=='+') {somx=-a+b;}
    else {somx=-a-b;}
    return somx;
}

function sommenombres(a,b,s1,s2) {
    let somx;
    if (s1=='+' && s2=='+') {somx=a+b;}
    else if (s1=='+' && s2=='-') {somx=a-b;}
    else if (s1=='-' && s2=='+') {somx=-a+b;}
    else {somx=-a-b;}
    if (somx<0) {somx=-somx;}
    return somx;
}

function signefinal(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function changesigne(a) {
    let rep;
    if (a=='+') {rep='-';} else {rep='';}
    return rep;
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

function nbresigne(a,s) {
    let rep;
    if (s=='-') {rep=-a;} else {rep=a;}
    return rep;
}

function simply(num,denom) {
    let rep;
    if (denom==1) {rep='='+num;} else {rep='';}
    return rep;
}

function impo(denom) {
    let rep;
    if (denom==0) {rep='impossible';} else {rep='';}
    return rep;
}

function cas(a) {
    let k;
    if (a==0) {k=1;} else {k=0;}
    return k;
}

function signefrac(s1,s2) {
    let rep;
    if (s1=='' & s2=='') {rep='';}
    if (s1=='' & s2=='-') {rep='-';}
    if (s1=='-' & s2=='') {rep='-';}
    if (s1=='-' & s2=='-') {rep='';}
    return rep;
}

function rienmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

function casdenom(denom1,denom2) {
    let rep;
    if (denom2==0 && denom1!=1) {rep=1;}
    if (denom1==1) {rep=2;}
    if (denom2==1) {rep=3;}
    if (denom1==1 && denom2==1) {rep=4;}
    if (denom1 !=1 && denom2 !=1 && denom2 !=0) {rep=0;}
    if (denom1==1 && denom2==0) {rep=5;}
    return rep;
}

function as(a,s) {
    let rep;
    if (s=='-') {rep=-a;} else {rep=a;}
    return rep;
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

let  a ,b ,c ,d ,e ,f ,signe1 ,signe2 ,signe3 ,signe4 ,signe5 ,signe6 ,signe7 ,signe8 ,signe9 ,somx ,somreels ,signe10 ,
s2 ,s10 ,bsigne ,asigne ,somreelsigne ,rep1 ,rep2 ,ep1simp ,rep2simp ,imporep1 ,imporep2 ,sfrac1 ,
sfrac2 ,abssomreels ,abssomx ,frac1simp ,frac2simp ,a1 ,b1 ,somreels1 ,repsimp1 ,repsimp2 ,k; 

function genererExercice() {

     a = nbrealéa(1,10);
     b = nbrealéa(1,10);
     c = nbrealéa(1,10);
     d = nbrealéa(1,10);
     e = nbrealéa(1,10);
     f = nbrealéa(1,10);
     signe1 = signeinitial();
     signe2 = signe();
     signe3 = signeinitial();
     signe4 = signe();
     signe5 = signe();
     signe6 = signeinitial();
     signe7 = signe();
     signe8 = signedeuxiemeparenthese(signe5,signe6);
     signe9 = signedeuxiemeparenthese(signe5,signe7);
     somx = sommex(c,e,signe3,signe8);
     somreels = sommenombres(d,f,signe4,signe9);
     signe10 = signefinal(sommex(d,f,signe4,signe9));
     s2 = changesigne(signe2);
     s10 = changesigne(signe10);
     bsigne = nbresigne(b,s2);
     asigne = nbresigne(a,signe1);
     somreelsigne = nbresigne(somreels,s10);
     rep1 = simplifierfraction(bsigne,asigne);
     rep2 = simplifierfraction(somreelsigne,somx);
     rep1simp = simply(rep1[0],rep1[1]);
     rep2simp = simply(rep2[0],rep2[1]);
     imporep1 = impo(rep1[1]);
     imporep2 = impo(rep2[1]);
     sfrac1 = signefrac(s2,signe1);
     sfrac2 = signefrac(s10,rienmoins(somx));
     abssomreels = valabs(somreels);
     abssomx = valabs(somx);
     frac1simp = simplifierfraction(b,a);
     frac2simp = simplifierfraction(abssomreels,abssomx);
     a1 = as(a,signe1);
     b1 = as(b,signe2);
     somreels1 = as(somreels,s10);
     repsimp1 = -b1/a1;
     repsimp2 = somreels1/somx;
     k = casdenom(frac1simp[1],frac2simp[1]);    
  
    
    let soluce =[`$S=\\left\\{${sfrac1}\\dfrac{${frac1simp[0]}}{${frac1simp[1]}}~;~${sfrac2} \\dfrac{${frac2simp[0]}}{${frac2simp[1]}}\\right\\}$`,
    `$S=\\left\\{${sfrac1}\\dfrac{${frac1simp[0]}}{${frac1simp[1]}}\\right\\}$`,
    `$S=\\left\\{${repsimp1}~;~${sfrac2} \\dfrac{${frac2simp[0]}}{${frac2simp[1]}}\\right\\}$`,
    `$S=\\left\\{${sfrac1}\\dfrac{${frac1simp[0]}}{${frac1simp[1]}}~;~${repsimp2}\\right\\}$`,
    `$S=\\left\\{${repsimp1}~;~${repsimp2}\\right\\}$`,
    `$S=\\left\\{${repsimp1}\\right\\}$`];
    
    enonce.innerHTML = `Résoudre dans $\\mathbb{R}$ l'équation : $(${signe1} ${a} x ${signe2} ${b}) (${signe3} ${c} x ${signe4} ${d}) ${signe5} (${signe1} ${a} x ${signe2} ${b}) (${signe6} ${e} x ${signe7} ${f}) = 0$`;
    solution.innerHTML = soluce[k];
    correctiond.innerHTML = `$\\underbrace{(${signe1} ${a} x ${signe2} ${b})}_{facteur~commun} (${signe3} ${c} x ${signe4} ${d}) ${signe5} \\underbrace{(${signe1} ${a} x ${signe2} ${b})}_{facteur~commun} (${signe6} ${e} x ${signe7} ${f}) = 0$<br>
    $\\iff\\underbrace{(${signe1} ${a} x ${signe2} ${b})}_{facteur~commun} [(${signe3} ${c} x ${signe4} ${d}) ${signe5} (${signe6} ${e} x ${signe7} ${f})]=0$ <br>
    $\\iff (${signe1} ${a} x ${signe2} ${b}) (${signe3} ${c} x ${signe4} ${d} ${signe8} ${e} x ${signe9} ${f})=0$ </br>
    $\\iff (${signe1} ${a} x ${signe2} ${b}) (${somx} x ${signe10} ${somreels})=0$<br>
    $\\iff ${signe1} ${a} x ${signe2} ${b}=0$ ou $${somx} x ${signe10} ${somreels}=0$<br>
    $\\iff ${signe1} ${a}x=${s2} ${b} $ ou $${somx}x = ${s10} ${somreels} $<br>
    $\\iff x=\\dfrac{${s2} ${b}}{${signe1} ${a}}=${sfrac1}\\dfrac{${frac1simp[0]}}{${frac1simp[1]}}$ ou $x=\\dfrac{${s10} ${somreels}}{${somx}}=${sfrac2} \\dfrac{${frac2simp[0]}}{${frac2simp[1]}} \\hspace{5mm} $ ${imporep2} `;
    
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
