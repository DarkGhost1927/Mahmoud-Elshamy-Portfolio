function openNav() {
  // القائمة تاخد عرض 300 بيكسل بس
  var width = window.innerWidth < 768 ? "100%" : "350px"; // في الموبايل كاملة، في الكمبيوتر جانبية
  document.getElementById("myNav").style.width = width;
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

    VanillaTilt.init(document.querySelectorAll(".bounty-card"), {
        max: 10,        // زاوية الميل
        speed: 400,     // السرعة
        glare: true,    // لمعة إضاءة
        "max-glare": 0.2
    });
