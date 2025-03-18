// Initialize user data
let users = [
    { username: "John Doe", points: 0 },
    { username: "Jane Smith", points: 15 },
    { username: "Alice Johnson", points: 20 }
];

let currentUser = users[0]; // Set the current user (John Doe)

const updateUserProfile = () => {
    document.getElementById("username").innerText = currentUser.username;
    document.getElementById("userPoints").innerText = currentUser.points;
};

const answerQuestion = () => {
    currentUser.points += 5; // Add 5 points for answering a question
    updateUserProfile();
};

const upvoteAnswer = () => {
    currentUser.points += 5; // Add 5 points for receiving an upvote
    updateUserProfile();
};

const transferPoints = () => {
    const transferUsername = document.getElementById("transferUser").value;
    const pointsToTransfer = parseInt(document.getElementById("pointsToTransfer").value);

    if (pointsToTransfer <= 0 || isNaN(pointsToTransfer)) {
        alert("Please enter a valid number of points.");
        return;
    }

    if (currentUser.points < pointsToTransfer) {
        alert("You don't have enough points to transfer.");
        return;
    }

    if (currentUser.points < 10) {
        alert("You need more than 10 points to transfer.");
        return;
    }

    const userToTransfer = users.find(user => user.username === transferUsername);

    if (!userToTransfer) {
        alert("User not found.");
        return;
    }

    userToTransfer.points += pointsToTransfer;
    currentUser.points -= pointsToTransfer;

    alert(`Successfully transferred ${pointsToTransfer} points to ${transferUsername}`);
    updateUserProfile();
    displayUserList();
};

const displayUserList = () => {
    let userListHtml = '';
    users.forEach(user => {
        userListHtml += `
            <div class="user">
                <span>${user.username} - Points: ${user.points}</span>
            </div>
        `;
    });
    document.getElementById("userList").innerHTML = userListHtml;
};

// Button Click Event Listeners
document.getElementById("answerQuestionBtn").addEventListener("click", answerQuestion);
document.getElementById("upvoteAnswerBtn").addEventListener("click", upvoteAnswer);
document.getElementById("transferPointsBtn").addEventListener("click", transferPoints);

// On page load, update the user profile and display the user list
window.onload = () => {
    updateUserProfile();
    displayUserList();
};
