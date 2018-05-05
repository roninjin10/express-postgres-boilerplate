import questionsController from '../controller/questions'

const questionsRouter = (req, res) => {
  
  const { userid, questionid, comments, answers } = req.query
    
  if (questionid) {
    if (comments) {
      questionsController.get.commentsByQuestionId(req, res);

    } else if (answers) {
      questionsController.get.answersByQuestionId(req, res)

    } else {
      questionsController.get.questionByQuestionId(req, res)

    }

  } else if (userid) {
    questionsController.get.questionsByUserId(req, res)

  } else {
    questionsController.get.allQuestions(req, res)

  }
}

export default questionsRouter
