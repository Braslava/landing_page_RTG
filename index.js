const faqContainer = document.querySelector(".faq");

//const questionContainers = document.querySelectorAll("")

const handleClick = (e) => {
    // console.log(e.target);
    if (!e.target.matches(".question") && !e.target.matches(".chevron")) {
        return;
    }
    console.log("clicked the question");
    const questionContainer = e.target.closest(".questionContainer");
    console.log(questionContainer);
};

faqContainer.addEventListener("click", handleClick);
