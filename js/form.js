

var buttonOpenForm = document.querySelector('.popup-open');
var popup = document.querySelector('.search-form');
var numberOfAdults = popup.querySelector('[name=number-of-adults]');
var numberOfChild = popup.querySelector('[name=number-of-child]');
var dateOfArrival = popup.querySelector('[name=date-of-arrival]');
var dateOfDeparture = popup.querySelector('[name=date-of-departure]');
popup.classList.add('search-form--close');

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

  try {
    storageAdults = localStorage.getItem('number-of-adults');
    storageChildren = localStorage.getItem('number-of-child');
  } catch (err) {
    isStorageSupport = false;
  }


buttonOpenForm.addEventListener("click", function (evt) {
  popup.classList.toggle('search-form--open');
  dateOfArrival.focus();
  popup.classList.remove('search-form--error');
  if (storageAdults) {
    numberOfAdults.value = storageAdults;
  }
  if (storageChildren) {
    numberOfChild.value = storageChildren;
  }

});


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!popup.classList.contains('search-form--open')) {
      popup.classList.add('search-form--open');
    }
  }
});


popup.addEventListener('submit', function (evt) {
  if (!dateOfArrival.value || !dateOfDeparture.value || !numberOfAdults.value || !numberOfChild.value) {
    evt.preventDefault();
    popup.classList.remove('search-form--error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('search-form--error');
  }  else {
    if (isStorageSupport) {
      localStorage.setItem('number-of-adults', numberOfAdults.value);
      localStorage.setItem('number-of-child', numberOfChild.value);
    }
  }
});

