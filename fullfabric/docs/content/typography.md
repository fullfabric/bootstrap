---
layout: docs
title: Typography
group: content
---

Bootstrap includes simple and easily customized typography for headings, body text, lists, and more. For even more control, check out the [textual utility classes]({{ site.baseurl }}/components/utilities/).

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Global settings

Bootstrap sets basic global display, typography, and link styles. Specifically, we:

- Use a [native font stack](/content/reboot/#native-font-stack) that selects the best `font-family` for each OS and device.
- Use the `$font-family-base`, `$font-size-base`, and `$line-height-base` attributes as our typographic base applied to the `<body>`.
- Set the global link color via `$link-color` and apply link underlines only on `:hover`.
- Use `$body-bg` to set a `background-color` on the `<body>` (`#fff` by default).

These styles can be found within `_reboot.scss`, and the global variables are defined in `_variables.scss`.

All HTML headings, `<h1>` through `<h6>`, are available. `.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.

<div class="bd-example bd-example-type">
  <table class="table">
    <tbody>
      <tr>
        <td><h1>h1. Bootstrap heading</h1></td>
        <td class="type-info">Light 43px</td>
      </tr>
      <tr>
        <td><h2>h2. Bootstrap heading</h2></td>
        <td class="type-info">Regular 34px</td>
      </tr>
      <tr>
        <td><h3>h3. Bootstrap heading</h3></td>
        <td class="type-info">Regular 26px</td>
      </tr>
      <tr>
        <td><h4>h4. Bootstrap heading</h4></td>
        <td class="type-info">Regular 18px</td>
      </tr>
      <tr>
        <td><h5>h5. Bootstrap heading</h5></td>
        <td class="type-info">Semibold 12px</td>
      </tr>
      <tr>
        <td><h6>h6. Bootstrap heading</h6></td>
        <td class="type-info">Bold 10px</td>
      </tr>
    </tbody>
  </table>
</div>

{% highlight html %}
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>
{% endhighlight %}

### Customizing headings

Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.

{% example html %}
<h3>
  Fancy display heading
  <small class="text-muted">With faded secondary text</small>
</h3>
{% endexample %}

### Custom contents

{% example html %}
<div class="primary-content">
  Primary content
</div>
<div class="secondary-content">
  Secondary content
</div>
<div class="terciary-content">
  Terciary content
</div>
{% endexample %}
