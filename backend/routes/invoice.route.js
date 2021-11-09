var express = require("express");
var router = express.Router();

var invoiceModel = require("../models/invoice.model");
const numOfInvoicesPerPage = 1000;

router.get("/:pageNum", async function (req, res) {
  const totalNumOfInvoices = await invoiceModel.countInvoices();
  const numOfPages = Math.ceil(totalNumOfInvoices / numOfInvoicesPerPage);

  const startIndexOfInvoices = numOfInvoicesPerPage * (req.params.pageNum - 1);
  const endIndexOfInvoices = numOfInvoicesPerPage;

  var invoicesPerPage = await invoiceModel.getInvoicesPerPage(startIndexOfInvoices, endIndexOfInvoices);

  var respond = {
    numOfPages,
    currentPageNumber: +req.params.pageNum,
    invoicesPerPage
  }
  res.json(respond);
});

module.exports = router;
