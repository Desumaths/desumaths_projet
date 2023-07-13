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

function par(u) {
    let pargd=[];
    let parg;
    let pard;
    if (u<0) {parg='(';} else {parg='';}
    if (u<0) {pard=')';} else {pard='';}
    pargd=[parg,pard];
    return pargd;
}

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');

/*let a,b,c,u0,u1,s1,s2,d,u2,u3,u4,u5,u6,u7,parentheses0,parentheses1,parentheses2,parentheses3,parentheses4,parentheses5,parentheses6,un;*/

function genererExercice() {

let a = nbrealéa(2,10);
let b = nbrealéa(-10,10);
let c = nbrealéa(-10,10);
let u0 = nbrealéa(-10,10);
let u1 = nbrealéa(-10,10);
let s1 = signe(b);
let s2 = signe(c);
let d = nbrealéa(3,7);
let u2 = a*u1+b*u0+c;
let u3 = a*u2+b*u1+c;
let u4 = a*u3+b*u2+c;
let u5 = a*u4+b*u3+c;
let u6 = a*u5+b*u4+c;
let u7 = a*u6+b*u5+c;
let parentheses0 = par(u0);
let parentheses1 = par(u1);
let parentheses2 = par(u2);
let parentheses3 = par(u3);
let parentheses4 = par(u4);
let parentheses5 = par(u5);
let parentheses6 = par(u6);
let un = [u3,u4,u5,u6,u7];

let corrections = [`$u_2 = ${a} u_1 ${s1} ${b} u_0 ${s2} ${c} = ${a}\\times ${parentheses1[0]} ${u1} ${parentheses1[1]} ${s1} ${b} \\times ${parentheses0[0]} ${u0} ${parentheses0[1]} = ${u2}$<br>$u_3 = ${a} u_2 ${s1} ${b} u_1 ${s2} ${c} = ${a}\\times ${parentheses2[0]} ${u2} ${parentheses2[1]} ${s1} ${b} \\times ${parentheses1[0]} ${u1} ${parentheses1[1]} = ${u3}$`,
`$u_2 = ${a} u_1 ${s1} ${b} u_0 ${s2} ${c} = ${a}\\times ${parentheses1[0]} ${u1} ${parentheses1[1]} ${s1} ${b} \\times ${parentheses0[0]} ${u0} ${parentheses0[1]} = ${u2}$<br>$u_3 = ${a} u_2 ${s1} ${b} u_1 ${s2} ${c} = ${a}\\times ${parentheses2[0]} ${u2} ${parentheses2[1]} ${s1} ${b} \\times ${parentheses1[0]} ${u1} ${parentheses1[1]} = ${u3}$<br>$u_4 = ${a} u_3 ${s1} ${b} u_2 ${s2} ${c} = ${a}\\times ${parentheses3[0]} ${u3} ${parentheses3[1]} ${s1} ${b} \\times ${parentheses2[0]} ${u2} ${parentheses2[1]} = ${u4}$`,
`$u_2 = ${a} u_1 ${s1} ${b} u_0 ${s2} ${c} = ${a}\\times ${parentheses1[0]} ${u1} ${parentheses1[1]} ${s1} ${b} \\times ${parentheses0[0]} ${u0} ${parentheses0[1]} = ${u2}$<br>$u_3 = ${a} u_2 ${s1} ${b} u_1 ${s2} ${c} = ${a}\\times ${parentheses2[0]} ${u2} ${parentheses2[1]} ${s1} ${b} \\times ${parentheses1[0]} ${u1} ${parentheses1[1]} = ${u3}$<br>$u_4 = ${a} u_3 ${s1} ${b} u_2 ${s2} ${c} = ${a}\\times ${parentheses3[0]} ${u3} ${parentheses3[1]} ${s1} ${b} \\times ${parentheses2[0]} ${u2} ${parentheses2[1]} = ${u4}$<br>$u_5 = ${a} u_4 ${s1} ${b} u_3 ${s2} ${c} = ${a}\\times ${parentheses4[0]} ${u4} ${parentheses4[1]} ${s1} ${b} \\times ${parentheses3[0]} ${u3} ${parentheses3[1]} = ${u5}$`,
`$u_2 = ${a} u_1 ${s1} ${b} u_0 ${s2} ${c} = ${a}\\times ${parentheses1[0]} ${u1} ${parentheses1[1]} ${s1} ${b} \\times ${parentheses0[0]} ${u0} ${parentheses0[1]} = ${u2}$<br>$u_3 = ${a} u_2 ${s1} ${b} u_1 ${s2} ${c} = ${a}\\times ${parentheses2[0]} ${u2} ${parentheses2[1]} ${s1} ${b} \\times ${parentheses1[0]} ${u1} ${parentheses1[1]} = ${u3}$<br>$u_4 = ${a} u_3 ${s1} ${b} u_2 ${s2} ${c} = ${a}\\times ${parentheses3[0]} ${u3} ${parentheses3[1]} ${s1} ${b} \\times ${parentheses2[0]} ${u2} ${parentheses2[1]} = ${u4}$<br>$u_5 = ${a} u_4 ${s1} ${b} u_3 ${s2} ${c} = ${a}\\times ${parentheses4[0]} ${u4} ${parentheses4[1]} ${s1} ${b} \\times ${parentheses3[0]} ${u3} ${parentheses3[1]} = ${u5}$<br>$u_6 = ${a} u_5 ${s1} ${b} u_4 ${s2} ${c} = ${a}\\times ${parentheses5[0]} ${u5} ${parentheses5[1]} ${s1} ${b} \\times ${parentheses4[0]} ${u4} ${parentheses4[1]} = ${u6}$`,
`$u_2 = ${a} u_1 ${s1} ${b} u_0 ${s2} ${c} = ${a}\\times ${parentheses1[0]} ${u1} ${parentheses1[1]} ${s1} ${b} \\times ${parentheses0[0]} ${u0} ${parentheses0[1]} = ${u2}$<br>$u_3 = ${a} u_2 ${s1} ${b} u_1 ${s2} ${c} = ${a}\\times ${parentheses2[0]} ${u2} ${parentheses2[1]} ${s1} ${b} \\times ${parentheses1[0]} ${u1} ${parentheses1[1]} = ${u3}$<br>$u_4 = ${a} u_3 ${s1} ${b} u_2 ${s2} ${c} = ${a}\\times ${parentheses3[0]} ${u3} ${parentheses3[1]} ${s1} ${b} \\times ${parentheses2[0]} ${u2} ${parentheses2[1]} = ${u4}$<br>$u_5 = ${a} u_4 ${s1} ${b} u_3 ${s2} ${c} = ${a}\\times ${parentheses4[0]} ${u4} ${parentheses4[1]} ${s1} ${b} \\times ${parentheses3[0]} ${u3} ${parentheses3[1]} = ${u5}$<br>$u_6 = ${a} u_5 ${s1} ${b} u_4 ${s2} ${c} = ${a}\\times ${parentheses5[0]} ${u5} ${parentheses5[1]} ${s1} ${b} \\times ${parentheses4[0]} ${u4} ${parentheses4[1]} = ${u6}$<br>$u_7 = ${a} u_6 ${s1} ${b} u_5 ${s2} ${c} = ${a}\\times ${parentheses6[0]} ${u6} ${parentheses6[1]} ${s1} ${b} \\times ${parentheses5[0]} ${u5} ${parentheses5[1]} = ${u7}$`
];


enonce.innerHTML = `La suite $(u_n)$ est la suite définie pour tout $n\\in \\mathbb{N}$ par : <br>
$\\left\\{ \\begin{array} 1u_0 & = & ${u0} \\\\ u_1 & = & ${u1} \\\\ u_{n+2} & = & ${a}u_{n+1} ${s1} ${b}u_n ${s2} ${c} \\end{array} \\right.$ <br>
Calculer $u_{${d}}$.`;
solution.innerHTML = `Solution : $u_{${d}}=${un[d-3]}$`;
correctiond.innerHTML = corrections[d-3];

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

