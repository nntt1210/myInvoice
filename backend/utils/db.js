const sql = require("mssql");

const config = require("../config");

sql.on("error", (err) => {
  console.log(err.message);
});

exports.load = async function getListProductAsyncFunction(sqlQuery) {
  try {
    let pool = await sql.connect(config);
    let result1 = await pool.request().query(sqlQuery);
    sql.close();
    return result1.recordsets[0];
  } catch (error) {
    console.log(error.message);
    sql.close();
  }
};

// exports.add = (tableName, entity) => {
//   return new Promise((resolve, reject) => {
//     var sqlQuery = `insert into ${tableName} set ?`;
//     var connection = createConnection();
//     // connection.connect();
//     connection.request().query(sqlQuery, entity, (error, results) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results.insertId);
//       }
//       // connection.end();
//       sql.close();
//     });
//   });
// };

// exports.del = (tableName, idField, id) => {
//   return new Promise((resolve, reject) => {
//     var sql = `delete from ${tableName} where ${idField} = ?`;
//     var connection = createConnection();
//     connection.connect();
//     connection.query(sql, id, (error, results) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results.affectedRows);
//       }
//       connection.end();
//     });
//   });
// }

// exports.patch = (tableName, idField, id, entityWoId) => {
//   return new Promise((resolve, reject) => {
//     var sql = `update ${tableName} set ? where ${idField} = ?`;
//     var connection = createConnection();
//     connection.connect();
//     connection.query(sql, [entityWoId, id], (error, results) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results.changedRows);
//       }
//       connection.end();
//     });
//   });
// }
