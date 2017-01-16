# ionic-notification-bar
Simple cross-platform notification bar using just CSS.

![ionic-notification-bar](demo.gif "See the demo project...")

[SEE THIS DEMO ON GITHUB PAGES](https://guysmv.github.io/ionic-notification-bar/)


##Prerequistes
This package needs:
* A working ionic installation
* bower (if you want to recover the package with it)

##Installation
You can get this package using Bower:
`bower install ionic-notification-bar --save`

Then you have to inject it in your index.html file:
````html
<!--insert the css file after the ionic.css file-->
<link rel="stylesheet" type="text/css" href="lib/ionic-notification-bar/dist/notification-bar.min.css">
<!--insert the js file after the ionic bundle-->
<script type="text/javascript" src="lib/ionic-notification-bar/dist/notification-bar.min.js"></script>
````

##Usage
In your main module, inject as follow:
````javascript
angular.module('your_module_name', ['ionic', 'ionic-notification-bar']){}
````

And use it as follow :
````javascript
angular.controller('whatever', function($notificationBar){

	$notificationBar.show('Your message here', $notificationBar.SUCCESS);
}
````

Notification type can be:
* $notificationBar.SUCCESS
* $notificationBar.ALERT
* $notificationBar.INFORMATION


You can set the duration of the notification using the function :
````javascript
$notificationBar.setDuration([integer_value])
````

##Versions

#### 1) v0.1.0
Initial working version

#### 2) v0.2.0
Responsive notification bar