import faqData from "./faqdata.js";
import {
    createFaqItem,
    toggleOpenAnswer,
    hideOtherAnswers,
    hideAllAnswers,
    showAllAnswers,
    initializeFaq,
} from "./lib.js";

// select elements
const faqContainer = document.querySelector("#faq");
const search = document.querySelector(".js-search-input");
const hideAllButton = document.querySelector("#hide-all-btn");
const showAllButton = document.querySelector("#show-all-btn");
const clearSearchButton = document.querySelector("#clear-search");

let allAnswersOpen = false;

// ** Handelers **

const handleQuestionClick = (e) => {
    if (!e.target.matches(".question")) {
        return;
    }
    const questionContainer = e.target.closest(".question-container");
    const answer = questionContainer.querySelector(".answer");
    const question = e.target;
    toggleOpenAnswer(answer, question);
    if (!allAnswersOpen) {
        hideOtherAnswers(answer);
    }
};

const handleCloseAll = () => {
    hideAllAnswers();
    allAnswersOpen = false;
};

const handleShowAll = () => {
    showAllAnswers();
    allAnswersOpen = true;
};

const clearSeach = () => {
    search.value = "";
    initializeFaq(faqContainer, faqData);
};

const filterFaqItems = () => {
    const searchTerm = search.value.toLowerCase();
    const filteredData = faqData.filter(
        (item) =>
            item.answer.toLowerCase().includes(searchTerm) ||
            item.question.toLowerCase().includes(searchTerm)
    );
    // clear the contents of the container
    faqContainer.innerHTML = "";
    // set the contents to the filtered items
    filteredData.forEach((faqDataItem) =>
        createFaqItem(faqDataItem, faqContainer)
    );
};

// ** Event listeners and bootstrapping**
faqContainer.addEventListener("click", handleQuestionClick);
hideAllButton.addEventListener("click", handleCloseAll);
showAllButton.addEventListener("click", handleShowAll);

search.addEventListener("keyup", filterFaqItems);

clearSearchButton.addEventListener("click", clearSeach);

initializeFaq(faqContainer, faqData);
