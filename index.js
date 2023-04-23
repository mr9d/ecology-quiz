const questions = [
    {
        text: [
            'Начнем с выбора меню на день.',
            'Ваша задача использовать те продукты, производство которых наименее вредно для окружающей среды.',
            'Что выберете — мясо или рыбу?'
        ],
        options: [
            'Мясо',
            'Рыба'
        ],
        optionCorrect: 1,
        answer: {
            title: 'Рыба',
            text: [
                'Несмотря на то, что рыболовство это одна из главных причин загрязнения водоемов пластиком, рыба всё же экологичнее мяса.',
                'Производство мяса влечет за собой огромные выбросы метана. На изготовление продуктов питания приходится четверть всех мировых выбросов парниковых газов. И более половины из них — это последствия животноводства.'
            ]
        }
    },
    {
        text: [
            'С горячим блюдом мы уже определились.',
            'Теперь выбираем гарнир. Как думаете, что экологичнее — макароны или картофель?'
        ],
        options: [
            'Макароны',
            'Картофель'
        ],
        optionCorrect: 1,
        answer: {
            title: 'Картофель',
            text: [
                'Картофель один из самых углеродонейтральнных продуктов. Это значит, что его выращивание не вызывает выбросов парниковых газов и почти не оставляет углеродного следа.',
                'Чего не скажешь о макаронах. Чтобы превратить пшеницу в муку, а муку в макароны, требуется оооочень много энергии.'
            ]
        }
    },
    {
        text: [
            'Теперь нужно помыть посуду так, чтобы потратить как можно меньше воды.',
            'Как будете мыть — в посудомоечной машине или руками?'
        ],
        options: [
            'Руками',
            'В машине'
        ],
        optionCorrect: 1,
        answer: {
            title: 'В машине',
            text: [
                'Вопреки популярным мифам, мыть посуду в посудомоечной машине экологичнее, чем руками.',
                'Семье из трех человек для мытья посуды потребуется от 150 литров воды в день. На точно такое же количество посуды машина потратит не более 20 литров воды.'
            ]
        }
    },
    {
        text: [
            'Пора отправляться по делам. Экологичнее всего передвигаться пешком, но вам нужно на другой конец города.',
            'На чем сегодня поедете — на автобусе или трамвае?'
        ],
        options: [
            'Автобус',
            'Трамвай'
        ],
        optionCorrect: 1,
        answer: {
            title: 'Трамвай',
            text: [
                'Это было просто!', 
                'Трамвай экологичнее автобуса. Он работает не на бензине, а на электричестве, поэтому не выбрасывает вредных веществ в атмосферу.'
            ]
        }
    },
    {
        text: [
            'В дороге вам захотелось пить. В киоске есть вода в стеклянных и пластиковых бутылках.',
            'Какую возьмете?'
        ],
        options: [
            'Стекло',
            'Пластик'
        ],
        optionCorrect: 1,
        answer: {
            title: 'Пластик',
            text: [
                'Пластиковую тару перерабатывать дешевле и проще. Переработка стекла намного дороже — оно тяжелое и хрупкое, его сложно перевозить и хранить.',
                'А еще при разложении стекло выделяет щелочь. Если стеклянная бутылка окажется на свалке, то будет разлагаться и загрязнять продуктами своего распада почву и грунтовые воды больше тысячи лет.'
            ]
        }
    },
    {
        text: [
            'Скоро зима, вам нужна новая теплая куртка. В магазине вы нашли два подходящих варианта — с утеплителем на пуху и на синтепоне.', 
            'Какой утеплитель экологичнее?'
        ],
        options: [
            'Синтепон',
            'Пух'
        ],
        optionCorrect: 0,
        answer: {
            title: 'Синтепон',
            text: [
                'Мы уже говорили, какой вред причиняет планете животноводство. Этот вред наносит не только производство мяса, а создание любых продуктов и материалов животного происхождения. Поэтому любые продукты животноводства менее экологичны, чем их аналоги искусственного происхождения.', 
                'Кроме того, синтепон это пластик. Его можно переработать и потом  повторно использовать.'
            ]
        }
    },
    {
        text: [
            'На кассе вам предлагают положить куртку в пакет.',
            'Какой возьмете — пластиковый или бумажный?'
        ],
        options: [
            'Пластик',
            'Бумага'
        ],
        optionCorrect: 0,
        answer: {
            title: 'Пластик',
            text: [
                'Чем дольше длится жизненный цикл вещей, тем они экологичнее. Пластиковый пакет можно использовать повторно десятки раз, тогда как бумажный очень быстро испачкается или порвется.',
                'Пакет из крафтовой бумаги будет экологичнее, только  если его сделать из макулатуры. Но к сожалению, большинство бумажных пакетов производится из первичной целлюлозы.'
            ]
        }
    },
    {
        text: [
            'И последнее дело на сегодня. Вам нужно заменить батарейки в пульте управления.',
            'Продавец предлагает на выбор — батарейки АА или аккумуляторы NiMH?'
        ],
        options: [
            'Аккумулятор',
            'Батарейки'
        ],
        optionCorrect: 0,
        answer: {
            title: 'Аккумулятор',
            text: [
                'Чем дольше вещь служит, тем она экологичнее. Для производства батареек и аккумуляторов затрачивается приблизительно равный объем ресурсов, но аккумуляторы служат в сотни раз дольше батареек.',
                'Помните, что в батарейках и аккумуляторах содержатся токсичные вещества. Нельзя допустить, чтобы эти вещества попадали в почву, поэтому их нужно сдавать на переработку.'
            ]
        }
    }
];

let currentQuestionIndex;
let totalScore;

const dynamicContentElement = document.querySelector('.dynamic');
const introArticleTemplate = document.querySelector('#intro-article-template').content;
const questionArticleTemplate = document.querySelector('#question-article-template').content;
const answerArticleTemplate = document.querySelector('#answer-article-template').content;
const resultArticleTemplate = document.querySelector('#result-article-template').content;

const switchDynamicContent = (template) => {
    const oldContent = dynamicContentElement.firstElementChild;
    if (oldContent !== null) {
        dynamicContentElement.removeChild(oldContent);
    }
    const newContent = template.cloneNode(true);
    dynamicContentElement.appendChild(newContent);
};

const initIntroListeners = () => {
    const startButton = dynamicContentElement.querySelector('button.intro__start');
    startButton.addEventListener('click', () => {
        totalScore = 0;
        currentQuestionIndex = 0;
        switchToQuestion();
    });
};

const switchToIntro = () => {
    switchDynamicContent(introArticleTemplate);
    initIntroListeners();
};

const initQuestionListeners = () => {
    const buttons = dynamicContentElement.querySelectorAll('.question__answer');
    for(const [index, button] of buttons.entries()) {
        const buttonCorrect = index === questions[currentQuestionIndex].optionCorrect;
        button.addEventListener('click', () => {
            if (buttonCorrect) {
                totalScore++;
            }
            switchToAnswer();
        });
    }
};

const switchToQuestion = () => {
    switchDynamicContent(questionArticleTemplate);

    const question = questions[currentQuestionIndex];
    
    // Заголовок
    const titleElement = dynamicContentElement.querySelector('.question__title');
    titleElement.innerText = `${currentQuestionIndex + 1}/${questions.length}`;
    
    // Текст вопроса
    const contentElement = dynamicContentElement.querySelector('.question__content');
    for(const paragraphText of question.text) {
        const paragraphElement = document.createElement('p');
        paragraphElement.innerText = paragraphText;
        paragraphElement.classList.add('question__paragraph');
        contentElement.appendChild(paragraphElement);
    }

    // Варианты выбора
    const buttonsElement = document.createElement('section');
    buttonsElement.classList.add('question__buttons');
    for(const buttonText of question.options) {
        const buttonElement = document.createElement('button');
        buttonElement.innerText = buttonText;
        buttonElement.classList.add('button', 'question__answer');
        buttonsElement.appendChild(buttonElement);
    }
    contentElement.appendChild(buttonsElement);

    initQuestionListeners();
};

const initAnswerListeners = () => {
    const buttonElement = dynamicContentElement.querySelector('.answer__continue');
    buttonElement.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            switchToQuestion();
        } else {
            switchToResult();
        }
        
    });
};

const switchToAnswer = () => {
    switchDynamicContent(answerArticleTemplate);
    
    const question = questions[currentQuestionIndex];
    const answer = question.answer;
    
    // Заголовок
    const titleElement = dynamicContentElement.querySelector('.answer__title');
    titleElement.innerText = answer.title;
    
    // Текст ответа
    const contentElement = dynamicContentElement.querySelector('.answer__content');
    for(const paragraphText of answer.text) {
        const paragraphElement = document.createElement('p');
        paragraphElement.innerText = paragraphText;
        paragraphElement.classList.add('answer__paragraph');
        contentElement.appendChild(paragraphElement);
    }

    // Кнопка
    const buttonsElement = dynamicContentElement.querySelector('.answer__buttons');
    contentElement.appendChild(buttonsElement);

    // Картинка
    const answerElement = dynamicContentElement.querySelector('.answer');
    answerElement.style.backgroundImage = `url("img/0${currentQuestionIndex + 1}.png")`;

    initAnswerListeners();
};

const makeResultTitle = (score) => {
    if (score === 1) {
        return `${score} балл`;
    }
    if (score > 1 && score < 5) {
        return `${score} балла`;
    }
    return `${score} баллов`;
};

const initResultListeners = () => {
    const buttonElement = dynamicContentElement.querySelector('.result__share');
    buttonElement.addEventListener('click', () => {
        switchToIntro();
    });
}

const switchToResult = () => {
    switchDynamicContent(resultArticleTemplate);

    // Заголовок
    const titleElement = dynamicContentElement.querySelector('.result__title');
    titleElement.innerText = makeResultTitle(totalScore);

    // Текст результата
    const resultParagraphs = dynamicContentElement.querySelectorAll('.result__paragraph');
    for (const resultParagraph of resultParagraphs) {
        if (resultParagraph.dataset.scoreMin <= totalScore && resultParagraph.dataset.scoreMax >= totalScore) {
            resultParagraph.style.display = 'block';
        }
    }

    initResultListeners();
}

const init = () => {
    switchToIntro();
};

init();
