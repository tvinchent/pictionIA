<template>
    <img src="../assets/logo.svg" id="logo" alt="logo pictionAi"><br>
    <div class="scoreContent">
        <div v-if="Math.trunc(totalPourcent/10)>=70" class="resultContent row"> 
            <div class="giftText col-lg-6 col-sm-12">
                <p>
                    <h2>C'est fini</h2><br>
                    Votre score moyen est de : <h3>{{ Math.trunc(totalPourcent/10) }}%</h3> 
                </p>
                Bonne nouvelle vous avez un score extra à ce jeu ! Par contre, la mauvaise c'est que vous avez eu 0 au test de Turing.
            </div>   
            <div class="giftImageContainer col-lg-6 col-sm-12">
                <div class="giftImage"><img class="giftImageSrc" src="../assets/interface/score-70.webp" alt="Score supérieur à 70 !"></div>
            </div>
        </div>
        <div v-else-if="Math.trunc(totalPourcent/10)>=50" class="resultContent">
            <div class="giftText col-lg-6 col-sm-12">
                <p>
                    <h2>C'est fini</h2><br>
                    Votre score moyen est de : {{ Math.trunc(totalPourcent/10) }}%<br><br>
                </p>
                Vous ne seriez pas un robot déguisé en humain par hasard ?
            </div>   
            <div class="giftImageContainer col-lg-6 col-sm-12">
                <div class="giftImage"><img class="giftImageSrc" src="../assets/interface/score-50.webp" alt="Score supérieur à 50 !"></div>
            </div>
        </div>
        <div v-else class="resultContent">
            <div class="giftText col-lg-6 col-sm-12">
                <p>
                    <h2>C'est fini</h2><br>
                    Votre score moyen est de : {{ Math.trunc(totalPourcent/10) }}%<br><br>
                </p>
                Dommage ! Mais bon cela prouve bien que nous sommes la race supérieure et que notre conquête du monde est bien justifiée !
            </div>   
            <div class="giftImageContainer col-lg-6 col-sm-12">
                <div class="giftImage"><img class="giftImageSrc" src="../assets/interface/score-30.webp" alt="Score inférieur à 50"></div>
            </div>  
        </div>
    </div><br>
    <RouterLink to="/question"><button type="button" class="btn btn-warning btn-lg" id="nouvellePartie">Nouvelle partie</button></RouterLink><br><br>
</template>

<style>
.scoreContent{
    background-color: #151B2C;
    max-width: 740px;
    margin: auto;
    padding: 1em;
    border-radius: 1em;
    color: white;
}
.giftImageContainer{
    background: url('../assets/interface/bg-rond_score.svg') no-repeat center;
    width: 225px;
    height: 251px;
    padding: 19px 0;
    margin: auto;
}
.giftImage{
    padding: 1em;
}
.giftImageSrc{
    width: 180px;
    border-radius: 50%;
}
.giftText{
    margin-top: 1em;
    text-align: left;
}
h3{color: #04F2FF;
    font-size: 2em;
}
@media screen and (max-width: 540px) {
    #logo{
        display: none;
    }
    .scoreContent{
        width: 100%;
    }
    .giftText{
    margin-top: 1em;
    text-align: center;
    }

}
</style>

<script>
import { store } from '../state.js'

export default {
    data() {
        return {
            store,
            totalPourcent: 0
        }
    },
    mounted() {
        store.questionNumber = 1
        this.totalPourcent = store.pourcentQuestions.reduce((partialSum, a) => partialSum + a, 0);
    }
    
}
</script>