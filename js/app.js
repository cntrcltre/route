// Модальное окно

// открыть по кнопке
var name;
var overlay;
var campagin;
function Show(overlay,campagin) { 
	
	$("div." + overlay).fadeIn();
	$("div." + campagin).fadeIn();
};

// закрыть на крестик
function CloseModal(overlay,campagin) { 
	$("div." + campagin).fadeOut();
	$("div." + overlay).fadeOut();
};


