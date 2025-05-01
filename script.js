  const directLinks = ["q.pdf", "b.pdf", "c.pdf", "d.pdf"];
  const buttons = [
    document.getElementById("btn1"),
    document.getElementById("btn2"),
    document.getElementById("btn3"),
    document.getElementById("btn4"),
  ];
  const verifyCard = document.getElementById("verifyCard");
  const verifyBtn = document.getElementById("verifyBtn");
  const verificationLink = "https://cuty.io/ApnaNotez"; // replace with your Cuty.io URL

  const urlParams = new URLSearchParams(window.location.search);
  const isVerifiedNow = urlParams.get("verified") === "true";

  if (isVerifiedNow) {
    localStorage.setItem("verifiedTime", Date.now());
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  const lastVerified = localStorage.getItem("verifiedTime");
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;
  const expired = !lastVerified || (now - parseInt(lastVerified)) > oneDay;

  if (expired) {
    // Show verify card
    document.getElementById("overlay").style.display = "flex";
    verifyBtn.href = `${verificationLink}?redirect=${encodeURIComponent(window.location.href + "?verified=true")}`;

    // Disable buttons
    buttons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Please verify first to unlock downloads.");
      });
    });
  } else {
    // Already verified
    buttons.forEach((btn, i) => {
      btn.href = directLinks[i];
    });
  }
