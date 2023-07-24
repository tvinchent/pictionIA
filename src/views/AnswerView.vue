<template>
    <img src="../assets/logo.svg" id="logo"><br>
    <div class="scoreContent">
        <div id="bubble">
            <img v-if="store.bestScore<100" src="../assets/interface/faux.svg" class="resultQuestion">
            <img v-else src="../assets/interface/vrai.svg" class="resultQuestion">
        </div>
        <p>
            La réponse était :<br> <h3>{{ store.promptAi }}</h3><br>
            Votre meilleur score est de : <h2>{{ store.bestScore }}%</h2><br>
            {{announcement}}<br><br>
            <div id="scoreForeachQuestion">
                <span v-for="(questionScore, idQ) in store.pourcentQuestions" class="questionOneByOne">
                    <div class="questionNumber">
                        <span v-if="Boolean(store.questionNumber-idQ-2)">{{ idQ+1 }}</span>
                        <span v-else><h4><strong>{{ idQ+1 }}</strong></h4></span>
                    </div>
                    <div class="questionScore" :class="{ 'green' : questionScore==100, 'red' : questionScore<100}"></div>
                </span>
            </div>
        </p>
    </div>
</template><!-- push en ajax le pseudo+score -->

<style scoped>
.scoreContent{
    background-color: rgba(0, 0, 0, 0.30);
    width: 50%;
    margin: auto;
    padding: 5em 0 0.5em 0;
    margin-top: 2em;
}
#bubble{text-align: center; margin-top: -7em; position: absolute; width: 50vw;}
.resultQuestion{width: 5em;}
p{color: white;}
.questionOneByOne{display: inline-block; width: 2em;}
.questionNumber{font-size: small;}
.questionScore{height: 0.2em; margin-right: 0.1em;}
.green{background-color: green;}
.red{background-color: red;}
h2, h3{color: #04F2FF;}

@media screen and (max-width: 1024px) {
    #logo{
        display: none;
    }
    .scoreContent{
        width: 90%;
    }
    #bubble{width: 84vw;}

}
</style>

<script>
import { store } from '../state.js'

export default {
    data() {
        return {
            store
        }
    },
    computed: {
        announcement() {
            if(Math.floor(store.questionNumber-1) >= 10){
                return 'Votre score final apparaitra dans 10 secondes'
            }
            else{
                return 'Prochaine question dans 10 secondes'
            }
        }
    },
    mounted() {
        store.totalPourcent += store.bestScore
        setTimeout(() => {
            if(Math.floor(store.questionNumber-1) >=10){
                this.$router.push({ path: '/result'}) //{ name: 'answer', params: { promptAi: this.promptAi, bestScore: this.bestScore } }
            }
            else{
                this.$router.push({ path: '/question'}) //{ name: 'answer', params: { promptAi: this.promptAi, bestScore: this.bestScore } }
            }
        }, 10000);
    }
  
}
</script>