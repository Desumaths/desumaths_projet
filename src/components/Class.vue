<template>
    <div id="carouselClass" class="carousel slide">
        <div class="carousel-inner">
            <div v-for="theme, key, index in themes[classe]" :key="index" :class="['carousel-item', index ? '' : 'active']">
                <CardTheme :key_card="index" :image="theme['image']" :classe="classe + '_'" :titre="key"
                    :text_card_fiches="theme['thèmes fiche']" :text_card_ligne="theme['thèmes ligne']"
                    :class="accordion_class" :collapsed_prop="collapsed_prop" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselClass" data-bs-slide="prev"
            @click="accordion_class_modifier">
            <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselClass" data-bs-slide="next"
            @click="accordion_class_modifier">
            <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
import CardTheme from './CardTheme.vue'

export default {
    name: 'Classe-module',
    components: { CardTheme },
    data() {
        return {
            accordion_class: "accordion-collapse collapse",
            recoller: 0,
            collapsed_prop: "collapsed"
        }
    },
    watch: {
    },
    methods: {
        accordion_class_modifier() {
            if (this.recoller % 2) {
                this.accordion_class = 'accordion-collapse collapse coller'
                this.collapsed_prop = 'collapsed coller'
            } else {
                this.accordion_class = 'accordion-collapse collapse recoller'
                this.collapsed_prop = 'collapsed recoller'
            }
            this.recoller = (this.recoller + 1) % 2
        }
    },
    props: {
        classe: {
            type: String,
            default: 'seconde'
        },
        themes: {
            default: {
                'seconde': {
                    "Développement": {
                        "image": 2,
                        "thèmes fiche": [['Développement', "pdf/seconde/developpements/Developpement.pdf"]],
                        "thèmes ligne": [["Double distributivité", "seconde/developpement/double_distributivite/Double_distributivite.html"], 
                        ["Identité remarquables", "seconde/developpement/identites_remarquables/Identitesremarquables.html"]]
                    },
                    'Equations de droites': {
                        "image": 3,
                        "thèmes fiche": [["Equations cartésiennes de droites", "pdf/seconde/equationsDroites/Equations_cartesiennes_de_droites.pdf"]],
                        "thèmes ligne": [["Equations de droites(calculs)", "seconde/equationsDroites/calculs/Eqsdtescalculs.html"]]
                    },
                    'Equations': {
                        "image": 4,
                        "thèmes fiche": [["Equations", "pdf/seconde/equations/Equations_diverses.pdf"],
                        ["Equations de degré 2", "pdf/seconde/equations/Equations_de_degre_2.pdf"]
                        ],
                        "thèmes ligne": [["Equations avec factorisation", "seconde/equations/factorisation/EqsFacteurcommun.html"],
                        ["Equations produits", "#"],
                        ["Equations quotient", "#"],
                        ["Equations de degré 1", "#"],
                        ["Equations de degré 2", "#"]
                        ]
                    }, 'Factorisation': {
                        "image": 5,
                        "thèmes fiche": [["Factorisation", "pdf/seconde/factorisation/Factorisation.pdf"]],
                        "thèmes ligne": [["#", "#"]]
                    },
                    'Fonction': {
                        "image": 6,
                        "thèmes fiche": [["Images antécédents", "pdf/seconde/fonctions/Images_antecedents_equations_inequations_graphiques.pdf"],
                        ["Hyperboles", "pdf/seconde/fonctions/Hyperboles_et_questions.pdf"],
                        ["Paraboles", "pdf/seconde/fonctions/Paraboles_et_questions.pdf"],
                        ["Parité(graphique)", "pdf/seconde/fonctions/Parite_(aspect_graphique).pdf"],
                        ["Parité(calculs)", "pdf/seconde/fonctions/Parite_(par_calculs).pdf"],
                        ["Sens de variations de fonctions(calculs)", "pdf/seconde/fonctions/Sens_de_variations_de_fonctions_(par_calculs).pdf"],
                        ["Variations de fonctions(calculs)", "pdf/seconde/fonctions/Variations_de_fonctions_(par_calculs).pdf"],
                        ["Tableaux de variations(questions)", ["pdf/seconde/fonctions/Tableaux_de_variations_et_questions.pdf"]],
                        ["Tableaux de valeurs de courbes", "pdf/seconde/fonctions/Tableaux_de_valeurs_courbes_et_questions.pdf"],
                        ["Tableaux de variations(graphiques)", "pdf/seconde/fonctions/Tableaux_de_variations_(avec_graphiques).pdf"],
                        ["Tableaux de variations(équations|inéquations)", "pdf/seconde/fonctions/Tableaux_de_variations_equations_et_inequations.pdf"],

                        ],
                        "thèmes ligne": [["Images et antécédents", "seconde/fonctions/antecedents_images/ImagesAntecedents.html"]]
                    },
                    'Inéquations': {
                        'image': 7,
                        "thèmes fiche": [["Inéquation(divers)", "pdf/seconde/inequations/Inequations_(divers).pdf"],
                        ["Inéquations(tableaux de signes de base)", "pdf/seconde/inequations/Inequations_(tableaux_de_signes_de_base).pdf"],
                        ["Inéquations(tableaux de signes divers)", "pdf/seconde/inequations/Inequations_(tableaux_de_signes_divers).pdf"],
                        ["Inéquations simples(intersections | réunions)", "pdf/seconde/inequations/Inequations_simples_intersections_reunions.pdf"],
                        ["Systèmes d'inéquations", "pdf/seconde/inequations/Systemes_d_inequations.pdf"],
                        ],
                        "thèmes ligne": [["#", "#"]]
                    },
                    'Milieu et longueur': {
                        'image': 8,
                        "thèmes fiche": [["Coordonnées|projeté orthogonal|trigonométrie", "pdf/seconde/milieuLongueur/Coordonnees_projete_orthogonal_trigonometrie.pdf"],
                        ["Milieu et longueur(calculs de base)", "pdf/seconde/milieuLongueur/Milieu_longueur_calculs_de_base.pdf"],
                        ["Milieu et longueur(divers)", "pdf/seconde/milieuLongueur/Milieu_longueur.pdf"],
                        ["Points alignés(longueurs)", "pdf/seconde/milieuLongueur/Points_alignes_avec_les_longueurs.pdf"],
                        ],
                        "thèmes ligne": [["#", "#"]],
                    },
                    'Nombres et calculs': {
                        'image': 9,
                        "thèmes fiche": [["Décomposition en facteurs premiers", "pdf/seconde/nombresCalculs/Decomposition_en_facteurs_premiers.pdf"],
                        ["Fractions", "pdf/seconde/nombresCalculs/Fractions.pdf"],
                        ["Puissances", "pdf/seconde/nombresCalculs/Puissances.pdf"],
                        ["Racines", "pdf/seconde/nombresCalculs/Racines.pdf"],
                        ],
                        "thèmes ligne": [["#", "#"]],
                    },
                    'Pourcentages': {
                        'image': 10,
                        "thèmes fiche": [["Pourcentages(fiche 1)", "pdf/seconde/pourcentages/Pourcentages_fiche_1.pdf"],
                        ["Pourcentages(fiche 2)", "pdf/seconde/pourcentages/Pourcentages_fiche_2.pdf"]
                        ],
                        "thèmes ligne": [["#", "#"]]
                    },
                    'Probabilités': {
                        "image": 11,
                        "thèmes fiche": [["Diagrammes de Venn", "pdf/seconde/probabilites/Diagrammes_de_Venn.pdf"],
                        ["Probabilités(divers)", "pdf/seconde/probabilites/Probabilites_(divers).pdf"],
                        ["Probabilités et arbres", "pdf/seconde/probabilites/Probabilites_et_arbres.pdf"],
                        ["Probabilités et tableaux", "pdf/seconde/probabilites/Probabilites_et_tableaux.pdf"]
                        ],
                        "thèmes ligne": [["#", "#"]]
                    },
                    'Statistiques': {
                        "image": 12,
                        "thèmes fiche": [["Statistiques", "pdf/seconde/statistiques/Statistiques.pdf"]],
                        "thèmes ligne": [["#", "#"]]
                    },
                    'Systèmes': {
                        "image": 13,
                        "thèmes fiche": [["Systèmes(calculs)", "pdf/seconde/systemes/Systemes_(calculs).pdf"],
                        ["Systèmes(graphiques)", "pdf/seconde/systemes/Systemes_(graphiques).pdf"]
                        ],
                        "thèmes ligne": [["Systèmes(faciles)", "seconde/systemes/systemes_faciles/Systemes(tombe_juste).html"]]
                    },
                    'Valeur absolue': {
                        "image": 13,
                        "thèmes fiche": [["Valeur absolue(équations|inéquations)", "pdf/seconde/valeurAbsolue/Valeur_absolue(équations_inéquations).pdf"]],
                        "thèmes ligne": [["Equations", "seconde/valeurAbsolue/equations/EquationsValAbs.html"]]
                    },
                    'Vecteurs': {
                        "image": 1,
                        "thèmes fiche": [["Constructions de vecteurs", "pdf/seconde/vecteurs/Constructions_de_vecteurs.pdf"],
                        ["Vecteurs(calculs de base)", "pdf/seconde/vecteurs/Vecteurs_(calculs_de_base).pdf"],
                        ["Vecteurs(coordonnées)", "pdf/seconde/vecteurs/Vecteurs_(coordonnees).pdf"]],
                        "thèmes ligne": [["#", "#"]]
                    },
                }
            }
        }
    }
}
</script>

<style scoped>
#carouselClass {
    width: 25em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    background-color: rgba(3.2, 85.3, 133.7, 0.8) !important;
}

.carousel-control-next,
.carousel-control-prev {
    width: 15px;
}




@media screen and (max-width: 900px) {
    #carouselClass {
        width: 21.5em;
    }
}
</style>