document.addEventListener('DOMContentLoaded', function() {
    const typedText = "Cyber-security & Ethical-Hacking tools in the palm of your hand...";
    let index = 0;
    const speed = 50; // typing speed in milliseconds

    function typeWriter() {
        if (index < typedText.length) {
            document.getElementById("inital-type").innerHTML += typedText.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    setTimeout(typeWriter, 1000);
});