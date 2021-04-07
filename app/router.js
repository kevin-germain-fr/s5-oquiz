const express = require('express');

const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');
const adminController = require('./controllers/adminController');

const adminMiddleware = require('./middlewares/admin');

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/quiz/:id', quizController.quizzPage);
router.post('/quiz/:id', quizController.playQuizz);

router.get('/tags', tagController.tagList);

router.get('/quizzes/tag/:id', quizController.listByTag);

router.get('/signup', userController.signupPage);
router.get('/login', userController.loginPage);

router.post('/signup', userController.signupAction);
router.post('/login', userController.loginAction);

router.get('/disconnect', userController.disconnect);

router.get('/profile', userController.profilePage);

router.get('/admin', adminMiddleware, adminController.adminPage);

module.exports = router;