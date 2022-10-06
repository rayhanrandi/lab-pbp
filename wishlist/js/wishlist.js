// $.getJSON({ 
//     type: 'GET', 
//     url: 'fixtures/initial_wishlist_data.json', 
//     data: { get_param: 'value' }, 
//     dataType: 'json',
//     success: function (data) { 
//         $.each(data, function(id, barang) {
//             document.getElementById("nama_barang") = barang.nama_barang;
//             document.getElementById("harga_barang") = barang.harga_barang;
//             document.getElementById("deskripsi_barang") = barang.deskripsi;
//         });
//     }
// });

// // var dataBarang = 

$(document).ready(function(){
    $("button").click(function(){
      $.get("{% url 'wishlist:show_json' %}", function (data) {
          data.map((singleData) =>
          $("table").append(`<tr>
          <td>${singleData.fields.nama_barang}</td>
          <td>${singleData.fields.harga_barang}</td>
          <td>${singleData.fields.deskripsi}</td>
          </tr>`)
          );
          });
    });
  });

// // $.getJSON({
// //     $.each(data, $.parseJSON('fixtures/initial_wishlist_data.json') {
// //         document.getElementById("nama_barang") = data.nama_barang;
// //         document.getElementById("harga_barang") = data.harga_barang;
// //         document.getElementById("deskripsi_barang") = data.deskripsi;
// //     });
// // });


// // $.getJSON("fixtures/initial_wishlist_data.json", function(a) {
// //     var quote = a[0].content;
// //     var author = a[0].title;
// //     var quoteHTML = $('<div class="quote"><div class="quoteBody">'+quote+'</div><div class="quoteAuthor">'+author+'</div>');
// //     $('#quotes').append(quoteHTML);
// // });