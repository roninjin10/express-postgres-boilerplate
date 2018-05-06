let questionsController = {
    get: {},
    post: {},
    patch: {}
};

questionsController.get.questions = (req, res) => {
    // questions should have a query string
};

questionsController.get.question = (req, res) => {
    // question id can be accessed by req.params.qid
};

questionsController.post.question = (req, res) => {
    // should post question
};

questionsController.patch.question = (req, res) => {
    // should patch a question
};

export default questionsController