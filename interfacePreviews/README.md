InterfacePreviews.js
=============================

A tiny library to help with "Interface Previews" while data is being loaded, similar to Facebook.

## Interface Previews
While user is waiting for data to be loaded, he is shown a preview of the interface with placeholders instead of real data. They improve user experience because users can use the time normally spent looking at a white screen or an AJAX spinner getting familiar with the layout of your app.

Read More: [Non-blocking UI's with interface previews][1]

##How to Use
- First you need to include <b>JQuery</b> and <b>interfacePreviews.js</b> into your page.
- You need a container element that holds your items/lists/tiles etc. This container needs to have <code>data-loading="container"</code> attribute. Something like:

```html
<div id="container" data-loading="container">
</div>
```
- Now you need to add a placeholder element inside this container, which will be visible by default on page load and will automatically be hidden if anything else is added to this container. The placeholder needs to have <code>data-loading="placeholder"</code> attribute. This is make your code something like this:

```html
<div id="container" data-loading="container">
    <div data-loading="placeholder">
        Wait for it...
    </div>
</div>
```
- You also need to add another element which will be shown when your app discovers that there are no elements to be added to this container. Example: You fetch new posts but find out there are no new posts, so you want to show a message now. This element needs to have <code>data-loading="empty"</code> attribute.

```html
<div id="container" data-loading="container">
    <div data-loading="placeholder">
        Wait for it...
    </div>
    <div data-loading="empty">
        No new posts to show.
    </div>
</div>
```

- When you have finished fetching data you need to call this function on your container:

```html
$('#container').hasLoaded();
```
This will have no effect if you appended elements to the container, but if there are no elements to show, this function will make "No new posts..." visible.

MIT Licensed.

[1]: http://www.callumhart.com/blog/non-blocking-uis-with-interface-previews