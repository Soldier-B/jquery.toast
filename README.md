jquery.toast
============

A simple jQuery "toast" message plugin.


## Required Files
    <link rel="stylesheet" type="text/css" href="jquery.toast.min.css" />
    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="jquery.toast.min.js"></script>

## Usage

    $.toast('content', options);

Example: `$.toast('<h4>Hello, world!</h4> Your content here!');`

## Options

Options include toast duration, stickiness, and toast type.

* **duration** - Length of time in milliseconds a non-sticky toast will be displayed. (default: 5000)
* **sticky** - Determines if toast notification is sticky or not. (default: false)
* **type** - Determines visual style for toast notification. Values can be any valid css class name (allowing you to define your own toast styles) or any of the following: blank, 'danger', 'info', 'success'. (default is blank)


## Configuration

Before using the plugin you have the option to define a few global properties. After the first toast has been made, they will be locked in.
These properties include toast width, page alignment, and close button status.

$.toast.config._property_ = *value*

* **width** - Width of toast items in pixels. (default: 500)
* **align** - Alignment of toasts in the page. Possibly values are 'left', 'center', and 'right'. (default: 'center')
* **closeForStickyOnly** - Determines if the close button is displayed for all toasts or just those that are sticky. (default: false)
