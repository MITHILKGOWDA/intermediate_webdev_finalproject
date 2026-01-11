function calculate() {
  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value);
  const time = Number(document.getElementById("time").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    document.getElementById("result").innerText = "Invalid input";
    return;
  }

  const interest = (principal * rate * time) / 100;
  document.getElementById("result").innerText = interest;
}

module.exports = calculate;
