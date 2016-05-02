function Human(pName,pAge,pSex,pHeight,pWeight) {
    this.Name= pName;
    this.Age = pAge;
    this.Sex= pSex;
    this.Height = pHeight;
    this.Weight = pWeight;
}
function Worker(pName, pAge, pSex, pHeight, pWeight, pw, sal) {
    Human.apply(this, arguments);
    this.placeWork = pw;
    this.salary = sal;
    this.work = function () {    
        console.log(this);
        console.log('Я, '+this.Name+' работаю, мое место работы '+this.placeWork + ' зарплата - '+this.salary);
    }
}
function Student(pName, pAge, pSex, pHeight, pWeight, ps, st) {
    Human.apply(this, arguments);
    this.placeStudy = ps;
    this.stipend = st;
}
Worker.prototype = new Human();
var worker1 = new Worker('Джон Доу', 31, 'М', 180, 70,'Киев', 3000);
var worker2 = new Worker('Иван Иванович', 25, 'М', 160, 90,'Луганск', 500);
worker1.work();
worker2.work();

Student.prototype = new Human();
Student.prototype.lookMe = function () {         
        console.log(this);
        console.log('Я, '+this.Name+' учусь, мое место учебы '+this.placeStudy + ' стипендия - '+this.stipend+', мне '+this.Age + ' лет');
}
var student1 = new Student('Том Круз', 30, 'М', 180, 70,'Санта Круз', 100);
var student2 = new Student('Джесика Альба', 25, 'Ж', 160, 90,'ЛасВегас', 500);
student1.lookMe();
student2.lookMe();