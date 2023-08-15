const db = require('../model/db');

// create a new database

const setData = async (req, res) => {
    const { username, password } = req.body;
    const { userId } = req.params;
    try {
        const [result] = await db.query("insert into users (username, password, userId) values (?, ?, ?)", [username, password, userId]);
        res.status(201).json({ message: 'User created successfully', userId: result.userId, name: username, password: password });
    } catch (err) {
        res.status(400).json({message: 'Error creating user'})
    }
}

// Fetching Data From The DataBase

const getAllData = async (req, res) => {
    try {
        const [result] = await db.query("select * from users");
        res.status(200).json({ users: result })
    } catch (err) {
        res.status(400).json("error", err)
    }
}

// Checking Data from the DataBase

const login = async (req, res) => {
    console.log("login= >>>>>>>>>>>>>>>>>>>>" ,req.body);
    const { username, password } = req.body;


    try {
        const [results] = await db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

        if (results.length === 1) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (err) {
        res.status(500).json({ message: 'An error occurred', error: err });
    }
}

module.exports = { getAllData, setData, login };