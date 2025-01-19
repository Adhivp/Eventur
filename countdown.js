<script>
// Countdown Timer for June 1 Launch
const launchDate = new Date('June 1, 2025 00:00:00').getTime();
const countdownElement = document.getElementById('countdown');

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
    } else {
        countdownElement.textContent = "Launched!";
    }
};

// Update countdown every second
setInterval(updateCountdown, 1000);
</script>