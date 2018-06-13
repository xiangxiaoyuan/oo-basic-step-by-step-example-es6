import Person from "./person";
module.exports = class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(klass){
        return "I am a Student. I am at Class "+this.klass+"."
    }
}
