$(document).ready(function(){
	var s = '';
	for( var i in jQuery.easing ) s += i + ': ' + jQuery.easing[i] + '\n';
	alert('test:'+s);
	$('.fancytree').fancytree();
	$('.fancytree-persist').fancytree({ extensions: ["persist"] });

});

// Preload the tree icons and loader
var path = mw.config.get('fancytree_path');
(new Image()).src = path + '/loading.gif';
(new Image()).src = path + '/icons.gif';
