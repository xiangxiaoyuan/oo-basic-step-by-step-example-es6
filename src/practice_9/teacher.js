import Person from "./person"
module.exports = class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass){
            return super.introduce()+" I am a Teacher. I teach "+this.klass.getDisplayName()+".";
        }
        else {
            return super.introduce()+" I am a Teacher. I teach No Class.";
        }
    }
}
