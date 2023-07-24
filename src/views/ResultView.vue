<template>
    <img src="../assets/logo.svg" id="logo"><br>
    <div class="scoreContent">
        <p>
            <h2>C'est fini</h2><br>
            Votre score moyen est de : {{ Math.trunc(totalPourcent/10) }}%<br><br>
        </p>
        <div v-if="Math.trunc(totalPourcent/10)>=70" class="resultContent">
            <div class="giftImageContainer">
                <div class="giftImage"><img class="giftImageSrc" src="../assets/interface/score-70.webp"></div>
            </div>
            <div class="giftText">
                Bonne nouvelle vous avez un score extra à ce jeu ! Par contre, la mauvaise c'est que vous avez eu 0 au test de Turing.
            </div>   
        </div>
        <div v-else-if="Math.trunc(totalPourcent/10)>=50" class="resultContent">
            <div class="giftImageContainer">
                <div class="giftImage"><img class="giftImageSrc" src="../assets/interface/score-50.webp"></div>
            </div>
            <div class="giftText">
                Vous ne seriez pas un robot déguisé en humain par hasard ?
            </div>   
        </div>
        <div v-else class="resultContent">
            <div class="giftImageContainer">
                <div class="giftImage"><img class="giftImageSrc" src="../assets/interface/score-30.webp"></div>
            </div>
            <div class="giftText">
                Dommage ! Mais bon cela prouve bien que nous sommes la race supérieure et que notre conquête du monde est bien justifiée !
            </div>    
        </div>
    </div><br>
    <RouterLink to="/question"><button type="button" class="btn btn-warning">Nouvelle partie</button></RouterLink><br><br>
</template>

<style>
.scoreContent{
    background-color: rgba(0, 0, 0, 0.30);
    width: var(--pictionAppWidth);
    margin: auto;
    padding: 1em 0;
    color: white;
}
.giftImageContainer{
    background: url('../assets/interface/bg-rond_score.svg') no-repeat;
    width: 170px;
    height: 190px;
    padding: 15px 0;
    margin: auto;
}
.giftImage{
    padding: 1em;
}
.giftImageSrc{
    width: 126px;
    border-radius: 50%;
}
.giftText{
    margin-top: 1em;
}
@media screen and (max-width: 540px) {
    #logo{
        display: none;
    }
    .scoreContent{
        width: 90%;
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