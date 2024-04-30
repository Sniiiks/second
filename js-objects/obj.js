//task 1----------------------------------------------------
/* let object = {
    name: "Berlin",
    location: "Germany"
}
object.location = "London"

console.log(object);
 */
//task 2----------------------------------------------------
/*  let objects = {
    kolya: "1000",
    petya: "200",
    vasya: "500",
}

console.log(`kolya-`, objects.kolya,`petya-`, objects.petya);
  */
//task 3----------------------------------------------------
/* let students = [
    {
    name: "Student",
    surname: "Kolya",
    age: 23,
    grade: 3.55
    },
    {
    name: "Student",
    surname: "Petya",
    age: 20,
    grade: 3.1
    },
    {
    name: "Student",
    surname: "Vasyak",
    age: 19,
    grade: 3.5
    },
    {
    name: "Student",
    surname: "Vsiktantov",
    age: 18,
    grade: 3.2
    },
    {
    name: "Student",
    surname: "ermonov",
    age: 20,
    grade: 1.6
    },
    {
    name: "Student",
    surname: "Vasiliya",
    age: 24,
    grade: 3.8
    },
    {
    name: "Student",
    surname: "sinborov",
    age: 18,
    grade: 2.9
    },
    {
    name: "Student",
    surname: "nimov",
    age: 15,
    grade: 3
    }
]

for (let user of students) {
    if (user.age < 19){
        console.log(user);
    }
} */
//task 4----------------------------------------------------
/* let students = [
    {
    name: "Student",
    surname: "shaimov",
    age: 23,
    grade: 100
    },
    {
    name: "Student",
    surname: "Kalbaev",
    age: 23,
    grade: 85
    },
    {
    name: "Student",
    surname: "Kanatov",
   age: 23,
   grade: 79
    },
    {
    name: "Student",
    surname: "srazhadinov",
    age: 23,
    grade: 55
    },
    {
    name: "Student",
    surname: "kairbekov",
    age: 20,
    grade: 34
    },
    {
    name: "Student",
    surname: "Vasyak",
    age: 19,
    grade: 89
    },
    {
    name: "Student",
    surname: "Vsiktantov",
    age: 18,
    grade: 98
    },
    {
    name: "Student",
    surname: "ermonov",
    age: 20,
    grade: 87
    },
    {
    name: "Student",
    surname: "Vasiliya",
    age: 24,
    grade: 48
    },
    {
    name: "Student",
    surname: "sinborov",
    age: 18,
    grade: 94
    },
    {
    name: "Student",
    surname: "nimov",
    age: 15,
    grade: 78
    }
]
for (let user of students) {
    if (user.grade <= 100 && user.grade >= 85){
        console.log(user);
    }
}
 */
//task 5----------------------------------------------------
/* const students = [
    {
        name: "Richard",
        age: 34,
        gpa: 3.25
    },
    {
        name: "Sam",
        age: 23,
        gpa: 3.55
    }
];

let s = +prompt(`Введите номер  1 или 2:`)
s--

if (s >= 0 && s < students.length) {
    console.log(students[s])
} else {
    console.log("Студента  нет в списке.")
} */
//task 6----------------------------------------------------
/* let students = [
    {
        name: "Kolya",
        age: 23,
        grade: 3.55
    },
    {
        name: "Petya",
        age: 20,
        grade: 3.1
    },
    {
        name: "Asim",
        age: 19,
        grade: 3.5
    },
    {
        name: "Vsiktantov",
        age: 18,
        grade: 3.2
    },
    {
        name: "Ermonov",
        age: 20,
        grade: 1.6
    },
    {
        name: "Vasiliya",
        age: 24,
        grade: 3.8
    },
    {
        name: "Asike",
        age: 18,
        grade: 2.9
    },
    {
        name: "Nimov",
        age: 15,
        grade: 3
    }
];


for (let use of students) {
    if (use.name.charAt(0).toUpperCase() === "A") {
        console.log(" name with a ",use );
    }
}


for (let use of students) {
    if (use.grade > 3.0) {
        console.log("высокий gpa", use);
    }
}

let tot = 0;
for (let use of students) {
    tot += use.grade;
}
const ave = tot / students.length;
console.log("\n GPA сред всех студентов:",  ave);


for (let use of students) {
    if (use.age < 21) {
        console.log(use,  "меньше 21 года");
    }
} */
//task 7----------------------------------------------------
/* let employees = [
	{
		salary: 190000,
		name: "Alice",
		deadline: true
	},
	{
		salary: 90000,
		name: "Richard",
		deadline: true
	},
	{
		salary: 240000,
		name: "Sam",
		deadline: false
	}
]

let max = 0
for (let employee of employees){
    if (employee.salary > max){ 
        max = employee.salary
        highestPaidEmployee = employee
       }
    
}
console.log("Сотрудник с самой высокой зарплатой:", highestPaidEmployee)
let min = employees[0].salary
let lowestPaidEmployee = employees[0]

for (let employee of employees) {
    if (employee.salary < min) {
        
        min = employee.salary
        lowestPaidEmployee = employee
    }
}
console.log("Сотрудник с самой низкой зарплатой:", lowestPaidEmployee)
for (let employee of employees){
    if (employee.salary < 100000){
        employee.salary += 20000
        console.log("salary lower than 100000 were added add. 20000", employee )
    }
} */

//task 8----------------------------------------------------
/* let users =[
    {
        login: "alice19",
        password: "alice19",
        name: "Alice"
    },
    {
        login: "richard18",
        password: "richard18",
        name: "Richard"
    },
    {
        login: "sam22",
        password: "",
        name: "Sam"
    }
]
for (let user of users) {
    if (user.password === "") {
        delete users[users.indexOf(user)]
    }
}

console.log(users)
 */






//task 8--------------------------------------------------

/* Дана переменная users (пользователи), которая является массивом
 состоящим из объектов. Каждый элемент массива состоит из свойств login (логин),
  password (пароль) и name (имя), которые являются строкой. Нужно проверить все ли 
  свойства заполнены у каждого пользователя. Если, некоторые свойства не заполнены,
   нужно удалить этого пользователя из массива.

Пример: 
users = [
	{
		login: «alice19»,
		password: «alice19»,
		name: «»
	},
	{
		login: «richard18»,
		password: «richard18»,
		name: «Richard»
	},
	{
		login: «sam22»,
		password: «»,
		name: «Sam»
	}
]*/
//task 1--------------------------------------------------
/* 1.	Создайте пустой объект city.
2.	Добавьте свойство name со значением Berlin.
3.	Добавьте свойство location со значением Germany.
4.	Поменяйте значение name на London.
 */
 //task 2--------------------------------------------------
/* Создайте объект заработных плат obj. Выведите на экран зарплату Пети и Коли.
 Коля:1000, Вася:500, Петя:200*/
//task 3--------------------------------------------------
/* Создайте массив students из объектов student который будет
 состоять из таких ключей как name, surname, age. Вам нужно вывести
  всех студентов кто старше 19. (8 студентов)
 */
//task 4--------------------------------------------------
/* Создайте массив students из объектов student который будет состоять 
из таких ключей как name, surname, age, grade. Вам нужно вывести всех 
студентов кто имеет оценки между 85 и 100. (10 студентов)
 *///task 5--------------------------------------------------
/* Дана переменная student, которая является объектом и состоит 
из свойств name (String), age(Numbers), gpa (Numbers). Нужно вывести 
в консоль значения всех свойств данного объекта через цикл.
a.	name: «Richard», age: 34, gpa: 3.25.
b.	name: «Sam», age: 23, gpa: 3.55
 */
//task 6--------------------------------------------------.
/* Дана переменная students, которая является массивом состоящим из объектов.
 Каждый элемент массива состоит из свойств name (String), age(Numbers), gpa(Numbers). 
  Нужно:
а) вывести в консоль тех студентов, у которых имя начинается с символа «A»;
б) вывести в консоль тех студентов, у которых «gpa» выше 3.0. 
в) посчитать и вывести в консоль, среднее арифметическое gpa для всех студентов
г) вывести в консоль тех студентов, чей возраст меньше 21 года

Пример: 
students = [
	{
		name: «Alice»,
		age: 19,
		gpa: 3.5
	},
	{
		name: «Richard»,
		age: 22,
		gpa: 2.9
	},
	{
		name: «Sam»,
		age: 20,
		gpa: 3.25
	}	
]
 *///task 7--------------------------------------------------.
/* Дана переменная employees (сотрудники), которая является массивом состоящим 
из объектов. Каждый элемент массива состоит из свойств salary (зарплата) и name (имя),
 которые являются строкой и свойства deadline, которое является логическим значением 
 (boolean). Нужно:
а) найти и вывести в консоль сотрудника с максимальной зарплатой 
б) найти и вывести в консоль сотрудника с минимальной зарплатой
d) повысить зарплату на 20000 сотрудникам с зарплатой меньше 100000. 

Пример: 
employees = [
	{
		salary: 190000,
		name: «Alice»,
		deadline: true
	},
	{
		salary: 90000,
		name: «Richard»,
		deadline: true
	},
	{
		salary: 240000,
		name: «Sam»,
		deadline: false
	}
]

 */
