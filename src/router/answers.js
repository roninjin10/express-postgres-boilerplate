import answersController from '../controller/answers'

const answersRouter = (req, res) => {

  const { answerid, userid, comments } = req.query;

  if(answerid){
      if(comments){
        answersController.get.commentsByAnswerId(req, res)
      } else {
        answersController.get.answerByAnswerId(req, res)
      }
  } else if (userid) {
    answersController.get.answersByUserId(req, res)
  } else {
    answersController.get.allAnswers(req, res)
  }
}

export default answersRouter;