import Person from "./person.js"
module.exports = class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        super.introduce()
        return super.introduce()+" I am a Teacher. I have a job.";
    }
}
