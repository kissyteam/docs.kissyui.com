(((apilink class="Util")))

# Util基本介绍

`util` 是一套`underscore`风格的工具集，提供一些常用的工具函数

## 引用util
	require(['util'],function(Util){
		//use Util
	})

## Example
	
	require(['util'], function(Util){
		var Shoutable = {
		    shout: function() { alert('I am ' + this.name + '.'); }
		};

		function Dog(name) { this.name = 'Dog ' + name; }
		function Pig(name) { this.name = 'Pig ' + name; }

		Util.augment(Dog, Shoutable);
		Util.augment(Pig, Shoutable);

		new Dog('Jack').shout(); // => I am Dog Jack.
		new Pig('Mary').shout(); // => I am Pig Mary.
	})
