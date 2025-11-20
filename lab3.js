
//Масив інформації (цитати Волта Діснея та цікаві факти).
const quotes = [
    "«Усі наші мрії можуть здійснитися, якщо у нас вистачить сміливості втілити їх у життя». — Волт Дісней",
    "«Сміх – це вічний. Уява не має віку. І мрії вічні». — Волт Дісней",
    "«Найкращий спосіб розпочати – це припинити говорити і почати робити». — Волт Дісней",
    "Цікавий факт: Під парком Діснейленду у Флориді є ціла система тунелів (Utilidors), щоб співробітники могли пересуватися непомітно для гостей.",
    "Цікавий факт: На території Діснейленду заборонено продавати жувальну гумку, щоб підтримувати чистоту парку.",
    "«Казки можуть більше розповісти про життя, ніж історія». — Волт Дісней",
    "Цікавий факт: Персонаж Міккі Маус спочатку був названий Мортімер, але дружина Волта, Ліліан, переконала його змінити ім'я на Міккі.",
];
setInterval(displayRandomQuote, 60000);

//Випадковим чином вибирає цитату з масиву та виводить її на екран.
function displayRandomQuote() {
    // 1. Знаходимо елемент на сторінці
    const quoteElement = document.getElementById('quote-of-the-day');
    
    // Перевіряємо, чи існує елемент, перш ніж працювати з ним
    if (quoteElement) {
        // 2. Генеруємо випадковий індекс
        const randomIndex = Math.floor(Math.random() * quotes.length);
        // 3. Отримуємо випадкову цитату
        const randomQuote = quotes[randomIndex];
        // 4. Виводимо інформацію
        quoteElement.textContent = `💫 Інформація дня: ${randomQuote}`;
    }
}

//Обчислення й виведення основних математичних операцій
//ЗАПИТУЄ у користувача два числа, виконує основні математичні операції та виводить результати згідно з вимогами (document.write для суми/різниці, alert для множення/ділення).
 function performMathOperations() {
    
    // 1. Отримуємо ввід від користувача
    const input1 = window.prompt("Введіть перше число:", "25");
    const input2 = window.prompt("Введіть друге число:", "5");

    // 2. Перевіряємо, чи користувач не натиснув "Скасувати"
    if (input1 === null || input2 === null) {
        alert("Операцію скасовано.");
        return; // Виходимо з функції
    }

    // 3. Конвертуємо ввід у числа (використовуємо parseFloat для підтримки десяткових)
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    // 4. Перевіряємо, чи введено коректні числа
    if (isNaN(num1) || isNaN(num2)) {
        alert("Помилка! Будь ласка, введіть коректні числа.");
        return; // Виходимо з функції
    }

    // 5. Перевірка ділення на нуль для операції ділення
    let quotient;
    if (num2 === 0) {
        // Якщо ділення на нуль, все одно виконуємо інші операції
        quotient = "Неможливо (ділення на нуль)";
    } else {
        quotient = num1 / num2;
    }

    // Обчислення (якщо все гаразд)
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    
    // 1. Вивід ділення й множення - методом alert об'єкта window
    window.alert(`Результат МНОЖЕННЯ (${num1} * ${num2}) = ${product}`);
    window.alert(`Результат ДІЛЕННЯ (${num1} / ${num2}) = ${quotient}`);

    // 2. Вивід різниці й суми - методом write об'єкта document
    // ВАЖЛИВО: document.write() після завантаження сторінки ПОВНІСТЮ ПЕРЕЗАПИСУЄ весь її вміст.
    document.write(`
        <html lang="uk">
        <head>
            <title>Результати обчислень</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { font-family: 'Segoe UI', sans-serif; background-color: #add8e6; padding: 20px; text-align: center; }
                h1 { color: #5a2d82; }
                p { font-size: 1.2em; border: 1px solid #dda0dd; padding: 10px; margin: 10px auto; width: 400px; max-width: 90%; background-color: #ffe4e1; border-radius: 8px; }
                button { background-color: #add8e6; color: blue; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-top: 20px; }
            </style>
        </head>
        <body>
            <h1>Результати Основних Математичних Операцій</h1>
            <p>Сума (${num1} + ${num2}) = ${sum}</p>
            <p>Різниця (${num1} - ${num2}) = ${difference}</p>
            <p style="font-size: small; background-color: #add8e6; border: none; max-width: 600px;">
                Натисніть OK у попередніх спливаючих вікнах, щоб побачити ці результати.
            </p>
            <button onclick="window.location.href='lab1.html'">Повернутися на головну сторінку</button>
        </body>
        </html>
    `);
}

// АВТОМАТИЧНИЙ ЗАПУСК ФУНКЦІЇ ПІСЛЯ ВИЗНАЧЕННЯ ВСІХ СКРИПТІВ
// Викликаємо функцію одразу, оскільки тег <script> у HTML розташований перед </body>, 
// що гарантує існування елемента 'quote-of-the-day'.
displayRandomQuote();