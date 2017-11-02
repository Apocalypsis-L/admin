// $(document).ready(function(){
//     // $(".header").load("header.html");
//     $(".nav-left").load("/nav/nav-left.html",function(){
//         var links = $(".nav-left li a"),
//             index = 0, //默认第一个菜单项
//             //取当前URL最后一个/后面的文件名，pop方法是删除最后一个元素并返回最后一个元素
//             url = location.href.split("?")[0].split("/").pop();
//         if(url){//如果有取到，则进行匹配，否则默认首页（即index所指向的那个）
//             for(var i=0;i<links.length;i++){//遍历menu中的链接地址
//                 if(links[i].href.indexOf(url)!=-1){
//                     index = i;
//                     break;
//                 }
//             }
//         }
//         $(".nav-left li").eq(index).addClass("active");//给对应的<li>增加选中样式
//     })
// })

document.write("<nav class=\"navbar navbar-default top-navbar\" role=\"navigation\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "        <button type=\"button\" class=\"navbar-toggle waves-effect waves-dark\" data-toggle=\"collapse\"\n" +
    "                data-target=\".sidebar-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    "        <a class=\"navbar-brand waves-effect waves-dark\" href=\"/index\"><i\n" +
    "                class=\"large material-icons\">insert_chart</i> <strong>TRACK</strong></a>\n" +
    "\n" +
    "        <div id=\"sideNav\" href=\"\"><i class=\"material-icons dp48\">toc</i></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <ul class=\"nav navbar-top-links navbar-right\">\n" +
    "        <li><a class=\"dropdown-button waves-effect waves-dark\" href=\"#!\" data-activates=\"dropdown4\"><i\n" +
    "                class=\"fa fa-envelope fa-fw\"></i> <i class=\"material-icons right\">arrow_drop_down</i></a></li>\n" +
    "        <li><a class=\"dropdown-button waves-effect waves-dark\" href=\"#!\" data-activates=\"dropdown3\"><i\n" +
    "                class=\"fa fa-tasks fa-fw\"></i> <i class=\"material-icons right\">arrow_drop_down</i></a></li>\n" +
    "        <li><a class=\"dropdown-button waves-effect waves-dark\" href=\"#!\" data-activates=\"dropdown2\"><i\n" +
    "                class=\"fa fa-bell fa-fw\"></i> <i class=\"material-icons right\">arrow_drop_down</i></a></li>\n" +
    "        <li><a class=\"dropdown-button waves-effect waves-dark\" href=\"#!\" data-activates=\"dropdown1\"><i\n" +
    "                class=\"fa fa-user fa-fw\"></i> <b>John Doe</b> <i\n" +
    "                class=\"material-icons right\">arrow_drop_down</i></a></li>\n" +
    "    </ul>\n" +
    "</nav>\n" +
    "<!-- Dropdown Structure -->\n" +
    "<ul id=\"dropdown1\" class=\"dropdown-content\">\n" +
    "    <li><a href=\"#\"><i class=\"fa fa-user fa-fw\"></i> My Profile</a>\n" +
    "    </li>\n" +
    "    <li><a href=\"#\"><i class=\"fa fa-gear fa-fw\"></i> Settings</a>\n" +
    "    </li>\n" +
    "    <li><a href=\"/logout\"><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "<ul id=\"dropdown2\" class=\"dropdown-content w250\">\n" +
    "    <li>\n" +
    "        <a href=\"#\">\n" +
    "            <div>\n" +
    "                <i class=\"fa fa-comment fa-fw\"></i> New Comment\n" +
    "                <span class=\"pull-right text-muted small\">4 min</span>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li>\n" +
    "        <a href=\"#\">\n" +
    "            <div>\n" +
    "                <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\n" +
    "                <span class=\"pull-right text-muted small\">12 min</span>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li>\n" +
    "        <a href=\"#\">\n" +
    "            <div>\n" +
    "                <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\n" +
    "                <span class=\"pull-right text-muted small\">4 min</span>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li>\n" +
    "        <a href=\"#\">\n" +
    "            <div>\n" +
    "                <i class=\"fa fa-tasks fa-fw\"></i> New Task\n" +
    "                <span class=\"pull-right text-muted small\">4 min</span>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li>\n" +
    "        <a href=\"#\">\n" +
    "            <div>\n" +
    "                <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\n" +
    "                <span class=\"pull-right text-muted small\">4 min</span>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li>\n" +
    "        <a class=\"text-center\" href=\"#\">\n" +
    "            <strong>See All Alerts</strong>\n" +
    "            <i class=\"fa fa-angle-right\"></i>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "<ul id=\"dropdown3\" class=\"dropdown-content dropdown-tasks w250\">\n" +
    "    <li>\n" +
    "        <a href=\"#\">\n" +
    "            <div>\n" +
    "                <primary>\n" +
    "                    <strong>Task 1</strong>\n" +
    "                    <span class=\"pull-right text-muted\">60% Complete</span>\n" +
    "                </primary>\n" +
    "                <div class=\"progress progress-striped active\">\n" +
    "                    <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"60\"\n" +
    "                         aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n" +
    "                        <span class=\"sr-only\">60% Complete (success)</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li>\n" +
    "        <a href=\"#\">\n" +
    "            <div>\n" +
    "                <primary>\n" +
    "                    <strong>Task 2</strong>\n" +
    "                    <span class=\"pull-right text-muted\">28% Complete</span>\n" +
    "                </primary>\n" +
    "                <div class=\"progress progress-striped active\">\n" +
    "                    <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"28\"\n" +
    "                         aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 28%\">\n" +
    "                        <span class=\"sr-only\">28% Complete</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li>\n" +
    "        <a href=\"#\">\n" +
    "            <div>\n" +
    "                <primary>\n" +
    "                    <strong>Task 3</strong>\n" +
    "                    <span class=\"pull-right text-muted\">60% Complete</span>\n" +
    "                </primary>\n" +
    "                <div class=\"progress progress-striped active\">\n" +
    "                    <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\"\n" +
    "                         aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n" +
    "                        <span class=\"sr-only\">60% Complete (warning)</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li>\n" +
    "        <a href=\"#\">\n" +
    "            <div>\n" +
    "                <primary>\n" +
    "                    <strong>Task 4</strong>\n" +
    "                    <span class=\"pull-right text-muted\">85% Complete</span>\n" +
    "                </primary>\n" +
    "                <div class=\"progress progress-striped active\">\n" +
    "                    <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"85\"\n" +
    "                         aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 85%\">\n" +
    "                        <span class=\"sr-only\">85% Complete (danger)</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li>\n" +
    "</ul>\n" +
    "<ul id=\"dropdown4\" class=\"dropdown-content dropdown-tasks w250\">\n" +
    "    <li>\n" +
    "        <a href=\"#\">\n" +
    "            <div>\n" +
    "                <strong>John Doe</strong>\n" +
    "                <span class=\"pull-right text-muted\">\n" +
    "                                        <em>Today</em>\n" +
    "                                    </span>\n" +
    "            </div>\n" +
    "            <div>Lorem Ipsum has been the industry'secondary standard dummy text ever since the 1500s...</div>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li>\n" +
    "        <a href=\"#\">\n" +
    "            <div>\n" +
    "                <strong>John Smith</strong>\n" +
    "                <span class=\"pull-right text-muted\">\n" +
    "                                        <em>Yesterday</em>\n" +
    "                                    </span>\n" +
    "            </div>\n" +
    "            <div>Lorem Ipsum has been the industry'secondary standard dummy text ever since an kwilnw...</div>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li>\n" +
    "        <a href=\"#\">\n" +
    "            <div>\n" +
    "                <strong>John Smith</strong>\n" +
    "                <span class=\"pull-right text-muted\">\n" +
    "                                        <em>Yesterday</em>\n" +
    "                                    </span>\n" +
    "            </div>\n" +
    "            <div>Lorem Ipsum has been the industry'secondary standard dummy text ever since the...</div>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "    <li class=\"divider\"></li>\n" +
    "    <li>\n" +
    "        <a class=\"text-center\" href=\"#\">\n" +
    "            <strong>Read All Messages</strong>\n" +
    "            <i class=\"fa fa-angle-right\"></i>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "<!--/. NAV TOP  -->\n" +
    "<nav class=\"navbar-default navbar-side\" role=\"navigation\">\n" +
    "    <div class=\"sidebar-collapse\">\n" +
    "        <ul class=\"nav\" id=\"main-menu\">\n" +
    "            <li>\n" +
    "                <a class=\"active-menu waves-effect waves-dark\" href=\"/index\"><i class=\"fa fa-dashboard\"></i>\n" +
    "                    Dashboard</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"/ui-elements\" class=\"waves-effect waves-dark\"><i class=\"fa fa-desktop\"></i> UI Elements</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"/chart\" class=\"waves-effect waves-dark\"><i class=\"fa fa-bar-chart-o\"></i> Charts</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"/tab-panel\" class=\"waves-effect waves-dark\"><i class=\"fa fa-qrcode\"></i> Tabs & Panels</a>\n" +
    "            </li>\n" +
    "\n" +
    "            <li>\n" +
    "                <a href=\"/table\" class=\"waves-effect waves-dark\"><i class=\"fa fa-table\"></i> Responsive Tables</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"/form\" class=\"waves-effect waves-dark\"><i class=\"fa fa-edit\"></i> Forms </a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"#\" class=\"waves-effect waves-dark\"><i class=\"fa fa-sitemap\"></i> Multi-Level Dropdown<span\n" +
    "                        class=\"fa arrow\"></span></a>\n" +
    "                <ul class=\"nav nav-second-level\">\n" +
    "                    <li>\n" +
    "                        <a href=\"#\">Second Level Link</a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <a href=\"#\">Second Level Link</a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <a href=\"#\">Second Level Link<span class=\"fa arrow\"></span></a>\n" +
    "                        <ul class=\"nav nav-third-level\">\n" +
    "                            <li>\n" +
    "                                <a href=\"#\">Third Level Link</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"#\">Third Level Link</a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"#\">Third Level Link</a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"/empty\" class=\"waves-effect waves-dark\"><i class=\"fa fa-fw fa-file\"></i> Empty Page</a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <a href=\"#\" class=\"waves-effect waves-dark\"><i class=\"fa fa-sitemap\"></i> Reports<span\n" +
    "                        class=\"fa arrow\"></span></a>\n" +
    "                <ul class=\"nav nav-second-level\">\n" +
    "                    <li>\n" +
    "                        <a href=\"/report/loginCount\">UserLoginCount</a>\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        <a href=\"/report/stepCount\">UserStepCount</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>");

/*MENU
------------------------------------*/
$('#main-menu').metisMenu();

$(window).bind("load resize", function () {
    if ($(this).width() < 768) {
        $('div.sidebar-collapse').addClass('collapse')
    } else {
        $('div.sidebar-collapse').removeClass('collapse')
    }
});