// Follow Rovino Ramadhani
// ©Copyright 2021 - Rovino Ramadhani
var hasil = document.getElementById("hasil");var angka1 = document.getElementById("angka1");var angka2 = document.getElementById("angka2");var total;function cek(){if(angka1.value == "" || angka2.value == ""){if(angka1.value == ""){angka1.classList.add("is-invalid");}else{angka1.classList.remove("is-invalid");}if(angka2.value == ""){angka2.classList.add("is-invalid");}else{angka2.classList.remove("is-invalid");}hasil.innerText = "0";return false;}else{if(angka1.classList.contains("is-invalid")){angka1.classList.remove("is-invalid");}if(angka2.classList.contains("is-invalid")){angka2.classList.remove("is-invalid");}return true;}}function tambah(){if(cek()){total = parseInt(angka1.value) + parseInt(angka2.value);hasil.innerText = total;}}function kurang(){if(cek()){total = parseInt(angka1.value) - parseInt(angka2.value);hasil.innerText = total;}}function bagi(){if(cek()){total = parseInt(angka1.value) / parseInt(angka2.value);hasil.innerText = total;}}function kali(){if(cek()){total = parseInt(angka1.value) * parseInt(angka2.value);hasil.innerText = total;}}function hapus(){hasil.innerText = "0";angka1.value = "";angka2.value = "";}