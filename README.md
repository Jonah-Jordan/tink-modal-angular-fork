# Tink modal Angular directive

v1.0.1

## What is this repository for?

The Tink Angular modal provides you with a modal dialog.

Tink is an in-house developed easy-to-use front-end framework for quick prototyping and simple deployment of all kinds of websites and apps, keeping a uniform and consistent look and feel.

## Setup

### Prerequisites

* nodeJS [http://nodejs.org/download/](http://nodejs.org/download/)
* bower: `npm install -g bower`

### Install

1. Go to the root of your project and type the following command in your terminal:

   `bower install tink-modal-angular --save`

2. Add the following files to your project:

  `<link rel="stylesheet" href="bower_components/tink-core/dist/tink.css" />` (or one of the Tink themes)

  `<script src="bower_components/tink-modal-angular/dist/tink-modal-angular.js"></script>`

3. Add `tink.modal` to your app module's dependency.

  `angular.module('myApp', ['tink.modal']);`


----------


## How to use

### modalCtrl

### Component

For a somewhat more extended modal, you can use a separate HTML template for the content of the modal and an Angular controller to call the modal dialog.

```javascript
// Angular controller
angular.module('tinkApp')
  .controller('modalCtrl', ['$scope', '$modal', function(scope, $modal) {
    scope.openModal = function() {

      var modalInstance = $modal.open({
        templateUrl: 'views/modal-template.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          items: function() {
            return ['test Array'];
          }
        }
      });

      modalInstance.result.then(function(obj) {
        console.log(obj); // The controller is closed because of the developer
      }, function(obj) {
        console.log('Modal dismissed at: ' + new Date()); // The contoller is closed by the use of the $dismiss call
      });
    }

  }]);
```

### Options

Attr | Type | Default | Details
--- | --- | --- | ---
data-template-url | `string` | `''` | The template url you want to use for the modal.
data-controller | `string` | `''` | The controller you want to inject in the modal
data-resolve | `object` | `null` | An object with data you want to inject into the controller of the modal.

###Examples

###### Button code: ######

```html
<button data-ng-click="openModal()">How does the internet work?</button>
```

###### An example of the content inside modal-template.html`: ######

```html
<div data-ng-controller="ModalInstanceCtrl">
  <h3>Modal title</h3>
  <p>Modal text</p>
  <button data-ng-click="ok()">Dismiss</button>
  <button data-ng-click="cancel()">Close</button>
</div>
```

###### Optionally, your modal template can also have an Angular controller: ######

```html
// Angular controller
angular.module('tinkApp')
  .controller('ModalInstanceCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {
    $scope.ok = function() {
      $modalInstance.$close('ok is pressed'); // To close the controller with a success message
    }

    $scope.cancel = function() {
      $modalInstance.$dismiss('cancel is pressed'); // To close the controller with a dismiss message
    }

  }]);
```


----------



### tink-modal

### Component

While it is better practice to use an external template for your modal dialog, in certain cases it's better to reference one that's already in the DOM. If this is the case, wrap your modal content within `script tags and refer to this script template via its `id`.

###### Button code: ######

```html
<button tink-modal="" data-tink-modal-template="modalcontentid" data-tink-modal-success="close" data-tink-modal-dismiss="dismissed">Open modal</button>
```

###### Script: ######

```javascript
<script type="text/ng-template" id="modalcontentid">
  // Your HTML content here
</script>
```

### Options

Attr | Type | Default | Details
--- | --- | --- | ---
tink-modal-template | `string` | `''` | The ID of the script you're referencing.
tink-modal-success | `function` | `null` | Callback function on success.
tink-modal-dismiss | `function` | `null` | Callback function on dismiss.

###Example

###### Possible modal content: ######

```html
<h3>Modal title</h3>
<p>Modal text</p>
<button data-ng-click="$dismiss('close')">Dismiss</button>
<button data-ng-click="$close('close')">Close</button>
```

## Contribution guidelines

* If you're not sure, drop us a note
* Fork this repo
* Do your thing
* Create a pull request

## Who do I talk to?

* Jasper Van Proeyen - jasper.vanproeyen@digipolis.be - Lead front-end
* Tom Wuyts - tom.wuyts@digipolis.be - Lead UX
* [The hand](https://www.youtube.com/watch?v=_O-QqC9yM28)

## License

The MIT License (MIT)

Copyright (c) 2014 Stad Antwerpen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
