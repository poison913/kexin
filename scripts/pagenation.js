function getzz() {
    var a = $("ul#all li");
    var zz = new Array(a.length);
    for (var i = 0; i < a.length; i++) {
        zz[i] = a[i].innerHTML;
    } //div的字符串数组付给zz
    return zz;
}
function change(e, pageall) {
    debugger
    pageno = e;
    if (e < 1) {
        e = 1; pageno = 1;//就等于第1页 ， 当前页为1
    }
    if (e > pageall) {  //如果输入页大于最大页
        e = pageall; pageno = pageall; //输入页和当前页都=最大页
    }
    //$("#all").html("");//全部清空
    //var html = "";
    //for (var i = 0; i < pagesize; i++) {
    //    html += '<li>' + zz[(e - 1) * pagesize + i] + '</li>';//创建一页的li列表
    //    if (zz[(e - 1) * pagesize + i + 1] == null) break;//超出最后的范围跳出
    //}
    //$("ul#all").html(html);//给ul列表写入html
    
    var ye = "";
    for (var j = 1; j <= pageall; j++) {
        if (e == j) {
            ye = ye + "<span><a href='#' style='display: inline;' onClick='change1(" + j + "," + pageall + ")' style='color:#FF0000'>" + j + "</a></span> "
        } else {
            ye = ye + "<a href='#' style='display: inline;' onClick='change1(" + j + "," + pageall + ")'>" + j + "</a> "
        }
    }
    var pageContent = "";
    pageContent += '第<span id=\"a2\">' + pageno + '</span>/';
    pageContent += '<span id="a1">' + pageall + '</span>页';
    pageContent += '<span id="a3">' + ye + '</span>';
    pageContent += '<a href="#" style="display: inline;" onClick="change1(--pageno,' + pageall + ')">上一页</a>';
    pageContent += '<a href="#" style="display: inline;" onClick="change1(++pageno,' + pageall + ')">下一页</a>';
    $("#page").html(pageContent);
}
function change1(e, pageall) {
    //debugger
    //pageno = e;
    //if (e < 1) {
    //    e = 1; pageno = 1;//就等于第1页 ， 当前页为1
    //}
    //if (e > pageall) {  //如果输入页大于最大页
    //    e = pageall; pageno = pageall; //输入页和当前页都=最大页
    //}
    ////$("#all").html("");//全部清空
    ////var html = "";
    ////for (var i = 0; i < pagesize; i++) {
    ////    html += '<li>' + zz[(e - 1) * pagesize + i] + '</li>';//创建一页的li列表
    ////    if (zz[(e - 1) * pagesize + i + 1] == null) break;//超出最后的范围跳出
    ////}
    ////$("ul#all").html(html);//给ul列表写入html

    //var ye = "";
    //for (var j = 1; j <= pageall; j++) {
    //    if (e == j) {
    //        ye = ye + "<span><a href='#' style='display: inline;' onClick='change(" + j + ")' style='color:#FF0000'>" + j + "</a></span> "
    //    } else {
    //        ye = ye + "<a href='#' style='display: inline;' onClick='change(" + j + ")'>" + j + "</a> "
    //    }
    //}
    //var pageContent = "";
    //pageContent += '第<span id=\"a2\">' + pageno + '</span>/';
    //pageContent += '<span id="a1">' + pageall + '</span>页';
    //pageContent += '<span id="a3">' + ye + '</span>';
    //pageContent += '<a href="#" style="display: inline;" onClick="change(--pageno,' + pageall + ')">上一页</a>';
    //pageContent += '<a href="#" style="display: inline;" onClick="change(++pageno,' + pageall + ')">下一页</a>';
    //$("#page").html(pageContent);
    if (e < 1) {
        e = 1; pageno = 1;//就等于第1页 ， 当前页为1
    }
    if (e > pageall) {  //如果输入页大于最大页
        e = pageall; pageno = pageall; //输入页和当前页都=最大页
    }
    var url = window.location.href;
    if (url.indexOf("page") > -1) {
        var a = url.split('?');
        var newurl = a[0] + "?page=" + e;
        window.location.href = newurl;
    }
}
var page = getQueryString("page");
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return "";
}