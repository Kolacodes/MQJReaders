let modal = document.getElementById('simpleModal');
let closeBtn = document.querySelector('.closeBtn');

// listen for close click
closeBtn.addEventListener('click', closeModal);

// listen for outside click
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}
