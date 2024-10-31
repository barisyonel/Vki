function hesapla() {
	let kilo = parseFloat(document.getElementById("kilo").value);
	let boy = parseFloat(document.getElementById("boy").value) / 100; // Boyu metreye çeviriyoruz
	let sonucDiv = document.getElementById("sonuc");

	if (isNaN(kilo) || isNaN(boy) || boy === 0) {
		sonucDiv.textContent = "Lütfen geçerli bir kilo ve boy giriniz.";
		return;
	}

	let hesapla = kilo / (boy * boy);
	let sonucMetni = "";

	if (hesapla < 18.5) {
		sonucMetni = "İdeal Kilonun altında";
	} else if (hesapla >= 18.5 && hesapla <= 24.9) {
		sonucMetni = "İdeal Kilodasınız";
	} else if (hesapla >= 25 && hesapla <= 29.9) {
		sonucMetni = "İdeal Kilonun üzerindesiniz";
	} else if (hesapla >= 30 && hesapla <= 39.9) {
		sonucMetni = "Obezsiniz";
	} else if (hesapla >= 40) {
		sonucMetni = "Aşırı obezsiniz";
	}

	// Sonucu ekranda gösteriyoruz
	sonucDiv.textContent = sonucMetni;
}
