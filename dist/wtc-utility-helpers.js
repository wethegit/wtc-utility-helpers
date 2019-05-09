"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var utilities = {};
/**
 * Generate a random float number max and min.
 * 
 * ```javascript
 * utilities.randomBetween(-10, 20); // 12.513
 * ```
 * 
 * @public
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @return {number} Random number.
 */

utilities.floatRandomBetween = function (min, max) {
  return Math.random() * (max - min + 1) + min;
};
/**
 * Generate a random integer number max and min.
 * 
 * ```javascript
 * utilities.randomBetween(-10, 20); // 12
 * ```
 * 
 * @public
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 * @return {number} Random number.
 */


utilities.randomBetween = function (min, max) {
  return Math.floor(utilities.floatRandomBetween(min, max));
};
/**
 * Linearly interpolate between two values by a unit interval
 * 
 * ```javascript
 * utilities.lerp(100, 200, .5); // 150
 * ```
 * 
 * @public
 * @param {number} x The lower value
 * @param {number} y The upper value
 * @param {number} amount the amount to interpolate. The expected value is a unit interval (a float between 0 and 1), but this *will* work with higher and lower values as well.
 * @return {number} The interpolated value
 */


utilities.lerp = function (x, y, amount) {
  return (1 - amount) * x + amount * y;
};
/**
 * Fires an event only once and executes the callback.
 * 
 * ```javascript
 * utilities.once(node, type, callback);
 * ```
 * 
 * @public
 * @param {DOMElement} node Dom element to attach event.
 * @param {String} type Type of event.
 * @param {function} callback Callback.
 */


utilities.once = function (node, type, callback) {
  node.addEventListener(type, function (e) {
    e.target.removeEventListener(e.type, arguments.callee);
    return callback(e);
  });
};
/**
 * Shuffle an array.
 * 
 * @public
 * @param {Array} array Arrray to be shuffled.
 * @param {Boolean=} modifyOriginal A boolean indicating whether the original array should be modified or whether a copy should be created. (default True)
 * @return {array} Shuffled array.
 */


utilities.shuffleArray = function (array) {
  var modifyOriginal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // destructuring this to essentially clone the array
  // this will not clone array values, which shouldn't
  // matter. But if it does, in your case, then now
  // you know why.

  if (modifyOriginal === false) {
    var _array = array;

    var _array2 = _toArray(_array);

    array = _array2.slice(0);
  } // While there remain elements to shuffle...


  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
/**
 * Fire a custom event.
 * 
 * ```javascript
 * utilities.fireCustomEvent(name, data);
 * ```
 * 
 * @public
 * @param {string} name Name of the event.
 * @param {object} data Object to be passed to the event.
 * @param {Boolean=} bubbles Indicates whether the event bubbles (default True)
 * @param {Boolean=} cancelable Indicates whether the event is cancellable  default True)
 */


utilities.fireCustomEvent = function (name, data, bubbles, cancelable) {
  var ev;
  var params = {
    bubbles: bubbles || true,
    cancelable: cancelable || true,
    detail: data || null
  }; // In IE11 window.CustomEvent exists but cannot be called as a constructor.
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
 * Loop through and array of DOM elements.
 * 
 * ```javascript
 * utilities.forEachNode(array, callback, scope);
 * ```
 * 
 * @public
 * @deprecated since version 2.0 - this really only exists anymore because of IE11
 * @param {DOMNodeList} array List of elements.
 * @param {function} callback Callback.
 * @param {function=} scope Scope to pass to callback.
 */


var deprecationWarning_forEachNode = false;

utilities.forEachNode = function (array, callback, scope) {
  if (deprecationWarning_forEachNode === false) {
    deprecationWarning_forEachNode = true;
    console.warn('The forEachNode is deprecated and will be removed. Please stop using it.');
  }

  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};
/**
 * Get the position of the element relative to document or optionally to the nearest offset parent.
 * 
 * ```javascript
 * utilities.getElementPosition(element); // returns something like { top: 100, left: 500 }
 * ```
 * 
 * @public
 * @param {DOMNode} element Element.
 * @param {Boolean=} toWorld indicates whether the calculation of the element offset should be to the page or to the offset parent. (default True)
 * @returns {Object} the element coordinates.
 */


utilities.getElementPosition = function (element) {
  var toWorld = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var offset = {
    top: 0,
    left: 0
  };

  if (toWorld === false) {
    offset.top = element.offsetTop;
    offset.left = element.offsetLeft;
  } else {
    var positionToViewport = element.getBoundingClientRect();
    var scrollTop = window.pageYOffset;
    var scrollLeft = window.pageXOffset;
    var clientTop = document.body.clientTop || 0;
    var clientLeft = document.body.clientLeft || 0;
    offset.top += Math.round(positionToViewport.top + scrollTop - clientTop);
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
 * @param {Boolean=} toWorld Whether to test this up the DOM hierarchy
 * @return {Boolean} true is the parentElement is parent (or ancestor) to Element
 */


utilities.isChildOf = function (element, parentElement) {
  var toWorld = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var isChildOf = false;

  if (element.parentNode === parentElement) {
    isChildOf = true;
  }

  if (toWorld === true && isChildOf === false && element.parentNode) {
    isChildOf = utilities.isChildOf(element.parentNode, parentElement);
  }

  return isChildOf;
};
/**
 * Checks for class on element.
 * 
 * @public
 * @deprecated since version 2.0
 * @param {string} cl Names. You can split the names with a space
 * @param {DOMElement} e Element
 * @return {Boolean} true is the element class string contains the provided class names
 */


var deprecationWarning_hasClass = false;

utilities.hasClass = function (cl, e) {
  if (deprecationWarning_hasClass === false) {
    deprecationWarning_hasClass = true;
    console.warn('The HasClass method is deprecated and will be removed. Please stop using it.');
  }

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
 * Remove class from element.
 * 
 * @public
 * @deprecated since version 2.0
 * @param {string} c name of the class
 * @param {DOMElement} e Element
 */


var deprecationWarning_removeClass = false;

utilities.removeClass = function (c, e) {
  if (deprecationWarning_removeClass === false) {
    deprecationWarning_removeClass = true;
    console.warn('The removeClass method is deprecated and will be removed. Please stop using it.');
  }

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
 * Add class to element.
 * 
 * @public
 * @deprecated since version 2.0
 * @param {string} c Name of the class
 * @param {DOMElement} e Element
 */


var deprecationWarning_addClass = false;

utilities.addClass = function (c, e) {
  if (deprecationWarning_addClass === false) {
    deprecationWarning_addClass = true;
    console.warn('The addClass method is deprecated and will be removed. Please stop using it.');
  }

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
 * Get siblings from element
 * 
 * ```javascript
 * utilities.getSiblings(e);
 * ```
 * 
 * @param {DOMElement} e Element
 * @return Returns a list with the element's siblings.
 */


utilities.getSiblings = function (e) {
  return Array.prototype.filter.call(e.parentNode.children, function (child) {
    return child !== e;
  });
};
/**
 * Retrieves all of the ancestors of an element, optionally to 
 * the document body (true by default). The list that is 
 * returned is the list of ancestors in order from the oldest
 * to youngest.
 * 
 * @public
 * @param {DOMElement} e The element to retrieve the ancestors for
 * @param {boolean=} toBody whether to only test to the body (default True)
 * @param {array=} ancestors the list of already existing elements to pass. This is nromally only used internally
 */


utilities.getAncestors = function (e) {
  var toBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var ancestors = arguments.length > 2 ? arguments[2] : undefined;
  if (!ancestors) ancestors = [];

  if (toBody === true && e.parentNode === document.body) {
    return ancestors;
  }

  if (e.parentNode) {
    ancestors.splice(0, 0, [e.parentNode]);
    utilities.getAncestors(e.parentNode, toBody, ancestors);
  }

  return ancestors;
};
/**
 * Function to normalize the selctor 'matchesSelector' across browsers
 */


utilities.matches = function () {
  var doc, matches;
  doc = document.documentElement;
  matches = doc.matchesSelector || doc.webkitMatchesSelector || doc.mozMatchesSelector || doc.oMatchesSelector || doc.msMatchesSelector;
  return matches;
};
/**
 * Returns the CSS selector for a provided element
 *
 * @public
 * @param  {DOMElement}   el         The DOM node to find a selector for
 * @return {String}                  The CSS selector the describes exactly where to find the element
 */


utilities.getSelectorForElement = function (el) {
  var particles = [];

  while (el.parentNode) {
    if (el.id) {
      particles.unshift('#' + el.id);
      break;
    } else {
      if (el == el.ownerDocument.documentElement) particles.unshift(el.tagName);else {
        for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++) {
          ;
        }

        particles.unshift(el.tagName + ":nth-child(" + c + ")");
      }
      el = el.parentNode;
    }
  }

  return particles.join(" > ");
}; // Fix widows replaces the last space in a sentence with a non-breaking space
// This function is a little dangerous at the moment so we should revisit it at some point in the future


utilities.fixWidows = function (els) {
  _els = els;

  if (els instanceof Node) {
    _els = [els];
  }

  if (_els && _els.length) {
    for (var i = 0; i < _els.length; i++) {
      var el = _els[i];

      if (el instanceof Node) {
        el.innerHTML = el.innerHTML.replace(/\s(?=[^\s]*$)/g, "&nbsp;");
      }
    }
  }
};
/**
 * Returns the form data as an array of name/value pairs.
 *
 * @param  {DOMElement}   form       The <form> DOM node
 * @return {Array}                   Serialized data
 */


utilities.serializeArray = function (form) {
  var s = [];

  if (_typeof(form) == 'object' && form.nodeName == "FORM") {
    for (var i = 0; i < form.elements.length; i++) {
      var field = form.elements[i];

      if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
        if (field.type == 'select-multiple') {
          for (var j = 0; j < form.elements[i].options.length; j++) {
            if (field.options[j].selected) s[s.length] = {
              name: field.name,
              value: field.options[j].value
            };
          }
        } else if (field.type != 'checkbox' && field.type != 'radio' || field.checked) {
          s[s.length] = {
            name: field.name,
            value: field.value
          };
        }
      }
    }
  }

  return s;
};

var _default = utilities;
exports["default"] = _default;