// ini javascript

console.log("Javasript Tersambung");

// fungsi validasi
function validateForm() {
  console.log("Validasi Fungsi Berhasil Terpanggil");
  const inputSuhu = document.getElementById("input-suhu").value;

  if (inputSuhu == "") {
    alert("Inputan anda kosong");
  } else {
    calculate(inputSuhu);
  }
}

// kalkulator suhu dan tampilan hasil serta cara kerjanya
function calculate(value) {
  let result = parseInt(value) * 1.8 + 32;
  document.getElementById("hasil-suhu").value = result;
  document.getElementById("bagaimana-suhu").value =
    value + "\u00B0C x 9/5 + 32 = " + result + "\u00B0F";
}

// fungsi tombol reset
function reset() {
  document.getElementById("input-suhu").value = "";
  document.getElementById("hasil-suhu").value = "";
  document.getElementById("bagaimana-suhu").value = "";
}
