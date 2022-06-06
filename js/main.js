//Слайдер
$(document).ready(function () {
	$('.classes__slider').slick({
		arrows: true,
		slidesToShow: 4,
		autoplay: false,
		autoplaySpeed: 4000,
		draggable: false,
		waitForAnimate: false,
		responsive: [
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 3
				}
			},{
				breakpoint: 540,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 400,
				settings: {
					slidesToShow: 1
				}
			}
		]
		//variableWidth: true,
		//appendArrows:$('.classes')
	});
});

$(document).ready(function () {
	$('.active__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 2,
		autoplay: false,
		autoplaySpeed: 4000,
		draggable: false,
		waitForAnimate: false,
		slidesToScroll: 2,
		speed: 800,
		//appendArrows:$('.classes')
	});
});

//КАРТА
function init(idMap) {
	let map = new ymaps.Map(idMap, {
		center: [64.53598948133272, 40.55513168965016],
		zoom: 15
	});

	let placemark = new ymaps.Placemark([64.53598948133272, 40.55513168965016], {}, {
		iconLayout: 'default#image',
		iconImageHref: '..//img/Home/footer_location.png',
		iconImageSize: [14, 21],
		iconImageOffset: [0, 0],
	});


	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	// map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
	map.geoObjects.add(placemark);

}

ymaps.ready(() => {init('map')});
ymaps.ready(() => {init('map2')});
ymaps.ready(() => {init('map3')});
ymaps.ready(() => {init('map4')});
ymaps.ready(() => {init('map5')});
ymaps.ready(() => {init('map6')});
ymaps.ready(() => {init('map7')});


//POPUP
function toggle(){
	let popup = document.querySelector(".popup")
	let body = document.querySelector(".body")
	popup.classList.toggle("active");
	body.classList.toggle("_lock");
}


// плавная прокрутка при клике

const menuLinks = document.querySelectorAll('.header__nav-link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			if(headerBurger.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				headerBurger.classList.remove('_active');
				headerNav.classList.remove('_active');
			}


			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

//Работа с формой
document.getElementById('form-subscribe').addEventListener("submit", checkForm);

function checkForm(event) {
	event.preventDefault();
	let el = document.getElementById('form-subscribe');

		let email = el.email.value;
		let error = "";

		if(email == "")
			error = "fill in the field";
		else if(emailTest(input)) {
			error = "введены некорректные данные"
		}
}

//функция теста email
function emailTest(input) {
	return !/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
};


// Сброс данных при отправке формы
function clearForm() {
	let inputs = document.querySelectorAll('.subscribe__input');
	inputs.forEach(input => {
		input.value='';
	})
}


//БУРГЕР

const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
if (headerBurger) {
	headerBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		headerBurger.classList.toggle('_active');
		headerNav.classList.toggle('_active');
	})
}