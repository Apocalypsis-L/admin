/*------------------------------------------------------
    Author : www.webthemez.com
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */

(function ($) {

    "use strict";
    var mainApp = {
        initFunction: function () {
            /* MORRIS LINE CHART
			----------------------------------------*/
            Morris.Line({
                element: 'morris-line-chart',
                data: list,
                xkey: 'loginDate',
                ykeys: ['count'],
                labels: ['Total login'],
                fillOpacity: 0.6,
                hideHover: 'auto',
                behaveLikeLine: true,
                resize: true,
                pointFillColors: ['#ffffff'],
                pointStrokeColors: ['black'],
                lineColors: ['#8ceab9']
            });
            $('.line-chart').cssCharts({type: "line"});
        },
        initialization: function () {
            mainApp.initFunction();
        }
    }
    // Initializing ///
    $(document).ready(function () {
        $(".dropdown-button").dropdown();
        $("#sideNav").click(function () {
            if ($(this).hasClass('closed')) {
                $('.navbar-side').animate({left: '0px'});
                $(this).removeClass('closed');
                $('#page-wrapper').animate({'margin-left': '260px'});

            }
            else {
                $(this).addClass('closed');
                $('.navbar-side').animate({left: '-260px'});
                $('#page-wrapper').animate({'margin-left': '0px'});
            }
        });

        // mainApp.initFunction();
    });

    $(".dropdown-button").dropdown();

    var list;
    var token = $("meta[name='_csrf']").attr("content");
    var header1 = $("meta[name='_csrf_header']").attr("content");
    $.ajax({
        type: "get",
        url: "/report/userlogin",
        dataType: "json",
        headers: {'X-CSRF-TOKEN': token},
        error: function () {
            alert("error");
        },
        success: function (result) {
            // alert(result);
            list = eval(result);
            $.each(list, function (name, value) {
                // alert("name : " + name);
                // alert("count : " + value["count"]);
                // alert("date : " + value["loginDate"]);
            })
            mainApp.initFunction();
        }
    })



}(jQuery));
