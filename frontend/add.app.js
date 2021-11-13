function formatDate(input) {
  var datePart = input.match(/\d+/g),
    year = datePart[0].substring(0, 4), // get only two digits
    month = datePart[1],
    day = datePart[2];

  return day + "/" + month + "/" + year;
}

$("#btnSave").on("click", function () {
  var objToPost = {
    MaHD: $("#txtHD").val(),
    MaKH: $("#txtKH").val(),
    NgayLap: formatDate($("#txtNgayLap").val()),
    TongTien: parseInt($("#txtTongTien").val()),
  };

  $.ajax({
    url: "http://localhost:3000/sites/add",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(objToPost),
    dataType: "json",
    timeout: 10000,
  })
    .done(function (data) {
      console.log(data);
      // alert("invoice added");
    })
    .fail(function (xhr, textStatus, error) {
      console.log(textStatus);
      console.log(error);
      console.log(xhr);
    });
});
