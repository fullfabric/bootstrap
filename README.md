# [Bootstrapic](http://bootstrap.fbri.co/)

Bootstrapic is a fork from Bootstrap project used for compiling custom CSS and JS along with custom documentation. The purpose follows Full Fabric's needs, based on CSS/JS components and custom standards on top of Bootstrap's ones. 

To get started, check out <http://bootstrap.fbri.co/>. If you need to see the original Bootstrap's documentation, please [check out the Bootstrap project](https://github.com/twbs/bootstrap/blob/v4-dev/README.md).

### What's included

This project includes the same Bootstrap's structure, with the difference that all the work should be done within the `fullfabric` folder instead. 

```
bootstrap/
+-- dist
+-- docs
+-- js
+-- scss
+-- fullfabric
|	+-- dist
|	+-- docs
|	+-- scss
```

Also, changes were made on some config files, specially `_config.yml`, where jekyll will read source files from the `fullfabric/docs` instead of `docs`.

## Documentation

Bootstrapic's documentation, included in this repo in the `fullfabric` directory, is built with [Jekyll](http://jekyllrb.com) and publicly hosted on GitHub Pages at <http://bootstrap.fbri.co/>. The docs may also be run locally.

#### Running documentation locally

1. Run through the [tooling setup](https://github.com/twbs/bootstrap/blob/v4-dev/docs/getting-started/build-tools.md#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. From the root `/bootstrap` directory, run `bundle exec jekyll serve` in the command line.
3. Open <http://localhost:9001> in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).


## Development

#### Grunt tasks

We provide some custom grunt taks in order to simplify the development, as follows:

-	`grunt ff-dist-css` (will compile `fullfabric.scss` into `fullfabric/dist/css`)
-	`grunt ff-copy-docs` (copies any compiled CSS from `fullfabric/dist` to `fullfabric/docs/dist`. Jekyll reads from `fullfabric/docs` this directory)
-	`grunt watch:ff` (useful, no need to execute grunt at every change)
-	`grunt ff-deploy-css` (copies compiled `fullfabric.css` to the Full Fabric's relative project)
-	`grunt publish` (pushes to Github page, <http://bootstrap.fbri.co/>)

### Documentation

Any change on documenation should be done within `fullfabric/docs`, where most of the time will be on `components` and/or `content` for pages's content and `_data/nav.yml` for declaring the pages on sidebar navigation. 

### SCSS

Within `fullfabric/scss` will be the main work, then compiled by the grunt task and copied to the `fullfabric/docs` where jekyll will read. When all the work is finished, `grunt ff-deploy-css` will copy to the Full Fabric project. 

