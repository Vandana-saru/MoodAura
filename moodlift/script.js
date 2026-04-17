// ================= DATA =================

const moodData = {

bored: [
"Try something new today 🎯","Let’s break the boredom 🎉","Time for fun 😎",
"Do something random 😂","Explore something exciting 🔥",
"Watch something fun 🍿","Play a quick game 🎮",
"Call a friend 📞","Go for a walk 🚶",
"Learn something cool 🧠","Create something ✏️",
"Listen to music 🎧","Dance like no one’s watching 💃",
"Try a challenge 💪","Rearrange your space 🏡",
"Cook something new 🍳","Draw something silly 🎨",
"Write your thoughts ✍️","Try a puzzle 🧩",
"Do something you’ve never done 🤯",
"Step outside your routine 🔄","Make today interesting ✨",
"Break the monotony 🔥","Smile for no reason 😊",
"Watch the sky ☁️","Do something spontaneous ⚡",
"Try a new app 📱","Explore your creativity 🎭",
"Think of a fun idea 💡","Start something small 🚀",
"Move your body 🏃","Enjoy the moment 🌈",
"Do something silly 🤪","Take a fun break 🎊",
"Create a mini goal 🎯","Refresh your mind 🌿",
"Step away and come back 🔄","Find joy in little things 💛"
],

depressed: [
"You matter more than you think ❤️","This feeling will pass 🌈",
"You’ve survived so much 💪","Take it one step at a time 🚶",
"You are not alone 🤝","It’s okay to feel this way 🌿",
"Your story isn’t over 📖","Small progress matters 🌱",
"You deserve peace 💛","Be kind to yourself 💗",
"Rest is productive 💤","You are stronger than this 💪",
"Give yourself time ⏳","Dark times don’t last 🌙",
"You are enough 🌸","Better days are coming ☀️",
"Your feelings are valid 💙","Healing takes time 🌼",
"You’re doing your best 🙌","Slow down if needed 🌿",
"Storms pass eventually 🌧️","You are still growing 🌱",
"You deserve happiness 😊","Take a deep breath 🌬️",
"You are not behind ⏰","You’re learning 📘",
"Small steps count 🚶","You are worth it 💖",
"You don’t need all answers today 🧠","You are not your thoughts 🌌",
"You’ve come far 🔥","Rest, don’t quit 🛑",
"Peace will come 🌈","You matter 🌍",
"You are healing 🌿","Things will make sense 🔄",
"You’re stronger than you feel 💪","Keep going gently 🌱"
],

demotivated: [
"Start small 💪","Take one step now 🚀","Action beats overthinking 🔥",
"You’ve got this 💯","Push a little more 🧠",
"Consistency wins 🏆","Progress matters 📈",
"Don’t wait — start now ⏳","Keep moving forward ➡️",
"Discipline > motivation 🎯","Make today count 💥",
"Focus on one thing 🎯","Just begin 🚀",
"Small wins matter 🏅","Keep the momentum ⚡",
"Try again 🔄","Stay committed 💼",
"You’re capable 💪","Don’t quit now ❌",
"Effort matters 🔥","Stay focused 🎯",
"Push through 💥","Finish what you started 📌",
"Be better than yesterday 📊","Keep grinding ⚙️",
"You’re improving 📈","Trust the process 🧠",
"Keep going 🚶","Stay strong 💪",
"Win the day 🏆","Make it happen 💥",
"Stay determined 🔥","Don’t stop now 🚫",
"One more step ➡️","Build your future 🏗️",
"Take control 🎯","Keep showing up 📅"
],

tired: [
"Take a deep breath 🌿","Rest is okay 💤","Slow down a bit 🌙",
"Recharge yourself ⚡","Pause and relax 😌",
"Give your mind a break 🧠","Drink water 💧",
"Close your eyes for a moment 😴","You deserve rest 💛",
"Relax your body 🌿","Take it easy 💤",
"Don’t rush 🌼","Calm your thoughts 🌊",
"Breathe in… breathe out 🌬️","Step back and relax 🌙",
"Rest your energy 🔋","Slow your pace 🚶",
"Take a break ⏸️","Refresh your mind 🌱",
"Relax your shoulders 💆","Ease your stress 🌿",
"Unwind a little 🎧","Be gentle with yourself 💛",
"Peace matters 🌸","Rest is strength 💪",
"Pause for a moment ⏳","Calm your mind 🌊",
"Take it slow 🌙","Recharge again 🔋",
"You’re allowed to rest 😌","Relax and reset 🔄",
"Slow and steady 🐢","Give yourself space 🌌",
"Take a quiet moment 🤍","Breathe and reset 🌿"
],

happy: [
"Keep smiling 😄","Spread joy 🎉","You’re glowing ✨",
"Stay awesome 😎","Enjoy the moment 💛",
"Share your happiness 🤗","Life is good 🌈",
"Celebrate today 🎊","Keep the vibe high 🔥",
"Smile more 😊","Happiness looks good on you 😄",
"Stay positive 🌞","Enjoy every second ⏳",
"Keep shining ✨","Spread positivity 💫",
"Feel the joy 🎶","Live fully 🌍",
"Be proud 🎯","Enjoy the energy ⚡",
"Stay cheerful 😁","Keep the good vibes 🎉",
"You deserve this 😊","Laugh more 😂",
"Enjoy life 💃","Stay bright 🌟",
"Radiate positivity 🌈","Keep winning 🏆",
"Celebrate yourself 🎊","Love this moment 💛",
"Stay happy always 😄","Keep spreading smiles 😊",
"Feel amazing 🔥","Enjoy every bit 🌟",
"Stay joyful 🎶","Live the moment ✨",
"Smile big 😁","Keep shining 💫"
]

};

// ================= GENERATOR =================

function generateMessage() {
  const starters = ["You are","You can","You will","You deserve"];
  const words = ["amazing","strong","brave","awesome","powerful"];
  const emojis = ["💪","❤️","🌈","✨","🔥"];

  return starters[Math.floor(Math.random()*starters.length)] + " " +
         words[Math.floor(Math.random()*words.length)] + " " +
         emojis[Math.floor(Math.random()*emojis.length)];
}

// ================= MAIN =================

let interval;
let count = 0;

function startMood(mood) {
  count = 0;

  interval = setInterval(() => {
    count++;

    let message;

    if (Math.random() < 0.7) {
      let arr = moodData[mood];
      message = arr[Math.floor(Math.random()*arr.length)];
    } else {
      message = generateMessage();
    }

    createPopup(message);

    if (count === 2) {
      let btns = document.getElementById("buttons");
      if (btns) btns.style.display = "block";
    }

  }, 1200);
}

// ================= POPUP =================

function createPopup(text) {
  let el = document.createElement("div");
  el.innerText = text;

  el.style.position = "absolute";
  el.style.top = Math.random()*80 + "%";
  el.style.left = Math.random()*80 + "%";
  el.style.background = "rgba(0,0,0,0.6)";
  el.style.padding = "10px 15px";
  el.style.borderRadius = "10px";
  el.style.color = "white";
  el.style.fontSize = "18px";

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 3000);
}