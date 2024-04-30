//task1--------------------------------------------------------------------------------

/* function sumArray(array) {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }
    return sum;
}


const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log("Сумма всех элементов массива:", result); */
//task2--------------------------------------------------------------------------------
/*  */
//task3--------------------------------------------------------------------------------
/* function count(massiv) {
    let col = 0
    let sum = 0
    for (let i = 0; i < massiv.length; i++) {
        col += 1
    }
    for (let mass of massiv) {
        sum += mass
    }
    let som = sum / col
    return som

}
const massiv = [13, 24, 35, 46];
const result = count(massiv);

console.log(result); */
//task4--------------------------------------------------------------------------------
/* 
function count(massiv) {
    let min = massiv[0]
    let max = massiv[0]
    
    
    for (let sum of massiv) {
        if (sum < min) {
            min = sum
        }
    }
    
    
    for (let mass of massiv) {
        if (mass > max) {
            max = mass
        }
    }
    
    return { min, max }
}

const massiv = [1, 13, 99, 440, 55]
const result = count(massiv)
console.log("Мин:", result.min)
console.log("Макс:", result.max) */
//task5--------------------------------------------------------------------------------
/* function count(massiv) {
    let minus = massiv[0]
    let plus = massiv[0]
    for (let sum  of massiv) {
        if (sum > 0) {
            massiv2.push(sum)
            
        }
          
    }
    
    for (let sum  of massiv) {
        if (sum < 0) {
            massiv1.push(sum)
        }
        
    }
    return { minus, plus }
}
const massiv = [-2, 442, 1, -6, 1, 563, -4]
let massiv1 = []
let massiv2 = []

console.log("totalь", massiv);
console.log("minus-", massiv2);
console.log("plus-", massiv1); */

//task6--------------------------------------------------------------------------------
/* function count(n) {
    let massiv1 = []
    let massiv2 = []
    for(let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            massiv2.push(i)
        } else {
            massiv1.push(i)
        }
    }
    console.log("minus-", massiv2);
    console.log("plus-", massiv1);     
}
let n = 120
count(n)
 */

//task7--------------------------------------------------------------------------------
/* function findLongestWord(text) {
    const words = text.split(" ");
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
let text = "They are absolutely unstoppable";
console.log("Ответ:", findLongestWord(text)); */
//task8--------------------------------------------------------------------------------
/* function count(a) {
    let countt = 0
    let nount = 0

    for(let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            countt++
        } else {
            nount++
        }
    }
    
    return { countt, nount }
}

const a = [2, 3, 1, 5, 6]
const result = count(a)
console.log(" чётных:", result.countt)
console.log(" нечётных:", result.nount) */
//task9--------------------------------------------------------------------------------
/* function getSeason(month) {
    let season;

    switch (month) {
        case 1:
        case 2:
        case 12:
            season = "зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "весна";
            break;
        case 6:
        case 7:
        case 8:
            season = "лето";
            break;
        case 9:
        case 10:
        case 11:
            season = "осень";
            break;
        default:
            season = "неверный месяц";
    }

    return season;
}


let a = 4;
console.log("Ответ:", getSeason(a));
 */
//task10----(----------------------------------------------------------------------------

/* function filterFilms(films, key, value) {
    const filteredFilms = films.filter(film => {
        if (key === "genre") {
            return film.genre === value;
        } else if (key === "year") {
            return film.year > value;
        }
    });
    return filteredFilms;
}

// Пример использования
const films = [
    {
        name: "Фильм 1",
        genre: "комедия", 
        year: 2000 
    },
    { 
        name: "Фильм 2",
        genre: "драма",
        year: 2010 
    },
    {
        name: "Фильм 3", 
        genre: "боевик",
        year: 2015 
    },
    {
        name: "Фильм 4", 
        genre: "комедия",
        year: 2018 
    }
];

const genre = "комедия";
const year = 2010;

console.log("Фильмы с жанром", genre, ":", filterFilms(films, "genre", genre));
console.log("Фильмы с годом после", year, ":", filterFilms(films, "year", year)); */
//task11--------------------------------------------------------------------------------
/* function changeProperty(user, property, value) {

    user[property] = value;
}


const users = [
    {
        login: "alice19",
        password: "alice19",
        name: ""
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
];

changeProperty(users[0], "login", "alice5555");
console.log(users[0]);
 */
//task12--------------------------------------------------------------------------------
/* function sumArray(array) {
    const result = []; 
    for (let number of array) { 
        let sum = 0;
        while (number > 0) { 
            sum += number % 10; 
            number = Math.floor(number / 10); 
        }
        result.push(sum); 
    }
    return result; 
}


const inputArray = [12, 43, 123, 44, 22];
const resultArray = sumArray(inputArray);
console.log(resultArray); */
//task13--------------------------------------------------------------------------------
/* function totalle(numb){
    let total = [];
    for (let i = 1; i <= nom; i++) {
        if (nom % i === 0) {
            total.push(i);
        }
    
    }
    return total;
}
const nom = +prompt('write number')
const relust = totalle(nom)
console.log(relust);

 */


/* 1. Создайте  функцию которая находить сумму всех элементов массива */
/* 2. Напишите функцию, которая высчитывает 
и возращает  сколько раз встречается буква в данной строке. 
Пример 1
str=”we were just kids”
letter=’w’
Ответ 2
 *//*  3. Дана переменная massiv, которая является массивом состоящим
 из чисел. Нужно написать функцию, которая вычисляет среднее
  арифметическое элементов данного массива, переданного ей в 
  качестве аргумента:

а) massiv = [1, 2, 3, 4, 5];
б) massiv = [13, 24, 35, 46];
в ) massiv = [-68, 325, 33, 40, 2, 8]; 
Ответы: а) 3; б) 29.5; в) 56.67;*/
/* 4. Дана переменная massiv, которая является массивом состоящим 
из чисел 1, 13, 99, 440, 55. Нужно написать функцию, которая находит:
а) минимальный элемент массива, переданного ей в качестве аргумента 
б) максимальный элемент массива, переданного ей в качестве аргумента
Ответы: а) 1; б) 440; */
/* 5. Напишите алгоритм который разбивает массив на два массива
 если там встречаются отрицательные значения. 
 Например [-2,442,1,-6,1,563,-4]
Результат должен быть вот таким Первый массив [-2,-6,-4] 
который хранить в себе только отрицательные значения 
Второй массива [442,1,1,562] который хранить в себе только 
положительные значения  
 *//* 6. Дан пустой массив. Нужно написать функцию, которая заполняет 
массив числами от 1 до n и возвращает уже заполненный массив. Функция 
должна принимать два параметра - массив и его размер (число n):
а) нужно заполнить массив четными числами
б) нужно заполнить массив нечетными числами
Пример 1.
	 massiv = [], n = 5;
	 ответ: а) [2, 4]
		б) [1, 3, 5]
	
Пример 2.
	 massiv = [], n = 12;
	 ответ: а) [2, 4, 6, 8, 10, 12]
		б) [1, 3, 5, 7, 9, 11]
	
Пример 3.
	 massiv = [], n = 9;
	 ответ: а) [2, 4, 6, 8]
		б) [1, 3, 5, 7, 9] *//* 7.Написать функцию, которая находит в тексте самое длинное слово. 
Пример 1
text=They are absolutely unstoppable
Ответ: unstoppable */
/* 8. Написать функцию, которая определяет сколько в массиве четных
 и нечетных чисел.
Пример 1
а=[2,3,1,5,6]
Ответ: четных-2, нечетных-3 */
/* 9. Написать функцию season, принимающую 1 аргумент — 
номер месяца (от 1 до 12), и возвращающую время года, 
которому этот месяц принадлежит (зима, весна, лето или осень). 
Если номер месяца некорректный, то возвращать значение ‘неправильный 
месяц’
Пример 1
а=4
Ответ: весна	
 *//* 10. Есть массив из объектов films, каждый фильм состоит из 
свойств name, genre, year. Нужно написать 2 функции, которые 
принимают 2 аргумента:
	а)  1 аргумент массив фильмов, 2 аргумент genre. Нужно вывести 
    в консоль фильмы с данным жанром
	б)  1 аргумент массив фильмов, 2 аргумент year. Нужно вывести 
    те фильмы, у которых год выше аргумента year.
 *//* 11. Дана переменная users (пользователи), которая является массивом
 состоящим из объектов. Каждый элемент массива состоит из свойств login (логин),
  password (пароль) и name (имя), которые являются строкой. Нужно написать функцию,
   которая принимает в виде аргумента 3 значения: объект -  определенного пользователя,
    строку - название свойства значение которого нужно заменить, строку - новое значение. 
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
]

function changeProperty(user, property, value) {
	//Ваш код
}

changeProperty(users[0], «login», «alice5555»);

В результате: 
	users[0] = {
		login: «alice5555»
		password: «alice19»,
		name: «»
	}
 */
/* 12. Напишите свой алгоритм который будет находить сумму элемента и отправьте в новый массив. Например: 
[12,43,123,44,22]
их сумма элементов равна [3,7,6,8,4]
 *//* 13. Реализуйте функцию, которая параметром будет принимать
 число и возвращать массив чисел на которое делится наше число.
  К примеру, если мы передадим число 48 - мы должны получить массив
   [1, 2, 3, 4, 6, 12, 24, 48].
 */