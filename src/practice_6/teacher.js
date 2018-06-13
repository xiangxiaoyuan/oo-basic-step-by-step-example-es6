import Person from "./person.js"
module.exports = class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        super.introduce();
        if(typeof(this.klass) === "number") {
            return super.introduce() + " I am a Teacher. I teach Class " + this.klass + ".";
        }
        else {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }
    }
}
