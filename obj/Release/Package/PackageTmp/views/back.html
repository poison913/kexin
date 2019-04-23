<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>科信</title>
    <meta charset="utf-8" />
    <link href="../style/style.css" rel="stylesheet" />
    <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="../scripts/AdminLTE/css/AdminLTE.min.css" rel="stylesheet" /> 
    <link href="../scripts/AdminLTE/css/skins/skin-blue.min.css" rel="stylesheet" />
    <link href="../style/bootstrap-slider.min.css" rel="stylesheet" />
    <link href="../style/dataTables.bootstrap.min.css" rel="stylesheet" />
    <link href="../style/font-awesome.min.css" rel="stylesheet" />
    <script src="http://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>
    <script src="http://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="../scripts/AdminLTE/js/adminlte.min.js"></script>
</head>
<body>
    <div class="panel panel-default" id="header" style="background: url('../img/后台首页屏内容_02.png'); ">
        <div class="panel-body">
            <div id="panel1" >
                <p >
                <img src="../img/首页_03.png"  style="width: 200px;padding-left: 0%;" />
                </p>
                 
            </div>
           
        </div>
    </div>
    <aside class="main-sidebar" style="background-color: #222d32;height:740px" id="ll">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar" id="left1">
            <!-- Sidebar Menu -->
            <ul class="sidebar-menu" data-widget="tree" id="menu"> 
               
            </ul>
            <!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
    <!--主视图区域-->
    <div class="content-wrapper1" style="height:740px;margin-left: 230px;margin-top: -15px;width:1515px;" >
        <section class="content-header">
            <iframe id="iframe" scrolling="no" onload="changeFrameHeight()"  style="width: 100%;" frameborder="0" src="shouping.html"></iframe>
        </section>

    </div>
</body>
<script>
    $(function () { 
    //    var data = [
    //{
    //    "id": 1,
    //    "parent_id": 0,
    //    "name": "首屏内容",
    //    "list": []
    //},
    //{
    //    "id": 2,
    //    "parent_id": 0,
    //    "name": "资讯中心列表",
    //    "list": []
    //},
    //{
    //    "id": 3,
    //    "parent_id": 0,
    //    "name": "政府申报平台",
    //    "list": [
    //        {
    //            "id": 4,
    //            "parent_id": 3,
    //            "name": "科技"
    //        },
    //        {
    //            "id": 5,
    //            "parent_id": 3,
    //            "name": "经信"
    //        },
    //        {
    //            "id": 6,
    //            "parent_id": 3,
    //            "name": "市监"
    //        }
    //    ]
    //},
    //{
    //    "id": 7,
    //    "parent_id": 0,
    //    "name": "科技文献",
    //    "list": []
    //},
    //{
    //    "id": 8,
    //    "parent_id": 0,
    //    "name": "知识产权信息查询",
    //    "list": []
    //},
    //{
    //    "id": 9,
    //    "parent_id": 0,
    //    "name": "检验检测",
    //    "list": []
    //},
    //{
    //    "id": 10,
    //    "parent_id": 0,
    //    "name": "认证许可查询",
    //    "list": []
    //},
    //{
    //    "id": 11,
    //    "parent_id": 0,
    //    "name": "其他信息查询",
    //    "list": []
    //},
    //{
    //    "id": 12,
    //    "parent_id": 0,
    //    "name": "友情链接",
    //    "list": []
    //},
    //{
    //    "id": 13,
    //    "parent_id": 0,
    //    "name": "服务中心",
    //    "list": []
    //},
    //{
    //    "id": 14,
    //    "parent_id": 0,
    //    "name": "邮箱",
    //    "list": []
    //},
    //{
    //    "id": 15,
    //    "parent_id": 0,
    //    "name": "工具中心",
    //    "list": []
    //},
    //{
    //    "id": 16,
    //    "parent_id": 0,
    //    "name": "政府网站",
    //    "list": []
    //}
        //    ];
        var data = [];
        $.ajax({
            type: "GET",
            url: "http://pub123.cn/api/website_categories",
            //data: { username: $("#username").val(), content: $("#content").val() },
            dataType: "json",
            async: false,
            success: function (json) {
                data = json;
            }
        });
        var menu = "";
        for (var i = 0 ; i < data.length; i++) {
            var a = "";
            var b = "onclick='changeSrc(\"" + data[i].id + "\")'";
            if (data[i].list.length > 0)
            {
                a=" <span class='pull-right-container' >" +
                    " <i class='fa fa-angle-left pull-right'></i>" +
                  " </span>"
                b = "";
            }
            menu += " <li class='treeview'>" +
                        "<a href='javascript:void(0);' "+b+">" +
                           "<span>" + data[i].name + "</span>" + a+
                        "</a>";
                   
            if(data[i].list.length>0)
            {
                menu += "<ul class='treeview-menu' >";
                for (var j = 0 ; j < data[i].list.length; i++)
                {
                    menu += "<li ><a href='javascript:void(0);' onclick='changeSrc(\"" + data[i].list[j].id + "\")'>"
                        + "<i class='fa fa-circle-o'></i>" + data[i].list[j].name + "</a></li>"
                }
                menu += "</ul>";
            }
            menu += " </li>";
        }
        $("#menu").append(menu);
        changeSrc("1");
    })
    function changeFrameHeight() {
        var ifm = document.getElementById("iframe");
        
        var o = document.getElementById("header");
        h = o.offsetHeight;
        ifm.height = document.documentElement.clientHeight - h - 10;
       
    }
    function changeSrc(id) {
        var ids = "1,3,4,5,6,7,8,9,10,11,13,16".split(',');
        var page = "";
        if (ids.indexOf(id) >= 0) {
            page = "shouping.html";
        } else {
            page = "zixun.html";
        }
        document.getElementById("iframe").src = page+"?id="+id;
    }
</script>
</html>
