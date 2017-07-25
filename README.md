# Slider Radio
Animated slider radio buttons

<p align="center">
<img width="300" src="https://thumbs.gfycat.com/HandmadeMajorEsok-size_restricted.gif" />
</p>

### Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation
#### Regular
1. <a href="src/slider-radio.zip">**Download**</a>.
2. Add it to your HTML document.
```html
<script src="slider-radio/slider-radio.js"></script>
<link rel="stylesheet" href="slider-radio/slider-radio.css">
```

## Usage
1. Wrap your inputs around a tag with `slider-radio` class.
2. Make sure that all the radio buttons all followed by their labels.
3. Connect all labels witheir respective radio input using `for` and `id`.
```html
<div class="slider-radio">
    <input type="radio" name="grade" id="a"><label for="a">A</label>
    <input type="radio" name="grade" id="b"><label for="b">B</label>
    <input type="radio" name="grade" id="c"><label for="c">C</label>
</div>
```
## License  
[MIT](https://github.com/billoosijok/slider-radio/blob/master/LICENSE)
