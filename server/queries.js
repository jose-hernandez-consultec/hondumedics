const Pool = require('pg').Pool
const pool = new Pool({
  user: 'josehernandez',
  host: 'localhost',
  database: 'postgres',
  password: 'Vibranium0',
  port: 5432,
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM admin_user', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    });
};

module.exports = {
    getUsers
    //getUserById,
    //createUser,
    //updateUser,
    //deleteUser,
}