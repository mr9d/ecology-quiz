const dynamicContentElement = document.querySelector('.dynamic');
const introArticleTemplate = document.querySelector('#intro-article-template').content;
const questionArticleTemplate = document.querySelector('#question-article-template').content;
const answerArticleTemplate = document.querySelector('#answer-article-template').content;
const resultArticleTemplate = document.querySelector('#result-article-template').content;

const switchDynamicContent = (template) => {
    const oldContent = dynamicContentElement.firstChild;
    if (oldContent !== null) {
        dynamicContentElement.removeChild(oldContent);
    }
    const newContent = template.cloneNode(true);
    dynamicContentElement.appendChild(newContent);
};

const init = () => {
    switchDynamicContent(resultArticleTemplate);
}

init();
