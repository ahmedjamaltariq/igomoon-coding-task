(function ($) {

    /* Starting node in tree */
    var node = $('body');

    /* Check if night mode is already on or not */
    if($("#night-mode-toggle").is(":checked")){

        /* If its already on, then enable night mode if its in the defined hour range */

        var night_start = $("#night-start").val();
        var night_end = $("#night-end").val();

        var time = new Date();
        var current_hour = time.getHours();

        if(current_hour >= night_start || current_hour <= night_end){
            nightMode(node);
        }
    }

    /* Keep track of toggle change event */
    $("#night-mode-toggle").change(function() {

        /* If checked the apply night mode otherwise day mode*/
        if(this.checked) {
            nightMode(node);
        }else{
            dayMode(node);
        }
    });

    function nightMode(node){

        /* Parse through each node in frontier and apply night mode stylings on it */
        node.each(function () {
            var rgb = $(this).css('backgroundColor').replace('rgb(','').replace(')','');
            var rgbArr = rgb.split(',');
            var rgbNew = jQuery.map(rgbArr, function(val) {
                if(val > 100){

                    /* Decreasing the bright level */
                    return val/6;
                }else{

                    /* Increasing the bright level */
                    return val + 130;
                }
            });

            /* Imploding the RGB factors */
            var rgbStr = rgbNew.join(',');

            /* Applying new stylings to the current node */
            $(this).css({background: 'rgb('+rgbStr+')',border: '1px solid rgb('+rgb+')' ,color:'rgb('+rgb+')'});

            /* If the current node has children, dig more deep */
            if ($(this).children().length > 0 ) {

                /* Recursively calling for the child nodes */
                nightMode($(this).children())
            }else{
                return false;
            }
        });
    }


    function dayMode(node){

        /* Parse through each node in frontier and apply day mode stylings on it */
        node.each(function () {
            var rgb = $(this).css('backgroundColor').replace('rgb(','').replace(')','');
            var rgbArr = rgb.split(',');
            var rgbNew = jQuery.map(rgbArr, function(val) {
                if(val < 100){

                    /* Reverting back the bright level */
                    return val*6;
                }else{

                    /* Reverting back the bright level */
                    return val - 130;
                }
            });

            /* Imploding the RGB factors */
            var rgbStr = rgbNew.join(',');

            /* Applying new stylings to the current node */
            $(this).css({background: 'rgb('+rgbStr+')',color:'rgb('+rgb+')'});

            /* If the current node has children, dig more deep */
            if ($(this).children().length > 0 ) {

                /* Recursively calling for the child nodes */
                dayMode($(this).children())
            }else{
                return false;
            }
        });
    }
})(jQuery);