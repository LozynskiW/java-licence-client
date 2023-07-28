import axios from "axios";

const questionService = {

    async getRandomQuestion () {
        
        try {
            return await axios({
                method: "get",
                url: "/api/javalicence/question/random"
            })

        } catch (err) {

            console.log(err)
        }

    }
}

//const questionService = new QuestionService()

export default questionService