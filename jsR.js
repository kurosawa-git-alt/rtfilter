function search() {
    let sText = $('#search').val();
    if ("" == sText) {
        $('.content-one').show();
        return;
    }

    $('.content-one').hide();
    $('.content-one[data-keyword*=' + sText + ']').show();
}


$('#search').keyup(function () {
     search();
     return;
});