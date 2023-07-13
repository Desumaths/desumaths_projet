function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');

/*let mille,r,u1,u1b,n1,nseuil,seuilhausse,seuilbaisse,un1,un1b,navseuil,unseuil,unavseuil,n_avseuil,un_seuil,un_avseuil,k;*/

function genererExercice() {

let mille = nbrealéa(1,10)*1000;
let r = nbrealéa(10,100);
let u1 = mille+r;
let u1b = mille-r;
let n1 = nbrealéa(2,10);
let nseuil = nbrealéa(4,30);
let seuilhausse = mille+nseuil*r-nbrealéa(1,r-1);
let seuilbaisse = mille-nseuil*r+nbrealéa(1,r-1);
let un1 = mille+n1*r;
let un1b = mille-n1*r;
let navseuil = nseuil-1;
let unseuil = mille+nseuil*r;
let unavseuil = mille+navseuil*r;
let n_avseuil = nseuil-1;
let un_seuil = mille-nseuil*r;
let un_avseuil = mille-navseuil*r;
let k = nbrealéa(0,1);

let listeenonces = [`On effectue un placement à haut risque en bourse.</br>
On place la somme de ${mille} €.</br>
Chaque mois, grâce au placement, on gagne ${r} €.</br>
On note $u_n$ la somme que l'on possède après $n$ mois de placement.</br>
1) Calculer la somme possédée au bout d'un mois.</br>
2) Déterminer la nature de la suite $(u_n)$.</br>
3) Exprimer $u_{n+1}$ en fonction de $u_n$.</br>
4) Exprimer $u_n$ en fonction de $n$.</br>
5) Calculer $u_{${n1}}$.</br>
6) Déterminer à partir de combien de mois la somme possédée devient supérieure à ${seuilhausse} €.`,
`On effectue un placement à haut risque en bourse.</br>
On place la somme de ${mille} €.</br>
Chaque mois, grâce au placement, on perd ${r} €.</br>
On note $u_n$ la somme que l'on possède après $n$ mois de placement.</br>
1) Calculer la somme possédée au bout d'un mois.</br>
2) Déterminer la nature de la suite $(u_n)$.</br>
3) Exprimer $u_{n+1}$ en fonction de $u_n$.</br>
4) Exprimer $u_n$ en fonction de $n$.</br>
5) Calculer $u_{${n1}}$.</br>
6) Déterminer à partir de combien de mois la somme possédée devient inférieure à ${seuilbaisse} €.`];

let listesolutions = [`1) $u_1=${u1}$</br>
2) $(u_n)$ est une suite arithmétique.</br>
3) $u_{n+1}=u_n +${r}$</br>
4) $u_n=${mille}+n\\times ${r} $</br>
5) $u_{${n1}}=${un1} $</br>
6) À partir de $n=${nseuil}$.`,
`1) $u_1=${u1b}$</br>
2) $(u_n)$ est une suite arithmétique.</br>
3) $u_{n+1}=u_n -${r}$</br>
4) $u_n=${mille}-n\\times${r}=${mille}-${r}n $</br>
5) $u_{${n1}}=${un1b} $</br>
6) À partir de $n=${nseuil}$.`];

let listecorrections =[`1) $u_1=${mille}+${r}=${u1}$</br>
2) $(u_n)$ est une suite arithmétique car, pour passer d'un terme au suivant, on ajoute toujours le même nombre : $r=${r}$ .</br>
3) $u_{n+1}=u_n+r=u_n +${r}$</br>
4) $u_n=u_0+n\\times r=${mille}+n\\times ${r} $</br>
5) $u_{${n1}}=u_0+${n1}\\times r=${mille}+${n1}\\times ${r}=${un1} $</br>
6) À partir de $n=${nseuil}$ car $u_{${nseuil}}=${unseuil}$ et $u_{${navseuil}}=${unavseuil}$`,
`1) $u_1=${mille}-${r}=${u1b}$</br>
2) $(u_n)$ est une suite arithmétique car, pour passer d'un terme au suivant, on ajoute toujours le même nombre : $r=-${r}$ .</br>
3) $u_{n+1}=u_n+r=u_n -${r}$</br>
4) $u_n=u_0+n\\times r=${mille}+n\\times (-${r})=${mille}-n\\times${r}=${mille}-${r}n $</br>
5) $u_{${n1}}=u_0+${n1}\\times r=${mille}+${n1}\\times (-${r})=${un1b} $</br>
6) À partir de $n=${nseuil}$ car $u_{${nseuil}}=${un_seuil}$ et $u_{${n_avseuil}}=${un_avseuil}$`];

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

