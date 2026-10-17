# gezi-rotasi-istanbul
# 🧭 Gezi Rotası - İstanbul Modüler Şehir Rehberi

Bu proje, **Gezi Rotası** ana web sitesine bağlı olarak çalışan modüler İstanbul şehir rehberi alt yapısıdır.

## 📁 Proje Yapısı

- `index.html`: Ana şablon ve sayfa düzeni.
- `assets/css/style.css`: Global renk tanımları, buton stilleri ve reklam alanları.
- `assets/js/app.js`: JSON verilerini çekip sayfaya render eden JavaScript dosyası.
- `content/categories.json`: İstanbul alt kategori kart verileri.
- `content/general-info.json`: Şehir tanıtımı ve ulaşım ipuçları verisi.

## 🚀 İçerik Güncelleme

Yeni bir alt kategori (örneğin *Lezzet Durakları*) eklemek için HTML dosyasına dokunmadan sadece `content/categories.json` içerisine yeni bir obje eklemeniz yeterlidir.
