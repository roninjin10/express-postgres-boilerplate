let questionsController = {
  get: {},
  post: {},
  patch: {}
};

questionsController.get.commentsByQuestionId = (req, res) => {
    res.sendStatus(200).end()
};

questionsController.get.answersByQuestionId = (req, res) => {
    res.sendStatus(200).end()
}

questionsController.get.questionByQUestionId = (req, res) => {
    res.sendStatus(200).end()
}

questionsController.get.questionsByUserId = (req, res) => {
    res.sendStatus(200).end()
}

questionsController.get.allQuestions = (req, res) => {
    res.sendStatus(200).end()
}

export default questionsController