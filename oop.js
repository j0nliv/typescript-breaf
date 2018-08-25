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
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.get = function () {
        console.log("Database Get Ortak Metot");
    };
    Database.prototype.add = function () {
        console.log("Database Add Ortak Metot");
    };
    return Database;
}());
var MySql = /** @class */ (function (_super) {
    __extends(MySql, _super);
    function MySql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySql.prototype["delete"] = function () {
        console.log("Mysqldelete");
    };
    MySql.prototype.update = function () {
        console.log("Mysqlupdate");
    };
    return MySql;
}(Database));
var Mongo = /** @class */ (function (_super) {
    __extends(Mongo, _super);
    function Mongo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mongo.prototype["delete"] = function () {
        console.log("Mongodelete");
    };
    Mongo.prototype.update = function () {
        console.log("Mongoupdate");
    };
    return Mongo;
}(Database));
function addDatabase(database) {
    database["delete"]();
}
addDatabase(new MySql());
addDatabase(new Mongo());
