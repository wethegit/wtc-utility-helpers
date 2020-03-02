## Constants

<dl>
<dt><a href="#floatRandomBetween">floatRandomBetween</a> ⇒ <code>number</code></dt>
<dd><p>Generate a random float number max and min.</p>
<pre><code class="language-javascript">floatRandomBetween(-10, 20); // 12.513</code></pre>
</dd>
<dt><a href="#randomBetween">randomBetween</a> ⇒ <code>number</code></dt>
<dd><p>Generate a random integer number max and min.</p>
<pre><code class="language-javascript">randomBetween(-10, 20); // 12</code></pre>
</dd>
<dt><a href="#lerp">lerp</a> ⇒ <code>number</code></dt>
<dd><p>Linearly interpolate between two values by a unit interval</p>
<pre><code class="language-javascript">lerp(100, 200, .5); // 150</code></pre>
</dd>
<dt><a href="#shuffleArray">shuffleArray</a> ⇒ <code>array</code></dt>
<dd><p>Shuffle an array.</p>
</dd>
<dt><a href="#fireCustomEvent">fireCustomEvent</a></dt>
<dd><p>Fire a custom event.</p>
<pre><code class="language-javascript">fireCustomEvent(name, data);</code></pre>
</dd>
<dt><a href="#getElementPosition">getElementPosition</a> ⇒ <code>Object</code></dt>
<dd><p>Get the position of the element relative to document or optionally to the nearest offset parent.</p>
<pre><code class="language-javascript">getElementPosition(element); // returns something like { top: 100, left: 500 }</code></pre>
</dd>
<dt><a href="#isChildOf">isChildOf</a> ⇒ <code>Boolean</code></dt>
<dd><p>Determines whether the element is a child 0 ancestor of the other.
If the toWorld flag is true (default), this will test recursively
up the node hierarchy.</p>
<p>This method can be used to determine whether a node is detached
by something like:</p>
<pre><code>attached = isChildOf(element, document.body);</code></pre></dd>
<dt><a href="#getSiblings">getSiblings</a> ⇒</dt>
<dd><p>Get siblings from element</p>
<pre><code class="language-javascript">getSiblings(e);</code></pre>
</dd>
<dt><a href="#getAncestors">getAncestors</a></dt>
<dd><p>Retrieves all of the ancestors of an element, optionally to
the document body (true by default). The list that is
returned is the list of ancestors in order from the oldest
to youngest.</p>
</dd>
<dt><a href="#matches">matches</a></dt>
<dd><p>Function to normalize the selctor &#39;matchesSelector&#39; across browsers</p>
</dd>
<dt><a href="#getSelectorForElement">getSelectorForElement</a> ⇒ <code>String</code></dt>
<dd><p>Returns the CSS selector for a provided element</p>
</dd>
<dt><a href="#fixWidows">fixWidows</a></dt>
<dd><p>Fix widows replaces the last space in a sentence with a non-breaking space
This function is a little dangerous at the moment so we should revisit it at some point in the future</p>
</dd>
<dt><a href="#serializeArray">serializeArray</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the form data as an array of name/value pairs.</p>
</dd>
</dl>

<a name="floatRandomBetween"></a>

## floatRandomBetween ⇒ <code>number</code>
Generate a random float number max and min.

```javascript
floatRandomBetween(-10, 20); // 12.513
```

**Kind**: global constant  
**Returns**: <code>number</code> - Random number.  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Minimum value. |
| max | <code>number</code> | Maximum value. |

<a name="randomBetween"></a>

## randomBetween ⇒ <code>number</code>
Generate a random integer number max and min.

```javascript
randomBetween(-10, 20); // 12
```

**Kind**: global constant  
**Returns**: <code>number</code> - Random number.  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Minimum value. |
| max | <code>number</code> | Maximum value. |

<a name="lerp"></a>

## lerp ⇒ <code>number</code>
Linearly interpolate between two values by a unit interval

```javascript
lerp(100, 200, .5); // 150
```

**Kind**: global constant  
**Returns**: <code>number</code> - The interpolated value  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | The lower value |
| y | <code>number</code> | The upper value |
| amount | <code>number</code> | the amount to interpolate. The expected value is a unit interval (a float between 0 and 1), but this *will* work with higher and lower values as well. |

<a name="shuffleArray"></a>

## shuffleArray ⇒ <code>array</code>
Shuffle an array.

**Kind**: global constant  
**Returns**: <code>array</code> - Shuffled array.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Arrray to be shuffled. |
| [modifyOriginal] | <code>Boolean</code> | A boolean indicating whether the original array should be modified or whether a copy should be created. (default True) |

<a name="fireCustomEvent"></a>

## fireCustomEvent
Fire a custom event.

```javascript
fireCustomEvent(name, data);
```

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the event. |
| data | <code>object</code> | Object to be passed to the event. |
| [bubbles] | <code>Boolean</code> | Indicates whether the event bubbles (default True) |
| [cancelable] | <code>Boolean</code> | Indicates whether the event is cancellable  default True) |

<a name="getElementPosition"></a>

## getElementPosition ⇒ <code>Object</code>
Get the position of the element relative to document or optionally to the nearest offset parent.

```javascript
getElementPosition(element); // returns something like { top: 100, left: 500 }
```

**Kind**: global constant  
**Returns**: <code>Object</code> - the element coordinates.  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>DOMNode</code> | Element. |
| [toWorld] | <code>Boolean</code> | indicates whether the calculation of the element offset should be to the page or to the offset parent. (default True) |

<a name="isChildOf"></a>

## isChildOf ⇒ <code>Boolean</code>
Determines whether the element is a child 0 ancestor of the other.
If the toWorld flag is true (default), this will test recursively
up the node hierarchy.

This method can be used to determine whether a node is detached
by something like:
```
attached = isChildOf(element, document.body);
```

**Kind**: global constant  
**Returns**: <code>Boolean</code> - true is the parentElement is parent (or ancestor) to Element  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>DomNode</code> | The element to test with |
| parentElement | <code>DomNode</code> | The parent element to test against |
| [toWorld] | <code>Boolean</code> | Whether to test this up the DOM hierarchy |

<a name="getSiblings"></a>

## getSiblings ⇒
Get siblings from element

```javascript
getSiblings(e);
```

**Kind**: global constant  
**Returns**: Returns a list with the element's siblings.  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>DOMElement</code> | Element |

<a name="getAncestors"></a>

## getAncestors
Retrieves all of the ancestors of an element, optionally to
the document body (true by default). The list that is
returned is the list of ancestors in order from the oldest
to youngest.

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>DOMElement</code> | The element to retrieve the ancestors for |
| [toBody] | <code>boolean</code> | whether to only test to the body (default True) |
| [ancestors] | <code>array</code> | the list of already existing elements to pass. This is nromally only used internally |

<a name="matches"></a>

## matches
Function to normalize the selctor 'matchesSelector' across browsers

**Kind**: global constant  
<a name="getSelectorForElement"></a>

## getSelectorForElement ⇒ <code>String</code>
Returns the CSS selector for a provided element

**Kind**: global constant  
**Returns**: <code>String</code> - The CSS selector the describes exactly where to find the element  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>DOMElement</code> | The DOM node to find a selector for |

<a name="fixWidows"></a>

## fixWidows
Fix widows replaces the last space in a sentence with a non-breaking space
This function is a little dangerous at the moment so we should revisit it at some point in the future

**Kind**: global constant  
<a name="serializeArray"></a>

## serializeArray ⇒ <code>Array</code>
Returns the form data as an array of name/value pairs.

**Kind**: global constant  
**Returns**: <code>Array</code> - Serialized data  

| Param | Type | Description |
| --- | --- | --- |
| form | <code>DOMElement</code> | The <form> DOM node |

