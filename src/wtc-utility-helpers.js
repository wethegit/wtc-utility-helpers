var utilities = {};

/**
 * floatRandomBetween
 * Generate a random float number max and min.
 * @min {number} Minimum value.
 * @max {number} Maximum value.
 * return {number} Random integer.
 */
utilities.floatRandomBetween = function(min, max) {
  return Math.random() * (max - min + 1) + min;
}

/**
 * randomBetween
 * Generate a random integer number max and min.
 * @min {number} Minimum value.
 * @max {number} Maximum value.
 * return {number} Random integer.
 */
utilities.randomBetween = function(min, max){
  return Math.floor(utilities.floatRandomBetween(min, max));
};

/**
 * lerp
 * Linearly interpolate between two values by a unit interval
 * @param {number} x The lower value
 * @param {number} y The upper value
 * @param {number} amount the amount to interpolate. The expected value is a unit interval (a float between 0 and 1), but this *will* work with higher and lower values as well.
 * @return {number} The interpolated value
 */
utilities.lerp = function(x, y, amount) {
  return (1 - amount) * x + amount * y;
}

/**
 * once
 * Fires an event only once and executes the callback.
 * @node {DOMElement} Dom element to attach event.
 * @type {String} Type of event.
 * @callback {function} Callback.
 */
utilities.once = function(node, type, callback) {
  node.addEventListener(type, function(e){
    e.target.removeEventListener(e.type, arguments.callee);
    return callback(e);
  });
};

/**
 * shuffleArray
 * Shuffle an array.
 * @array Arrray to be shuffled.
 * @param {Bool} modifyOriginal A boolean indicating whether the original array should be modified or whether a copy should be created.
 * return {array} Shuffled array.
 */
utilities.shuffleArray = function(array, modifyOriginal = true) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  
  // destructuring this to essentially clone the array
  // this will not clone array values, which shouldn't
  // matter. But if it does, in your case, then now
  // you know why.
  if(modifyOriginal === false) {
    [...array] = array;
  }

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

/**
 * fireCustomEvent
 * Fire a custom event.
 * @name {string} Name of the event.
 * @data {object} Object to be passed to the event.
 */
utilities.fireCustomEvent = function(name, data, bubbles, cancelable) {
  var ev;
  var params = {
    bubbles: bubbles || true,
    cancelable: cancelable || true,
    detail: data || null
  };

  // In IE11 window.CustomEvent exists but cannot be called as a constructor.
  // Therefor, for IE11, you need to fall back to document.createEvent('CustomEvent')
  // When we stop supporting IE11, this can all be simplified to:
  // | ev = new CustomEvent(name, params);
  if (typeof window.CustomEvent === "function") {
    ev = new CustomEvent(name, params);
  } else {
    ev = document.createEvent('CustomEvent');
    ev.initCustomEvent(name, params.bubbles, params.cancelable, params.detail);
  }

  window.dispatchEvent(ev);
};

/**
 * forEachNode
 * Loop through and array of DOM elements.
 * @deprecated since version 2.0
 * @array {DOM Node List} List of elements.
 * @callback {function} Callback.
 * @scope *optional {function} Scope to pass to callback.
 */
utilities.forEachNode = function (array, callback, scope) {
  console.warn('The forEachNode is deprecated and will be removed. Please stop using it.');
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

/**
 * getElementPosition
 * Get the position of the element relative to document.
 * @element {DOMNode} Element.
 * @property {Boolean} toWorld indicated whether the calculation of the element offset should be to the page or to the offset parent.
 * returns Object with element coordinates.
 */
utilities.getElementPosition = function(element, toWorld = true) {
  const offset = {
    top: 0,
    left: 0
  };
  
  if(toWorld === false) {
    offset.top = element.offsetTop;
    offset.left = element.offsetLeft;
  } else {
    var positionToViewport = element.getBoundingClientRect();

    var scrollTop = window.pageYOffset;
    var scrollLeft = window.pageXOffset;

    var clientTop = document.body.clientTop || 0;
    var clientLeft = document.body.clientLeft || 0;

    offset.top  += Math.round(positionToViewport.top +  scrollTop - clientTop);
    offset.left += Math.round(positionToViewport.left + scrollLeft - clientLeft);
  }
  
  return offset;
};

/**
 * Determines whether the element is a child 0 ancestor of the other.
 * If the toWorld flag is true (default), this will test recursively
 * up the node hierarchy.
 * 
 * This method can be used to determine whether a node is detached
 * by something like:
 * ```
 * attached = utilities.isChildOf(element, document.body);
 * ```
 * @public
 * @param {DomNode} element The element to test with
 * @param {DomNode} parentElement The parent element to test against
 * @param {Boolean=true} toWorld Whether to test this up the DOM hierarchy
 * @return {Boolean} true is the parentElement is parent (or ancestor) to Element
 */
utilities.isChildOf = function(element, parentElement, toWorld = true) {
  let isChildOf = false;
  if(element.parentNode === parentElement) {
    isChildOf = true;
  }
  if(
    toWorld === true && 
    isChildOf === false && 
    element.parentNode) {
    isChildOf = utilities.isChildOf(element.parentNode, parentElement);
  }
  return isChildOf;
}

/**
 * HasClass
 * Checks for class on element.
 * @deprecated since version 2.0
 * @cl {string} Names. You can split the names with a space
 * @e {DOM Element} Element
 */
utilities.hasClass = function(cl, e) {
  console.warn('The HasClass method is deprecated and will be removed. Please stop using it.');

  var c, classes, i, j, len, len1;
  classes = cl.split(' ');

  if (e.classList) {
    for (i = 0, len = classes.length; i < len; i++) {
      c = classes[i];
      if (e.classList.contains(c) === true) {
        return true;
      }
    }
  } else {
    for (j = 0, len1 = classes.length; j < len1; j++) {
      c = classes[j];
      if (new RegExp('(^| )' + c + '( |$)', 'gi').test(e.c)) {
        return true;
      }
    }
  }

  return false;

};

/**
 * RemoveClass
 * Remove class from element.
 * @deprecated since version 2.0
 * @c {string} name of the class
 * @e {DOM Element} Element
 */
utilities.removeClass = function(c, e) {
  console.warn('The removeClass method is deprecated and will be removed. Please stop using it.');

  var classes, i, j, len, len1;
  classes = c.split(' ');
  if (e.classList) {
    for (i = 0, len = classes.length; i < len; i++) {
      c = classes[i];
      e.classList.remove(c);
    }
  } else {
    for (j = 0, len1 = classes.length; j < len1; j++) {
      c = classes[j];
      e.className = e.className.replace(new RegExp('(^|\\b)' + c.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

};

/**
 * AddClass
 * Add class to element.
 * @deprecated since version 2.0
 * @c {string} Name of the class
 * @e {DOM Element} Element
 */
utilities.addClass = function(c, e) {
  console.warn('The addClass method is deprecated and will be removed. Please stop using it.');

  var classes, i, j, len, len1;
  classes = c.split(' ');

  if (e.classList) {
    for (i = 0, len = classes.length; i < len; i++) {
      c = classes[i];
      e.classList.add(c);
    }
  } else {
    for (j = 0, len1 = classes.length; j < len1; j++) {
      c = classes[j];
      e.className += ' ' + c;
    }
  }

};

/**
 * GetSiblings
 * Get siblings from element
 * @e {DOM Element} Element
 * @return Array of DOM Elements
 */
utilities.getSiblings = function(e) {

  return Array.prototype.filter.call(e.parentNode.children, function(child) {
    return child !== e;
  });

};

/**
 * Function to normalize the selctor 'matchesSelector' across browsers
 */
utilities.matches = function() {

  var doc, matches;
  doc = document.documentElement;
  matches = doc.matchesSelector || doc.webkitMatchesSelector || doc.mozMatchesSelector || doc.oMatchesSelector || doc.msMatchesSelector;

  return matches;

};

/**
 * Extend
 * Similar to jquery.extend, it appends the properties from 'options' to default and overwrite the ones that already exist in 'defaults'
 * @defaults {Object} Default values
 * @options {Object} New values
 */
utilities.extend = function(defaults, options) {

  var extended = {},
      key = null;

  for (key in defaults) {
    if (defaults.hasOwnProperty(key))
      extended[key] = defaults[key];
  }

  for (key in options) {
    if (options.hasOwnProperty(key))
      extended[key] = options[key];
  }

  return extended;

};

/**
 * Extends a base object with a series of other objects.
 *
 * @example
 * objA = {a: '1', b: '2', c: '3'};
 * objB = {d: {a: 'x', b: 'y', c: 'z'}};
 * objC = {b: 'foo'};

 * objD = utilities.deepExtend({}, objA, objB, objC);
 * // Outputs:
 * // [object Object] {
 * // a: "1",
 * // b: "foo",
 * // c: "3",
 * // d: [object Object] {
 * //   a: "x",
 * //   b: "y",
 * //   c: "z"
 * // }
}
 *
 * @static
 * @param  {...Object}   object      The objects to extend. The first object in the list will be the default.
 * @return {Object}                  The extended object in full.
 */
utilities.deepExtend = function() {

  if(Object.assign) {
    return Object.assign(...arguments);
  }

  // This is here for older browsers
  let out = arguments[0] || {};
  let i = 0;
  let key = null;

  while(i++ < arguments.length) {
    let obj = arguments[i];
    if(obj && typeof obj == 'object') {
      for(key in obj) {
        if(obj.hasOwnProperty(key)) {
          if(typeof obj[key] == 'object' && obj[key] != null) {
            out[key] = utilities.deepExtend(out[key], obj[key]);
          } else {
            out[key] = obj[key];
          }
        }
      }
    }
  }

  return out;
}

/**
 * Returns the CSS selector for a provided element
 *
 * @static
 * @param  {DOMElement}   el         The DOM node to find a selector for
 * @return {String}                  The CSS selector the describes exactly where to find the element
 */
utilities.getSelectorForElement = function(el) {
  var particles = [];
  while (el.parentNode) {
    if (el.id) {
      particles.unshift('#'+el.id);
      break;
    } else {
      if (el==el.ownerDocument.documentElement) particles.unshift(el.tagName);
      else {
        for (var c=1,e=el;e.previousElementSibling;e=e.previousElementSibling,c++);
        particles.unshift(el.tagName+":nth-child("+c+")");
      }
      el=el.parentNode;
    }
  }
  return particles.join(" > ");
}


/**
 * A singleton class that provides Framerate information for a website. When running, this will produce a 
 * number of useful internal properties.
 * 
 * - current
 *   The current framerate
 * - low
 *   The lowest overall framerate
 * - averageOverall
 *   The average overall framerate
 * - average60
 *   The average framerate in the last 60 frames (ideally this is a second)
 * 
 * ## Usage
 * ```
 * let fps = utilities.getFPSMeasure();
 * console.log(fps.current); // 60
 * ```
 * 
 * When using this class, it is often fortiuitous to cycle it down and back up after a big FPS dip:
 * ```
 * fps.stop();
 * fps.start();
 * ```
 * 
 * @private
 * @class MeasureFPS
 */
class MeasureFPS {
  constructor() {
    this.start();
  }
  start() {
    if(this.running === true) return;

    this.elapsedTime = 0;
    this.lastTime = 0;

    this.current = 0;
    this.low = 60;
    this.averageOverall = 60;
    this.average60 = 60;
    this.ticks = 0;

    this.running = true;

    requestAnimationFrame(this.run.bind(this));
  }
  stop() {
    this.running = false;
  }
  run(now) {
    let tick60;
    this.elapsedTime = (now - (this.lastTime || now)) / 1000;
    this.lastTime = now;
    this.ticks += 1;
    this.current = 1 / this.elapsedTime;
    if (this.current < this.low) {
      this.low = this.current;
    }
    if (!isNaN(parseInt(this.current))) {
      this.averageOverall = (this.ticks * this.averageOverall + this.current) / (this.ticks + 1);
      if (this.ticks % 60 === 0) {
        this.average60 = 60;
      }
      tick60 = (this.ticks % 60) + 1;
      this.average60 = (tick60 * this.average60 + this.current) / (tick60 + 1);
    }
    
    if(this.running === true) {
      requestAnimationFrame(this.run.bind(this));
    }
  }
}
let measureFPSInstance = null;

utilities.getFPSMeasure = function() {
  if(measureFPSInstance === null) measureFPSInstance = new MeasureFPS();
  return measureFPSInstance;
}

// Fix widows replaces the last space in a sentence with a non-breaking space
// This function is a little dangerous at the moment so we should revisit it at some point in the future
utilities.fixWidows = function(els) {
  _els = els;
  if(els instanceof Node) {
    _els = [els];
  }
  if(_els && _els.length) {
    for(let i = 0; i < _els.length; i++) {
      let el = _els[i];
      if(el instanceof Node) {
        el.innerHTML = el.innerHTML.replace(/\s(?=[^\s]*$)/g, "&nbsp;");
      }
    }
  }
}


/**
 * Returns the form data as an array of name/value pairs.
 *
 * @param  {DOMElement}   form       The <form> DOM node
 * @return {Array}                   Serialized data
 */
utilities.serializeArray = function(form) {
  let s = [];

  if (typeof form == 'object' && form.nodeName == "FORM") {
    for (let i = 0; i < form.elements.length; i++) {
      let field = form.elements[i];
      
      if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
        if (field.type == 'select-multiple') {
          for (let j = 0; j < form.elements[i].options.length; j++) {
            if(field.options[j].selected)
              s[s.length] = { name: field.name, value: field.options[j].value };
          }
        } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
          s[s.length] = { name: field.name, value: field.value };
        }
      }
    }
  }
  
  return s;
}

export default utilities;
