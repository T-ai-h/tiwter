let musicStarted = false;
let audioContext;


/* =========================
   เปิดกล่องของขวัญ
========================= */

function openGift() {

  // เริ่มเพลงหลังจากผู้ใช้แตะ
  startMusic();

  // ปล่อยคอนเฟตตี้
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


/* =========================
   ไปหน้าถัดไป
========================= */

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


/* =========================
   คอนเฟตตี้
========================= */

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
          Math.random() * emojis.length
        )
      ];

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.animationDuration =
      2 + Math.random() * 3 + "s";

    document
      .body
      .appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 5000);
  }
}


/* =========================
   เพลง
========================= */

function startMusic() {

  // ถ้าเริ่มไปแล้ว ไม่ต้องสร้างเพลงซ้ำ
  if (musicStarted) return;

  musicStarted = true;

  const AudioContext =
    window.AudioContext ||
    window.webkitAudioContext;

  if (!AudioContext) {
    console.log(
      "Browser นี้ไม่รองรับ Web Audio API"
    );

    return;
  }

  audioContext =
    new AudioContext();

  // โน้ตเพลง
  const notes = [
    523, 659, 784, 659,
    698, 784, 880, 784,
    784, 880, 1047, 880,
    659, 784, 698, 523
  ];

  const startTime =
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

    const noteTime =
      startTime + index * 0.25;

    gain.gain.setValueAtTime(
      0,
      noteTime
    );

    gain.gain.linearRampToValueAtTime(
      0.08,
      noteTime + 0.03
    );

    gain.gain.exponentialRampToValueAtTime(
      0.001,
      noteTime + 0.23
    );

    oscillator.start(
      noteTime
    );

    oscillator.stop(
      noteTime + 0.25
    );

  });
}
