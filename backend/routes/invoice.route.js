var express = require("express");
var router = express.Router();

var invoiceModel = require("../models/invoice.model");
const numOfInvoicesPerPage = 1000;

function formatDate(obj) {
  var date, day, month, year;
  obj.forEach(element => {
    date = new Date(element.NgayLap);
    day = date.getDate();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    element.NgayLap = day + '-' + month + "-" + year;
  });
}

router.get("/:pageNum", async function (req, res) {
  const totalNumOfInvoices = await invoiceModel.countInvoices();
  const numOfPages = Math.ceil(totalNumOfInvoices / numOfInvoicesPerPage);

  const startIndexOfInvoices = numOfInvoicesPerPage * (req.params.pageNum - 1);
  const endIndexOfInvoices = numOfInvoicesPerPage;

  var invoicesPerPage = await invoiceModel.getInvoicesPerPage(startIndexOfInvoices, endIndexOfInvoices);
  formatDate(invoicesPerPage);
  var respond = {
    numOfPages,
    currentPageNumber: +req.params.pageNum,
    invoicesPerPage
  }
  res.json(respond);
});

module.exports = router;
