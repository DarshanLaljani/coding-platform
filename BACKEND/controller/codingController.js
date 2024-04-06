const CodingQuestion = require('../model/question');

// Controller function to handle adding a new coding question
exports.addCodingQuestion = async (req, res) => {
    try {
        const { questionName, difficultyLevel, url, conceptType, createdBy } = req.body;
        const codingQuestion = new CodingQuestion({
            questionName,
            difficultyLevel,
            url,
            conceptType,
            createdBy
        });
        await codingQuestion.save();
        res.json(codingQuestion);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

// Controller function to get all questions for the logged-in user
exports.getAllQuestions = async (req, res) => {
    try {
        // Query all questions created by the logged-in user
        const questions = await CodingQuestion.find({ createdBy: req.userId });
        res.json(questions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
