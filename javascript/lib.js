import {
    getAllFaqItems,
    getAnswerAndQuestionElements,
    showAnswer,
    hideAnswer,
} from "./helpers.js";

export const createFaqItem = (itemData, faqContainer) => {
    // destructure the data item
    const { question, answer } = itemData;

    // create a container for each question-answer
    const faqItem = document.createElement("div");
    faqItem.className = "questionContainer";

    // create an html p element for the question and append it to the container
    const questionElement = document.createElement("button");
    questionElement.className = "question chevron right";
    questionElement.innerHTML = question;
    faqItem.append(questionElement);

    // create a p html element for the answer and append it to the container
    const answerElement = document.createElement("p");
    answerElement.innerHTML = answer;
    answerElement.classList.add("paragraph", "answer", "hidden");
    faqItem.append(answerElement);

    // apend the question-answer pair to the faq section
    faqContainer.append(faqItem);
};

export const initializeFaq = (faqContainer, faqData) => {
    faqContainer.innerHTML = "";
    faqData.forEach((faqDataItem) => createFaqItem(faqDataItem, faqContainer));
};

export const toggleOpenAnswer = (answer, question) => {
    question.classList.toggle("bottom");
    question.classList.toggle("right");
    answer.classList.toggle("hidden");
};

export const hideOtherAnswers = (currentAnswer) => {
    const faqItems = getAllFaqItems();
    faqItems.forEach((faqItem) => {
        const { answer, question } = getAnswerAndQuestionElements(faqItem);
        if (answer === currentAnswer) return;
        hideAnswer(answer, question);
    });
};

export const hideAllAnswers = () => {
    const faqItems = getAllFaqItems();
    faqItems.forEach((faqItem) => {
        const { answer, question } = getAnswerAndQuestionElements(faqItem);
        hideAnswer(answer, question);
    });
};

export const showAllAnswers = () => {
    const faqItems = getAllFaqItems();
    faqItems.forEach((faqItem) => {
        const { answer, question } = getAnswerAndQuestionElements(faqItem);
        showAnswer(answer, question);
    });
};
