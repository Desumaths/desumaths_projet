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
    components: { CardTheme},
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
            this.recoller = (this.recoller + 1)%2
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
                        "thèmes ligne": [["Double distributivité", "seconde/developpement/double_distributivite/Double distributivite.html"], ["Identité remarquables", "#"]]
                    },
                    'Equations de droites': {
                        "image": 3,
                        "thèmes fiche": [["Equations cartésiennes de droites", "pdf/seconde/equationsDroites/Equations_cartesiennes_de_droites.pdf"]],
                        "thèmes ligne": [["Equations de droites(calculs)", "#"]]
                    },
                    'Equations': {
                        "image": 4,
                        "thèmes fiche": [["Equations", "pdf/seconde/equations/Equations_diverses.pdf"],
                            ["Equations de degré 2", "pdf/seconde/equations/Equations_de_degre_2.pdf"]
                        ],
                        "thèmes ligne": [["Equations avec factorisation", "#"],
                        ["Equations produits", "#"],
                        ["Equations quotient", "#"],
                        ["Equations de degré 1", "#"],
                        ["Equations de degré 2", "#"]
                        ]
                    },'Factorisation':{
                        "image" : 5,
                        "thèmes fiche": [["Factorisation", "pdf/seconde/factorisation/Factorisation.pdf"]],
                        "thèmes ligne": [["#", "#"]]
                    },
                    'Fonction':{
                        "image" : 6,
                        "thèmes fiche": [["Images antécédents", "pdf/seconde/fonctions/Images_antecedents_equations_inequations_graphiques.pdf"],
                                         ["Hyperboles", "pdf/seconde/fonctions/Hyperboles_et_questions.pdf"],
                                         ["Paraboles", "pdf/seconde/fonctions/Paraboles_et_questions.pdf"],
                                         ["Parité(graphique)", "pdf/seconde/fonctions/Parite_(aspect_graphique).pdf"],
                                         ["Parité(calculs)", "pdf/seconde/fonctions/Parite_(par_calculs).pdf"],
                                         ["Sens de variations de fonctions(calculs)","pdf/seconde/fonctions/Sens_de_variations_de_fonctions_(par_calculs).pdf"],
                                         ["Variations de fonctions(calculs)", "pdf/seconde/fonctions/Variations_de_fonctions_(par_calculs).pdf"],
                                         ["Tableaux de variations(questions)", ["pdf/seconde/fonctions/Tableaux_de_variations_et_questions.pdf"]],
                                         ["Tableaux de valeurs de courbes", "pdf/seconde/fonctions/Tableaux_de_valeurs_courbes_et_questions.pdf"],
                                         ["Tableaux de variations(graphiques)", "pdf/seconde/fonctions/Tableaux_de_variations_(avec_graphiques).pdf"],
                                         ["Tableaux de variations(équations|inéquations)", "pdf/seconde/fonctions/Tableaux_de_variations_equations_et_inequations.pdf"],
                                         
                                        ],
                        "thèmes ligne": [["#", "#"]]
                    },
                    'Inéquations':{
                        'image': 7,
                        "thèmes fiche": [["Inéquation(divers)", "pdf/seconde/inequations/Inequations_(divers).pdf"],
                                        ["Inéquations(tableaux de signes de base)", "pdf/seconde/inequations/Inequations_(tableaux_de_signes_de_base).pdf"],
                                        ["Inéquations(tableaux de signes divers)", "pdf/seconde/inequations/Inequations_(tableaux_de_signes_divers).pdf"],
                                        ["Inéquations simples(intersections | réunions)", "pdf/seconde/inequations/Inequations_simples_intersections_reunions.pdf"],
                                        ["Systèmes d'inéquations", "pdf/seconde/inequations/Systemes_d_inequations.pdf"],
                                        ],
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
}</style>