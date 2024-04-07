const express = require('express');
const router = express.Router();
const { addCodingQuestion, getAllQuestions } = require('../controller/codingController');
const userController = require('../controller/userController');
const authenticateUser = require('../middleware/authenticUser');


// Route to add a new coding question
router.post('/codingQuestions', addCodingQuestion);

// Route to get all questions for the logged-in user
router.get('/getallquestion', authenticateUser, getAllQuestions);

// Register a new user
router.post('/register', userController.registerUser);

// Login
router.get('/login', authenticateUser, userController.loginUser);

// Get User Profile
router.get('/profile', userController.getUserProfile);

module.exports = router;