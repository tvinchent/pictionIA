<template>
    <img src="../assets/logo.svg" id="logo" alt="logo pictionAi"><br>
    <div class="scoreContent">
        <div id="bubble">
            <img v-if="store.bestScore < 100" src="../assets/interface/faux.svg" class="resultQuestion" alt="faux">
            <img v-else src="../assets/interface/vrai.svg" class="resultQuestion" alt="vrai">
        </div>
        <p>
            <span class="txtTop">La réponse était : </span><br>
        <h3>{{ store.promptAi }}</h3><br>
        <span class="txtTop">Votre meilleur score est de : </span>
        <h2>{{ store.bestScore }}%</h2><br>
        <div class="announcement">{{ announcement }}</div>
        <div id="scoreForeachQuestion">
            <span v-for="(questionScore, idQ) in store.pourcentQuestions" class="questionOneByOne">
                <div class="questionNumber">
                    <span v-if="Boolean(store.questionNumber - idQ - 2)" class="oldQuestion">{{ idQ + 1 }}</span>
                    <span v-else>
                        <h4><strong>{{ idQ + 1 }}</strong></h4>
                    </span>
                </div>
                <div class="questionScore" :class="{ 'green': questionScore == 100, 'red': questionScore < 100 }"></div>
            </span>
            <span v-for="pendingQuestion in this.arrayQuestionTotalWithoutAnsweredQuestions" class="questionOneByOne">
                <div class="questionNumber">
                    <span class="pendingQuestion">{{ pendingQuestion }}</span>
                </div>
                <div class="questionScore grey"></div>
            </span>
        </div>
        </p>
        <div v-if="store.questionNumber - 1 < questionTotal">
            <RouterLink to="/question"><button type="button" class="btn btn-warning btn-lg" id="questionSuivante"
                    v-on:click="clrTimeout">Question suivante <font-awesome-icon icon="fa-solid fa-arrow-right"
                        class="next" /></button></RouterLink>
        </div>
        <div v-else>
            <RouterLink to="/result"><button type="button" class="btn btn-warning btn-lg" id="myResult"
                    v-on:click="clrTimeout">Résultat <font-awesome-icon icon="fa-solid fa-arrow-right"
                        class="next" /></button></RouterLink>
        </div>
        <div class="cleared"></div>
    </div>
</template><!-- push en ajax le pseudo+score -->

<style scoped>
.scoreContent {
    background-color: #151B2C;
    width: var(--pictionAppWidth);
    margin: auto;
    padding: 5em 0 0.5em 0;
    margin-top: 2em;
    border-radius: 1em;
}

#bubble {
    text-align: center;
    margin-top: -7em;
    width: 100%;
}

.resultQuestion {
    width: 5em;
}

p {
    color: white;
    margin: 1em;
}

.announcement {
    background-color: rgba(255, 255, 255, 25%);
    margin: -1em 1em 1em 1em;
    padding: 0.5em;
}

.questionOneByOne {
    display: inline-block;
    width: 1.5em;
}

.questionNumber {
    font-size: small;
}

.oldQuestion,
.pendingQuestion {
    opacity: 0.5;
}

.questionScore {
    height: 0.2em;
    margin-right: 0.1em;
}

.green {
    background-color: green;
}

.red {
    background-color: red;
}

.grey {
    background-color: grey;
}

.txtTop {
    font-weight: 700;
}

h2,
h3 {
    color: #04F2FF;
}

h3 {
    font-weight: 700;
}

h4 {
    margin-bottom: -1px;
}

.next {
    float: right;
    margin-top: 0.3em;
}

@media screen and (max-width: 540px) {
    #logo {
        display: none;
    }

    .scoreContent {
        width: 90%;
    }

    #bubble {
        width: 84vw;
    }

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
            questionTotal: 5,
            myWaitTime: ''
        }
    },
    computed: {
        announcement() {
            if (Math.floor(store.questionNumber - 1) >= this.questionTotal) {
                return `Votre score final apparaitra dans ${this.theTimer}s`
            }
            else {
                return `Prochaine question dans ${this.theTimer}s`
            }
        },
        arrayQuestionTotalWithoutAnsweredQuestions() {
            let arrayQuestionTotal = [1, 2, 3, 4, 5]
            for (let n = 0; n < store.pourcentQuestions.length; n++) {
                arrayQuestionTotal.shift()
            }
            return arrayQuestionTotal
        }
    },
    watch: {
        theTimer() {
            // ugly fix for strange theTimer values at the beginning
            if (this.theTimer > 10) {
                this.theTimer = 10;
            }
        },
    },
    methods: {
        timer() {
            let time = this.theTimer
            this.theTimer = setInterval(() => {
                time = time <= 0 ? 0 : time - 1;
                this.theTimer = time;
            }, 1000)
        },
        clrTimeout() {
            clearTimeout(this.myWaitTime)
        }
    },
    mounted() {
        store.totalPourcent += store.bestScore
        this.myWaitTime = setTimeout(() => {
            if (Math.floor(store.questionNumber - 1) >= this.questionTotal) {
                this.$router.push({ path: '/result' }) //{ name: 'answer', params: { promptAi: this.promptAi, bestScore: this.bestScore } }
            }
            else {
                this.$router.push({ path: '/question' }) //{ name: 'answer', params: { promptAi: this.promptAi, bestScore: this.bestScore } }
            }
        }, this.waitTime);
        this.timer()
    }

}
</script>