function submitResponse() {
    var responseInput = document.getElementById("responseInput").value.toLowerCase();
    var responseMessage = document.getElementById("responseMessage");

    if (responseInput === "yes") {
        responseMessage.innerHTML = "OMGG!!! SERIOUSLY!? CONGRATULATIONS, you are now officially my girlfriend, and I am your boyfriend. (Note: Screenshot this and send me the picture)";
    } else if (responseInput === "no") {
        responseMessage.innerHTML = "MMM okey no problem. I appreciate your honesty.";
    } else {
        responseMessage.innerHTML = "I'm sorry, I didn't understand. Please enter 'yes' or 'no' BB.";
    }
}
