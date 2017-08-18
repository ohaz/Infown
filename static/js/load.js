$(document).ready(function() {
    var interval = 600000; // 10 Minutes
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