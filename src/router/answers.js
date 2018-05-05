import answersController from '../controller/answers'

const answersRouter = (req, res) => {

  const { answerid, userid, answers, comments } = req.query;

  if(answerid){
      if(comments){
          answersController.get.commentsByAnswerId(req, res)
      } else {
          answersController.get.answerByAnswerId(req, res)
      }
  } else if (userid) {
      answersContoroller.get.answersByUserId(req, res)
  } else {
      answersController.get.allAnswers(req, res)
  }
}

export default answersController;