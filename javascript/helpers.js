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
    answer.setAttribute("aria-hidden", true);
    question.classList.remove("bottom");
    question.classList.add("right");
    question.setAttribute("aria-expanded", false);
};

export const showAnswer = (answer, question) => {
    answer.classList.remove("hidden");
    answer.setAttribute("aria-hidden", false);
    question.classList.remove("right");
    question.classList.add("bottom");
    question.setAttribute("aria-expanded", true);
};
