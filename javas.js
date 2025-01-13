const correctUsername = "SVCE";
const correctPassword = "2211";

function verifyCredentials(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("userName").value.trim();
    const password = document.getElementById("Password").value.trim();
    const rememberMe = document.getElementById("rememberMe").checked;

    if (!username || !password) {
        alert("Please fill out all fields.");
        return;
    }

    if (username === correctUsername && password === correctPassword) {
        if (rememberMe) {
            alert(`Welcome, ${username}! Have a nice day! Your credentials have been saved.`);
        } else {
            alert(`Welcome, ${username}! Your credentials were not saved.`);
        }
        window.location.href = "https://www.instagram.com/mr_rohithsai?igsh=MWQzcTJsZXMyaDR3aA==";
    } else {
        alert("Wrong credentials. Please try again.");
    }
}
