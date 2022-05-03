import faqData from "./javascript/faqdata.js";

// ** selecting elements **
const faqContainer = document.querySelector("#faq");

// ** Main functions **

const createFaqItem = (itemData) => {
    // destructure the data item
    const { question, answer } = itemData;

    // create a container for each question-answer
    const faqItem = document.createElement("div");
    faqItem.className = "questionContainer";

    // create a p html element for the question and append it to the container
    const questionElement = document.createElement("p");
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

const toggleOpenAnswer = (answer, question) => {
    question.classList.toggle("bottom");
    answer.classList.toggle("hidden");
};

const hideOtherAnswers = (currentAnswer) => {
    console.log(currentAnswer);
    const faqItems = document.querySelectorAll("#faq .questionContainer");
    faqItems.forEach((faqItem) => {
        const answer = faqItem.querySelector(".answer");
        const question = faqItem.querySelector(".question");
        if (answer === currentAnswer) return;
        answer.classList.add("hidden");
        question.classList.remove("bottom");
        question.classList.add("right");
    });
};

const populateFaq = () => {
    faqData.forEach((faqDataItem) => createFaqItem(faqDataItem));
};

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
    console.log("close all");
};

const handleOepnAll = () => {
    console.log("open all");
};

// ** Event listeners **
faqContainer.addEventListener("click", handleQuestionClick);

populateFaq();
