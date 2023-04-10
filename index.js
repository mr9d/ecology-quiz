const dynamicContentElement = document.querySelector('.dynamic');
const introArticleTemplate = document.querySelector('#intro-article-template').content;

const switchDynamicContent = (template) => {
    const oldContent = dynamicContentElement.firstChild;
    if (oldContent !== null) {
        dynamicContentElement.removeChild(oldContent);
    }
    const newContent = template.cloneNode(true);
    dynamicContentElement.appendChild(newContent);
};

const init = () => {
    switchDynamicContent(introArticleTemplate);
}

init();
