import Person from "./person"
module.exports = class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        return super.introduce()+" I am a Student. I am at "+this.klass.getDisplayName()+".";
    }
}
