let skor = 0;
let waktu = 60;
let timerMain;

function mulaiGame() {
    let musikLatar = document.getElementById('bgm');
    if (musikLatar) {
        musikLatar.volume = 0.5;
        musikLatar.play().catch(e => console.log("Audio ditahan browser"));
    }

    document.getElementById('layar-mulai').style.display = 'none';
    timerMain = setInterval(hitungMundur, 1000);
}

function hitungMundur() {
    waktu--;
    document.getElementById('waktu').innerText = waktu;

    if (waktu <= 0) {
        clearInterval(timerMain);
        alert("Waktu Habis! yahh njell ngambek gegera kelamaan.");
        location.reload(); 
    }
}

function temukanBarang(idBarang) {
    let efekSuara = document.getElementById('suara-wow');
    if (efekSuara) {
        efekSuara.currentTime = 0;
        efekSuara.play().catch(e => console.log("Audio digagalkan browser"));
    }

    let barang = document.getElementById(idBarang);
    barang.style.display = 'none';

    skor++;
    document.getElementById('skor').innerText = skor;

    if (skor >= 5) {
        clearInterval(timerMain);
        document.getElementById('layar-menang').style.display = 'flex';
    }
}

function klaimHadiah() {
    alert("Voucher lg diunduh ke HP kamu");

    let linkDownload = document.createElement('a');
    linkDownload.href = 'voucher.png'; 
    linkDownload.download = 'Voucher_Makan_Bareng.png'; 
    
    document.body.appendChild(linkDownload);
    linkDownload.click();
    document.body.removeChild(linkDownload);
}