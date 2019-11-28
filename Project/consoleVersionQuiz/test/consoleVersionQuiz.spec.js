var dbForTest = [
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
        }
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
        }
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
        }
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
                "1",
                "2",
                "3",
                "4"
            ],
            "correct_answers": [2]
        }
    }
]

describe('consoleVersionQuiz', () => {
    describe('preparedDB', () => {
        it("should output /…/", () => {
            expect(preparedDB(dbForTest)[0].answers.value[0]).toBe("/…/");
        });
    });

    describe('isCorrectAnswer', () => {
        it("should output true", () => {
            expect(isCorrectAnswer(2, 0, dbForTest)).toBe(true);
        });

        it("should output false", () => {
            expect(isCorrectAnswer(5, 0, dbForTest)).toBe(false);
        });
    });

    describe('responseСheck', () => {
        it("should output true", () => {
            expect(responseСheck(2, 0, dbForTest)).toBe(true);
        });

        it("should output false", () => {
            expect(responseСheck(3, 0, dbForTest)).toBe(false);
        });
    });

    describe('isTimerEnabled', () => {
        it("should output true", () => {
            expect(isTimerEnabled(new Date().getTime() + 20000)).toBe(true);
        });

        it("should output false", () => {
            expect(isTimerEnabled(new Date().getTime() - 20000)).toBe(false);
        });
    });

    describe('endQuiz', () => {
        it("should output true", () => {
            expect(endQuiz(5, 4)).toBe(true);
        });

        it("should output false", () => {
            expect(endQuiz(1, 4)).toBe(false);
        });
    });

    describe('formationAnswers', () => {
        it("should output 1) 1\n2) 2\n3) 3\n4) 4\n", () => {
            expect(formationAnswers(3, dbForTest)).toBe(`1) 1\n2) 2\n3) 3\n4) 4\n`);
        });
    });

    describe('formationQuestion', () => {
        it("should output Вопрос 1/4: Тэги разметки заключаются между знаками…\n", () => {
            expect(formationQuestion(0, dbForTest)).toBe(`Вопрос 1/4: Тэги разметки заключаются между знаками…\n`);
        });
    });
});

