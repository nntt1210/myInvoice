var db = require("../utils/db");

exports.all = () => {
  return db.load("select * from SanPham");
};

// exports.single = (id) => {
//   return db.load(`select * from SanPham where MaSP = ${id}`);
// };

// exports.add = (entity) => {
//   return db.add("SanPham", entity);
// };

// exports.del = (id) => {
//   return db.del("SanPham", "MaSP", id);
// };

// exports.patch = (id, entityWoId) => {
//   return db.patch("SanPham", "MaSP", id, entityWoId);
// };
