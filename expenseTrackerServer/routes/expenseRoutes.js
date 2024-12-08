const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { getExpenses, addExpense } = require('../controllers/expenseController');

const router = express.Router();

router.route('/')
    .get(protect, getExpenses) // Protected route
    .post(protect, addExpense); // Protected route

module.exports = router;
