import Person from "./person"
module.exports = class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass!=undefined){
            return super.introduce()+" I am a Teacher. I teach "+this.klass.getDisplayName()+".";
        }
        else {
            return super.introduce()+" I am a Teacher. I teach No Class.";
        }
    }
    introduceWith(student){
        this.student = student;
        if(this.student.klass === this.klass){
            return super.introduce()+" I am a Teacher. I teach "+this.student.name+"."
        }
        else {
            return super.introduce()+" I am a Teacher. I don't teach "+this.student.name+"."
        }
    }
}
