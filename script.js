
//Header 
const soundBtn = document.getElementById("sound-icon");
const soundIsOn = document.getElementById("sound-on");
const soundIsOff = document.getElementById("sound-off");
const correctSound = new Audio("assets/typed.mp3");
const wrongSound = new Audio("assets/short-beep-tone-47916.mp3");


const timeBtn = document.getElementById("time-btn");
const wordsBtn = document.getElementById("words-btn");
const timeNav = document.getElementById("time-nav");
const sec15Btn = document.getElementById("15s-btn");
const sec30Btn = document.getElementById("30s-btn");
const sec60Btn = document.getElementById("60s-btn");
const sec120Btn = document.getElementById("120s-btn");

const controlBar = document.getElementById("control-bar");

const wordsNav = document.getElementById("words-nav");
const words25Btn = document.getElementById("25words-btn");
const words50Btn = document.getElementById("50words-btn");
const words100Btn = document.getElementById("100words-btn");
const words250Btn = document.getElementById("250words-btn");

const flawlessBtn = document.getElementById("flawless-btn");

const endlessBtn = document.getElementById("endless-btn");

const punctuationsBtn = document.getElementById("punctuations-btn");
const numbersBtn = document.getElementById("numbers-btn");
const customContentBtn = document.getElementById("custom-content-btn");


//results
const results = document.getElementById("results");
const resultsWpm = document.getElementById("results-wpm");
const resultsAccuracy = document.getElementById("results-accuracy");
const resultsKeystrokes = document.getElementById("results-keystrokes");
const resultsWords = document.getElementById("results-words");
const resultsTime = document.getElementById("results-time");


const targetText = document.getElementById("targetText");
const textarea = document.getElementById("textarea");

const perfomanceAndControls = document.getElementById("perfomance-and-controls");
const restart = document.getElementById("restart");
const next = document.getElementById("next");
const timerDisplay = document.getElementById("timer");
const timerContainer = document.getElementById("timer-display");
const wordCountContainer = document.getElementById("word-count-container");
const wordCountDisplay = document.getElementById("word-count");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

const allTexts = [
  {
    text: "Typing is more than just hitting keys in rapid succession. It's about the rhythm of your thoughts flowing into structured form, the quiet translation of inner language into readable words. With every deliberate keystroke, you train not just your fingers, but your ability to focus, to stay calm under pressure, and to think clearly in motion.",
    punctuations: true,
    numbers: false
  },
  {
    text: "A good typing session feels like meditation. Your eyes stay fixed on the screen, your hands move without hesitation, and the noise of everything else fades. You find yourself syncing breath with pace, posture with control, and attention with intent. In that moment, typing becomes less a task and more a form of flow.",
    punctuations: true,
    numbers: false
  },
  {
    text: "No one types fast overnight. It takes time to stop looking at the keys, to break the habit of correcting mid-thought, to sit still while your fingers carry the burden of expression. But when it clicks, when typing becomes second nature, you unlock a new way of thinking — one where your hands keep up with your mind.",
    punctuations: true,
    numbers: false
  },
  {
    text: "Posture, though often overlooked, is foundational. Sit upright, shoulders down, elbows relaxed. Let your wrists hover naturally above the keyboard, fingers curved gently, as if ready to play piano. Comfort leads to consistency, and consistency leads to progress. Your body needs to feel at home before your thoughts can move freely.",
    punctuations: true,
    numbers: false
  },
  {
    text: "Accuracy isn't about being perfect — it's about being aware. Each typo is a whisper from your subconscious, telling you where your attention dropped. Don't ignore those signals. Use them. Slow down if needed. Repetition with awareness is what turns an average typist into a deliberate, skilled one.",
    punctuations: true,
    numbers: false
  },
  {
    text: "You can measure progress in words per minute, sure. But you should also measure it in confidence, in how often you find yourself typing without pausing, without correcting, without doubting. Speed is only impressive when it’s paired with fluency, and fluency only comes when accuracy becomes effortless.",
    punctuations: true,
    numbers: false
  },
  {
    text: "Your keyboard is a blank canvas, and your fingers are the brushes. Typing is not just a functional tool — it’s a form of expression. When your hands know where to go before your brain tells them, you begin to experience what real writing flow feels like, where thoughts appear almost instantly on the screen.",
    punctuations: true,
    numbers: false
  },
  {
    text: "When you're tired, when your back hurts, when your mind wants to quit — that’s when the real growth happens. Show up anyway. Practice anyway. Typing, like any craft, is about discipline. And discipline is what separates those who dabble from those who develop something powerful and lasting.",
    punctuations: true,
    numbers: false
  },
  {
    text: "Most people stop practicing typing once they’re “good enough.” But mastery lies beyond good enough. It lies in refining the little things — the way your pinky taps shift, the way your thumb resets the spacebar, the way your gaze glides across the words you’re writing without losing momentum.",
    punctuations: true,
    numbers: false
  },
  {
    text: "Each time you sit down to type, you're sharpening more than a skill. You're reinforcing patience. You're exercising your mind’s ability to focus on one task without distraction. And in today’s world of short attention spans and constant interruptions, that’s a superpower worth cultivating.",
    punctuations: true,
    numbers: false
  },
  {
    text: "Typing silently builds something loud. Behind every polished document, every line of code, every rapid response is someone who once typed slowly and deliberately, who chose to show up, press through the awkward stages, and put in the reps. There's power in repetition when it's done with purpose.",
    punctuations: true,
    numbers: false
  },
  {
    text: "Your progress might feel invisible sometimes. One day you’re stuck on 45 words per minute, and the next you breeze through an entire paragraph without error. It’s not luck — it’s compound effort. It’s every session layering on the last until the skill you once struggled with becomes part of who you are.",
    punctuations: true,
    numbers: false
  },
  {
    text: "Breathe, sit straight, and begin. Let your eyes scan the line ahead. Let your fingers move with purpose. If you make a mistake, don’t panic — just correct it and continue. Typing teaches you how to recover quickly, how to adapt in real-time, and how to remain calm under pressure.",
    punctuations: true,
    numbers: false
  },
  {
    text: "Think of typing as a physical manifestation of your thoughts. The more fluent you are, the closer your ideas appear to how you imagined them. Over time, the delay between intention and action shortens, until your writing feels more like speaking, only quieter and more refined.",
    punctuations: true,
    numbers: false
  },
  {
    text: "Your fingers won’t always cooperate. Some days, they’ll fumble through easy sentences. Other days, they’ll glide through hard ones. Don’t judge your ability based on a single session. Mastery isn’t built in moments of perfection — it’s built in how you respond to friction and failure.",
    punctuations: true,
    numbers: false
  },
  {
    text: "The beauty of typing is in its invisibility. When you’re doing it well, you forget you’re doing it at all. Your focus shifts to the idea, the message, the story. The keyboard fades, and your voice takes center stage, flowing through your fingertips like a quiet stream of clarity.",
    punctuations: true,
    numbers: false
  },
  {
    text: "If you’re serious about improving, don’t just track speed — track consistency. Can you stay focused for one minute? Two? Five? Can you maintain flow even when the text is unfamiliar? The ability to sustain performance is more valuable than occasional bursts of brilliance.",
    punctuations: true,
    numbers: false
  },
  {
    text: "Typing with intention means each session becomes a study of your habits. Where do your fingers hesitate? When do your eyes stray from the screen? Pay attention, not just to the numbers, but to your process. Awareness is the first step to effortless motion.",
    punctuations: true,
    numbers: false
  },
  {
    text: "You don’t need the perfect setup to start. You don’t need expensive gear or complicated software. All you need is a keyboard, a screen, and the willingness to return each day. Momentum is built in simple, consistent action — not in waiting for ideal conditions.",
    punctuations: true,
    numbers: false
  },
  {
    text: "Most people type just enough to get by. But if you want to stand out, type to master. Push past average. Build endurance. Respect form. And never forget — the quality of your inputs shapes the quality of your outputs, in typing and in everything else.",
    punctuations: true,
    numbers: false
  },
  {
    text: "Typing for 30 minutes a day may not sound like much, but when you multiply that by 7 days, that's 210 minutes of improvement each week. Over a month, it becomes 840 minutes — nearly 14 hours invested in a skill that pays off for a lifetime.",
    punctuations: false,
    numbers: true
  },
  {
    text: "Some people reach 80 words per minute in 3 months, while others take 6 or even 12. The timeline doesn't matter. What matters is showing up, practicing deliberately, and measuring your gains over 30 day stretches, not 3 day sprints.",
    punctuations: false,
    numbers: true
  },
  {
    text: "Every typo you make at 45 WPM gives your brain a signal. At 50 WPM, the signal sharpens. At 60, 70, and beyond, your brain stops thinking about letters and starts operating in complete words — sometimes even 2 or 3 words ahead of where you are.",
    punctuations: false,
    numbers: true
  },
  {
    text: "Challenge yourself to complete 5 flawless typing rounds today. Then aim for 6 tomorrow. Small jumps in targets from 4 to 5 to 6 create sustainable growth. By week 2, you're already beyond what most casual learners achieve in a month.",
    punctuations: false,
    numbers: true
  },
  {
    text: "With every 100 characters typed, you're making over 100 muscle-memory decisions. Now multiply that by 25 lines in a session and you're looking at 2500 practiced motions — each one reinforcing your control and precision.",
    punctuations: false,
    numbers: true
  },
  {
    text: "Let your first goal be to maintain 95 percent accuracy at 40 WPM. Once you reach that, jump to 50. Then 60. Let 80 be the stretch. Let 100 be the dream. But build the base layer by layer — like leveling up from floor 1 to floor 10.",
    punctuations: false,
    numbers: true
  },
  {
    text: "Many beginners lose confidence when their score dips below 60 WPM. But a dip from 64 to 58 is not failure — it's just natural fluctuation. Focus on keeping your baseline above 50 for 7 days straight and you'll feel real improvement.",
    punctuations: false,
    numbers: true
  },
  {
    text: "Typing for 8 minutes straight without looking down is harder than hitting 75 WPM once. Set timers for 5, 7, or 10 minutes and aim for zero corrections. The longer you go without backtracking, the stronger your rhythm becomes.",
    punctuations: false,
    numbers: true
  },
  {
    text: "If you miss the same word 3 times in one session, write it down. Practice it 10 more times. The average typist improves 10 percent faster when they isolate their weak spots and spend just 3 to 5 minutes addressing them.",
    punctuations: false,
    numbers: true
  },
  {
    text: "Set a timer for 120 seconds. Type nonstop, then check your total words. Even if you only hit 130, that’s a win. Over 150 is excellent. But the real win is doing it again tomorrow, and the next day, until 150 becomes your warmup.",
    punctuations: false,
    numbers: true
  },
  {
    text: "Build up your endurance in sets of 3. Try 3 rounds of 60 seconds each. Rest for 30 seconds between them. Once that feels easy, upgrade to 90 seconds. By round 5, you'll have typed more than 1000 characters without even noticing.",
    punctuations: false,
    numbers: true
  },
  {
    text: "If your goal is to type 300 words in under 5 minutes, don’t start by rushing. Start by building rhythm in sets of 50. Once you hit 60 WPM consistently in sets of 50, your ability to scale upward will become far more stable.",
    punctuations: false,
    numbers: true
  },
  {
    text: "The average person types between 35 and 45 WPM. Reaching 60 puts you above average. Reaching 80 makes you efficient. Beyond 100, you're entering pro territory. But the real magic is sustaining 70 with 98 percent accuracy.",
    punctuations: false,
    numbers: true
  },
  {
    text: "Track your typing speed at the same time every day for 7 days. You'll likely notice a pattern. Your highest score might come at 2 PM or right after your first coffee. Find your peak hour and do your longest session then.",
    punctuations: false,
    numbers: true
  },
  {
    text: "Try typing random numbers like 439 or 712 mixed with words. This forces your brain to shift gears quickly. Once you can switch between letters and numbers with no delay, your real-time accuracy jumps significantly.",
    punctuations: false,
    numbers: true
  },
  {
    text: "The keyboard has 104 keys. You only use 26 letters regularly, but mastering the shift, tab, and number keys gives you a huge edge. Spend 2 minutes per day focusing only on those lesser-used keys to round out your control.",
    punctuations: false,
    numbers: true
  },
  {
    text: "Even a tiny boost of 5 WPM can save you over 3 hours each month if you type regularly. At 60 WPM, you might finish a task in 20 minutes that used to take 30. Multiply that over 10 tasks and the savings add up fast.",
    punctuations: false,
    numbers: true
  },
  {
    text: "Set milestones for yourself. Try hitting 60 WPM for 3 days in a row, then upgrade the goal to 65. Break it down. Hitting a higher number once doesn’t count. You want to hit it 4 or 5 times before calling it progress.",
    punctuations: false,
    numbers: true
  },
  {
    text: "On day 1, you might average 45 WPM with 10 mistakes. By day 10, aim for 55 WPM with just 4 mistakes. Tiny changes across multiple sessions create large gains. Don’t underestimate what 15 minutes a day can do over 30 days.",
    punctuations: false,
    numbers: true
  },
  {
    text: "One thousand words typed today could be your draft, your journal, or your training session. But those same 1000 words, typed tomorrow, will come easier. Keep typing. The numbers improve when the habit does.",
    punctuations: false,
    numbers: true
  },
  {
    text: "Typing 500 words with 98 percent accuracy isn't just a goal, it's a reflection of your focus and form. When you're able to hold steady at 65 WPM for more than 3 minutes, you're no longer just fast — you're consistent, and consistency compounds over time.",
    punctuations: true,
    numbers: true
  },
  {
    text: "Try this: type for 2 minutes straight, reach at least 140 words, and don’t stop to fix typos. Then take a 30-second break, repeat the same test, and compare. The goal isn't perfection, but awareness. At 70 WPM, you'll likely see patterns in your pacing, especially between attempts.",
    punctuations: true,
    numbers: true
  },
  {
    text: "In a single day, if you do 4 sessions of just 5 minutes each, you’ll complete 20 minutes of pure typing. Do that for 30 days, and you’ll have invested over 600 minutes. That’s 10 hours — enough to raise your average by 10 WPM or more.",
    punctuations: true,
    numbers: true
  },
  {
    text: "Reaching 100 WPM isn't impossible. Start at 60, build a rhythm, and push past the plateaus slowly. Track each attempt — log your scores like this: Day 1 - 63 WPM, Day 3 - 66 WPM, Day 6 - 69 WPM. Progress doesn't have to be fast to be real.",
    punctuations: true,
    numbers: true
  },
  {
    text: "If your accuracy is hovering around 92 percent, focus less on speed and more on form. At 50 WPM, even a 5 percent improvement means 25 fewer errors per 500 words — and that’s significant when you're writing long documents, emails, or code.",
    punctuations: true,
    numbers: true
  },
  {
    text: "Most people don’t realize that typing 1000 characters takes about 2 to 3 minutes at average speed. But doing it with zero backspaces? That takes control. Aim for that during 3 rounds today — one at 40 WPM, one at 55, and one at 65.",
    punctuations: true,
    numbers: true
  },
  {
    text: "At 75 WPM, you’re typing about 375 characters every minute. That means in just 4 minutes, you could type a short article, a full paragraph of code, or the first draft of a great idea. Practice with purpose, and those numbers turn into results.",
    punctuations: true,
    numbers: true
  },
  {
    text: "You might type 120 words in 2 minutes, or you might hit 160 — the numbers vary, but your breathing, your focus, and your posture should remain steady. Fast typing means nothing if it comes with tension, stress, and exhaustion.",
    punctuations: true,
    numbers: true
  },
  {
    text: "Here’s a challenge: set a 3-minute timer, and type a passage with 3 different numbers in it. For example, mix 2024, 105, and 76 into your sentences. This helps your brain switch modes between letters and digits without losing flow.",
    punctuations: true,
    numbers: true
  },
  {
    text: "Try logging your top speed each week. Week 1: 58 WPM. Week 2: 62. Week 3: 67. These aren’t just stats — they’re proof. Add dates, track your best sessions, and keep a log of what works. Improvement loves data, and so does motivation.",
    punctuations: true,
    numbers: true
  },
  {
    text: "You’ve already typed over 200 words today. That’s 1000 characters or more. If you do that for 5 days, you’ll hit 10000 characters. That’s how progress builds — not with one perfect session, but with repeated effort that adds up.",
    punctuations: true,
    numbers: true
  },
  {
    text: "Fast typists often forget this rule: quality first, numbers second. A 95 percent accuracy rate at 65 WPM is more impressive than 80 WPM with 20 typos. Focus on clean execution for 10 sessions, and your speed will follow naturally.",
    punctuations: true,
    numbers: true
  },
  {
    text: "Mix words and numbers when you practice. For example: 'I finished 3 tests in 15 minutes' or 'Today is the 2nd time I’ve hit 70 WPM.' It forces you to stretch both language and numeric fluency — and it reflects real-world writing.",
    punctuations: true,
    numbers: true
  },
  {
    text: "Let’s say your goal is to reach 80 WPM by the end of the month. Break it into parts. Week 1: hit 60. Week 2: reach 65. Week 3: lock in 70. Week 4: push through. Use a spreadsheet to track these targets and write weekly notes.",
    punctuations: true,
    numbers: true
  },
  {
    text: "In one 5-minute session, you could type more than 350 words. That’s about one page of text. If you did this 5 times a week, you’d write 5 pages. Typing practice is more than training — it’s creating something valuable along the way.",
    punctuations: true,
    numbers: true
  },
  {
    text: "Typing 70 WPM means about 350 characters per minute. If you do 3 rounds at that speed, that’s over 1000 characters in less than 10 minutes. But don’t stop there — try 5 rounds, then 7. Build up your endurance along with your speed.",
    punctuations: true,
    numbers: true
  },
  {
    text: "When you miss a number key like 4 or 7, practice it in isolation. Type 444, 777, then combine them with words. Do this 10 times in a row. Just like with letters, repeating problem numbers helps you master them through movement.",
    punctuations: true,
    numbers: true
  },
  {
    text: "Typing on a 10-key number pad isn’t always necessary, but knowing how to hit 1 through 0 on the top row without looking is powerful. Try typing 1234567890 five times cleanly today — you’ll be surprised how much smoother it gets.",
    punctuations: true,
    numbers: true
  },
  {
    text: "Every day, add one number-heavy sentence to your session. For example, 'The project started in 2015 and ended in 2022.' These types of details are everywhere in real writing — train for them, and your accuracy will thank you.",
    punctuations: true,
    numbers: true
  },
  {
    text: "Typing is part memory, part awareness. If you hit 3000 characters this week, your hands already know what to do. Now train your mind to trust them. Keep your eyes on the screen, and let your fingers handle the rest — they’ve earned it.",
    punctuations: true,
    numbers: true
  },
  {
    text: "Typing becomes easier when you allow your thoughts to lead the way without constantly correcting yourself or second guessing your motion across the keys It is about learning to trust the flow that develops with enough mindful repetition over time",
    punctuations: false,
    numbers: false
  },
  {
    text: "The more you type the more your fingers learn to move without needing direction from your eyes or conscious thought This is how fluency develops and eventually your typing feels as natural as speaking out loud",
    punctuations: false,
    numbers: false
  },
  {
    text: "It helps to practice without worrying about perfection because the goal is not flawless typing but consistent improvement that adds up one session at a time The results will come if you remain focused and patient",
    punctuations: false,
    numbers: false
  },
  {
    text: "Your typing speed is not just a number it is a reflection of how well you focus how efficiently you think and how comfortably your hands move across the keyboard when there is no pressure or distraction",
    punctuations: false,
    numbers: false
  },
  {
    text: "Over time your accuracy will improve your rhythm will settle and you will stop thinking about where the keys are Instead you will start thinking about what you want to say and how to say it clearly",
    punctuations: false,
    numbers: false
  },
  {
    text: "Typing trains your mind to stay on task and your body to stay in motion even when fatigue sets in Even short practice sessions can lead to noticeable gains when repeated consistently over weeks or months",
    punctuations: false,
    numbers: false
  },
  {
    text: "Keep your hands light and relaxed your shoulders loose and your breathing steady when you type These small details make a big difference especially during longer sessions that demand sustained concentration",
    punctuations: false,
    numbers: false
  },
  {
    text: "You are not just practicing typing you are developing a system of thinking and expressing that will serve you in every professional and creative pursuit that involves language clarity and efficiency",
    punctuations: false,
    numbers: false
  },
  {
    text: "When you reach the point where typing becomes invisible you will realize how much faster your ideas come to life because there is nothing blocking the transition from thought to expression",
    punctuations: false,
    numbers: false
  },
  {
    text: "Do not rush your practice sessions Instead focus on smooth motion accurate strokes and steady pace These habits will take you much further than simply chasing a higher word per minute score",
    punctuations: false,
    numbers: false
  },
  {
    text: "Consistency matters more than intensity A single long practice session will not help as much as shorter regular sessions spread across a week Let your progress be steady like a daily walk that builds endurance",
    punctuations: false,
    numbers: false
  },
  {
    text: "Your hands are learning a pattern a rhythm that becomes easier with each attempt Give them time to find that rhythm and allow yourself to be present with the process not just the outcome",
    punctuations: false,
    numbers: false
  },
  {
    text: "There is a quiet power in doing something well that no one sees Typing is one of those skills that supports everything you create yet often goes unnoticed except in its absence",
    punctuations: false,
    numbers: false
  },
  {
    text: "Even if you only improve by a few words per minute each week that adds up over time Let progress be slow but steady and let each session reinforce the habit you are building",
    punctuations: false,
    numbers: false
  },
  {
    text: "The best way to type faster is to type more without looking down without stopping and without overthinking Let your hands speak the language your mind is forming in real time",
    punctuations: false,
    numbers: false
  },
  {
    text: "Typing should not feel rushed It should feel smooth fluid and grounded in control Speed is a result of control repeated many times until it becomes second nature and feels effortless",
    punctuations: false,
    numbers: false
  },
  {
    text: "The better you get at typing the more invisible it becomes The keyboard turns into a transparent layer between your ideas and the page and your fingers simply translate what your mind already knows",
    punctuations: false,
    numbers: false
  },
  {
    text: "If you want to improve focus more on form than on speed Watch how your fingers move where your eyes rest and how your breath flows Keep things quiet and steady and improvement will follow",
    punctuations: false,
    numbers: false
  },
  {
    text: "In the beginning it may feel awkward to type without punctuation or corrections But over time you will notice your rhythm improving and your focus sharpening with every word you write",
    punctuations: false,
    numbers: false
  },
  {
    text: "This kind of typing practice builds a different kind of strength Not just the muscles in your fingers but the ability to stay present to keep flowing and to trust your hands to carry your voice",
    punctuations: false,
    numbers: false
  }
];

let sampleTexts = [];


let modes = [
    {
        name: "time",
        options: [15, 30, 60, 120],
        selectedOption: 15
    },
    {
        name: "words",
        options: [25, 50, 100, 250],
        selectedOption: 25
    },
    {
        name: "flawless"
    },
    {
        name: "endless"
    },
]
let countUpTimerInterval;
let countDownTimerInterval;


const state = {
    sessionId : crypto.randomUUID(),
    targetText : "",
    punctuations: false,
    numbers: false,
    textChars : [],
    mode : modes[0],
    soundOn : true,
    timePassed: 0,
    curCharIndex: -1,
    keyCount: 0,
    wordCount : 0,
    mistakes : 0,
    wpm: 0,
    accuracy: 100,
    isRunning: false,
    isCompleted: false,
}

filterTargetTexts();




//Breaks strings into characters, put them in and object and pushes them to the textChars array
const parseToChars = (text) => {
  state.textChars = [];
  const tempChars = text.split("");
  tempChars.forEach((char) => {
    state.textChars.push({
      key: char,
      status: "untyped",
      active: false,
    });
  });
};

//Render Characters to screen
const renderChars = (array) => {
  targetText.innerHTML = "";
  array.forEach((obj) => {
    if (obj.active) {
      targetText.innerHTML += `<span class=${obj.status} style="border-right:3px solid green;">${obj.key}</span>`;
    } else {
      targetText.innerHTML += `<span class=${obj.status}>${obj.key}</span>`;
    }
  });
};

//Shows results
const showResults = () => {
    textarea.classList.add("hide");
    resultsWpm.innerText = `${state.wpm} WPM`;
    resultsAccuracy.innerText = `${state.accuracy}%`;
    resultsKeystrokes.innerText = `${state.keyCount}`;
    resultsWords.innerText = `${state.wordCount}`;
    resultsTime.innerText = `${state.timePassed}s`;
    perfomanceAndControls.classList.add("hide");
    results.classList.remove("hide");
}


function filterTargetTexts () {
    sampleTexts = [];
    if (state.punctuations === true && state.numbers === true) {
        sampleTexts = allTexts.filter(text => text.punctuations === true && text.numbers === true)
    } else if (state.punctuations === true && state.numbers === false) {
        sampleTexts = allTexts.filter(text => text.punctuations === true && text.numbers === false)
    } else if (state.punctuations === false && state.numbers === true) {
        sampleTexts = allTexts.filter(text => text.punctuations === false && text.numbers === true)
    } else {
        sampleTexts = allTexts.filter(text => text.punctuations === false && text.numbers === false)
    }
   state.targetText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)].text; 
}

function saveState () {
    localStorage.setItem("presets", JSON.stringify({
        punctuations : state.punctuations,
        numbers : state.numbers,
        mode : state.mode,
        soundOn : state.soundOn,
        modes : modes,
    }))
}

function loadState () {
    let tempState = JSON.parse(localStorage.getItem("presets"));
    if (tempState) {
        state.punctuations = tempState.punctuations;
        state.numbers = tempState.numbers;
        state.mode = tempState.mode;
        state.soundOn = tempState.soundOn;
        modes = tempState.modes;
        switchButton()
    } else {
        switchButton()
        return;
    }
}

loadState()
parseToChars(state.targetText);
renderChars(state.textChars);

//Listens for keystrokes and peforms action
document.addEventListener("keydown", (e) => {
  const ignoreKeys = [
    "CapsLock",
    "Shift",
    "Control",
    "Tab",
    "Meta",
    "Backspace",
  ];
if (!state.isCompleted) {
    if (!ignoreKeys.includes(e.key)) {
        state.curCharIndex++;
        state.keyCount++;
        if (e.key === " ") {
            state.wordCount++
            }

        accuracy();

        if (state.keyCount === 1) {
            controlBar.classList.add("hide");
            startCountUpTimer();
            wordPerMinute();

            if (state.mode.name === modes[0].name) {
            startCountDownTimer();
            }
        };
 
        if (state.mode.name === modes[1].name) {
            if (e.key === " ") {
                wordCountDisplay.innerText = `${state.wordCount} / ${state.mode.selectedOption}`
            }
            if (state.wordCount === state.mode.selectedOption) {
                state.isCompleted = true;
                showResults();
            }
        }

        if (state.mode.name === modes[2].name || modes[3].name) {
            if (e.key === " ") {
                wordCountDisplay.innerText = `${state.wordCount}`
                } else if (state.mode.name === modes[2].name && e.key !== state.textChars[state.curCharIndex].key) {
                state.isCompleted = true;
                showResults()
            };
        };

    if (e.key === state.textChars[state.curCharIndex].key) {
      state.textChars[state.curCharIndex].status = "correct";
      state.textChars[state.curCharIndex].active = true;
      if (state.soundOn) {
          correctSound.currentTime = 0;
          correctSound.volume = 0.05;
          correctSound.play();
                }
    } else {
      state.textChars[state.curCharIndex].status = "wrong";
      state.textChars[state.curCharIndex].active = true;
      if (state.soundOn) {
        wrongSound.duration = 0;
        wrongSound.volume = 0.1;
        wrongSound.play();
                      }
        state.mistakes++;

    }
  } else if (e.key === "Backspace") {
    state.textChars[state.curCharIndex].active = false;
    state.textChars[state.curCharIndex].status = "untyped";
    state.curCharIndex--;
    state.textChars[state.curCharIndex].active = true;
    if (state.soundOn) {
        correctSound.currentTime = 0;
        correctSound.volume = 0.1;
        correctSound.play();
                }
  } else if (ignoreKeys.includes(e.key)) {
    state.textChars[state.curCharIndex].active = true;
  }
    } else if (state.isCompleted) {
        if (e.key === "Enter") {
           nextSes();
        }
    }
  renderChars(state.textChars);
  state.textChars[state.curCharIndex].active = false;
});


//This function restarts state
function restartSes () {
    state.keyCount = 0;
    state.curCharIndex = -1;
    state.timePassed = 0;
    sesCompleted = false;
    state.isCompleted = false;
    state.mistakes = 0;
    state.wpm = 0;
    state.wordCount = 0;
    accuracyDisplay.innerText = "100%";
    wpmDisplay.innerText = "0 WPM";
    wordCountDisplay.innerText = state.mode.name === "words" ? `0 / ${state.mode.selectedOption}` : "0"; 
    clearInterval(countDownTimerInterval);
    timerDisplay.innerText = state.mode.name === "time" ? `${state.mode.selectedOption}s` : "0s";
    controlBar.classList.remove("hide");
    parseToChars(state.targetText);
    renderChars(state.textChars);
}

function nextSes () {
    state.targetText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)].text;
    restartSes();
    results.classList.add("hide");
    perfomanceAndControls.classList.remove("hide");
    textarea.classList.remove("hide");
}

//Restarts the typing sesh once the restart button is clicked
restart.addEventListener("click", () => {
    restartSes();
});

//Moves to next state after pushing old state to session log
next.addEventListener("click", () => {
    nextSes()
});

//Counts down in second from given seconds to zero
const startCountDownTimer = () => {
  let startTime = Date.now();
  let delta = 0;
  let previousTime = 0;
  let remainingTime = state.mode.selectedOption * 1000;
  timerDisplay.innerText = `${Math.floor(remainingTime / 1000)}s`;
  countDownTimerInterval = setInterval(() => {
    previousTime = Date.now();
    delta = previousTime - startTime;
    remainingTime -= delta;
    startTime = previousTime;
    if (remainingTime <= 0) {
      timerDisplay.innerText = "0s";
        state.isCompleted = true;
        showResults();
      clearInterval(countDownTimerInterval);
    } else {
      timerDisplay.innerText = `${Math.floor(remainingTime / 1000)}s`;
    }
  }, 16);
};


//Timer funtion
const startCountUpTimer = () => {
    let lastTick = Date.now();
    let newTime;
    let delta = 0;
    countUpTimerInterval = setInterval(() => {
        newTime = Date.now();
        delta += newTime - lastTick;
        lastTick = newTime;
        if (delta >= 1000) {
            state.timePassed++
            delta = 0;
             if (state.mode.name === modes[2].name || modes[3].name) {
                timerDisplay.innerText = `${state.timePassed}s`;
            }
        } 
        if (state.isCompleted) {
             clearInterval(countUpTimerInterval);
}
    }, 16)
}

//Calculates and displays WPM
const wordPerMinute = () => {
  const wpmTimer = setInterval(() => {
    if (state.timePassed > 0) {
        state.wpm = Math.floor((state.keyCount / 5 / state.timePassed) * 60);
        wpmDisplay.innerText = `${state.wpm} WPM`;};
    if (state.isCompleted) {
      clearInterval(wpmTimer);
            return;
    }
  }, 16);
};

//Calculates and displays accuracy
const accuracy = () => {
    if (state.keyCount > 0) {
  state.accuracy = Math.floor(((state.keyCount - state.mistakes) / state.keyCount) * 100);
  accuracyDisplay.innerText = `${state.accuracy}%`;}
};


function switchButton () {
    const modeNavBtns = [
        {
            name: "time",
            button: timeBtn,
            options: [
                {
                    name: 15,
                    button: sec15Btn,
                },
                {
                    name: 30,
                    button: sec30Btn,
                },                
                {
                    name: 60,
                    button: sec60Btn,
                },                
                {
                    name: 120,
                    button: sec120Btn,
                },
            ]
        },
        {
            name: "words",
            button: wordsBtn,
            options: [
                {
                    name: 25,
                    button: words25Btn,
                },
                {
                    name: 50,
                    button: words50Btn,
                },                
                {
                    name: 100,
                    button: words100Btn,
                },                
                {
                    name: 250,
                    button: words250Btn,
                },
            ]
        },
        {
            name: "flawless",
            button: flawlessBtn,
        },
        {
            name: "endless",
            button: endlessBtn,
        }]


    if (state.soundOn) {
        soundIsOn.classList.remove("hide");
        soundIsOff.classList.add("hide");
    } else {
        soundIsOff.classList.remove("hide");
        soundIsOn.classList.add("hide");
    }

    contentNav = [{value: state.punctuations, button: punctuationsBtn}, { value: state.numbers, button: numbersBtn}];

    contentNav.forEach((content) => {
        if (content.value === true) {
            content.button.classList.add("selected");
            filterTargetTexts();
            parseToChars(state.targetText);
            renderChars(state.textChars);
        } else {
            content.button.classList.remove("selected");
            filterTargetTexts();
            parseToChars(state.targetText);
            renderChars(state.textChars);
        }

    })

    modeNavBtns.forEach((nav) => {
        if (state.mode.name === nav.name) {
            nav.button.classList.add("selected");
            if(nav.name === "time") {
                timeNav.classList.remove("hide");
                timerContainer.classList.remove("hide");
                wordsNav.classList.add("hide");
                wordCountContainer.classList.add("hide");
                nav.options.forEach((option) => {
                    if (state.mode.selectedOption === option.name) {
                        option.button.classList.add("selected");
                        timerDisplay.innerText = `${option.name}s`;

                    } else {
                        option.button.classList.remove("selected");
                    }
                })
            } else if (nav.name === "words") {
                wordsNav.classList.remove("hide");
                wordCountContainer.classList.remove("hide");
                timeNav.classList.add("hide");
                timerContainer.classList.add("hide");
                nav.options.forEach((option) => {
                if (state.mode.selectedOption === option.name) {
                        option.button.classList.add("selected");
                        wordCountDisplay.innerText = `0 / ${option.name}`;

                    } else {
                        option.button.classList.remove("selected");
                    }
                })
            } else {
                timeNav.classList.add("hide");
                wordsNav.classList.add("hide");
                timerDisplay.innerText = "0s";
                wordCountDisplay.innerText = "0";
                wordCountContainer.classList.remove("hide");
                timerContainer.classList.remove("hide");
            }
        } else {
            nav.button.classList.remove("selected");
        }
    })
        nextSes();
        saveState();
}



timeBtn.addEventListener("click", () => {
    state.mode = modes[0] || "words";
    switchButton();
})

sec15Btn.addEventListener("click", () => {
    state.mode.selectedOption = modes[0].selectedOption = 15;
    switchButton()
})

sec30Btn.addEventListener("click", () => {
    state.mode.selectedOption  = modes[0].selectedOption = 30;
    modes[0]
    switchButton()
})

sec60Btn.addEventListener("click", () => {
    state.mode.selectedOption = modes[0].selectedOption = 60;
    switchButton();
})

sec120Btn.addEventListener("click", () => {
    state.mode.selectedOption = modes[0].selectedOption = 120;
    switchButton() 
})


wordsBtn.addEventListener("click", () => {
    state.mode = modes[1] || "words";
    switchButton()
})

words25Btn.addEventListener("click", () => {
    state.mode.selectedOption = modes[1].selectedOption = 25;
    switchButton(); 
})

words50Btn.addEventListener("click", () => {
    state.mode.selectedOption = modes[1].selectedOption = 50;
    switchButton();
})

words100Btn.addEventListener("click", () => {
    state.mode.selectedOption = modes[1].selectedOption = 100;
    switchButton();
})

words250Btn.addEventListener("click", () => {
    state.mode.selectedOption = modes[1].selectedOption = 250;
    switchButton();
})


flawlessBtn.addEventListener("click", () => {
    state.mode = modes[2] || "flawless";
    switchButton()
})

endlessBtn.addEventListener("click", () => {
    state.mode = modes[3] || "endless";
    switchButton()
})


punctuationsBtn.addEventListener("click", () => {
    state.punctuations = !state.punctuations;
    switchButton()
})

numbersBtn.addEventListener("click", () => {
    state.numbers = !state.numbers;
    switchButton(); 
})



soundBtn.addEventListener("click", (e) => {
    console.log("Sound button has been clicked!")
    state.soundOn = !state.soundOn;
    switchButton();
    e.currentTarget.blur();
})
