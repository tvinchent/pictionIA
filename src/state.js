import { reactive } from 'vue'

export const store = reactive({
  questionNumber: 1,
  pourcentQuestions : Array,
  promptAi: '',
  bestScore: 0
})