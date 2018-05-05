import questionsController from '../controller/questions'
<<<<<<< fdf76dda6c06dc28e653c9eb7117a43d0ddbd948
=======

>>>>>>> merging database

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