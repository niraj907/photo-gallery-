document.querySelectorAll('.trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const modalId = trigger.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('active');
  });
});

document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    closeBtn.closest('.modal__wrapper').classList.remove('active');
  });
});
