# [wtc-utility-helpers](https://github.com/wethegit/wtc-utility-helpers) *3.0.0*

> Javascript helpers, perfect for non-jquery projects.


### src/wtc-utility-helpers.js


#### utilities.floatRandomBetween(min, max) 

Generate a random float number max and min.

```javascript
utilities.floatRandomBetween(-10, 20); // 12.513
```




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| min | `number`  | Minimum value. | &nbsp; |
| max | `number`  | Maximum value. | &nbsp; |




##### Returns


- `number`  Random number.



#### utilities.randomBetween(min, max) 

Generate a random integer number max and min.

```javascript
utilities.randomBetween(-10, 20); // 12
```




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| min | `number`  | Minimum value. | &nbsp; |
| max | `number`  | Maximum value. | &nbsp; |




##### Returns


- `number`  Random number.



#### utilities.lerp(x, y, amount) 

Linearly interpolate between two values by a unit interval

```javascript
utilities.lerp(100, 200, .5); // 150
```




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| x | `number`  | The lower value | &nbsp; |
| y | `number`  | The upper value | &nbsp; |
| amount | `number`  | the amount to interpolate. The expected value is a unit interval (a float between 0 and 1), but this *will* work with higher and lower values as well. | &nbsp; |




##### Returns


- `number`  The interpolated value



#### utilities.once(node, type, callback) 

Fires an event only once and executes the callback.

```javascript
utilities.once(node, type, callback);
```




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| node | `DOMElement`  | Dom element to attach event. | &nbsp; |
| type | `String`  | Type of event. | &nbsp; |
| callback | `function`  | Callback. | &nbsp; |




##### Returns


- `Void`



#### utilities.shuffleArray(array[, modifyOriginal]) 

Shuffle an array.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| array | `Array`  | Arrray to be shuffled. | &nbsp; |
| modifyOriginal | `Boolean`  | A boolean indicating whether the original array should be modified or whether a copy should be created. (default True) | *Optional* |




##### Returns


- `array`  Shuffled array.



#### utilities.fireCustomEvent(name, data[, bubbles, cancelable]) 

Fire a custom event.

```javascript
utilities.fireCustomEvent(name, data);
```




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| name | `string`  | Name of the event. | &nbsp; |
| data | `object`  | Object to be passed to the event. | &nbsp; |
| bubbles | `Boolean`  | Indicates whether the event bubbles (default True) | *Optional* |
| cancelable | `Boolean`  | Indicates whether the event is cancellable default True) | *Optional* |




##### Returns


- `Void`



#### deprecationWarning_forEachNode(array, callback[, scope]) 

Loop through and array of DOM elements.

```javascript
utilities.forEachNode(array, callback, scope);
```




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| array | `DOMNodeList`  | List of elements. | &nbsp; |
| callback | `function`  | Callback. | &nbsp; |
| scope | `function`  | Scope to pass to callback. | *Optional* |




##### Returns


- `Void`



#### utilities.getElementPosition(element[, toWorld]) 

Get the position of the element relative to document or optionally to the nearest offset parent.

```javascript
utilities.getElementPosition(element); // returns something like { top: 100, left: 500 }
```




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `DOMNode`  | Element. | &nbsp; |
| toWorld | `Boolean`  | indicates whether the calculation of the element offset should be to the page or to the offset parent. (default True) | *Optional* |




##### Returns


- `Object`  the element coordinates.



#### utilities.isChildOf(element, parentElement[, toWorld]) 

Determines whether the element is a child 0 ancestor of the other.
If the toWorld flag is true (default), this will test recursively
up the node hierarchy.

This method can be used to determine whether a node is detached
by something like:
```
attached = utilities.isChildOf(element, document.body);
```




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| element | `DomNode`  | The element to test with | &nbsp; |
| parentElement | `DomNode`  | The parent element to test against | &nbsp; |
| toWorld | `Boolean`  | Whether to test this up the DOM hierarchy | *Optional* |




##### Returns


- `Boolean`  true is the parentElement is parent (or ancestor) to Element



#### deprecationWarning_hasClass(cl, e) 

Checks for class on element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| cl | `string`  | Names. You can split the names with a space | &nbsp; |
| e | `DOMElement`  | Element | &nbsp; |




##### Returns


- `Boolean`  true is the element class string contains the provided class names



#### deprecationWarning_removeClass(c, e) 

Remove class from element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| c | `string`  | name of the class | &nbsp; |
| e | `DOMElement`  | Element | &nbsp; |




##### Returns


- `Void`



#### deprecationWarning_addClass(c, e) 

Add class to element.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| c | `string`  | Name of the class | &nbsp; |
| e | `DOMElement`  | Element | &nbsp; |




##### Returns


- `Void`



#### utilities.getSiblings(e) 

Get siblings from element

```javascript
utilities.getSiblings(e);
```




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| e | `DOMElement`  | Element | &nbsp; |




##### Returns


-  Returns a list with the element's siblings.



#### utilities.getAncestors(e[, toBody, ancestors]) 

Retrieves all of the ancestors of an element, optionally to 
the document body (true by default). The list that is 
returned is the list of ancestors in order from the oldest
to youngest.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| e | `DOMElement`  | The element to retrieve the ancestors for | &nbsp; |
| toBody | `boolean`  | whether to only test to the body (default True) | *Optional* |
| ancestors | `array`  | the list of already existing elements to pass. This is nromally only used internally | *Optional* |




##### Returns


- `Void`



#### utilities.matches() 

Function to normalize the selctor 'matchesSelector' across browsers






##### Returns


- `Void`



#### utilities.getSelectorForElement(el) 

Returns the CSS selector for a provided element




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| el | `DOMElement`  | The DOM node to find a selector for | &nbsp; |




##### Returns


- `String`  The CSS selector the describes exactly where to find the element



#### utilities.serializeArray(form) 

Returns the form data as an array of name/value pairs.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| form | `DOMElement`  | The <form> DOM node | &nbsp; |




##### Returns


- `Array`  Serialized data




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
