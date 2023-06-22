<template>
    <div>
        <div class="container">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-presentation-tab" data-bs-toggle="tab"
                        data-bs-target="#nav-presentation" type="button" role="tab" aria-controls="nav-presentation"
                        aria-selected="true">Présentation</button>
                    <button class="nav-link" id="nav-seconde-tab" data-bs-toggle="tab" data-bs-target="#nav-seconde"
                        type="button" role="tab" aria-controls="nav-seconde" aria-selected="false">Seconde</button>
                    <button class="nav-link" id="nav-premiere-tab" data-bs-toggle="tab" data-bs-target="#nav-premiere"
                        type="button" role="tab" aria-controls="nav-premiere" aria-selected="false">Première</button>
                    <button class="nav-link" id="nav-terminale-tab" data-bs-toggle="tab" data-bs-target="#nav-terminale"
                        type="button" role="tab" aria-controls="nav-terminale" aria-selected="false">Terminale</button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-presentation" role="tabpanel"
                    aria-labelledby="nav-presentation-tab" tabindex="0" v-html="presentation">
                </div>
                <div class="tab-pane fade" id="nav-seconde" role="tabpanel" aria-labelledby="nav-seconde-tab" tabindex="0">
                    <Class v-if="visible"/>
                </div>
                <div class="tab-pane fade" id="nav-premiere" role="tabpanel" aria-labelledby="nav-premiere-tab"
                    tabindex="0">
                    <Class v-if="!visible"/>
                </div>
                <div class="tab-pane fade" id="nav-terminale" role="tabpanel" aria-labelledby="nav-terminale-tab"
                    tabindex="0">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Class from './Class.vue'

export default {
    name: "Navigation-desusite",
    components: { Class },
    data() {
        return {
            visible: true,
            presentation: `<img src='sidebar-image.png' alt='illustration Desum@th' id='desumathLogo'><br>Ce site, comme son nom l'indique est un site (optimisé pour le navigateur Chrome) uniquement dédié à l'entraînement en mathématiques.<br>
            Les exercices proposés ne concernent que le niveau Lycée.<br>
            Ce site est un site amateur, d'où son interface minimaliste...<br>
            Le but reste purement de l'entraînement.<br>
            Il n'y a donc pas de cours sur ce site.<br>
            Le but est que les élèves puissent s'entraîner ''à l'infini'' (grâce aux exercices « à volonté ») sur des notions ou des techniques qui leur posent problème afin qu'ils puissent progresser.<br> 
            Étant enseignant en mathématiques en lycée, certains niveaux sont moins fournis que d'autres tout simplement car ce site s'adresse en priorité à mes élèves et que je ne suis pas en charge de tous les niveaux dans mon établissement.<br> 
            Je reste néanmoins ouvert et accessible à toutes demandes et améliorations pour le bien de tous. <br>
            Et bien plus qu'un grand merci à Darksathi sans qui ce site n'existerait tout simplement pas.<br>
            Tout ce qui fonctionne sur ce site (et le site lui-même) ce sont son aide et ses explications qui l'ont permis.<br>
            Tout ce qui fonctionne mal ou pas est dû à mon incompétence ou au fait que je n'ai pas réussi à mettre en œuvre ce qu'il m'a expliqué.<br>
            Encore un immense merci pour ces explications et cette patience.`
        }
    }
}
</script>

<style scoped>
.nav-link {
    background-color: rgba(70, 67, 65, 0.6);
    color: white !important;
    text-shadow: 0.3vw 0.3vw 0.5vw black;
}

.nav-link.active {
    background-color: rgba(3.2, 85.3, 133.7, 1) !important;
    color: white !important;
    font-weight: bold;
}

button {
    border-style: groove !important;
    margin-left: 10px;
    width: 160px;
}

.nav {
    padding: 0px !important;
    padding-left: 10px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    border-width: medium !important;
    border-color: black !important;
    padding-bottom: 5px !important;
    width: 44em;

}

#nav-presentation {
    text-align: center;
    margin-top: 10px;
    color: white !important;
    font-weight: bold;
    text-shadow: 0.1vw 0.1vw 0.2vw black;
    width: 44em;
    margin-left: auto !important;
    margin-right: auto !important;
}



#nav-tabContent {
    margin-left: 6px !important;
}


@media screen and (max-width: 900px) {
    button {
        width: 100px;
        font-size: 12px;
        margin-top: 5px;
    }

    .nav {
        width: 90vw;
    }

    #nav-presentation {
        width: 90vw;

    }
}

@keyframes a-long-time-ago {
    0% {
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    80% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}</style>