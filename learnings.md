## CSS

```css
pointer-events: none; 
```

> This makes it not clickable  



## JavaScript

```js
await navigator.mediaDevices.getDisplayMedia()
```

> method to capture and stream the contents of the user's screen.

> The await keyword is used to pause the execution of the code until the promise returned by getDisplayMedia() is resolved.

> This is an object provided by the Web API in modern browsers, and it contains methods and properties related to media devices, such as cameras and microphones.

> This method is used to request access to the user's screen or a specific application window for screen sharing or recording purposes. It returns a promise.

---

### What is a promise?

A promise is a fundamental concept in JavaScript used for handling asynchronous operations. It represents a value that might not be available yet but will be at some point in the future, or it might fail to resolve. Promises are a way to manage and work with asynchronous code more easily and cleanly.

Here are the key characteristics and components of a promise:

#### States:

> **Pending:** Initial state, neither fulfilled nor rejected.

> **Fulfilled:** The operation completed successfully, and a result is available.

> **Rejected:** The operation failed, and an error reason is available.


#### Methods:


> **then(onFulfilled, onRejected):** Attaches callbacks for when the promise is fulfilled or rejected. You can provide two functions as arguments, one for success (onFulfilled) and one for failure (onRejected).

> **catch(onRejected):** A shorthand for handling only the rejection case. Equivalent to then(undefined, onRejected).

#### Chaining:
> Promises allow for chaining multiple asynchronous operations, making it easier to handle complex workflows without deeply nested callbacks.


---

### Blob

```js
let blob = new Blob(mediaChunks, {type: selectedFormat});
```

> create a new blob object //what is a blob object? //A Blob object represents a file-like object of immutable, raw data. 

>Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system.


```js
videoRecording.src = window.URL.createObjectURL(blob);
```

> set the source of the videoRecording element to the blob object 

**What is the createObjectURL method?**
* The URL.createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter. 

* The URL lifetime is tied to the document in the window on which it was created. The new object URL represents the specified File object or Blob object.