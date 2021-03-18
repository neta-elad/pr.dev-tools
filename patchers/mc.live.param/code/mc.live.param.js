inlets = 1;
outlets = 0;

var created = false;

function create(prefix, index) {
    if (created) {
        return;
    }

    var out1 = this.patcher.getnamed('out1');

    var param = this.patcher.newdefault(5, 5, 'live.param~', prefix + index);

    this.patcher.connect(param, 0, out1, 0);

    created = true;
}