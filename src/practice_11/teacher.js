import Person from  "./person"
module.exports = class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        if (this.klasses) {
            let classes = [];
            this.klasses.forEach(item=>classes.push(item.number));
            return super.introduce() + ` I am a Teacher. I teach Class ${classes.join(', ')}.`;
        }
        else {
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }
    }
}

