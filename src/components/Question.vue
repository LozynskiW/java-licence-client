<template>
  <div v-if="this.questionDetails">

  <div class="row">
    <div class="col s12 m6">

      <div class="card blue-grey darken-1">

        <div class="card-content white-text">
          <span class="card-title">{{ questionDetails.subject }}</span>
          <p>{{ questionDetails.question }}</p>
        </div>

        <div class="card-action">

          <form action="#">

            <p v-for="answer in this.answers">
              <label>
                <input type="checkbox" v-model="userAnswer" />
                <span>{{ answer }}</span>
              </label>
            </p>

          </form>

          <p>{{ userAnswer }}</p>
          <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
          </button> 
        </div>

      </div>

    </div>
  </div>
    
    <div>
        {{ questionDetails }}
    </div>

  </div>

</template>

<script>

import M from 'materialize-css'

import questionService from '../service/QuestionService.js'

export default {

  name: "Question",

  components: {},

  props: {
  },

  data() {
    return {
      questionDetails: null,
      answers: []
    }
  },

  methods: {
    async getRandomQuestionFromService() {

        const res = await questionService.getRandomQuestion();
        this.questionDetails = res.data;
    },

    fillAnswersList() {

      let answersList = [];

      this.questionDetails.badAnswers.forEach(badAnswer => {
        answersList.push(badAnswer)
      });

      answersList.push(this.questionDetails.goodAnswer)

      this.answers = this.shuffleArray(answersList);
    },

    shuffleArray(array) {

      for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 

      return array; 
    },

    checkAnswer() {


    }
  },

  async mounted() {
    M.AutoInit()
    await this.getRandomQuestionFromService();
    this.fillAnswersList();
  }

}

</script>


<style scoped>

</style>