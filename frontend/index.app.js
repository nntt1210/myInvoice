// $('#list').on('click', '.delSite', function () {
//   var button = $(this);
//   var id = button.data('id');
//   $.ajax({
//     url: 'http://localhost:3000/sites/' + id,
//     type: 'DELETE',
//     dataType: 'json',
//     timeout: 10000,
//   }).done(function (data) {
//     button.closest('tr').remove();
//   }).fail(function (xhr, textStatus, error) {
//     console.log(textStatus, error, xhr);
//   });
// })

// var focusedRow;

// $('#siteModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget);
//   var id = button.data('id');
//   focusedRow = button.closest('tr');

//   var modal = $(this);
//   var url = 'http://localhost:3000/sites/' + id;
//   $.ajax(url)
//     .done(function (data) {
//       modal.find('#txtId').val(id);
//       modal.find('#txtName').val(data.name);
//       modal.find('#txtUrl').val(data.url);
//     }).fail(function (err) {
//       console.log(err);
//     });
// })

// $('#btnSave').on('click', function () {
//   var id = $('#txtId').val();
//   var objToPatch = {
//     name: $('#txtName').val(),
//     url: $('#txtUrl').val()
//   }

//   $.ajax({
//     url: 'http://localhost:3000/sites/' + id,
//     type: 'PATCH',
//     contentType: 'application/json',
//     data: JSON.stringify(objToPatch),
//     dataType: 'json',
//     timeout: 10000,
//   }).done(function (data) {
//     if (focusedRow) {
//       focusedRow.find('td').each(function (idx, td) {
//         switch (idx) {
//           case 0: // name
//             $(td).html(data.name);
//             break;

//           case 1: // url
//             $(td).html(data.url);
//             break;

//           default:
//             break;
//         }
//       });
//     }
//     $('#siteModal').modal('hide');
//   }).fail(function (xhr, textStatus, error) {
//     console.log(textStatus);
//     console.log(error);
//     console.log(xhr);
//   });
// })
