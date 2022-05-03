import faqData from "./faqdata.js";
import {
    createFaqItem,
    toggleOpenAnswer,
    hideOtherAnswers,
    hideAllAnswers,
    showAllAnswers,
} from "./lib.js";

// select faq section and populate it with question answer pairs
const faqContainer = document.querySelector("#faq");
faqData.forEach((faqDataItem) => createFaqItem(faqDataItem, faqContainer));

// select serach input

const search = document.querySelector(".jsSearchInput");

// ** Handelers **

const handleQuestionClick = (e) => {
    if (!e.target.matches(".question")) {
        return;
    }
    const questionContainer = e.target.closest(".questionContainer");
    const answer = questionContainer.querySelector(".answer");
    const question = e.target;
    toggleOpenAnswer(answer, question);
    hideOtherAnswers(answer);
};

const handleCloseAll = () => {
    hideAllAnswers();
};

const handleShowAll = () => {
    showAllAnswers();
};

const filterFaqItems = () => {
    console.log("filter");
};

// ** Event listeners **
faqContainer.addEventListener("click", handleQuestionClick);

document
    .querySelector("#hide-all-btn")
    .addEventListener("click", handleCloseAll);

document
    .querySelector("#show-all-btn")
    .addEventListener("click", handleShowAll);

search.addEventListener("keyup", filterFaqItems);
