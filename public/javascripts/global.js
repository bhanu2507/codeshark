/**
 * Created by bhanu on 15/10/15.
 */

$(window).scroll(function(){
    if ($(window).scrollTop() == $(document).height() - $(window).height()){
    //    if($(".pagenum:last").val() <= $(".rowcount").val()) {
    //        var pagenum = parseInt($(".pagenum:last").val()) + 1;
          //  getresult('getresult.php?page='+pagenum);
    //        alert("end");
            getresult();
     //   }
    }
});

function getresult() {

    //$('#clickme').click(function() {

        /*
         $.getJSON('data19.json', function(data) {

         var items = [];

         $.each(data, function(key, val) {

         items.push('<li id="' + key + '">' + val + '</li>');

         });

         $('<ul/>', {
         'class': 'interest-list',
         html: items.join('')
         }).appendTo('body');

         });
         */

        $.ajax({
            url: 'http://api.indeed.com/ads/apisearch?publisher=3818743618433097&format=json&q=ui,android,ios,bigdata,mobile,cloud&l=&sort=&radius=&st=&jt=&start=&limit=25&fromage=&filter=&latlong=1&co=in&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2',
            dataType: 'json',
            success: function(data) {
                var items = [];

                $.each(data, function(key, val) {
                        if(key == "results") {
                            $.each(data.results, function (k, v) {

                                items.push('<li><a href="#"><h2>' + v.jobtitle + '</h2><p>' + v.snippet + '</p></a></li>');
                            });
                       }
                });

                $('<ul/>', {
                    'class': 'interest-list',
                    html: items.join('')
                }).appendTo('body');

            },
            statusCode: {
                404: function() {
                    alert('There was a problem with the server.  Try again soon!');
                }
            }
        });
    };
//);

//};