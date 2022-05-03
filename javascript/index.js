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


const initializeFaq = (faqContainer) => {
    faqContainer.innerHTML = "";
    faqData.forEach((faqDataItem) => createFaqItem(faqDataItem, faqContainer));
};

initializeFaq(faqContainer);

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

const clearSeach = () => {
    search.value = "";
    initializeFaq(faqContainer);
};

const filterFaqItems = () => {
    const searchTerm = search.value.toLowerCase();
    console.log(searchTerm);

    const filteredData = faqData.filter(
        (item) =>
            item.answer.toLowerCase().includes(searchTerm) ||
            item.question.toLowerCase().includes(searchTerm)
    );
    console.log(filteredData);
    faqContainer.innerHTML = "";
    filteredData.forEach((faqDataItem) =>
        createFaqItem(faqDataItem, faqContainer)
    );
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

document.querySelector("#clear-search").addEventListener("click", clearSeach);
