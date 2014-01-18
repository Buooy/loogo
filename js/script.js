requirejs.config({
    appDir: ".",
    baseUrl: "js",
    paths: { 
        /* Load jquery from google cdn. On fail, load local file. */
        'jquery': ['http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min', 'libs/jquery-min'],
        /* Load bootstrap from cdn. On fail, load local file. */
        'bootstrap': ['http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min', 'libs/bootstrap-min'],
        /* Load Google WebFont from cdn. On fail, load local file. */
        'webfont': ['http://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont', 'libs/webfont-min']
    },
    shim: {
        /* Set bootstrap dependencies (just jQuery) */
        'bootstrap' : ['jquery']
    }
});

require(['jquery', 'bootstrap','webfont'], function($) {
    
$(function(){

    /* Get the webfonts */
    WebFontConfig = {
        active: function(){
            buildCanvas();  // Build the canvas
        },
        google: {
            families: [
                'Droid Sans'
            ]
        }
    };
    WebFont.load(WebFontConfig);

    // On document load
    $(document).ready(function(){

        /* Set Default values */
        $('#fontsize').val('20');
        $('#logoheight').val('200');
        $('#logowidth').val('200');

        $('#text, #fontsize, #fontheight, #fontwidth, #logocolor').keyup(function(){
            buildCanvas();
        });

    });

    function buildCanvas(){
        var _text       =   $('#text').val();
        var _fontsize   =   $('#fontsize').val();
        var _text       =   $('#text').val();
        var _logoheight =   $('#logoheight').val();
        var _logowidth  =   $('#logowidth').val();
        var _logocolor  =   $('#logocolor').val();
        var _backgroundcolor  =   $('#backgroundcolor').val();

        var canvas      =   $('#logo').get(0);

        // Resize & recolor the canvas
        $('#logo').css('background-color',_backgroundcolor);
        canvas.height   =   (_logoheight == '') ? 150 : _logoheight;
        canvas.width    =   (_logowidth == '') ? 150 : _logowidth; 

        var ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font            =   _fontsize + 'px "Droid Sans"';
        ctx.textBaseline    =   'middle';
        ctx.textAlign       =   'center';
        ctx.fillStyle       =   _logocolor;
        ctx.fillText(_text, canvas.width/2, canvas.height/2);
    }


});

});