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
      <button class="btn btn-sm btn-secondary cancel">Cancel</button>
      <button class="btn btn-sm btn-primary save">Save</button>
    </div>
  </div>
</div>
{% endexample %}

{% highlight js %}
$('textarea#text-editor').redactor({
  height: 200
})
{% endhighlight %}
