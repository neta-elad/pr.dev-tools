inlets = 1;
outlets = 0;

function bang() {
	post(max.frontpatcher);
	post(max.frontpatcher.filepath);
	post(max.frontpatcher.wind.next);
	post(max.frontpatcher.wind.next.filepath);

	if (max.frontpatcher.wind.next === null) {
		return; // error
	}
	
	var patcher = max.frontpatcher.wind.next.assoc;

	if (patcher === null) {
		return; // error
	}
	
	patcher.applyif(_round, _isPresentation);
}

_round.local = 1;
function _round(obj) {
	var rect = obj.getattr('presentation_rect');
	var roundRect = [];
	
	for (var i = 0; i < rect.length; ++i) {
		roundRect[i] = Math.round(rect[i]);
	}
	
	obj.setattr('presentation_rect', roundRect);
}

_isPresentation.local = 1;
function _isPresentation(obj) {
	return obj.getattr('presentation') === 1;
}