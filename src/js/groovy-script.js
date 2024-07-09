// Groovy Script for RetroFutura

// Initialize the AI-powered chat
const chatBot = new ChatBot();
chatBot.init();

// Add event listeners for funky features
document.addEventListener("DOMContentLoaded", () => {
  const funkyFeatures = document.querySelectorAll(".funky-features li");
  funkyFeatures.forEach((feature) => {
    feature.addEventListener("click", () => {
      console.log(`You clicked on ${feature.textContent}!`);
      // Add some groovy effects here, like a neon glow or a retro sound effect
      feature.classList.add("glow");
      setTimeout(() => {
        feature.classList.remove("glow");
      }, 1000);
    });
  });
});

// Add event listeners for fancy functions
document.addEventListener("DOMContentLoaded", () => {
  const fancyFunctions = document.querySelectorAll(".fancy-functions li");
  fancyFunctions.forEach((function) => {
    function.addEventListener("click", () => {
      console.log(`You clicked on ${function.textContent}!`);
      // Add some fancy effects here, like a futuristic animation or a psychedelic pattern
      function.classList.add("spin");
      setTimeout(() => {
        function.classList.remove("spin");
      }, 1000);
    });
  });
});

// Retro Radar animation
const radar = document.getElementById("retro-radar");
setInterval(() => {
  radar.classList.toggle("animate");
}, 500);

// Time-Traveling Tweets
const tweets = document.getElementById("time-traveling-tweets");
setInterval(() => {
  const tweet = tweets.children[Math.floor(Math.random() * tweets.children.length)];
  tweet.classList.add("active");
  setTimeout(() => {
    tweet.classList.remove("active");
  }, 3000);
}, 3000);

// Futuristic Feedback
const feedback = document.getElementById("futuristic-feedback");
document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 500) {
    feedback.classList.add("active");
  } else {
    feedback.classList.remove("active");
  }
});

// Personalized Portal
const portal = document.getElementById("personalized-portal");
portal.addEventListener("click", () => {
  console.log("You clicked on the portal!");
  // Add some personalized effects here, like a customized animation or a retro sound effect
  portal.classList.add("glow");
  setTimeout(() => {
    portal.classList.remove("glow");
  }, 1000);
});

// Retro Rewards
const rewards = document.getElementById("retro-rewards");
rewards.addEventListener("click", () => {
  console.log("You clicked on the rewards!");
  // Add some retro rewards here, like a badge or a points system
  rewards.classList.add("spin");
  setTimeout(() => {
    rewards.classList.remove("spin");
  }, 1000);
});

// AI-Powered Chat
class ChatBot {
  init() {
    const chatInput = document.getElementById("chat-input");
    chatInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        const message = chatInput.value;
        console.log(`You said: ${message}`);
        // Add some AI-powered chat responses here
        const response = this.getResponse(message);
        console.log(`AI responded: ${response}`);
        chatInput.value = "";
      }
    });
  }

  getResponse(message) {
    // Add some AI-powered chat logic here
    const responses = [
      "Far out, dude!",
      "Groovy!",
      "That's out of this world!",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
}
