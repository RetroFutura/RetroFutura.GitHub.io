// Groovy Script for RetroFutura

// Initialize the AI-powered chat
class ChatBot {
  init() {
    const chatInput = document.getElementById('chat-input');
    chatInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        const message = chatInput.value;
        console.log(`You said: ${message}`);
        // Add some AI-powered chat responses here
        const response = this.getResponse(message);
        console.log(`AI responded: ${response}`);
        chatInput.value = '';
      }
    });
  }

  getResponse(message) {
    // Add some AI-powered chat logic here
    const responses = [
      'Far out, dude!',
      'Groovy!',
      "That's out of this world!",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
}

const chatBot = new ChatBot();
chatBot.init();

// Add event listeners for funky features
document.addEventListener('DOMContentLoaded', () => {
  const funkyFeatures = document.querySelectorAll('.funky-features li');
  funkyFeatures.forEach((feature) => {
    feature.addEventListener('click', () => {
      console.log(`You clicked on ${feature.textContent}!`);
      // Add some groovy effects here, like a neon glow or a retro sound effect
      feature.classList.add('glow');
      setTimeout(() => {
        feature.classList.remove('glow');
      }, 1000);
    });
  });

  const fancyFunctions = document.querySelectorAll('.fancy-functions li');
  fancyFunctions.forEach((functionElement) => {
    functionElement.addEventListener('click', (event) => {
      console.log(`You clicked on ${event.target.textContent}!`);
      event.target.classList.add('animate');
      setTimeout(() => {
        event.target.classList.remove('animate');
      }, 1000);
    });
  });

  const retroRewards = document.querySelectorAll('.retro-rewards li');
  retroRewards.forEach((reward) => {
    reward.addEventListener('click', () => {
      console.log(`You clicked on ${reward.textContent}!`);
      // Add some retro rewards here, like a badge or a points system
      reward.classList.add('spin');
      setTimeout(() => {
        reward.classList.remove('spin');
      }, 1000);
    });
  });
});

// Retro Radar animation
const radar = document.getElementById('retro-radar');
setInterval(() => {
  radar.classList.toggle('animate');
}, 500);

// Time-Traveling Tweets
const tweets = document.getElementById('time-traveling-tweets');
setInterval(() => {
  const tweet =
    tweets.children[Math.floor(Math.random() * tweets.children.length)];
  tweet.classList.add('active');
  setTimeout(() => {
    tweet.classList.remove('active');
  }, 3000);
}, 3000);

// Futuristic Feedback
const feedback = document.getElementById('futuristic-feedback');
document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 500) {
    feedback.classList.add('active');
  } else {
    feedback.classList.remove('active');
  }
});

// Personalized Portal
const portal = document.getElementById('personalized-portal');
portal.addEventListener('click', () => {
  console.log('You clicked on the portal!');
  // Add some personalized effects here, like a customized animation or a retro sound effect
  portal.classList.add('glow');
  setTimeout(() => {
    portal.classList.remove('glow');
  }, 1000);
});

// Retro Rewards
const rewards = document.getElementById('retro-rewards');
rewards.addEventListener('click', () => {
  console.log('You clicked on the rewards!');
  // Add some retro rewards here, like a badge or a points system
  rewards.classList.add('spin');
  setTimeout(() => {
    rewards.classList.remove('spin');
  }, 1000);
});

// Font Families and Effects
const fontFamilies = [
  { value: 'Acme', label: 'Acme' },
  { value: 'Orbit', label: 'Orbit' },
  { value: 'Cosmic', label: 'Cosmic' },
  // add more font families here
];

const fontEffects = [
  { value: 'neonRed', label: 'Neon Red' },
  { value: 'neonGreen', label: 'Neon Green' },
  { value: 'neonBlue', label: 'Neon Blue' },
  { value: 'glow', label: 'Glow' },
  { value: 'electric', label: 'Electric' },
  // add more font effects here
];

// populate font family select
fontFamilies.forEach((fontFamily) => {
  const option = document.createElement('option');
  option.value = fontFamily.value;
  option.text = fontFamily.label;
  document.getElementById('font-family-select').appendChild(option);
});

// populate font effect select
fontEffects.forEach((fontEffect) => {
  const option = document.createElement('option');
  option.value = fontEffect.value;
  option.text = fontEffect.label;
  document.getElementById('font-effect-select').appendChild(option);
});

// add event listeners to select elements
document
  .getElementById('font-family-select')
  .addEventListener('change', (e) => {
    const selectedFontFamily = e.target.value;
    applyFontFamily(selectedFontFamily);
  });

document
  .getElementById('font-effect-select')
  .addEventListener('change', (e) => {
    const selectedFontEffect = e.target.value;
    applyFontEffect(selectedFontEffect);
  });

// function to apply font family
function applyFontFamily(fontFamily) {
  document.getElementById('font-preview').style.fontFamily = fontFamily;
}

// function to apply font effect
function applyFontEffect(fontEffect) {
  const fontEffectStyles = {
    neonRed: {
      textShadow: '0 0 10px #ff3737, 0 0 20px #ff3737, 0 0 30px #ff3737',
      animation: 'pulse-red 2.2s infinite',
    },
    neonGreen: {
      textShadow: '0 0 10px #34c759, 0 0 20px #34c759, 0 0 30px #34c759',
      animation: 'wave-green 2s infinite',
    },
    // add more font effects here
  };

  const style = fontEffectStyles[fontEffect];
  document.getElementById('font-preview').style.textShadow = style.textShadow;
  document.getElementById('font-preview').style.animation = style.animation;
}
