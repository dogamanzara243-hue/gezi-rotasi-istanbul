document.addEventListener("DOMContentLoaded", () => {
  loadGeneralInfo();
  loadCategoryCards();
});

// 1. Genel Şehir ve Ulaşım Bilgilerini Yükle
async function loadGeneralInfo() {
  try {
    const response = await fetch("./content/general-info.json");
    const data = await response.json();

    document.getElementById("hero-title").textContent = data.hero_title;
    document.getElementById("hero-desc").textContent = data.hero_description;
    document.getElementById("transport-title").textContent = data.transport_title;
    document.getElementById("transport-desc").textContent = data.transport_description;

    const tipsContainer = document.getElementById("transport-tips");
    tipsContainer.innerHTML = data.transport_tips
      .map(tip => `<li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[var(--primary)]"></i> ${tip}</li>`)
      .join("");
  } catch (error) {
    console.error("Genel bilgiler yüklenirken hata oluştu:", error);
  }
}

// 2. Kategori Kartlarını Yükle
async function loadCategoryCards() {
  try {
    const response = await fetch("./content/categories.json");
    const categories = await response.json();

    const container = document.getElementById("categories-container");
    container.innerHTML = categories.map(cat => `
      <div class="destination-card bg-white rounded-2xl overflow-hidden border border-[var(--border-light)] shadow-sm hover:shadow-xl flex flex-col justify-between">
        <div>
          <div class="relative h-52 overflow-hidden">
            <img src="${cat.image}" alt="${cat.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
            <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[var(--text-dark)] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              <i class="fa-solid ${cat.badge_icon} text-[var(--primary)] mr-1"></i> ${cat.category_badge}
            </span>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-[var(--text-dark)]">${cat.title}</h3>
            <p class="text-[var(--text-muted)] text-sm mb-4 leading-relaxed">${cat.description}</p>
          </div>
        </div>
        <div class="p-6 pt-0">
          <a href="${cat.target_url}" class="cta-affiliate-btn">
            <span>${cat.button_text}</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `).join("");
  } catch (error) {
    console.error("Kategoriler yüklenirken hata oluştu:", error);
  }
}
