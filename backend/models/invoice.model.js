var db = require("../utils/db");

exports.getInvoicesPerPage = async (startIndex, endIndex) => {
  return await db.load(`SELECT * 
  FROM HoaDon 
  order by HoaDon.MaHD
  OFFSET ${startIndex} ROWS  
  FETCH NEXT ${endIndex} ROWS ONLY`);
};

exports.countInvoices = async () => {
  var result = await db.load("select count(*) as totalNumberOfInvoices from HoaDon");
  return +result[0].totalNumberOfInvoices;
}
