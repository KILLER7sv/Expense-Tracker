const Expense = require('../models/expenseModel');

const getExpenses = async (req, res) => {
    const expenses = await Expense.find({ user: req.user.id });
    res.json(expenses);
};

const addExpense = async (req, res) => {
    const { description, amount, date } = req.body;

    const expense = new Expense({
        user: req.user.id,
        description,
        amount,
        date,
    });

    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
};

module.exports = { getExpenses, addExpense };
