const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
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

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const getTodos = async (req, res) => {
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

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const updateTodo = async (req, res) => {
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

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const deleteTodo = async (req, res) => {
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

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo
};