---
layout: docs
title: Subnavigation
group: components
---

The subnavigation description here

{% example html %}
<div class="subnavigation">
  <ul class="nav nav-stacked">
    <li class="active">
      <a href="#" >Link 1</a>
    </li>
    <li>
      <a href="#" >Link 2</a>
    </li>
    <li>
      <a href="#" >Link 3</a>
    </li>
    <li>
      <a href="#" >Link 4</a>
    </li>
    <li>
      <a href="#" >Link 5</a>
    </li>
  </ul>
</div>
{% endexample %}

Additionaly you can create nested navigations

{% example html %}
<div class="subnavigation">
  <ul class="nav nav-stacked">
    <li>
      <a href="#" >Link 1</a>
    </li>
    <li class="active">
      <a href="#" >Link 2</a>
      <ul class="second-level">
        <li>
          <a href="#">Child 1</a>
        </li>
        <li>
          <a href="#" class="active">Child 2</a>
        </li>
        <li>
          <a href="#">Child 3</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#" >Link 3</a>
    </li>
  </ul>
</div>
{% endexample %}
