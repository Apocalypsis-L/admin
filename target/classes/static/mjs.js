/**
 * ajax获取数据示例
 */
$(function () {
    var token = $("meta[name='_csrf']").attr("content");
    var header1 = $("meta[name='_csrf_header']").attr("content");
    alert("ajax");
    $.ajax({
        type: "post",
        url: "/getAll",
        dataType: "json",
        headers: {'X-CSRF-TOKEN': token},
        error: function () {
            alert("error");
        },
        success: function (result) {
            alert(result);
            var list = eval(result);
            alert(list);
            $.each(list, function (name, value) {
                alert("name : " + name);
                alert("value : " + value["id"]);
            })
            // for (var obj in list) {
            //     alert(obj);
            //     var $primary = $("<primary></primary>");
            //     $primary.innerHTML = obj;
            //     $("#div1").append($primary);
            // }
            // forEach(obj:list)
            // {
            //     var $primary = $("<primary></primary>");
            //     $primary.innerHTML =
            //     $("#div1").append($primary);
            // }
            // alert(result);
            // $("#in1").val(result);
        }
    })
})