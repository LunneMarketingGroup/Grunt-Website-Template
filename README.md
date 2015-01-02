LMG Grunt Website Template
==========================

The LMG build environment uses Grunt and Compass/Sass for assets.


### Install NPM/Node

See instructions at [https://github.com/npm/npm](https://github.com/npm/npm)


### Install Compass

See instructions at [http://compass-style.org/install](http://compass-style.org/install)


### Install Grunt and dependencies

Inside of the project directory run the following command:

``` bash
npm install
```

### Setup Asset Folders w/ Compass

The following command will create the css and sass directory structure:

``` bash
compass init
```

### Grunt Tasks

Image compression is NOT built into the production script, but is available separately with the following command:

``` bash
grunt compress-images
```

**Note: This uses ImageOptim, ImageAlpha, and JPEGmini for Mac. See [https://github.com/JamieMason/grunt-imageoptim](https://github.com/JamieMason/grunt-imageoptim) for details.**


The main command to build for production ready files is:

``` bash
grunt production
```
