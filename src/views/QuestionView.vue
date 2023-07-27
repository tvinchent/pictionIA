<template>
  <img src="../assets/logo.svg" id="logo" alt="logo pictionAi">
  <div class="questionContent">
    <div class="fullwidth">
        <img :src="imageAi" class="ai" alt="devinette">
    </div>
    <br>
    <div class="progress">
        <div :class="resClass" class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" id="progressPrompt" style="width: 0;"><div id="insideHelp">{{ help }}</div></div>
    </div>
    <br>
    <form v-on:submit.prevent>
            <input type="text" :placeholder="placeholderAi" class="form-control input" v-model="promptUser" ref="focusMe" aria-disabled="false" :disabled="disabled"><!-- Guess the prompt !  -->
    </form>
  </div>
</template>

<style scoped>
.questionContent{width: var(--pictionAppWidth); margin: auto;}
.bg-danger{background-color: #FC918F !important;}
.ai{max-width: 100%;}

.fixed-bottom{height: 3em; padding: 1em; background-color: blue; border: 1px solid grey;}
.success{color: rgb(86, 168, 190);}
.error{color: pink;}
h2{color: lightgrey;}
#insideHelp{text-align: center; color: black; font-size: 1.3em; width: var(--pictionAppWidth); padding: 1em;
    color: white; font-weight: bold; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);}
.progress{height: 40px; background-color: #FFA9B6;}

@media screen and (max-width: 540px) {
  #logo{
        display: none;
    }
  .questionContent{width: 100%; margin: auto;}
  #insideHelp{width: 90vw;}
  .ai{
    max-height: 230px;
	width: 100vw;
	object-fit: cover;
}
}
</style>

<script>
import { store } from '../state.js'

export default{
  data() {
      return {
        store,
        chooseTime: 20,
        promptUser: '',
        api: '',
        imageAi : '',
        promptAi : '',
        placeholderAi : '',
        resClass: 'bg-danger',
        currentPourcentQuestion: 0,
        timePourcent: '0',
        help: '',
        disabled: false,
        timing: '',
        myTimer: '',
        bestScore: 0
      }
  },
  watch: {
      promptUser() {
          this.currentPourcentQuestion = this.similarity(this.promptAi, this.promptUser)
          this.help = 'Réponse correcte à '+ this.currentPourcentQuestion +'%'
          if(this.currentPourcentQuestion > this.bestScore){
              this.bestScore = this.currentPourcentQuestion
          }
          if(this.promptUser.toLowerCase().trim() == this.promptAi.toLowerCase().trim()){
              this.resClass = 'bg-success'
              this.disabled = true
              clearInterval(this.myTimer)
              this.bestScore = 100
              this.timing = 100
          }
      },
      timing(){
          document.getElementById('progressPrompt').style.width = this.timing+'%'
          if(this.timing == 100){
            this.disabled = true
            store.questionNumber++
            store.promptAi = this.promptAi
            store.bestScore = this.bestScore
            store.pourcentQuestions.push(this.bestScore)
            setTimeout(() => {
              this.$router.push({ path: '/answer'})
            }, 1000);           
          }
      }

  },
  methods: {
      async fetchData() {
          this.api = null
          const res = await fetch(`./../api.json`)
          this.api = await res.json()
          let rdmNumber = Math.floor(Math.random() * this.api.length)
          this.imageAi = this.api[rdmNumber].image // dalle2.webp
          this.promptAi = this.api[rdmNumber].prompt // armchair avocado, monkey astronaut
          this.placeholderAi = this.api[rdmNumber].indice
      },
      similarity(s1, s2) {
          var longer = s1;
          var shorter = s2;
          if (s1.length < s2.length) {
              longer = s2;
              shorter = s1;
          }
          var longerLength = longer.length;
          if (longerLength == 0) {
              return 1.0;
          }
          return Math.trunc((longerLength - this.editDistance(longer, shorter)) / parseFloat(longerLength)*100);    
      },
      editDistance(s1, s2) {
          s1 = s1.toLowerCase();
          s2 = s2.toLowerCase();

          var costs = new Array();
          for (var i = 0; i <= s1.length; i++) {
              var lastValue = i;
              for (var j = 0; j <= s2.length; j++) {
              if (i == 0)
                  costs[j] = j;
              else {
                  if (j > 0) {
                  var newValue = costs[j - 1];
                  if (s1.charAt(i - 1) != s2.charAt(j - 1))
                      newValue = Math.min(Math.min(newValue, lastValue),
                      costs[j]) + 1;
                  costs[j - 1] = lastValue;
                  lastValue = newValue;
                  }
              }
              }
              if (i > 0)
              costs[s2.length] = lastValue;
          }
          return costs[s2.length];
      },
      timer(){
          let time = this.chooseTime
          let timeDisabled = time+2
          this.myTimer = setInterval(() => {
              let timePourcent = parseInt(time * 100 / this.chooseTime, 10);
              this.timing = 100 - timePourcent;
              time = time <= 0 ? 0 : time - 1
              timeDisabled = timeDisabled <= 0 ? 0 : timeDisabled - 1
              if(timeDisabled<=0) {
                  this.disabled=true
              }
          }, 1000)
      }
  },
  mounted() {
    if(store.questionNumber == 1){
      // reinit store
      store.pourcentQuestions = []
      store.totalPourcent = 0
      store.bestScore = 0
    }
    this.$nextTick(() => this.$refs.focusMe.focus())
    this.fetchData()
    this.timer()
  }
}
</script>