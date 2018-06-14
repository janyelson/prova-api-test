'use strict';
module.exports = function(app) {
var auth = require('../controllers/auth');
var users = require('../controllers/userController');
app.route('/').all(users.all);
   
// users Routes
app.route('/users')
   .get(users.list_all_users)
   .post(users.create_a_user);
app.route('/users/:userId')
   .get(users.read_a_user)
   .put(users.update_a_user)
   .delete(users.delete_a_user);
app.route('/login')
   .post(users.login);

// tests Routes
var tests = require('../controllers/testController');
app.route('/tests')
   .get(tests.list_all_tests)
   .post(tests.create_a_test);
app.route('/tests/:testId')
   .get(tests.read_a_test)
   .put(tests.update_a_test_open)
   .delete(tests.delete_a_test);
app.route('/tests/user/:userId')
   .get(tests.list_all_tests_by_userId);

// questions Routes
var questions = require('../controllers/questionController');
app.route('/questions')
   .get(questions.list_all_questions)
   .post(questions.create_a_question);
app.route('/questions/:quenstionId')
   .get(questions.read_a_question)
   .put(questions.update_a_question)
   .delete(questions.delete_a_question);

app.route('/questions/topics/:disciplina')
   .post(questions.questions_by_topic);

// answers Routes
var answersAll = require('../controllers/answersController');
app.route('/answersAll')
   .get(answersAll.list_all_answersAll)
   .post(answersAll.create_answers);
app.route('/answersAll/:answersId')
   .get(answersAll.read_answers)
   .put(answersAll.update_answers)
   .delete(answersAll.delete_answers);
app.route('/answersAll/test/:testId')
   .get(answersAll.read_answers_by_test);
};