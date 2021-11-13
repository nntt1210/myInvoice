const sql = require("mssql");

const config = require("../config");

const alert = require("alert");

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

exports.add = async function addInvoice(invoice) {
  try {
    let pool = await sql.connect(config);
    let result1 = await pool
      .request()
      .query(
        `insert into HoaDon values('${invoice.MaHD}', '${invoice.MaKH}', '${invoice.NgayLap}', ${invoice.TongTien})`
      );
    alert("Thêm mới thành công");
    sql.close();
  } catch (error) {
    alert(error.message);
    sql.close();
  }
};
