let rating__item = document.querySelectorAll('.rating__item');
let mark = document.querySelector('.mark');

rating__item.forEach((rating) => {
   rating.addEventListener('click', () => {
      const rating_data = rating.dataset.value;
      rating.parentNode.dataset.totalValue = rating_data;

      mark.textContent = rating_data;
   });
});