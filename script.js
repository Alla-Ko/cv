// Language switching
function setLang(lang) {
  if (lang !== "uk" && lang !== "en") return;

  document.body.classList.toggle("lang-en", lang === "en");
  document.getElementById("lang-uk").classList.toggle("active", lang === "uk");
  document.getElementById("lang-en").classList.toggle("active", lang === "en");
  document.documentElement.lang = lang;
  localStorage.setItem("preferredLang", lang);

  const url = new URL(window.location.href);
  if (lang === "en") {
    url.searchParams.set("lang", "en");
  } else {
    url.searchParams.delete("lang");
  }
  history.replaceState(null, "", url);
}

// Prefer ?lang=en|uk from the URL, then localStorage; default stays Ukrainian
const urlLang = new URLSearchParams(window.location.search).get("lang");
const savedLang = localStorage.getItem("preferredLang");
const initialLang =
  urlLang === "en" || urlLang === "uk" ? urlLang : savedLang;

if (initialLang === "en" || initialLang === "uk") {
  setLang(initialLang);
}

// Mobile sidebar toggle
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("active");
}

function closeMobileSidebar() {
  if (window.innerWidth <= 1024) {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("active");
  }
}

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-btn");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
