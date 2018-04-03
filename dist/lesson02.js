// 类
// 类上不存在原型 prototype 属性
var Character = /** @class */ (function () {
    function Character(firstname, lastname) {
        this.fullname = firstname + lastname;
    }
    Character.prototype.greet = function (name) {
        if (name) {
            return "Hi! " + name + "! My name is  " + this.fullname + ".";
        }
        else {
            return "Hi! My name is  " + this.fullname + ".";
        }
    };
    return Character;
}());
var Lihua = new Character('Li', 'hua');
console.log(Lihua.greet('hanmeimei'));
