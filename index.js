function copyCode() {
    let codeBox = document.querySelector('.code-box pre');
    let codeText = codeBox.textContent.trim();
    navigator.clipboard.writeText(codeText);
  }
  