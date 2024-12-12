
let comments = [];

function loadComments() {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
        comments = JSON.parse(storedComments);
        renderComments();
    }
}
function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function renderComments() {
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = '';

    comments.forEach((comment, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <p>${comment}</p>
        <button class="removeCommentButton" data-index="${index}">Remove Hacks</button>
    `;
        commentList.appendChild(li);
    });
}

document.getElementById('addCommentButton').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
    
    if (commentText !== '') {
        comments.push(commentText);
        saveComments();
        renderComments();
        commentInput.value = '';
    }
});

document.getElementById('commentList').addEventListener('click', function (event) {
    if (event.target.classList.contains('removeCommentButton')) {
        const index = event.target.getAttribute('data-index');
        comments.splice(index, 1);
        saveComments();
        renderComments();
    }
});

loadComments();