document.addEventListener("DOMContentLoaded", function() {
    const storageKey = "couponCodes";
    const sessionStorageData = sessionStorage.getItem(storageKey);
    const couponData = sessionStorageData ? JSON.parse(sessionStorageData) : {};
  
    function updateSessionStorage() {
      sessionStorage.setItem(storageKey, JSON.stringify(couponData));
    }
  
    function toggleLoadButton(button, code, title, loaded) {
      if (loaded) {
        button.textContent = "🗑️ 移除打包";
        button.classList.add("loaded");
        couponData[code] = title;
      } else {
        button.textContent = "📥 批量安装";
        button.classList.remove("loaded");
        delete couponData[code];
      }
      updateSessionStorage();
      updateCounter();
    }
  
    function copyToClipboard(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  
    function updateCounter() {
      const harvestCounter = document.querySelector(".harvest-counter");
      if (harvestCounter) {
        harvestCounter.textContent = Object.keys(couponData).length;
      }
    }
  
    window.loadCoupon = function(button, code, title) {
      const loaded = !button.classList.contains("loaded");
      toggleLoadButton(button, code, title, loaded);
    };
  
    window.harvestCoupons = function() {
      const codes = Object.keys(couponData);
      const titles = Object.values(couponData);
      if (codes.length > 0) {
        copyToClipboard(codes.join(";"));
        alert(`🐺<🎉：复制成功！请检查后，以管理员运行 Windows Terminal 终端，粘贴代码批量安装软件。如有疑问详见帮助。\n\n【Winget 批量安装】${titles.join(", ")}`);
      } else {
        alert("🐺<💡：请先选需要的软件，在 Winget 点击【批量安装】按钮");
      }
    };
  
    window.resetCoupons = function() {
      sessionStorage.removeItem(storageKey);
      location.reload();
    };
  
    // 初始化装载按钮状态
    const loadButtons = document.querySelectorAll(".load-btn");
    loadButtons.forEach((button) => {
      const code = button.dataset.code;
      if (couponData.hasOwnProperty(code)) {
        toggleLoadButton(button, code, couponData[code], true);
      }
    });
  
    // 更新收获按钮计数器
    updateCounter();
  });

  if (performance.navigation.type === 1) {
    sessionStorage.clear();
  }