const numOfPagesPresent = 10;

function getPagination(currentPage, totalPage) {
  var head = `<ul class="pagination float-right">
  <li class="page-item">
    <a class="page-link" href="#" onclick="myFunction(${currentPage - 1})">Previous</a>
  </li>`;
  var tail = `<li class="page-item">
  <a class="page-link" href="#" onclick="myFunction(${currentPage + 1})">Next</a>
</li>
</ul>`;
  if (currentPage === 1) {
    head = `<ul class="pagination float-right">
    <li class="page-item">
    <a class="page-link disabled" href="#">Previous</a>
    </li>`;
  }
  if (currentPage === totalPage) {
    tail = `<li class="page-item">
              <a class="page-link disabled" href="#">Next</a>
            </li>
          </ul>`;
  }

  var i = Math.floor(Number(currentPage - 1) / numOfPagesPresent) * numOfPagesPresent + 1;
  var between = ``;
  var endLoop = i + numOfPagesPresent;
  while (i < endLoop) {
    if (i === currentPage) {
      between += `<li class="page-item">
      <a class="page-link disabled" href="#" onclick="myFunction(${i})">${i}</a>
    </li>`;
    } else {
      between += `<li class="page-item">
      <a class="page-link" href="#" onclick="myFunction(${i})">${i}</a>
    </li>`;
    }
    i++;
  }
  return head + between + tail;
}

$(function () {
  var url = "http://localhost:3000/invoice/1";
  $.ajax(url)
    .done(function (data) {
      var source = document.getElementById("entry-template").innerHTML;
      var template = Handlebars.compile(source);
      var html = template(data);
      $("#list").html(html);
      // console.log(data);
      // console.log(+data.currentPageNumber);
      // console.log(+data.numOfPages);
      var str = getPagination(+data.currentPageNumber, +data.numOfPages);
      // console.log(str);
      document.getElementById("pagination").innerHTML = str;
    })
    .fail(function (err) {
      console.log(err);
    });
});

function myFunction(page) {
  var url = `http://localhost:3000/invoice/${page}`;
  $.ajax(url)
    .done(function (data) {
      var source = document.getElementById("entry-template").innerHTML;
      var template = Handlebars.compile(source);
      var html = template(data);
      $("#list").html(html);

      var str = getPagination(+data.currentPageNumber, +data.numOfPages);
      document.getElementById("pagination").innerHTML = str;
    })
    .fail(function (err) {
      console.log(err);
    });
}
