$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');


	var sliderList = $('.slider__list'),
			sliderControl = $('.slider__control-list');
	
	sliderList.slick({
		arrows: false,
		asNavFor: sliderControl
	});

	sliderControl.slick({
		arrows: false,
		slidesToShow: 5,
		focusOnSelect: true,
		asNavFor: sliderList
	})

	var panel = $('.panel'),
			panelScroll = 'panel_scroll';

	$(window).on('load scroll', function(event) {
		if ($(window).scrollTop() > 50) {
			panel.addClass(panelScroll);
		} else {
			panel.removeClass(panelScroll);
		}
	});

	$('.calc__btn').click(function(event) {

		var sliderItem = $(this).parents('.calc__slide'),
				nextStep = false;

		console.log(1);

		

		if ($(this).hasClass('btn-next')) {
			var sliderItemNext = sliderItem.next('.calc__slide');
			sliderItemNext.addClass('calc__slide_show');
			nextStep = true;
		} else if ($(this).hasClass('btn-prev')){
			if (!$(this).hasClass('disabled')) {
				var sliderItemNext = sliderItem.prev('.calc__slide');
				sliderItemNext.addClass('calc__slide_show');
				nextStep = true;
			}
		}

		if (nextStep) {
			sliderItem.removeClass('calc__slide_show');
		}
	});

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('checkbox');
	valueElementForm('radio');	

	$('.reviews__list').slick({
		dots: true
	});

	$('.dops__list').slick({
		slidesToShow: 5
	});

	$('.btn-submit').click(function(event) {
		event.preventDefault();
		var form = $(this).parents('form');
				inputsRequired = form.find('.input_required'),
				inputsRequiredLength = inputsRequired.length,
				counter = 0;

		inputsRequired.each(function(index, el) {
			if ($(this).find('input').val() == '') {
				$(this).addClass('input_error');
			} else {
				$(this).removeClass('input_error');
				counter++;
			}
		});

		if (counter == inputsRequiredLength) {
			$.ajax({
		    type: "POST",
		    url: "order.php",
		    data: form.serialize()
				}).done(function() {
			    $.fancybox.close();
					$.fancybox.open({src  : '#popup-thanks',type : 'inline'});
			});
			
		}
	});	


	$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
    return false;
	});





	ymaps.ready(init);
  var myMap;

  function init(){
      myMap = new ymaps.Map ("map", {
          center: [54.537813, 36.296600],
          zoom: 16
      });


      myPin = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'upload/placeholder.png',
        iconImageSize: [62, 90],
        iconImageOffset: [-25, -70]
      });

      myPlacemark1 = new ymaps.Placemark([54.537813, 36.296600], {});


      myPin.add(myPlacemark1);

      myMap.geoObjects.add(myPin);
  }

});

