class User{
    username:string;
    private password:string;

    constructor(username:string,password:string){
        this.username = username;
        this.password = password; 
        console.log("Kisi Olusturuldu!");
    }
    getInfo(){
        console.log("Kullanıcı Adı: "+this.username);
    }
}

class Employee extends User{
    age : number;
    phone : string;

    constructor(username:string,password:string,age:number,phone:string){
        super(username,password); 
        this.age = age;
        this.phone = phone;
    }

    getInfo(){
        super.getInfo(); 
        console.log("Yaş: " +this.age+ " Telefon: "+this.phone);
    }
}

let user = new Employee("Samet","12345",21,"05554443322");
user.getInfo();



interface IDatabase{
    add();
    get();
    delete();
    update();
}

class MySql implements IDatabase{
    add(){
        console.log("Mysqladd");
    }
    get(){
        console.log("Mysqlget");
    }
    delete(){
        console.log("Mysqldelete");
    }
    update(){
        console.log("Mysqlupdate");
    }
}

class Mongo implements IDatabase{
    add(){
        console.log("Mongoadd");
    }
    get(){
        console.log("Mongolget");
    }
    delete(){
        console.log("Mongodelete");
    }
    update(){
        console.log("Mongoupdate");
    }
}

function addDatabase(database:IDatabase){
    database.add();
}

addDatabase(new MySql());
addDatabase(new Mongo());