# KegCop [![Build Status](https://travis-ci.org/ipatch/KegCop.svg?branch=master)](https://travis-ci.org/ipatch/KegCop)

[![Wilson demos KegCop](http://img.youtube.com/vi/1a6hxUb3zfU/0.jpg)](http://www.youtube.com/watch?v=1a6hxUb3zfU) 

<!-- ![KegCop-splash](http://chrisrjones.com/pics/KegCop-git.png) -->

## Objective
The purpose of this software is to create user accounts for a kegerator, and have a **_root_** account which recieves donations from the users for the beer they drink.  To find out more information about the project check out the [wiki](https://github.com/ipatch/KegCop/wiki)

## How does it work?
An iOS device, i.e. iPhone / iPod Touch will connect to a Bluno via Bluetooth 4.0 Low Energy sending serial information to the microcontroller which will communicate with flow sensor(s) and a solenoid cut off valve.  The iOS device will be the user interface for the entire operation, storing account information along with how many credits a particular user will have.

## Build
As of 24SEP15, this project is built with Xcode 7 using OS X (10.10.5) with a target for iOS 7.x and greater.

## License and Copyright
All code is offered under the MIT license, unless otherwise noted.  Please see LICENSE.txt for
the full license.  All code and documentation are Copyright 2015 Chris Jones, unless otherwise
noted.

## Contributing
I would love for someone to make a branch and start editing some code.  My Objective-C skills leave
a lot to be desired.  So if you have a great idea, don't hesitate to download the code and
contribute.  There is a guide for contributing, [here](https://github.com/ipatch/KegCop/wiki/Contribute)

## Installation
[Download](https://itunes.apple.com/us/app/kegcop/id989403454?mt=8) the app from the App Store, and load the following sketch on your Bluno, from [here](https://github.com/ipatch/KegCop/blob/master/KegCop-Bluno-sketch.c)<br />
<br />
cheers<br />
Chris
