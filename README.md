# wtc-utilities
Javascript helpers, perfect for non-jquery projects.
## Helpers
### floatRandomBetween
Generate a random float number between max and min.

* **min** [Number] ''
Minimum value.
* **max** [Number] ''
Maximum value.
* **return** [Number]
Random integer.

```javascript
utilities.randomBetween(-10, 20);
```

### randomBetween
Generate a random integer number between max and min.

* **min** [Number] ''
Minimum value.
* **max** [Number] ''
Maximum value.
* **return** [Number]
Random integer.

```javascript
utilities.randomBetween(1, 20);
```

### lerp
Linearly interpolate between two values by a unit interval

* **x** [Number] ''
The lower value.
* **y** [Number] ''
The upper value
* **amount** [Number] ''
Amount the amount to interpolate. The expected value is a unit interval (a float between 0 and 1), but this *will* work with higher and lower values as well.
* **return** [Number]
The interpolated value.

### getStyle
Get the current style value from an element.

* **el** [DOMNode] ''
Target element.
* **prop** [string] ''
CSS property name.
* **stripUnit** [boolean] false
Remove units.
* **return** [string]
Current CSS value.

```javascript
utilities.getStyle(document.getElementById('wrapper'), 'padding-bottom');
```

### log
Simple log function to show different colors on the console.

* **status** [string] ''
Status type, each type prints a different combination set of font color and background color.
Available types are: success, info, error and warning.
* **msg** [string] ''
Message to show.

```javascript
utilities.log(status, msg);
```

### once
Fires an event only once and executes the callback.
* **node** [DOMElement] null
Dom element to attach event.
* **type** [String] null
Type of event.
* **callback** [function] null
Callback.

```javascript
utilities.once(node, type, callback);
```

### shuffleArray
Shuffle an array.
* **array** [Array] null
Array to be shuffled.
* **return** [array]
Shuffled array.

```javascript
utilities.shuffleArray(array);
```

### fireCustomEvent
Fire a custom event.
* **name** [string] null
Name of the event.
* **data** [object] null
Object to be passed to the event.

```javascript
utilities.fireCustomEvent(name, data);
```

### forEachNode
Loop through and array of DOM elements.
* **array** [DOMNodeList] null
List of elements.
* **callback** [function]
Callback.
* **scope** _optional_ [function] null
Scope to pass to callback.

```javascript
utilities.forEachNode(array, callback, scope);
```

### getElementPosition
Get the position of the element relative to document.
* **element** [DOMNode] null
Element.
* **returns** [object]
Object with element coordinates.

```javascript
utilities.getElementPosition(element);
```

### classExtend
Extends a parent class.
* **child** [function] null
Child class.
* **parent** [function] null
Parent class.
* **returns** [function]
Extended and updated Child class

```javascript
utilities.classExtend(child, parent);
```

### hasClass
Checks for class on element.
* **cl** [string] null
Class names. Split with a _space_ to check for multiple names at once.
* **e** [DOMElement] null
Element
* **returns** [boolean] false
Returns true if any of the given classes is found on the element.

```javascript
utilities.hasClass(cl, e);
```

### removeClass
Remove class from element.
* **c** [string] null
Name of the class. Split with a _space_ to remove multiple classes at once.
* **e** [DOMElement] null
Element

```javascript
utilities.removeClass(c, e);
```

### addClass
Add class to element.
* **c** [string] null
Name of the class. Split with a _space_ to add multiple classes at once.
* **e** [DOMElement] null
Element

```javascript
utilities.addClass(c, e);
```

### getSiblings
Get siblings from element
* **e** [DOMElement]  null
Element
* **return** [DOMNodeList]
Returns a list with the element's siblings.

```javascript
utilities.getSiblings(e);
```

### matches
Function that normalizes the selector 'matchesSelector' across browsers.
* **returns** [function]
Normalized matches function.

```javascript
utilities.matches();
```

### extend
Similar to jquery.extend, it appends the properties from _options_ to _default_ and overwrite the ones that already exist in _defaults_.
* **defaults** [Object] null
Default values.
* **options** [Object] null
New values to merge.
* **returns** [Object]
Merged object.

```javascript
utilities.extend(defaults, options);
```

### FPS Measure
This runs a small process in the background that measures the page FPS. This can be useful for determining whether a simulation is running too intensively.

The object contains the following parameters, when running.

- current
  The current framerate
- low
  The lowest overall framerate
- averageOverall
  The average overall framerate
- average60
  The average framerate in the last 60 frames (ideally this is a second)

#### Usage
```
let fps = utilities.getFPSMeasure();
console.log(fps.current); // 60
```

When using this class, it is often fortiuitous to cycle it down and back up after a big FPS dip:
```
fps.stop();
fps.start();
```

### Serialize
Returns the form data as an array of name/value pairs.

* **form** [DOMElement] ''
The form element.

```javascript
utilities.serializeArray(document.getElementById('form'));
```