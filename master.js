$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: false,
    dots: true,
    nav: false,
    URLhashListener: true,
    startPosition: "URLHash",
    smartSpeed: 500,
    margin: 10,

    // Autoplay options
    autoplay: true,
    autoplayTimeout: 2000, // 2 seconds
    autoplayHoverPause: true, // Pause on hover
  });
});

// dropzone

const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("fileInput");
const filePreview = document.getElementById("filePreview");

dropZone.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  if (fileInput.files.length) {
    filePreview.textContent = fileInput.files[0].name;
  } else {
    filePreview.textContent = "No file selected";
  }
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragover");

  if (e.dataTransfer.files.length) {
    fileInput.files = e.dataTransfer.files;
    filePreview.textContent = e.dataTransfer.files[0].name;
  }
});

// convert
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const selectedText = this.textContent.trim();
    const selectedIcon = this.getAttribute("data-icon");
    const selectedValue = this.getAttribute("data-value");

    // Update display
    document.getElementById("selectedText").textContent = selectedText;
    document.getElementById("selectedIcon").src = selectedIcon;

    // Set hidden input value
    document.getElementById("audioInput").value = selectedValue;
  });
});
