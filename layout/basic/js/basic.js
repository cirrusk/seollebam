$(window).load(function() {
    $('#cartAdd').click(function() {
        $('.dropdown').empty();
        $('.dropdown').load('/order/basket.html');
    });
});

