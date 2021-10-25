$('#btnSave').on('click', function () {
  var objToPost = {
    name: $('#txtName').val(),
    url: $('#txtUrl').val()
  }

  $.ajax({
    url: 'http://localhost:3000/sites',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(objToPost),
    dataType: 'json',
    timeout: 10000,
  }).done(function (data) {
    // console.log(data);
    alert('site added');
  }).fail(function (xhr, textStatus, error) {
    console.log(textStatus);
    console.log(error);
    console.log(xhr);
  });
})