/* 高一帆 个人作品集 — 交互脚本（无依赖，离线可用） */
(function () {
  "use strict";

  /* ---------- Hero 终端打字动画 ---------- */
  var typedEl = document.querySelector("[data-typed]");
  if (typedEl) {
    var phrases = JSON.parse(typedEl.getAttribute("data-typed"));
    var pi = 0, ci = 0, deleting = false;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      typedEl.textContent = phrases[0];
    } else {
      (function tick() {
        var full = phrases[pi];
        ci += deleting ? -1 : 1;
        typedEl.textContent = full.slice(0, ci);
        var delay = deleting ? 42 : 78;
        if (!deleting && ci === full.length) { deleting = false; delay = 1900; deleting = true; }
        else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 320; }
        setTimeout(tick, delay);
      })();
    }
  }

  /* ---------- 移动端导航开合 ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () { links.classList.toggle("open"); });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  /* ---------- 滚动淡入（一次性） ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }
})();
