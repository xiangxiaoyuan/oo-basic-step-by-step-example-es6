module.exports = class Class{
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return "Class "+this.number;
    }
    assignLeader(student){
        if(student.klass.number === this.number){
            this.leader = student;
            if(this.teacher){
                console.log(`I am ${this.teacher.name}. I know ${student.name} become Leader of Class ${this.number}.`);
            }
        }
        else {
            console.log("It is not one of us.");
        }
    }
    appendMember(student){
        student.klass = this;
        if (this.teacher) {
            console.log(`I am ${this.teacher.name}. I know ${student.name} has joined Class ${this.number}.`);
        }
    }
    registerJoinListener(teacher){
        if (teacher.klasses.includes(this)) {
            this.teacher = teacher;
        }
    }
    registerAssignLeaderListener(teacher){
        if (teacher.klasses.includes(this)) {
            this.teacher = teacher;
        }
    }
}
