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

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}

function simply(num,denom) {
    let rep;
    if (denom==1) {rep=`=${num}`;} else {rep='';}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

function det(a,b,c) {
    let d = nbrealéa(-15,15);
    let rep = d;
    let determinant = a*d-b*c;
    while (determinant == 0) {d = nbrealéa(-15,15);rep = d;determinant = a*c-b*d;}
    return rep;
}

let xu,oppxu,yu,zu,xv,sxv,oppxv,soppxv,yv,syv,zv,szv,a,pa,b,pb,sb,xw,yw,zw,zwnc,a1,b1,sb1,c1,a2,b2,sb2,c2,b1b2,c1c2,numa,zua,zvb,szvb,
xa,ya,za,xb,yb,zb,xc,yc,zc,xd,yd,zd,zdnc,k;


function genererExercice() {

let xu = nbrealéa(1,15);
let oppxu = -xu;
let yu = nbrealéa(1,15);
let zu = nbrealéa(1,15);
let xv = nbrealéa(-15,15);
let sxv = rienplus(xv);
let oppxv = -xv;
let soppxv = rienplus(oppxv);
let yv = det(xu,xv,yu);
let syv = rienplus(yv);
let zv = nbrealéa(-15,15);
let szv = rienplus(zv);
let a = nbreouoppose(nbrealéa(1,15));
let pa = parenthesegd(a);
let b = nbreouoppose(nbrealéa(1,15));
let pb = parenthesegd(b);
let sb = rienplus(b);
let xw = a*xu+b*xv;
let yw = a*yu+b*yv;
let zw = a*zu+b*zv;
let zwnc = zw+nbreouoppose(nbrealéa(1,15));
let a1 = xu*yu;
let b1 = xv*yu;
let sb1 = rienplus(b1);
let c1 = xw*yu;
let a2 = yu*oppxu;
let b2 = yv*oppxu;
let sb2 = rienplus(b2);
let c2 = yw*oppxu;
let b1b2 = b1+b2;
let c1c2 = c1+c2;
let numa = xw-xv*b;
let zua = zu*a;
let zvb = zv*b;
let szvb = rienplus(zvb);

let xa = nbrealéa(-15,15);
let ya = nbrealéa(-15,15);
let za = nbrealéa(-15,15);
let xb = xu+xa;
let yb = yu+ya;
let zb = zu+za;
let xc = xv+xa;
let yc = yv+ya;
let zc = zv+za;
let xd = xw+xa;
let yd = yw+ya;
let zd = zw+za;
let zdnc = zwnc+za;

let k = nbrealéa(0,1);



let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
var test = document.getElementById('test');

let listeenonces =[`On se place dans un repère orthonormé de l'espace $\\left(O~;\\overrightarrow{i},\\overrightarrow{j},\\overrightarrow{k}\\right).$<br>
Les points $A\\left(${xa}~;${ya}~;${za}\\right)$, $B\\left(${xb}~;${yb}~;${zb}\\right)$, $C\\left(${xc}~;${yc}~;${zc}\\right)$ et $D\\left(${xd}~;${yd}~;${zd}\\right)$ sont-ils coplanaires ?`,
`On se place dans un repère orthonormé de l'espace $\\left(O~;\\overrightarrow{i},\\overrightarrow{j},\\overrightarrow{k}\\right).$<br>
Les $A\\left(${xa}~;${ya}~;${za}\\right)$, $B\\left(${xb}~;${yb}~;${zb}\\right)$, $C\\left(${xc}~;${yc}~;${zc}\\right)$ et $D\\left(${xd}~;${yd}~;${zdnc}\\right)$ sont-ils coplanaires ?`];

let listesolutions = [`Les points $A$, $B$, $C$ et $D$ sont coplanaires.`,
`Les points $A$, $B$, $C$ et $D$ ne sont pas coplanaires.`];

let listecorrections = [`Les points $A$, $B$, $C$ et $D$ sont coplanaires si les vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$ sont coplanaires donc s'il existe deux réels $a$ et $b$ tels que $a\\overrightarrow{AB}+b\\overrightarrow{AC}=\\overrightarrow{AD}$.<br>
$\\overrightarrow{AB}\\left(\\begin{array}{c}x_B-x_A\\\\y_B-y_A\\\\z_B-z_A\\end{array}\\right)=\\left(\\begin{array}{c}${xu}\\\\${yu}\\\\${zu}\\end{array}\\right)$, 
$\\overrightarrow{AC}\\left(\\begin{array}{c}x_C-x_A\\\\y_C-y_A\\\\z_C-z_A\\end{array}\\right)=\\left(\\begin{array}{c}${xv}\\\\${yv}\\\\${zv}\\end{array}\\right)$ et 
$\\overrightarrow{AD}\\left(\\begin{array}{c}x_D-x_A\\\\y_D-y_A\\\\z_D-z_A\\end{array}\\right)=\\left(\\begin{array}{c}${xw}\\\\${yw}\\\\${zw}\\end{array}\\right)$.<br><br>
On obtient donc le système : $\\left\\{\\begin{array}{rclr} ${xu}a${sxv}${xv}b & = & ${xw} & (\\text{L}_1)\\\\
${yu}a${syv}${yv}b & = & ${yw} & (\\text{L}_2)\\\\
${zu}a${szv}${zv}b & = & ${zw} & (\\text{L}_3)
\\end{array}\\right.$.<br>
On résout le sous-système composé des deux premières lignes :<br>
$\\left\\{\\begin{array}{rclr} ${xu}a${sxv}${xv}b & = & ${xw} & (\\text{L}_1)\\\\
${yu}a${syv}${yv}b & = & ${yw} & (\\text{L}_2)
\\end{array}\\right. \\iff \\left\\{\\begin{array}{rclr} ${a1}a${sb1}${b1}b & = & ${c1} & (\\text{L'}_1=\\text{L}_1\\times ${yu})\\\\
${a2}a${sb2}${b2}b & = & ${c2} & (\\text{L'}_2=\\text{L}_2\\times (${oppxu}))
\\end{array}\\right.$<br><br>
En additionnant $\\text{L'}_1$ et $\\text{L'}_2$ on obtient : $${b1b2}b=${c1c2}$ et donc $b=\\dfrac{${c1c2}}{${b1b2}}=${b}$.<br>
En remplaçant $b$ par $${b}$ dans $\\text{L}_1$ on obtient : $${xu}a${sxv}${xv}\\times ${pb[0]} ${b} ${pb[1]}=${xw}$ et donc :<br>
$${xu}a=${xw} ${soppxv}${oppxv}\\times ${pb[0]} ${b} ${pb[1]}=${numa}$ donc $a=\\dfrac{${numa}}{${xu}}=${a}$.<br>
On remplace alors $a$ par $${a}$ et $b$ par $${b}$ dans $\\text{L}_3$ et on obtient :<br>
$${zu}\\times ${pa[0]} ${a} ${pa[1]}${szv}${zv}\\times ${pb[0]}${b}${pb[1]}=${zua}${szvb}${zvb}=${zw}$ donc $a=${a}$ et $b=${b}$ sont les solutions du système initial et donc $\\overrightarrow{AD}=${a}\\overrightarrow{AB}${sb}${b}\\overrightarrow{AC}$ et donc les vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$ sont coplanaires et donc les points $A$, $B$, $C$ et $D$ sont coplanaires.`,
`Les points $A$, $B$, $C$ et $D$ sont coplanaires si les vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$ sont coplanaires donc s'il existe deux réels $a$ et $b$ tels que $a\\overrightarrow{AB}+b\\overrightarrow{AC}=\\overrightarrow{AD}$.<br>
$\\overrightarrow{AB}\\left(\\begin{array}{c}x_B-x_A\\\\y_B-y_A\\\\z_B-z_A\\end{array}\\right)=\\left(\\begin{array}{c}${xu}\\\\${yu}\\\\${zu}\\end{array}\\right)$, 
$\\overrightarrow{AC}\\left(\\begin{array}{c}x_C-x_A\\\\y_C-y_A\\\\z_C-z_A\\end{array}\\right)=\\left(\\begin{array}{c}${xv}\\\\${yv}\\\\${zv}\\end{array}\\right)$ et 
$\\overrightarrow{AD}\\left(\\begin{array}{c}x_D-x_A\\\\y_D-y_A\\\\z_D-z_A\\end{array}\\right)=\\left(\\begin{array}{c}${xw}\\\\${yw}\\\\${zwnc}\\end{array}\\right)$.<br><br>
On obtient donc le système : $\\left\\{\\begin{array}{rclr} ${xu}a${sxv}${xv}b & = & ${xw} & (\\text{L}_1)\\\\
${yu}a${syv}${yv}b & = & ${yw} & (\\text{L}_2)\\\\
${zu}a${szv}${zv}b & = & ${zwnc} & (\\text{L}_3)
\\end{array}\\right.$.<br>
On résout le sous-système composé des deux premières lignes :<br>
$\\left\\{\\begin{array}{rclr} ${xu}a${sxv}${xv}b & = & ${xw} & (\\text{L}_1)\\\\
${yu}a${syv}${yv}b & = & ${yw} & (\\text{L}_2)
\\end{array}\\right. \\iff \\left\\{\\begin{array}{rclr} ${a1}a${sb1}${b1}b & = & ${c1} & (\\text{L'}_1=\\text{L}_1\\times ${yu})\\\\
${a2}a${sb2}${b2}b & = & ${c2} & (\\text{L'}_2=\\text{L}_2\\times (${oppxu}))
\\end{array}\\right.$<br><br>
En additionnant $\\text{L'}_1$ et $\\text{L'}_2$ on obtient : $${b1b2}b=${c1c2}$ et donc $b=\\dfrac{${c1c2}}{${b1b2}}=${b}$.<br>
En remplaçant $b$ par $${b}$ dans $\\text{L}_1$ on obtient : $${xu}a${sxv}${xv}\\times ${pb[0]} ${b} ${pb[1]}=${xw}$ et donc :<br>
$${xu}a=${xw} ${soppxv}${oppxv}\\times ${pb[0]} ${b} ${pb[1]}=${numa}$ donc $a=\\dfrac{${numa}}{${xu}}=${a}$.<br>
On remplace alors $a$ par $${a}$ et $b$ par $${b}$ dans $\\text{L}_3$ et on obtient :<br>
$${zu}\\times ${pa[0]} ${a} ${pa[1]}${szv}${zv}\\times ${pb[0]}${b}${pb[1]}=${zua}${szvb}${zvb}=${zw}\\neq${zwnc}$ donc le système initial n'a pas de solution et donc les vecteurs $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ et $\\overrightarrow{AD}$ ne sont pas coplanaires donc les points $A$, $B$, $C$ et $D$ ne sont pas coplanaires.`];


enonce.innerHTML = listeenonces[k];

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