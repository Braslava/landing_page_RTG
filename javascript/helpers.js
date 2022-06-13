export const getAllFaqItems = () => {
    return document.querySelectorAll("#faq .question-container");
};

export const getAnswerAndQuestionElements = (faqItem) => {
    const answer = faqItem.querySelector(".answer");
    const question = faqItem.querySelector(".question");
    return { answer, question };
};

export const hideAnswer = (answer, question) => {
    answer.classList.add("hidden");
    question.classList.remove("bottom");
    question.classList.add("right");
};

export const showAnswer = (answer, question) => {
    answer.classList.remove("hidden");
    question.classList.remove("right");
    question.classList.add("bottom");
};
