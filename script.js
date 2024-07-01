const library = [
  {
    author: "Айзек Азимов",
    title: "Я, робот",
    year: 1950,
    genre: "Научная фантастика",
    theme: "Искусственный интеллект и робототехника",
    rating: 4.5
  },
  {
    author: "Джордж Оруэлл",
    title: "1984",
    year: 1949,
    genre: "Дистопия",
    theme: "Контроль и тоталитаризм",
    rating: 4.8
  },
  {
    author: "Джейн Остин",
    title: "Гордость и предубеждение",
    year: 1813,
    genre: "Роман",
    theme: "Социальные отношения и мораль",
    rating: 4.7
  },
  {
    author: "Федор Достоевский",
    title: "Преступление и наказание",
    year: 1866,
    genre: "Роман",
    theme: "Психология преступника и наказание",
    rating: 4.9
  },
  {
    author: "Маргарет Атвуд",
    title: "Рассказ служанки",
    year: 1985,
    genre: "Дистопия",
    theme: "Женские права и политика",
    rating: 4.6
  },
  {
    author: "Эрнест Хемингуэй",
    title: "Старик и море",
    year: 1952,
    genre: "Рассказ",
    theme: "Символизм и борьба человека с природой",
    rating: 4.4
  },
  {
    author: "Уильям Шекспир",
    title: "Гамлет",
    year: 1600,
    genre: "Трагедия",
    theme: "Моральная деградация и смысл жизни",
    rating: 4.8
  },
  {
    author: "Лев Толстой",
    title: "Война и мир",
    year: 1869,
    genre: "Роман",
    theme: "Война и мир в русском обществе",
    rating: 4.7
  },
  {
    author: "Дж. К. Роулинг",
    title: "Гарри Поттер и Философский камень",
    year: 1997,
    genre: "Фэнтези",
    theme: "Приключения и дружба",
    rating: 4.9
  },
  {
    author: "Джордж Мартин",
    title: "Игра престолов",
    year: 1996,
    genre: "Фэнтези",
    theme: "Власть и интриги",
    rating: 4.7
  },
  {
    author: "Луи Сахар",
    title: "Зеленая миля",
    year: 1996,
    genre: "Драма",
    theme: "Божественное в человеческом",
    rating: 4.8
  },
  {
    author: "Джек Лондон",
    title: "Белый Клык",
    year: 1906,
    genre: "Приключения",
    theme: "Дружба и выживание в дикой природе",
    rating: 4.6
  },
  {
    author: "Жюль Верн",
    title: "Двадцать тысяч лье под водой",
    year: 1870,
    genre: "Приключения",
    theme: "Подводные открытия и приключения",
    rating: 4.5
  },
  {
    author: "Оскар Уайльд",
    title: "Портрет Дориана Грея",
    year: 1890,
    genre: "Роман",
    theme: "Искусство и нравственность",
    rating: 4.6
  },
  {
    author: "Рей Брэдбери",
    title: "451° по Фаренгейту",
    year: 1953,
    genre: "Научная фантастика",
    theme: "Цензура и свобода мысли",
    rating: 4.7
  },
  {
    author: "Габриэль Гарсиа Маркес",
    title: "Сто лет одиночества",
    year: 1967,
    genre: "Магический реализм",
    theme: "Колониальное наследие и семейная история",
    rating: 4.9
  },
  {
    author: "Харуки Мураками",
    title: "Кафка на пляже",
    year: 2002,
    genre: "Магический реализм",
    theme: "Мистика и философия",
    rating: 4.5
  },
  {
    author: "Эрнест Сетон-Томпсон",
    title: "Волк, которого я приручил",
    year: 1898,
    genre: "Приключения",
    theme: "Дружба и доверие",
    rating: 4.4
  }
];
library.sort((a, b) => a.author - b.author)
console.log(library);

// const newLibrary = {
// author: ' ',
// title: ' ',
// year: ' ',
// genre: ' ',
// theme: ' ', 
// rating: ' ',
// }
// newLibrary = Library.push(newLibrary)
// console.log(library);


const cities = [
  {
    name: "Токио",
    country: "Япония",
    continent: "Азия",
    population: 37977000,
    language: "Японский",
    religion: "Шинтоизм, буддизм",
    airport: true
  },
  {
    name: "Мумбаи",
    country: "Индия",
    continent: "Азия",
    population: 22743000,
    language: "Хинди, маратхи",
    religion: "Индуизм",
    airport: true
  },
  {
    name: "Шанхай",
    country: "Китай",
    continent: "Азия",
    population: 24150000,
    language: "Китайский",
    religion: "Буддизм, даосизм",
    airport: true
  },
  {
    name: "Сан-Паулу",
    country: "Бразилия",
    continent: "Южная Америка",
    population: 22046000,
    language: "Португальский",
    religion: "Католицизм",
    airport: true
  },
  {
    name: "Карачи",
    country: "Пакистан",
    continent: "Азия",
    population: 20725000,
    language: "Урду, английский",
    religion: "Ислам",
    airport: true
  },
  {
    name: "Пекин",
    country: "Китай",
    continent: "Азия",
    population: 21516000,
    language: "Китайский",
    religion: "Буддизм, даосизм",
    airport: true
  },
  {
    name: "Нью-Йорк",
    country: "США",
    continent: "Северная Америка",
    population: 20198000,
    language: "Английский",
    religion: "Протестантизм, католицизм",
    airport: true
  },
  {
    name: "Конакри",
    country: "Гвинея",
    continent: "Африка",
    population: 1900000,
    language: "Французский",
    religion: "Ислам",
    airport: true
  },
  {
    name: "Каир",
    country: "Египет",
    continent: "Африка",
    population: 19700000,
    language: "Арабский",
    religion: "Ислам",
    airport: true
  },
  {
    name: "Москва",
    country: "Россия",
    continent: "Европа",
    population: 12506468,
    language: "Русский",
    religion: "Православие",
    airport: true
  },
  {
    name: "Дакка",
    country: "Бангладеш",
    continent: "Азия",
    population: 17843000,
    language: "Бенгальский",
    religion: "Ислам",
    airport: true
  },
  {
    name: "Бангкок",
    country: "Таиланд",
    continent: "Азия",
    population: 15758000,
    language: "Тайский",
    religion: "Буддизм",
    airport: true
  },
  {
    name: "Лагос",
    country: "Нигерия",
    continent: "Африка",
    population: 16060000,
    language: "Английский, яoruba",
    religion: "Христианство, ислам",
    airport: true
  },
  {
    name: "Барселона",
    country: "Испания",
    continent: "Европа",
    population: 5500000,
    language: "Испанский",
    religion: "Католицизм",
    airport: false
  },
  {
    name: "Нижний Новгород",
    country: "Россия",
    continent: "Европа",
    population: 1259013,
    language: "Русский",
    religion: "Православие",
    airport: false
  },
  {
    name: "Улан-Батор",
    country: "Монголия",
    continent: "Азия",
    population: 1344280,
    language: "Монгольский",
    religion: "Буддизм",
    airport: false
  },
  {
    name: "Стамбул",
    country: "Турция",
    continent: "Европа",
    population: 15460000,
    language: "Турецкий",
    religion: "Ислам",
    airport: true
  },
  {
    name: "Лахор",
    country: "Пакистан",
    continent: "Азия",
    population: 11800000,
    language: "Урду, английский",
    religion: "Ислам",
    airport: true
  },
  {
    name: "Лондон",
    country: "Великобритания",
    continent: "Европа",
    population: 8899000,
    language: "Английский",
    religion: "Протестантизм, католицизм",
    airport: true
  },
  {
    name: "Киншаса",
    country: "Демократическая Республика Конго",
    continent: "Африка",
    population: 11860000,
    language: "Французский, лингала",
    religion: "Христианство, ислам",
    airport: true
  },
  {
    name: "Лима",
    country: "Перу",
    continent: "Южная Америка",
    population: 10650000,
    language: "Испанский",
    religion: "Католицизм",
    airport: true
  },
  {
    name: "Багдад",
    country: "Ирак",
    continent: "Азия",
    population: 7860000,
    language: "Арабский",
    religion: "Ислам",
    airport: true
  },
  {
    name: "Бангалор",
    country: "Индия",
    continent: "Азия",
    population: 11324000,
    language: "Каннада, хинди",
    religion: "Индуизм",
    airport: true
  },
  {
    name: "Катманду",
    country: "Непал",
    continent: "Азия",
    population: 1003285,
    language: "Непальский",
    religion: "Индуизм",
    airport: false
  },
  {
    name: "Лилонгве",
    country: "Малави",
    continent: "Африка",
    population: 902388,
    language: "Чичева",
    religion: "Христианство",
    airport: false
  },
  {
    name: "Хошимин",
    country: "Вьетнам",
    continent: "Азия",
    population: 8300000,
    language: "Вьетнамский",
    religion: "Буддизм, даосизм",
    airport: true
  }
];
cities.sort((a, b) => a.country - b.country)
console.log(cities);
cities.sort((a, b ) => a - b)
console.log(cities);

const firstElement = library.find((item) => item.rating > 4.5 )
 console.log(firstElement);
    // Отсортируй оба массива в алфавитном порядке (в массиве library ориентируясь на поля author, а в массиве cities на поля country)

    // Отсортируй массив cities по возрастанию ориентируясь на поля population

// Найди в массиве library первый элемент в котором поля genre равное "Роман" и rating больше 4.6

        // Найти в cities первый элемент в котором поля continent равно "Европа"

const side =  cities.find((item) => item.continent === 'Европа')
console.log(side);
// Сформируй объект с полями author,title, year, genre, theme, rating и добавь его в массив library

    // Найди в массиве library первый элемент в котором поля rating меньше 4.5 и используя метод splice удали этот элмент