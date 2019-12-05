var db = [
    {
        "id": 1,
        "content": "Тэги разметки заключаются между знаками…",
        "tags": [
            "html",
            "Smth"
        ],
        "type_answer": "radioButton",
        "answers": {
            "value": [
                "/…/",   //1
                "<...>", //2
                "|…|",   //3
                "#…#"    //4
            ],
            "correct_answers": [2]
        },
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 2,
        "content": "Для чего используется язык HTML?",
        "tags": [
            "Smth",
            "html"
        ],
        "type_answer": "radioButton",
        "answers": {
            "value": [
                "для создания текстового документа",
                "для создания программ",
                "для создания Web-страниц",
                "для работы в Internet"
            ],
            "correct_answers": [3]
        },
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 3,
        "content": "Тело документа заключается в тэге…",
        "tags": [
            "Smth",
            "html"
        ],
        "type_answer": "radioButton",
        "answers": {
            "value": [
                "<body></body>",
                "<html></html>",
                "<head></head>",
                "<font></font>"
            ],
            "correct_answers": [1]
        },
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 4,
        "content": "Для перехода текста на новую строку используется тэг…",
        "tags": [
            "html",
            "Smth"
        ],
        "type_answer": "radioButton",
        "answers": {
            "value": [
                "<html>",
                "<br>",
                "<font>",
                "<body>"
            ],
            "correct_answers": [2]
        },
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 5,
        "content": "Какое расширение имеют Web-страницы?",
        "tags": [
            "html",
            "Smth"
        ],
        "type_answer": "radioButton",
        "answers": {
            "value": [
                ".txt",
                ".html",
                ".doc",
                ".exe"
            ],
            "correct_answers": [2]
        },
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 6,
        "content": "Из какого количества шестнадцатеричных символов кодируется цвет в HTML?",
        "tags": [
            "Smth",
            "html"
        ],
        "type_answer": "radioButton",
        "answers": {
            "value": [
                "двух",
                "восьми",
                "шестнадцати",
                "шести"
            ],
            "correct_answers": [4]
        },
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 7,
        "content": "Какой из тэгов является непарным?",
        "tags": [
            "Smth",
            "html"
        ],
        "type_answer": "radioButton",
        "answers": {
            "value": [
                "<head>",
                "<br>",
                "<title>",
                "<html>"
            ],
            "correct_answers": [2]
        },
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 8,
        "content": "Какой тег позволяет вставлять картинки в HTML документы?",
        "tags": [
            "Smth",
            "html"
        ],
        "type_answer": "radioButton",
        "answers": {
            "value": [
                "<pic>",
                "<image>",
                "<img>",
                "<picture>"
            ],
            "correct_answers": [3]
        },
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 9,
        "content": "С помощью какого тэга можно сделать текст жирным?",
        "tags": [
            "html",
            "Smth"
        ],
        "type_answer": "radioButton",
        "answers": {
            "value": [
                "<b>",
                "<i>",
                "<big>",
                "<h2>"
            ],
            "correct_answers": [1]
        },
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    },
    {
        "id": 10,
        "content": "Укажите тег позволяющий подключить к HTML документу скрипты выполняющиеся на стороне клиента.",
        "tags": [
            "html",
            "Smth"
        ],
        "type_answer": "radioButton",
        "answers": {
            "value": [
                "<client>",
                "<script>",
                "<object>",
                "<applet>"
            ],
            "correct_answers": [2]
        },
        "createdAt": "2019-10-24T19:46:00Z",
        "imageUrl": "https://dummyimage.com/200x150/555/fff"
    }

]

function preparedDB(items) {
    return JSON.parse(JSON.stringify(items));
}

function isCorrectAnswer(answer, current, questions) {
    return answer >= 1 && answer <= questions[current].answers.value.length;
}

function responseСheck(answer, current, questions) {
    return answer == questions[current].answers.correct_answers[0] ? 1 : 0;
}

function isTimerEnabled(endDate) {
    return new Date() <= endDate;
}

function endQuiz(current, numberOfQuestions) {
    return current == numberOfQuestions ? true : false;
}

function formationQuestionAndAnswers(current, questions) {

    var str = `Вопрос ${questions[current].id}/${questions.length}: ${questions[current].content}\n`;;

    for (var i = 0; i < questions[current].answers.value.length; i++) {
        str += `${i + 1}) ${questions[current].answers.value[i]}\n`;
    }

    return str;
}

var questions = preparedDB(db);
var current = 0;
var points = 0;
var startDate = new Date();
var timeForTestInMs = 20000;
var endDate = startDate.getTime() + timeForTestInMs;

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Ваш ответ: '
});

console.info(formationQuestionAndAnswers(current, questions));
rl.prompt();

rl.on('line', (selectedAnswer) => {

    if (isCorrectAnswer(selectedAnswer, current, questions)) {
        points += responseСheck(selectedAnswer, current, questions);
        current++;
    }
    else {
        console.info(`Ваш ответ некорректный, ведите корректный ответ.\n`);
    }

    if (endQuiz(current, questions.length) || !isTimerEnabled(endDate)) {
        rl.close();
    }

    console.info(formationQuestionAndAnswers(current, questions));
    rl.prompt();

}).on('close', () => {
    console.info(`Вы набрали ${points} балла(ов) из ${questions.length}`);
    process.exit(0);
});