var t = 123;
// 联合类型声明
var path;
path = 'sdsd';
path = ['dasd', 'sda'];
// 类型守护
var str = '123';
var arr = [1, '2', true];
var s = function () {
    console.log('hi~');
};
customConsole.log('hello~');
// 多选结构 switch
var Alertlevel;
(function (Alertlevel) {
    Alertlevel[Alertlevel["info"] = 0] = "info";
    Alertlevel[Alertlevel["warning"] = 1] = "warning";
    Alertlevel[Alertlevel["error"] = 2] = "error";
})(Alertlevel || (Alertlevel = {}));
function getAlertSubscribers(level) {
    var emails = new Array();
    switch (level) {
        case Alertlevel.info:
            emails.push("cst@domain.com");
            break;
        case Alertlevel.warning:
            emails.push("development@domain.com");
            break;
        case Alertlevel.error:
            emails.push("management@domain.com");
            break;
        default:
            throw new Error("Invalid argument!");
    }
    return emails;
}
getAlertSubscribers(Alertlevel.info);
// 函数
function greet(name) {
    if (name) {
        return "Hi" + name;
    }
    else {
        return "Hi";
    }
}
// 箭头函数
var hello = function (name) {
    if (name) {
        return "hi" + name;
    }
    else {
        return "hi";
    }
};
// 匹配匿名函数
var great = function (name) {
    if (name) {
        return "hi" + name;
    }
    else {
        return "hi";
    }
};
