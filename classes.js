var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
        console.log("Kisi Olusturuldu!");
    }
    User.prototype.getInfo = function () {
        console.log("Kullanıcı Adı: " + this.username);
    };
    return User;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(username, password, age, phone) {
        var _this = _super.call(this, username, password) || this;
        _this.age = age;
        _this.phone = phone;
        return _this;
    }
    Employee.prototype.getInfo = function () {
        _super.prototype.getInfo.call(this);
        console.log("Yaş: " + this.age + " Telefon: " + this.phone);
    };
    return Employee;
}(User));
var user = new Employee("Samet", "12345", 21, "05554443322");
user.getInfo();
var MySql = /** @class */ (function () {
    function MySql() {
    }
    MySql.prototype.add = function () {
        console.log("Mysqladd");
    };
    MySql.prototype.get = function () {
        console.log("Mysqlget");
    };
    MySql.prototype["delete"] = function () {
        console.log("Mysqldelete");
    };
    MySql.prototype.update = function () {
        console.log("Mysqlupdate");
    };
    return MySql;
}());
var Mongo = /** @class */ (function () {
    function Mongo() {
    }
    Mongo.prototype.add = function () {
        console.log("Mongoadd");
    };
    Mongo.prototype.get = function () {
        console.log("Mongolget");
    };
    Mongo.prototype["delete"] = function () {
        console.log("Mongodelete");
    };
    Mongo.prototype.update = function () {
        console.log("Mongoupdate");
    };
    return Mongo;
}());
function addDatabase(database) {
    database.add();
}
addDatabase(new MySql());
addDatabase(new Mongo());
