$(document).ready(function() {
    var interval = 10000;
    var refresh = function () {
        $.ajax({
            url: "/weather/",
            cache: false,
            success: function(html){
                $('.weather').html(html);
                setTimeout(function(){
                    refresh();
                }, interval);
            }
        })
    }
    refresh();
});