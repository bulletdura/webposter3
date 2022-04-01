$(document).ready(() => {
	let count = 0;
	$('.egg').click(() => {
		count += 1;
		if (count == 1) {
			$('.white1').css('z-index', '4');
		} else if (count == 2) {
			$('.white2').css('z-index', '4');
		} else if (count == 3) {
			$('.white3').css('z-index', '4');
		} else if (count == 4) {
			$('.yellowrect2').css('opacity', '100%');
			$('.cloudtext3').css('opacity', '100%');
		}
	});
});

let tempCounter = 0;

$(document).ready(() => {
	$('.coll').css({
		opacity: '100%',
	});
	$(() => {
		$('.dragable').draggable({
			revert: 'invalid',
			start: function (event, ui) {
				console.log('start');
			},
			stop: function (event, ui) {
				console.log('stop');
			},
			refreshPositions: true,
			obstacle: '.item.dropped',
			preventCollision: true,
		});
	});

	$('.dragonDrop').droppable({
		accept: '.dragable',
		drop: function (event, ui) {
			ui.draggable.hide();
			if (
				ui.draggable[0].classList[0] == 'feather' ||
				ui.draggable[0].classList[0] == 'bird' ||
				tempCounter == 2
			) {
				return;
			}
			ui.draggable.addClass('dropped');
			let temp = ['dragon1', 'dragon2', 'dragon3'];
			tempCounter++;
			$('.' + temp[tempCounter]).show();
			$('.' + temp[tempCounter - 1]).hide();
		},
	});
});
