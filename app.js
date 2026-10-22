document.addEventListener("DOMContentLoaded", () => {
    if (typeof SPOT_DATA === "undefined") return;
    document.body.classList.add("theme-" + (SPOT_DATA.theme || "history"));
    document.title = SPOT_DATA.title + " | Akıllı Gezi Rehberi";
    document.getElementById("breadcrumb-city").textContent = "İstanbul";
    document.getElementById("breadcrumb-title").textContent = SPOT_DATA.title;
    
    document.getElementById("hero-bg").src = SPOT_DATA.hero.coverImage;
    document.querySelector("#badge-category span").textContent = SPOT_DATA.category;
    document.querySelector("#badge-honor span").textContent = SPOT_DATA.hero.badge;
    document.getElementById("hero-title").textContent = SPOT_DATA.title;
    document.getElementById("hero-subtitle").textContent = SPOT_DATA.subtitle;

    document.getElementById("hero-stats").innerHTML = SPOT_DATA.hero.stats.map(s => `
        <div class="border-r border-white/10 last:border-0 pr-2">
            <span class="block text-xs text-slate-400 uppercase tracking-wider">${s.label}</span>
            <span class="text-sm sm:text-base md:text-lg font-semibold text-amber-400 truncate block">${s.value}</span>
        </div>
    `).join("");

    document.getElementById("summary-badge-title").textContent = SPOT_DATA.venueSummary.badgeTitle;
    document.getElementById("summary-type-title").textContent = SPOT_DATA.venueSummary.typeTitle;
    document.getElementById("summary-description").textContent = SPOT_DATA.venueSummary.description;
    document.getElementById("summary-details").innerHTML = SPOT_DATA.venueSummary.details.map(d => `
        <div class="bg-white/10 px-3 py-1.5 rounded-lg"><span class="text-slate-400">${d.label}:</span> ${d.value}</div>
    `).join("");

    document.querySelector("#overview-title span:last-child").textContent = SPOT_DATA.overview.title;
    document.getElementById("overview-paragraphs").innerHTML = SPOT_DATA.overview.paragraphs.map(p => `<p>${p}</p>`).join("");
    document.getElementById("visitor-notes-list").innerHTML = SPOT_DATA.overview.visitorNotes.map((n, i, a) => `
        <li class="flex justify-between pb-2 ${i !== a.length - 1 ? 'border-b border-slate-100' : ''}"><span>${n.label}:</span><span class="font-semibold text-slate-800">${n.value}</span></li>
    `).join("");

    document.getElementById("why-visit-title").textContent = SPOT_DATA.whyVisit.title;
    document.getElementById("why-visit-subtitle").textContent = SPOT_DATA.whyVisit.subtitle;
    document.getElementById("why-visit-cards").innerHTML = SPOT_DATA.whyVisit.cards.map(c => `
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div class="w-12 h-12 rounded-xl bg-theme-light text-theme flex items-center justify-center text-xl mb-4"><i class="${c.icon}"></i></div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">${c.title}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">${c.description}</p>
        </div>
    `).join("");

    document.querySelector("#must-see-title span").textContent = SPOT_DATA.mustSee.title;
    document.getElementById("must-see-items").innerHTML = SPOT_DATA.mustSee.items.map(item => `
        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <span class="text-xs font-bold text-theme uppercase tracking-wide">${item.category}</span>
            <h4 class="font-bold text-slate-900 text-base mt-1 mb-2">${item.title}</h4>
            <p class="text-xs text-slate-500 leading-relaxed">${item.description}</p>
        </div>
    `).join("");

    document.querySelector("#transport-title span").textContent = SPOT_DATA.transportation.title;
    document.getElementById("transport-methods").innerHTML = SPOT_DATA.transportation.methods.map(m => `
        <div class="flex items-start space-x-3"><i class="${m.icon} text-theme text-lg mt-0.5"></i><div><strong class="text-slate-800 block">${m.title}</strong>${m.detail}</div></div>
    `).join("");
    document.getElementById("transport-tip").textContent = SPOT_DATA.transportation.tip;
    document.getElementById("map-link").href = SPOT_DATA.transportation.mapUrl;
    document.getElementById("map-bg-img").src = SPOT_DATA.transportation.mapBgImage;

    document.querySelector("#where-to-stay-title span").textContent = SPOT_DATA.whereToStay.title;
    document.getElementById("hotel-list").innerHTML = SPOT_DATA.whereToStay.hotels.map(h => `
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div class="space-y-1"><span class="text-[10px] font-bold text-theme bg-theme-light px-2 py-0.5 rounded-md">${h.badge}</span><h4 class="font-bold text-slate-900 text-base">${h.name}</h4><p class="text-xs text-slate-500"><i class="fa-solid fa-location-dot mr-1"></i> ${h.distance}</p></div>
            <a href="${h.link}" target="_blank" rel="noopener" class="px-4 py-2 bg-theme-light hover:bg-theme hover:text-white text-theme rounded-xl text-xs font-semibold transition-colors">Otele Bak</a>
        </div>
    `).join("");

    document.querySelector("#where-to-eat-title span").textContent = SPOT_DATA.whereToEat.title;
    document.getElementById("restaurant-list").innerHTML = SPOT_DATA.whereToEat.restaurants.map(r => `
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div class="space-y-1"><span class="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">${r.badge}</span><h4 class="font-bold text-slate-900 text-base">${r.name}</h4><p class="text-xs text-slate-500">${r.detail}</p></div>
            <span class="text-amber-500 text-xs font-bold flex items-center"><i class="fa-solid fa-star mr-1"></i> ${r.rating}</span>
        </div>
    `).join("");
});
