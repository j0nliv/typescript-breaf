abstract class Database {
    get(){ 
        console.log("Database Get Ortak Metot")
    }
    add(){
        console.log("Database Add Ortak Metot");
    }

    abstract delete();
    abstract update();
}

class MySql extends Database{
    delete(){
        console.log("Mysqldelete");
    }
    update(){
        console.log("Mysqlupdate");
    }
}

class Mongo extends Database{
    delete(){
        console.log("Mongodelete");
    }
    update(){
        console.log("Mongoupdate");
    }
}

function addDatabase(database:Database){
    database.delete();
}

addDatabase(new MySql());
addDatabase(new Mongo());