<template>
    <img src="../assets/logo.svg" id="logo" alt="logo pictionAi"><br>
    <div class="scoreContent">
        <div id="bubble">
            <img v-if="store.bestScore<100" src="../assets/interface/faux.svg" class="resultQuestion" alt="faux">
            <img v-else src="../assets/interface/vrai.svg" class="resultQuestion" alt="vrai">
        </div>
        <p>
            La réponse était :<br> <h3>{{ store.promptAi }}</h3><br>
            Votre meilleur score est de : <h2>{{ store.bestScore }}%</h2><br>
            {{announcement}}<br><br>
            <div id="scoreForeachQuestion">
                <span v-for="(questionScore, idQ) in store.pourcentQuestions" class="questionOneByOne">
                    <div class="questionNumber">
                        <span v-if="Boolean(store.questionNumber-idQ-2)" class="oldQuestion">{{ idQ+1 }}</span>
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
    background-color: #151B2C;
    width: var(--pictionAppWidth);
    margin: auto;
    padding: 5em 0 0.5em 0;
    margin-top: 2em;
    border-radius: 1em;
}
#bubble{text-align: center; margin-top: -7em; width: 100%;}
.resultQuestion{width: 5em;}
p{color: white; margin: 1em;}
.questionOneByOne{display: inline-block; width: 2em;}
.questionNumber{font-size: small;}
.oldQuestion{
    opacity: 0.5;
}
.questionScore{height: 0.2em; margin-right: 0.1em;}
.green{background-color: green;}
.red{background-color: red;}
h2, h3{color: #04F2FF;}
h4{margin-bottom: 0;}

@media screen and (max-width: 540px) {
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
            store,
            waitTime: 10000, // durée de l'attente en millisecondes
            theTimer: 10,
            questionTotal : 10
        }
    },
    computed: {
        announcement() {
            if(Math.floor(store.questionNumber-1) >= 10){
                return `Votre score final apparaitra dans ${this.theTimer} secondes`
            }
            else{
                return `Prochaine question dans ${this.theTimer} secondes`
            }
        }
    },
    watch: {
        theTimer() {
            if(this.theTimer > 10){
                this.theTimer = 10;
            }
        },
    },
    methods: {
        timer(){
            let time = this.theTimer
            this.theTimer = setInterval(() => {
                time = time <= 0 ? 0 : time - 1;
                this.theTimer = time;
            }, 1000)
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
        }, this.waitTime);
        this.timer()
    }
  
}
</script>