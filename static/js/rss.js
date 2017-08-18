$(document).ready(function() {
    var interval = 600000; // 10 Minutes
    var refresh = function () {
        $('#divRss').FeedEk({
            FeedUrl:'https://krebsonsecurity.com/feed/',
            MaxCount : 5,
            ShowDesc : true,
            ShowPubDate:true,
            DescCharacterLimit:100,
            TitleLinkTarget:'_blank',
        });
    }
    refresh();
});