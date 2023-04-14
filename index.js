function copyCode(button) {
  let codeBox = button.closest('.code-box');
  let codeText = codeBox.querySelector('pre').textContent.trim();
  navigator.clipboard.writeText(codeText);
}
