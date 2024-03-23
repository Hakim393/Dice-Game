function angkaAcak() {
  return Math.floor(Math.random() * 6) + 1;
}

function gambarAcak1() {
  const angka1 = angkaAcak();
  const gambarAcak = `dice${angka1}.png`;
  const gambarSource = `images/${gambarAcak}`;

  document.querySelectorAll("img")[0].setAttribute("src", gambarSource);
  return angka1;
}

function gambarAcak2() {
  const angka2 = angkaAcak();
  const gambarAcak = `dice${angka2}.png`;
  const gambarSource = `images/${gambarAcak}`;

  document.querySelectorAll("img")[1].setAttribute("src", gambarSource);
  return angka2;
}

const btn = document.querySelector("button");


btn.addEventListener("click", () => {
  const gambar1 = gambarAcak1();
  const gambar2 = gambarAcak2();

  if (gambar1 == gambar2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (gambar1 >= gambar2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!!";
  }
});
