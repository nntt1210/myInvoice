$("#btnSave").on("click", function () {
  var objToPost = {
    MaHD: $("#txtHD").val(),
    MaKH: $("#txtKH").val(),
    NgayLap: $("#txtNgayLap").val(),
    TongTien: 500000,
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
      alert("invoice added");
    })
    .fail(function (xhr, textStatus, error) {
      console.log(textStatus);
      console.log(error);
      console.log(xhr);
    });
});
