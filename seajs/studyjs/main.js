define(function(require, exports, module) {
	var $ = require('jquery');
	module.exports = {
		init:function(){
			$("#txt").on("input",function(){
				var oTxt = $("#txt").val();
				var oNav = $("#nav");
				oNav.html(oTxt);
			});
		}
	}
});