jQuery(document).ready(function($) {

    $('.lightbox_trigger').click(function(e) {

        e.preventDefault();

        //Get clicked link src
        var image_src = $(this).attr("src");

        if ($('#lightbox').length > 0) { // #lightbox exists

            //place href as img src value
            $('#content').html('<img src="' + image_src + '" />');

            $('#lightbox').show();
        }

        else { //#lightbox does not exist - create and insert (runs 1st time only)

            //create HTML markup for lightbox window
            var lightbox =
            '<div id="lightbox">' +
                '<div id="content">' + //insert clicked link's href into img src
                    '<img src="' + image_src +'" />' +
                '</div>' +
            '</div>';

            //insert lightbox HTML into page
            $('body').append(lightbox);
        }

    });

    //Click anywhere on the page to get rid of lightbox window
    $('body').on('click', '#lightbox', function() { //must use on, as the lightbox element is inserted into the DOM
        $('#lightbox').hide();
    });

});
