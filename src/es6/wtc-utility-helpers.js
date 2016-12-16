var utilities = {};

/**
 * randomBetween
 * Generate a random integer number max and min.
 * @min {number} Minimum value.
 * @max {number} Maximum value.
 * return {number} Random integer.
 */
utilities.randomBetween = function(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * getStyle
 * Get the current style value from an element.
 * @el {DOMNode} Target element.
 * @prop {string} CSS property name.
 * @stripUnit {boolean} Remove units.
 * return {string} Current CSS value WITH unit.
 */
utilities.getStyle = function(el, prop, stripUnit){
  var strValue = "";

  if(window.getComputedStyle) {
    strValue = getComputedStyle(el).getPropertyValue(prop);
  }
  //IE
  else if (el.currentStyle) {
    try {
      strValue = el.currentStyle[prop];
    } catch (e) {}
  }

  if (stripUnit) {
    strValue = parseInt(strValue);
  }

  return strValue;
};

/**
 * Log
 * Simple log function to show different colors on the console.
 * @status {string} Status type.
 * @msg {string} Message to show.
 */
utilities.log = function(status, msg) {
  var bgc, color;

  switch (status) {
    case "success":
      color = "Green";
      bgc = "LimeGreen";
      break;
    case "info":
      color = "DodgerBlue";
      bgc = "Turquoise";
      break;
    case "error":
      color = "Black";
      bgc = "Red";
      break;
    case "warning":
      color = "Tomato";
      bgc = "Gold";
      break;
    default:
      color = "black";
      bgc = "White";
  }

  if (typeof msg === "object") {
    console.log(msg);
  } else {
    console.log("%c" + msg, "color:" + color + ";font-weight:bold; background-color: " + bgc + ";");
  }
};

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
 * return {array} Shuffled array.
 */
utilities.shuffleArray = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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
 * @array {DOM Node List} List of elements.
 * @callback {function} Callback.
 * @scope *optional {function} Scope to pass to callback.
 */
utilities.forEachNode = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

/**
 * getElementPosition
 * Get the position of the element relative to document.
 * @element {DOM Node} Element.
 * returns Object with element coordinates.
 */
utilities.getElementPosition = function(element) {
  var positionToViewport = element.getBoundingClientRect();

  var scrollTop = window.pageYOffset;
  var scrollLeft = window.pageXOffset;

  var clientTop = document.body.clientTop || 0;
  var clientLeft = document.body.clientLeft || 0;

  var top  = positionToViewport.top +  scrollTop - clientTop;
  var left = positionToViewport.left + scrollLeft - clientLeft;

  return {
    top: Math.round(top),
    left: Math.round(left)
  };
};

/**
 * getViewportDimensions
 * Get the browser window size.
 * retuns Object with dimensions.
 */
utilities.getViewportDimensions = function() {
  return {
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  };
};

/**
 * classExtend
 * Extends a parent class.
 * @child {function} Child class.
 * @parent {function} Parent class.
 * returns updated Child class;
 */
utilities.classExtend = function(child, parent) {
  var hasProp = {}.hasOwnProperty;

  for (var key in parent) {
    if (hasProp.call(parent, key)) child[key] = parent[key];
  }

  function ctor() {
    this.constructor = child;
  }

  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
  child.__super__ = parent.prototype;

  return child;
};

/**
 * HasClass
 * Checks for class on element.
 * @cl {string} Names. You can split the names with a space
 * @e {DOM Element} Element
 */
utilities.hasClass = function(cl, e) {

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
 * @c {string} name of the class
 * @e {DOM Element} Element
 */
utilities.removeClass = function(c, e) {

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
 * @c {string} Name of the class
 * @e {DOM Element} Element
 */
utilities.addClass = function(c, e) {

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
 * Returns the CSS selector for a provided element
 *
 * @static
 * @param  {DOMElement}   el         The DOM node to find a selector for
 * @return {String}                  The CSS selector the describes exactly where to find the element
 */
utilities.getSelectorForElement(el) {
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

export default utilities;