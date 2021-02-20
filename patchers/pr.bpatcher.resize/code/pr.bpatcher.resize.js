inlets = 0;
outlets = 0;

var width = jsarguments[1];
var height = jsarguments[2];

function loadbang() {
	if (max.loadbangdisabled) {
		return;
	}
	
	var parent = this.patcher.parentpatcher;
	
	if (parent && parent.box) {
        var current = parent.box.rect;
		var left = current[0];
		var top = current[1];
		
		parent.box.rect = [left, top, left + width, top + height];
    }
}