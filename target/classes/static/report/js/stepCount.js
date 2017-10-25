(function ($) {
    "use strict";
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
    });
    $(".dropdown-button").dropdown();

}(jQuery));
$(document).ready(function () {
    $("#input1").change(function () {
        getUser($(this).val());

    });
    $("#button1").click(function () {
        // getMoveCalorie();
    });
    getUser();
});

var token = $("meta[name='_csrf']").attr("content");
var header1 = $("meta[name='_csrf_header']").attr("content");

function getUser(username) {
    $.ajax({
            type: "get",
            url: "/statistics/findAllUser",
            dataType: "json",
            headers: {'X-CSRF-TOKEN': token},
            error: function () {
                alert("error");
            },
            success: function (result) {
                $("#mdiv").empty();
                if ($("#root").length > 0) {
                    $("#root").nextAll().remove();
                } else {
                    $("#pathDiv").append("<a id='root' onclick='getUser()'>/root</a>");
                }
                addTable(result, "user");
                $("#user").datagrid({
                    onDblClickRow: function (rowIndex, rowData) {
                        $("#UID").val(rowData.uid);
                        showStatistics(rowData.uid);
                    }
                })

                if (username != null) {
                    var list2 = [];
                    var list = $("#user").datagrid('getData');
                    list = list["rows"];
                    $.each(list, function (key, value) {
                        if (value.username.indexOf(username) > -1
                            || value.uid.toString().indexOf(username) > -1
                            || value.nickname.indexOf(username) > -1) {
                            list2.push(value);
                        }
                    })
                    $("#user").datagrid('loadData', list2);
                }
            }
        }
    )
}

function showStatistics(uid) {
    $.ajax({
        type: "get",
        url: "/statistics/findByUserId",
        dataType: "json",
        headers: {
            'X-CSRF-TOKEN': token,
            'userId': uid
        },
        error: function () {
            alert("error");
        },
        success: function (result) {
            $("#mdiv").empty();
            if ($("#pathStatistics").length > 0) {
                $("#pathStatistics").text("/" + uid);
                $("#pathStatistics").nextAll().remove();
            }
            else {
                $("#pathDiv").append("<a id='pathStatistics' onclick='showStatistics($(\"#UID\").val());'>/" + uid + "</a>");
            }
            var game = result["game"];
            $.each(game, function (key, value) {
                value.competitionTime = datetimeFormat(value.competitionTime);
            })
            addTable(game, "game");
            $("#game").datagrid({
                onDblClickRow: function (rowIndex, rowData) {
                    getMoveCalorie(rowData.statisticsId);
                }
            })
            var practice = result["practice"];
            $.each(practice, function (key, value) {
                value.createTime = datetimeFormat(value.createTime);
            })
            addTable(practice, "practice");
            $("#practice").datagrid({
                onDblClickRow: function (rowIndex, rowData) {
                    getMoveCalorie(rowData.statisticsId);
                }
            })
        }
    })
}

function getMoveCalorie(id) {
    $.ajax({
        type: "get",
        url: "/statistics/getMoveCalorie",
        dataType: "json",
        headers: {
            'X-CSRF-TOKEN': token,
            id: id
        },
        error: function () {
            alert("error");
        },
        success: function (result) {
            $("#mdiv").empty();
            if ($("#pathMoveCalorie").length > 0) {
                $("#pathMoveCalorie").text("/" + id);
            }
            else {
                $("#pathDiv").append("<a id='pathMoveCalorie'>/" + id + "</a>");
            }
            $.each(result, function (key, value) {
                var list = eval(value);
                $.each(list, function (key1, value1) {
                    value1.startTime = datetimeFormat(value1.startTime);
                    value1.endTime = datetimeFormat(value1.endTime);
                    value1.intervalTime = value1.intervalTime / 1000;
                });
                result[key] = JSON.stringify(list);
                addTable(result[key], key);
            })
        }
    })
}

function addTable(value, id) {
    var columns = dynamicColumns(value);
    var columns2 = [];
    columns2.push(columns);
    var newTable = "<table id=" + id + "></table>";
    var newB = "<b>" + id + "</b>";
    $("#mdiv").append(newB);
    $("#mdiv").append(newTable);
    var list = eval(value);
    $("#" + id).datagrid({
        fit: false,
        fitColumns: true,
        rownumbers: true,
        singleSelect: true,
        border: false,
        striped: true,
        autoRowHeight: false,
        columns: columns2
    });
    $("#" + id).datagrid('loadData', list);
}

function dynamicColumns(data) {
    var result = [];
    data = eval(data);
    if (data[0] != null) {
        var obj = data[0];
        $.each(obj, function (key) {
            var tmp = {
                field: key,
                title: key,
                width: 150
            };
            result.push(tmp);
        })
    }
    return result;
}

