$(document).ready(function(){
    if($.browser.chrome) {
        } else if ($.browser.mozilla) {
            $('.modal-header').css('position','fixed');
        } else if ($.browser.msie) {
    }

    var optCounter = 0;
    $('.xans-product-option').each(function(optCounter) {
        $(this).find('.panel-heading').attr('id',"head" + optCounter.toString());
        $(this).find('.panel-heading a').attr('href',"#collapse" + optCounter.toString());
        $(this).find('.panel-heading a').attr('aria-controls',"collapse" + optCounter.toString());
        $(this).find('.panel-collapse').attr('id',"collapse" + optCounter.toString());
        $(this).find('.panel-collapse').attr('aria-labelledby',"head" + optCounter.toString());
        $(this).find('.panel-body').append('<ul id="clone"></ul>');
        $(this).find('#clone').attr('id',"clone" + optCounter.toString());
    });
    
    
    $('#collapse1 .panel-body ul li').clone().appendTo('#clone1');
    
    $('#head1 a').attr('aria-expanded','true');
    $('#collapse1').addClass('in');
    
    $('#collapse1 .panel-body ul li').click(function(e) {
        $('#head1 a')[0].click();
        $('#head2 a')[0].click();
    });
    $('#collapse2 .panel-body ul li').click(function(e) {
        $('#head2 a')[0].click();
        $('#head3 a')[0].click();
    });
    $('#collapse3 .panel-body ul li').click(function(e) {
        $('#head3 a')[0].click();
    });
    
    $('.xans-product-detail .panel-body li').append('<p class="modalA" data-toggle="modal" data-target="#myModal">자세히 보기</p><p class="modalA">박스에 담기</p>');
    
    $('.modalA').click(function() {
        /* OPTION EXTREAM */
        if ($(this).parent().attr('option_value') == 'P00000CM000A') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=26 #fullpage");
        }
        else if($(this).parent().attr('option_value') == 'P00000CM000B') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=30 #fullpage");
        }
        else if($(this).parent().attr('option_value') == 'P00000CM000C') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=28 #fullpage");
        }
        else if($(this).parent().attr('option_value') == 'P00000CM000D') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=31 #fullpage");
        }
        else if($(this).parent().attr('option_value') == 'P00000CM000E') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=29 #fullpage");
        }
        else if($(this).parent().attr('option_value') == 'P00000CM000F') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=57 #fullpage");
        }
        else if($(this).parent().attr('option_value') == 'P00000CM000G') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=56 #fullpage");
        }
        /* // OPTION EXTREAM */
        /* OPTION COSTUME */
        else if ($(this).parent().attr('option_value') == 'P00000CL000A') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=41 #fullpage");
        }
        else if($(this).parent().attr('option_value') == 'P00000CL000B') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=40 #fullpage");
        }
        else if($(this).parent().attr('option_value') == 'P00000CL000C') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=44 #fullpage");
        }
        else if($(this).parent().attr('option_value') == 'P00000CL000D') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=47 #fullpage");
        }
        else if($(this).parent().attr('option_value') == 'P00000CL000E') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=48 #fullpage");
        }
        else if($(this).parent().attr('option_value') == 'P00000CL000F') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=49 #fullpage");
        }
        else if($(this).parent().attr('option_value') == 'P00000CL000G') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=52 #fullpage");
        }
        else if($(this).parent().attr('option_value') == 'P00000CL000H') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=53 #fullpage");
        }
        /* // OPTION COSTUME */
        /* OPTION BATHBOMB */
        else if ($(this).parent().attr('option_value') == 'P00000DJ000E') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=32 #ptArea");
        }
        else if($(this).parent().attr('option_value') == 'P00000CK000J') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=33 #ptArea");
        }
        else if($(this).parent().attr('option_value') == 'P00000CK000K') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=34 #ptArea");
        }
        else if($(this).parent().attr('option_value') == 'P00000CK000L') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=35 #ptArea");
        }
        /* // OPTION BATHBOMB */
        /* OPTION MASSAGE OIL */
        else if ($(this).parent().attr('option_value') == 'P00000CG000Q') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=36 #ptArea");
        }
        else if($(this).parent().attr('option_value') == 'P00000CG000R') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=37 #ptArea");
        }
        else if($(this).parent().attr('option_value') == 'P00000CG000S') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=39 #ptArea");
        }
        else if($(this).parent().attr('option_value') == 'P00000CG000T') {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=38 #ptArea");
        }
        /* // OPTION MASSAGE OIL */
        else if(($(this).parent().attr('option_value') == 'P00000CK000M') || ($(this).parent().attr('option_value') == 'P00000CG000U') || ($(this).parent().attr('option_value') == 'P00000CL000I') || ($(this).parent().attr('option_value') == 'P00000CM000H')) {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=58 #ptArea");
        }
        /* OPTION CANDLE */
        else if(($(this).parent().attr('option_value') == 'P00000CK000N') || ($(this).parent().attr('option_value') == 'P00000CG000V')) { 
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=66 #ptArea");
        }
        else if(($(this).parent().attr('option_value') == 'P00000CK000O') || ($(this).parent().attr('option_value') == 'P00000CG000W')) {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=67 #ptArea");
        }
        else if(($(this).parent().attr('option_value') == 'P00000CK000P') || ($(this).parent().attr('option_value') == 'P00000CG000X')) {
            $(".PT").empty();
            $(".PT").load("/product/detail.html?product_no=68 #ptArea");
        }
        /* // OPTION CANDLE */
        else {
            alert('잘못된 접근입니다.');
            $(".PT").empty();
        }
    });
    
    function ToastBuilder(options) {
        // options are optional
        var opts = options || {};
    
        // setup some defaults
        opts.defaultText = opts.defaultText || 'default text';
        opts.displayTime = opts.displayTime || 3000;
        opts.target = opts.target || 'body';
    
        return function (text) {
            $('<div/>')
            .addClass('toast')
            .prependTo($(opts.target))
            .text(text || opts.defaultText)
            .queue(function(next) {
                $(this).css({
                    'opacity': 1
                });
                var topOffset = 64;
                $('.toast').each(function() {
                    var $this = $(this);
                    var height = $this.outerHeight();
                    var offset = 15;
                    $this.css('top', topOffset + 'px');
                    topOffset += height + offset;
                });
                next();
            })
            .delay(opts.displayTime)
            .queue(function(next) {
                var $this = $(this);
                var width = $this.outerWidth() + 20;
                $this.css({
                    'right': '-' + width + 'px',
                    'opacity': 0
                });
                next();
            })
            .delay(600)
            .queue(function(next) {
                $(this).remove();
                next();
            });
        };
    }
    
    // customize it with your own options
    var myOptions = {
        defaultText: '박스에 골라주신 구성품이 담겼습니다!',
        displayTime: 4000,
        target: 'body'
    };
    //position: 'top right',   /* TODO: make this */
    //bgColor: 'rgba(0,0,0,0.5)', /* TODO: make this */
    
    // to get it started, instantiate a copy of
    // ToastBuilder passing our custom options
    var showtoast = new ToastBuilder(myOptions);
    // now you can fire off a toast just calling
    // our new instance passing a string, like this:
    // showtoast('hello, world!');

    // wire it up
    $('#toast-btn').click(function() {
        showtoast($('#textbox').val());
    });
    
    // fires off a toast when you hit enter
    $('#textbox').keypress(function(e) {
        if (e.which == 13) {
            showtoast($('#textbox').val());
            return false;
        }
    });
    
    $('.panel-body ul li a').click(function() {
        showtoast($('#textbox').val());
    });
    
    $('#cartAdd').live('click', function (){
        showtoast($('#textbox').val());
        $(".close")[0].click();
    });
});