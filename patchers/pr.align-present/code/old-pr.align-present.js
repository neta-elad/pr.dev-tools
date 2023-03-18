inlets = 1;
outlets = 0;

function bang() {
	var parent = this.patcher.parentpatcher;
	
	if (parent === null) {
		return;
	}
	parent.applyif(_round, _isPresentation);
	
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