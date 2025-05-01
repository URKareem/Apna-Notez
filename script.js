window.addEventListener("DOMContentLoaded", () => {
    // 1. Set the Cuty.io verification link
    const verifyBtn = document.getElementById("verifyBtn");
    verifyBtn.href = "https://cuty.io/ApnaNotez?redirect=https://apnanotez.netlify.app/?verified=true";
  
    // 2. Handle the verification flag in URL
    const urlParams = new URLSearchParams(window.location.search);
    const isVerifiedNow = urlParams.get("verified") === "true";
  
    if (isVerifiedNow) {
      localStorage.setItem("verifiedTime", Date.now());
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  
    // 3. Check if verification is expired
    const lastVerified = localStorage.getItem("verifiedTime");
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const expired = !lastVerified || (now - parseInt(lastVerified)) > oneDay;
  
    // 4. Show/hide overlay and unlock buttons
    const overlay = document.getElementById("overlay");
  
    if (expired) {
      overlay.style.display = "flex";
    } else {
      overlay.style.display = "none";
      document.getElementById("btn1").href = "https://drive.google.com/uc?export=download&id=1-vK82Ok_70i3BFFShglzNw-SURwtSLCd";
      document.getElementById("btn2").href = "https://drive.google.com/uc?export=download&id=1pNSelAiCBONJw6VM8nyiipBW3hBcktpw";
      document.getElementById("btn3").href = "https://drive.google.com/uc?export=download&id=1J8GZvXt62yN3yZ4bgsY43dIxHfmtC2hT";
      document.getElementById("btn4").href = "https://drive.google.com/uc?export=download&id=1X4r8IAjE4dmdUQCaV289bZqZzxVv4QuZ";
    }
  });
  
