# show-my-password
HTML is sometimes unforgiving

[Demo Here](https://heyitsjeoff.github.io/show-my-password/)

Want a good reason to store your passwords in the browser? Here it is!

What this does is take the 'complexity' out of inspecting an input field with a type of `password`
and changing it to `text`. 

With one copy-pasta function into the console, or a Javascript bookmarklet for those who
want to do this with one click, you can see the contents of any input field, including a password.

### Not working on a website?
Kick it old-school: inspect that element and change the input type by hand, no Javascript required! Guaranteed to work
or your get your dank memes back!

### The code
```javascript
var inputs, index;

inputs = document.getElementsByTagName('input');
for (index = 0; index < inputs.length; ++index) {
    inputs[index].type = 'text';
}
```

Nothing fancy here, just find any input field and change it to type `text`. Now those passwords you have
populating on pages (or any input field with a value in it) can be easily viewed.

### Bookmark

If you want this convenience at the click of a bookmark, just paste this as a URL for a bookmark 
(confirmed in Chrome)

`javascript:(function(){var inputs, index;inputs = document.getElementsByTagName('input');
for (index = 0; index < inputs.length; ++index) {inputs[index].type = 'text';}})();`