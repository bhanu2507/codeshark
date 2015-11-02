/**
 * Created by bhanu on 15/10/15.
 */
var n = 0;
$(window).scroll(function(){
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        //   if ($(".pagenum:last").val() <= $(".rowcount").val()) {
        //        var pagenum = parseInt($(".pagenum:last").val()) + 1;
        //  getresult('getresult.php?page='+pagenum);
        //        alert(pagenum);

        getresult();
        //   }
        //    }
    }
});

function getresult() {


    var ustring = 'http://localhost:3000/api?str=' + (parseInt($('#loadCount').val()))
//alert(ustring);
    $.ajax({
        //  url: 'http://api.indeed.com/ads/apisearch?publisher=3818743618433097&format=json&q=ui,android,ios,bigdata,mobile,cloud&l=&sort=&radius=&st=&jt=&start=&limit=24&fromage=&filter=&latlong=1&co=in&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2',
        url: ustring,
        dataType: 'json',
        //          data:  {rowcount:$("#rowcount").val()},
        beforeSend: function(){
            $("#loaderDiv").show();
        },
        success: function(data) {
            $("#loaderDiv").hide();
            var items = [];

            $.each(data, function(key, val) {
                if(key == "results") {
                    $.each(data.results, function (k, v) {

                        //items.push('<li><a href="#"><h2>' + v.jobtitle + '</h2><p>' + v.snippet + '</p></a></li>');
                        // var litem = $('<li><a href="#"><h2>' + v.jobtitle + '</h2><p>' + v.snippet + '</p></a></li>');
                        // $('#header ul').append(litem).filter(':last').hide().fadeIn(500);
                        $('#header1 ul').append('<li class="djobsli" style= display:none;><a class="djobslink" href="'+ v.url +'"><h2>' + v.jobtitle + '</h2><p>' + v.snippet + '</p></a></li>');
                        //alert('e');
                        //litem.fadeIn(2000);
                        //$('#header ul').append('<li><a href="#"><h2>' + v.jobtitle + '</h2><p>' + v.snippet + '</p></a></li>').children(':last').hide().fadeIn(1000);
                    });

                }
            });

            animateLI($('ul#displayJobs li:first'));
            function animateLI($li) {
//alert($li.show());
                //$li.show();
                $li.fadeIn(250).promise().done(function () {
                    if(!$li.next().length) return;
                    animateLI($li.next());
                });
            }

            /*
             $('<ul/>', {
             'class': 'interest-list',
             html: items.join('')
             }).appendTo('body').hide().fadeIn(3000);*/
            $('#loadCount').val(parseInt($('#loadCount').val()) + 24);
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