var events = require('delegate');

/**
 * Expose 'Control'
 */

module.exports = Control;


/**
 * Control constructor.
 * @api public
 */

function Control(scope) {
	this.scope = scope;
	this.current = null;
}


Control.prototype.toggle = function(node, selector, type, callback, capture) {
	var _this = this;
	events.bind(node, selector, type, function(e){
		e.target.classList.toggle('active');
		_this.scope[callback].call(_this.scope, node);
	}, (capture === true));
};


Control.prototype.radio = function(node, selector, type, callback, capture) {
	var _this = this;
	events.bind(node, selector, type, function(e){
		//it seems there is a memory leak
		var target = e.target;;
		if(_this.current !== target && _this.current) _this.current.classList.remove('active');
		target.classList.add('active');
		_this.current = target;
		_this.scope[callback].call(_this.scope, node);
	}, (capture === true));
};

