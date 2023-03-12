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