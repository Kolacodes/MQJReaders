let modal = document.getElementById('simpleModal');
let modalBtn = document.getElementById('modalBtn');
// add [] cause close button is collection of a buttons
let closeBtn = document.getElementsByClassName('closeBtn')[0];

//listen for open click
modalBtn.addEventListener('click', openModal);

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
