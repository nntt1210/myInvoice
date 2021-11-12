var config = require('./config');
const sql = require('mssql');

async function getOrders() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from HoaDon");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


async function addOrder(order) {

    try {
        let pool = await sql.connect(config);
        let InsertOrders = await pool.request()
            .input('MaHD', sql.Char, order.MaHD)
            .input('MaKH', sql.Char, order.MaKH)
            .input('NgayLap', sql.DateTime, order.NgayLap)
            .input('TongTien', sql.Money, order.TongTien)
            .execute('addOrder');
        return InsertOrders.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}






module.exports = {
    getOrders: getOrders,
    addOrder : addOrder
}