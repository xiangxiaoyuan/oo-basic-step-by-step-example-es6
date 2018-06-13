module.exports = class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(name,age){
        return "My name is "+this.name+". I am "+this.age+" years old.";
    }
}