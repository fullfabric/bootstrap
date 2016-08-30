---
layout: docs
title: Text editor
group: components
---

The text editor description here

{% example html %}
<div class="text-editor">
  <div class="editor">
    <textarea id="text-editor" rows="20"></textarea>
    <div class="actions">
    </div>
  </div>
</div>
{% endexample %}

{% highlight js %}
$('textarea#text-editor').redactor({
  height: 200
})
{% endhighlight %}

