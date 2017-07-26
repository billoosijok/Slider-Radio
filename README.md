# Slider Radio
Animated slider radio buttons

<p align="center">
<img width="70%" src="https://thumbs.gfycat.com/ThreadbareCreativeKoi-size_restricted.gif" />
</p>

### Table of Content
- 🌟 [Features](#-features)
- ⬇️ [Installation](#-installation)
- 🎉 [Usage](#-usage)
- 🤘 [Customization](#-customization) 
- ⚖️ [License](#-license)

## 🌟 Features
- Highly customizable.
- Gracefully falls back on older browsers.

## ⬇️ Installation
#### Regular
1. Go to the <a href="src/slider-radio.zip">**File Page**</a>. Click download.
2. Add it to your HTML document.
```html
<script src="slider-radio/slider-radio.js"></script>
<link rel="stylesheet" href="slider-radio/slider-radio.css">
```


## 🎉 Usage
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
### Themes
You can add themes by adding their names to the container class in addition to `slider-radio`. Available themes are:
1. **Base**.
2. **Cool**.
3. **Elegant**.
4. **Vertical**.

###### See the Example Page at [/Example](billoosijok.github.io/slider-radio/Example)

## 🤘 Customization
Since it's your project, you may custumize the slider from the `slider-radio.css` file. Make sure you don't modify the line underneath `/* REQUIRED STYLES */`.
### or
To avoid confusion, you can simply add styles to your stylesheet. Following, is a guide for css selectors to use:
```css

.slider-radio { 
    /* Container Styles */
}
.slider-radio label { 
    /* Option Label Styles */
}
.slider-radio input[type=radio]:checked + label,
.slider-radio .sliding-piece { 
    /* Indicator Styles */
}
```
Of course if you are using more than one slider, you can add your own classes and style them respectively by adding yout own classes in addition to the `slider-radio` class.

## ⚖️ License
[MIT](https://github.com/billoosijok/slider-radio/blob/master/LICENSE)
