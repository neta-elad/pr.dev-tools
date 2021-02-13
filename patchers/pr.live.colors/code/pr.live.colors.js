inlets = 1;
outlets = 0;

function control_fg() {
	var colors = arrayfromargs(arguments);
	
	var parent = this.patcher.parentpatcher;
	
	if (parent === null) {
		return;
	}
	
	parent.applyif(_colorComment.bind(this, colors), _isLiveComment);
}

_isLiveComment.local = 1;
function _isLiveComment(obj) {
	return obj.maxclass === 'live.comment';
}

_colorComment.local = 1;
function _colorComment(colors, obj) {
	obj.setattr('textcolor', colors);
}