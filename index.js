var events = require('events-brick'),
    classes = require('classes');

/**
 * Expose 'Control'
 */

module.exports = Control;


/**
 * Control constructor.
 *
 * @param {Object} scope 
 * @param {Boolean} isTouch
 * @api public
 */

function Control(scope, touch) {
	if(!(this instanceof Control)) return new Control(scope, touch);
	this.events = events(null, touch);
	this.scope = scope;
	this.current = null;
}


/**
 * Parse callback string.
 * @param  {String} str 
 * @api private
 */

function parse(str){
	var props = str.replace(/\s+/g, ' ').split(' ');
	if(props.length > 1) return props;
	return ['active', props[0]];
}


/**
 * Toggle element with specified class name.
 * Default is 'active'.
 * example:
 *
 * 		.toggle(node, 'click .lego', 'popup');
 * 		.toggle(node, 'click .lego', 'red popup');
 * 		
 * @param  {Element} node    
 * @param  {String} selector
 * @param  {String} cb    
 * @param  {String} capture 
 * @api public
 */

Control.prototype.toggle = function(node, selector, cb, capture) {
	var _this = this,
			args = parse(cb);
	this.events.on(node, selector, function(target) {
		classes(target).toggle(args[0]); //we should define the class
		_this.scope[args[1]].apply(_this.scope, arguments);
	}, capture);
};


/**
 * Radio element with specified class name.
 * Default is 'active'.
 * example:
 *
 * 		.toggle(node, 'click .lego', 'popup');
 * 		.toggle(node, 'click .lego', 'red popup');
 * 		
 * @param  {Element} node    
 * @param  {String} selector
 * @param  {String} cb    
 * @param  {String} capture 
 * @api public
 */

Control.prototype.radio = function(node, selector, cb, capture) {
	var _this = this,
			args = parse(cb);
	this.events.on(node, selector, function(target) {
		if(_this.current && _this.current !== target) classes(_this.current).remove(args[0]);
		classes(target).add(args[0]);
		_this.current = target;
		_this.scope[args[1]].apply(_this.scope, arguments);
	}, capture);
};


/**
 * Destory plugin and remove all
 * event listeners.
 * 
 * @api public
 */

Control.prototype.destroy = function() {
	this.events.destroy();
};

