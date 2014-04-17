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

    /* Font Families */
    var fonts = [
        'Droid Sans',
        'Modern Pictogram' 
    ];

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

        /* On Keyup */
        $('#text, #fontsize, #fontheight, #fontwidth, #logocolor').keyup(function(){
            buildCanvas();
        });
        /* On change of the font */
        $('#fontfamily').change(function(){
            buildCanvas();
        });

        /* Populates the font */
        $.each( fonts,function(key, value) {    
            var option = '<option value="'+value+'">' + value + '</option>';
            $('#fontfamily').append(option);
        });

        // On clicking the button
        $('#create-image').click(function(){
            var dataURL = document.getElementById('logo').toDataURL("image/png");
            $('#img-logo').html('');
            $('#img-logo').append($('<img/>', { src : dataURL }));
        });

    });

    function buildCanvas(){
        var _text       =   $('#text').val();
        var _fontfamily =   $('#fontfamily').val();
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
        ctx.font            =   _fontsize + 'px ' + '"' + _fontfamily + '"';
        ctx.textBaseline    =   'middle';
        ctx.textAlign       =   'center';
        ctx.fillStyle       =   _logocolor;
        ctx.fillText(_text, canvas.width/2, canvas.height/2);
    }



});

});