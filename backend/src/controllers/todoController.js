const Todo = require("../models/Todo");

const createTodo = async (req, res, next) => {
    try {
        const todo = await Todo.create({
            ...req.body,
            owner: req.user.id
        });

        return res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: todo
        });

    } catch (err) {
        next(err);
    }
};

const getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find({
            owner: req.user.id
        })
            .select("-__v")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: todos.length,
            data: todos
        });

    }
    catch(err){
        next(err);
    }
};

const updateTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findOneAndUpdate(
            {
                _id: req.params.id,
                owner: req.user.id
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            data: todo
        });

    }
    catch(err){
        next(err);
    }
};

const deleteTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findOneAndDelete({
            _id: req.params.id,
            owner: req.user.id
        });

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Todo deleted successfully"
        });

    }
    catch(err){
        next(err);
    }
};

module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo
};