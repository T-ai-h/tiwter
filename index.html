let musicStarted = false;
let audioContext;
let currentPage = 1;

/* เปิดกล่องของขวัญ */

function openGift() {

  startMusic();

  celebrate();

  document
    .getElementById("page1")
    .classList
    .remove("active");

  setTimeout(() => {

    document
      .getElementById("page2")
      .classList
      .add("active");

  }, 500);

}


/* ไปหน้าต่อไป */

function nextPage() {

  document
    .getElementById("page2")
    .classList
    .remove("active");

  setTimeout(() => {

    document
      .getElementById("page3")
      .classList
      .add("active");

  }, 400);

}


/* คอนเฟตตี้ */

function celebrate() {

  const emojis = [
    "🎉",
    "🎊",
    "💚",
    "✨",
    "🎀",
    "🧸",
    "🎈"
  ];

  for (let i = 0; i < 80; i++) {

    const piece =
      document.createElement("div");

    piece.className =
      "confetti-piece";

    piece.innerHTML =
      emojis[
        Math.floor(
          Math.random() *
          emojis.length
        )
      ];

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.animationDuration =
      2 +
      Math.random() * 3 +
      "s";

    document
      .body
      .appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 5000);

  }

}


/* เพลงน่ารักสดใสที่สร้างจากเสียงในเว็บ */

function startMusic() {

  if (musicStarted) return;

  musicStarted = true;

  audioContext =
    new (
      window.AudioContext ||
      window.webkitAudioContext
    )();

  const notes = [
    523, 659, 784, 659,
    698, 784, 880, 784,
    784, 880, 1047, 880,
    659, 784, 698, 523
  ];

  let time =
    audioContext.currentTime;

  notes.forEach((frequency, index) => {

    const oscillator =
      audioContext.createOscillator();

    const gain =
      audioContext.createGain();

    oscillator.connect(gain);

    gain.connect(
      audioContext.destination
    );

    oscillator.type =
      "sine";

    oscillator.frequency.value =
      frequency;

    gain.gain.setValueAtTime(
      0,
      time + index * 0.25
    );

    gain.gain.linearRampToValueAtTime(
      0.08,
      time + index * 0.25 + 0.03
    );

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      time + index * 0.25 + 0.23
    );

    oscillator.start(
      time + index * 0.25
    );

    oscillator.stop(
      time + index * 0.25 + 0.25
    );

  });

}


/* พยายามเริ่มเพลงตอนเปิดเว็บ */

window.addEventListener(
  "load",
  () => {

    setTimeout(() => {
      startMusic();
    }, 500);

  }
);
