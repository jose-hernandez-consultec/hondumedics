const Pool = require('pg').Pool
const pool = new Pool({
  user: 'lmuoitwffydlio',
  host: 'ec2-174-129-32-215.compute-1.amazonaws.com',
  database: 'd5do7g2h9ar8dm',
  password: '91c4e02f1115da2e24c112fd51e6543c662d4e9c56d4a81622944c436e4c67f4',
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