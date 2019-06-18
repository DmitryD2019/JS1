var canvas = document.getElementById('game');  
var context = canvas.getContext('2d');   //возвращает контекст рисования в игровом поле  (2d - двухмерная модель рисования) 
                                         // Метод getContext задает контекст для рисования перед работой с канвасом. 
var grid = 16; 
var count = 0;

var snake = {      
    x: 160,      
    y: 160,

    // двигается на 1 клетку в направлении x или y
    dx: grid,
    dy: 0,

    //  Хранит в себе данные клеток, которые находятся в теле змейки
    cells: [],

    
    maxCells: 7
};

var fruit = {    
    x: 320,        
    y: 320
};

// Фрукт появляется в случайном месте в указанном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;   //Math.floor() возвращает целое число, которое меньше или равно данному числу.
}

// Цикл игры
function loop() {
   requestAnimationFrame(loop);    //обеспечивает встроеный API (интерфейс программирования приложений) для запуска любых типов анимации 
                                   //в браузере (DOM элементов, canvas) 

    // Снижение скорости змейки до 10 fps (кадров в секунду)
    if (++count < 6) {          
        return;
    }
    count = 0;
    context.clearRect(0,0,canvas.width,canvas.height);  // очищает заданную область пикселей внутри данного прямоугольника

    // Движение змейки по её скорости
    snake.x += snake.dx;
    snake.y += snake.dy;

    // Фиксация позиции змейки по горизонтали по краю игрового поля
    if (snake.x < 0) {
        snake.x = canvas.width - grid;
    } 
    else if (snake.x >= canvas.width) {
        snake.x = 0;
    }

    // Фиксация позиции змейки по вертикали по краю игрового поля
    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    } 
    else if (snake.y >= canvas.height) {
        snake.y = 0;
    }

    snake.cells.unshift({x: snake.x, y: snake.y});   // unshift добавляет любое количество новых элементов в начало массива

    // Скрытие клеток, когда змейка сдвинулась с них
    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
    }

    // рисование фрукта
    context.fillStyle = 'orange';   // fillStyle устанавливает или возвращает цвет
    context.fillRect(fruit.x, fruit.y, grid-1, grid-1);    // fillRect(x, y, width, height) рисует прямоугольник, заполненный текущим стилем заливки.
                                                          
    // рисование змейки (одна клетка за раз)
    context.fillStyle = 'green';
    snake.cells.forEach(function(cell, index) {    

        context.fillRect(cell.x, cell.y, grid-1, grid-1);  

        // змейка съела фрукт
        if (cell.x === fruit.x && cell.y === fruit.y) {
            snake.maxCells++; context.fillStyle = 'red';  //при съедании окрашивается в красный цвет

            // игровое поле 400x400 что равно 25x25 клеток
            fruit.x = getRandomInt(0, 25) * grid;  
            fruit.y = getRandomInt(0, 25) * grid;
        }

        // Проверка столкновения со всеми клетками
        for (var i = index + 1; i < snake.cells.length; i++) {   
  
            // Когда змейка сталкивается со своим телом, игра перезагружается на первоначальный уровень, 
            // где змейка принимает свою первоначальную длину
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                snake.x = 160;
                snake.y = 160;
                snake.cells = [];
                snake.maxCells = 7;
                snake.dx = grid;
                snake.dy = 0;
                fruit.x = getRandomInt(0, 25) * grid;
                fruit.y = getRandomInt(0, 25) * grid;
                context.fillStyle = 'white';                  
            }
        }
    });
}

// кнопки событий змейки 
document.addEventListener('keydown', function(e) {    

    // клавиша стрелка влево
    if (e.which === 37 && snake.dx === 0) {     //e.which - это свойство указывает на клавишу (её код) или кнопку мыши, на которую было совершено нажатие.
        snake.dx = -grid;                      // Свойство which экземпляра объекта Event определяет, какая клавиша на клавиатуре или кнопка мыши вызвала событие (1 - левая, 2 - средняя, 3 - правая).
        snake.dy = 0;
    }
    // клавиша стрелка вверх
    else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    }
    // клавиша стрелка вправо
    else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
    }
    // клавиша стрелка вниз
    else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    }
});
// запуск функции - начало игры
requestAnimationFrame(loop);