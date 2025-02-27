console.log(
    "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
    "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("강산은 내 보물");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute("data-target");
            const targetElement = document.getElementById(targetId);
            if (targetElement) targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    const buttonCommentCancel = document.getElementById("button-comment-cancel");
    const buttonCommentRegister = document.getElementById("button-comment-register");
    const inputNickname = document.getElementById("input-nickname");
    const inputComment = document.getElementById("input-comment");
    const commentList = document.querySelector(".comment-list");

    buttonCommentCancel.addEventListener("click", () => {
        inputNickname.value = "";
        inputComment.value = "";
    });

    buttonCommentRegister.addEventListener("click", event => {
        event.preventDefault();
        const nickname = inputNickname.value;
        const comment = inputComment.value;
        if (nickname && comment) {
            const newComment = document.createElement("li");
            newComment.classList.add("comment-item");

            const commentAuthor = document.createElement("div");
            commentAuthor.classList.add("comment-author");

            const authorImg = document.createElement("img");
            authorImg.src = "./images/comment-author-icon.png";
            authorImg.alt = "사용자 프로필 이미지";

            const authorName = document.createElement("span");
            authorName.textContent = nickname;

            commentAuthor.append(authorImg, authorName);

            const commentContent = document.createElement("div");
            commentContent.classList.add("comment-content");
            commentContent.textContent = comment;

            newComment.append(commentAuthor, commentContent);
            commentList.appendChild(newComment);

            inputNickname.value = "";
            inputComment.value = "";
        }
    });
});