// Language switching
function setLang(lang) {
  document.body.classList.toggle("lang-en", lang === "en");
  document.getElementById("lang-uk").classList.toggle("active", lang === "uk");
  document.getElementById("lang-en").classList.toggle("active", lang === "en");
  document.documentElement.lang = lang;
  localStorage.setItem("preferredLang", lang);
}

// Load saved language preference
const savedLang = localStorage.getItem("preferredLang");
if (savedLang) {
  setLang(savedLang);
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
