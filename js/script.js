function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === "" || email === "" || message === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
  }
  return true;
}

function showImage(img) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = "none";
}
