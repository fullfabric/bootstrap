---
layout: docs
title: Modal
group: components
---

Modal description here

### Basic

<div class="bd-example bd-example-modal">
  <div class="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="close">
          <a href="#" data-dismiss="modal">X</a>
        </div>
        <div class="modal-header">
          <h2>Heading 02</h2>
        </div>
        <div class="modal-body">
          <p>One fine body&hellip;</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
</div>

{% highlight html %}
<div class="modal fade">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="close">
        <a href="#" data-dismiss="modal">X</a>
      </div>
      <div class="modal-header">
        <h2>Heading 02</h2>
      </div>
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
{% endhighlight %}

### Modal Form

<div class="bd-example bd-example-modal">
  <div class="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="close">
          <a href="#" data-dismiss="modal">X</a>
        </div>
        <div class="modal-header">
          <h2>Heading 02</h2>
        </div>
        <div class="modal-body">
          <form>
            <fieldset class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Enter name">
            </fieldset>

            <fieldset class="form-group">
              <label for="email">Email address</label>
              <p class="text-muted">Maximum 300 characters</p>
              <input type="email" class="form-control" id="email" placeholder="Enter email">
            </fieldset>

            <fieldset class="form-group">
              <label for="file">Choose file</label>
              <label class="file form-control">
                <input type="file" id="file">
                <span class="file-custom">
                  <div class="text">Choose a file</div>
                  <div class="browse">Browse</div>
                </span>
              </label>
            </fieldset>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-lg btn-primary">Submit</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
</div>

{% highlight html %}
<div class="modal fade">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="close">
        <a href="#" data-dismiss="modal">X</a>
      </div>
      <div class="modal-header">
        <h2>Heading 02</h2>
      </div>
      <div class="modal-body">
        <form>
          <fieldset class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter name">
          </fieldset>

          <fieldset class="form-group">
            <label for="email">Email address</label>
            <p class="text-muted">Maximum 300 characters</p>
            <input type="email" class="form-control" id="email" placeholder="Enter email">
          </fieldset>

          <fieldset class="form-group">
            <label for="file">Choose file</label>
            <label class="file form-control">
              <input type="file" id="file">
              <span class="file-custom">
                <div class="text">Choose a file</div>
                <div class="browse">Browse</div>
              </span>
            </label>
          </fieldset>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn-lg btn-primary">Submit</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
{% endhighlight %}
