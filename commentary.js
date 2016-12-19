$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $('#btn-comment').click(function () {
    if($('#commentary').hasClass('hidden')) {
        $('#commentary').removeClass('hidden')
    }
    else {
    $('#commentary').addClass('hidden');
    }

    });

});
