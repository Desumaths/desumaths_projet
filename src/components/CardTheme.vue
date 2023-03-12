<template>
    <div>
        <div class="container">
            <div class="card">
                <img :src="'../images/' + classe + image + '.png'" class="card-img-top" alt="image">
                <div class="card-body">
                    <h5 class="card-title">{{ titre }}</h5>
                    <div class="accordion accordion-flush" :id="`accordionFlush${key_card}FicheExercices`">
                        <div class="accordion-item">
                            <h2 class="accordion-header" :id="`flush-heading${key_card}FicheExercices`">
                                <button :class="`accordion-button ${collapsed_prop}`" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="`#flush-collapse${key_card}FicheExercices`" aria-expanded="false"
                                    :aria-controls="`flush-collapse${key_card}FicheExercices`">
                                    Les fiches d'exercices
                                </button>
                            </h2>
                            <div :id="`flush-collapse${key_card}FicheExercices`"
                                :aria-labelledby="`flush-heading${key_card}FicheExercices`"
                                :data-bs-parent="`#accordionFlush${key_card}FicheExercices`" v-bind="$attrs">
                                <div class="accordion-body">
                                    <ul>
                                        <li v-for="fiche, key in exercices_fiches" :key="key">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
                                            </svg>
                                            <a :href="fiche[1]" target="_blank">{{ fiche[0] }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" :id="`flush-heading${key_card}LigneExercices`">
                                <button :class="`accordion-button ${collapsed_prop}`" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="`#flush-collapse${key_card}LigneExercices`" aria-expanded="false"
                                    :aria-controls="`flush-collapse${key_card}LigneExercices`">
                                    L'entraînement en ligne
                                </button>
                            </h2>
                            <div :id="`flush-collapse${key_card}LigneExercices`"
                                :aria-labelledby="`flush-heading${key_card}LigneExercices`"
                                :data-bs-parent="`#accordionFlush${key_card}LigneExercices`" v-bind="$attrs">
                                <div class="accordion-body">
                                    <ul>
                                        <li v-for="ligne, key in exercices_ligne" :key="key">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                <path fill-rule="evenodd"
                                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                            </svg>
                                            <a :href="ligne[1]" target="_blank">{{ ligne[0] }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "Card-theme",
    data() {
        return {
            exercices_fiches: this.text_card_fiches,
            exercices_ligne: this.text_card_ligne,
        }
    },
    inheritAttrs: false,
    props: {
        collapsed_prop:{
            type: String,
            default: "collapsed"
        },
        key_card: {
            type: Number,
            default: 0
        },
        image: {
            type: Number,
            default: 2
        },
        classe: {
            type: String,
            default: 'seconde_'
        },
        titre: {
            type: String,
            default: 'Vecteurs'
        },
        text_card_fiches: {
            default: ["Pas de fiches d'exercices pour l'instant"]
        },
        text_card_ligne: {
            default: ["Pas d'exercices en ligne pour l'instant."]
        }
    }
}
</script>

<style scoped>
.container{
    margin:0;
    padding:0;
}
.card-title {
    text-align: center;
    font-family: titre;
    font-size: 30px;
    color: white;
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
    margin-left: 5px;
    color: black;
}

.choix {
    display: block;
    width: 100%;
    padding-left: 6px;
}

.accordion {
    margin-top: 15px;
}

.accordion-body {
    background-color: rgba(219, 155, 86, 0.7);
    color: black;
    font-weight: bold;
    text-shadow: 0.1vw 0.1vw 0.1vw grey;
    font-size: 14px;
}

.accordion-button {
    background-color: rgba(3.2, 85.3, 133.7, 0.8) !important;
    color: white;
    font-weight: bold;
    text-shadow: 3px 3px 1px rgba(3.2, 85.3, 133.7, 1) !important;
}

@media screen and (max-width: 900px) {
    .card {
        width: 21em !important;
        float: none;
        margin-right: 10px;
    }

    .btn {
        font-size: 12px;
    }

    .accordion {
        font-size: 12px;

    }

    .accordion-button {
        font-weight: bold;
        font-size: 12px;
    }

    .accordion-body {
        font-size: 12px;
    }
}

.card {
    background-color: rgba(76, 71, 71, 0.6);
    width: 25em;
    box-shadow: 3px 3px 2px gray;
    margin-top: 10px;
    float: left;
    margin-right: 22px;

}

.btn {
    margin-right: 10px;
}
</style>