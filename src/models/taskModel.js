const pool = require('../database');

class Task {
    static async getAll() {
        const { rows } = await pool.query('SELECT * FROM tasks');
        return rows;
    }

    static async getById(id) {
        const { rows } = await poll.query('SELECT * FROM tasks WHERE id = $1', [id]);
        return rows[0];
    }

    static async create({ title, description, status }) {
        const { rows } = await poll.query('INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *', [title, description, status]);
        return rows[0];
    }

    static async update(id, { title, description, status }) {
        const { rows } = await poll.query('UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *', [title, description, status, id]);
        return rows[0];
    }

    static async delete(id) {
        const { rows } = await poll.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
        return rows[0];
    }
}

module.exports = Task;