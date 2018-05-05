let questionsController = {
    get: {},
    post: {},
    patch: {}
};

questionsController.get.commentsByQuestionId = (req, res) => {
    res.json('These are comments by question id').end()
};

questionsController.get.answersByQuestionId = (req, res) => {
    res.json('These are answers by question id').end()
}

questionsController.get.questionByQuestionId = (req, res) => {
    res.json('This is a question by question id').end()
}

questionsController.get.questionsByUserId = (req, res) => {
    res.json('These are questions by user id').end()
}

questionsController.get.allQuestions = (req, res) => {
    res.json('These are all questions').end()
}

export default questionsController