---
layout: docs
title: Forms
group: components
---

Forms description description here

## Text input

{% example html %}
<form>
  <fieldset class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email">
  </fieldset>

  <fieldset class="form-group">
    <label for="email">Email address</label>
    <p class="text-muted">Maximum 300 characters</p>
    <input type="email" class="form-control" id="email" placeholder="Enter email">
  </fieldset>

  <fieldset class="form-group has-danger required">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email">
    <small class="text-danger">can't be blank</small>
  </fieldset>

</form>
{% endexample %}
