var QueryLoader = {
	/*
	 * QueryLoader		Preload your site before displaying it!
	 * Author:			Gaya Kessler
	 * Date:			23-09-09
	 * URL:				http://www.gayadesign.com
	 * Version:			1.0
	 * 
	 * A simple jQuery powered preloader to load every image on the page and in the CSS
	 * before displaying the page to the user.
	 */
	
	overlay: "",
	loadBar: "",
	preloader: "",
	items: new Array(),
	doneStatus: 0,
	doneNow: 0,
	selectorPreload: "body",
	ieLoadFixTime: 50000,
	ieTimeout: "",
		
	init: function() {
		if (navigator.userAgent.match(/MSIE (\d+(?:\.\d+)+(?:b\d*)?)/) == "MSIE 6.0,6.0") {
			//break if IE6			
			return false;
		}
		if (QueryLoader.selectorPreload == "body") {
			QueryLoader.spawnLoader();
			QueryLoader.getImages(QueryLoader.selectorPreload);
			QueryLoader.createPreloading();
		} else {
			$(document).ready(function() {
				QueryLoader.spawnLoader();
				QueryLoader.getImages(QueryLoader.selectorPreload);
				QueryLoader.createPreloading();
			});
		}
		
		//help IE drown if it is trying to die :)
		QueryLoader.ieTimeout = setTimeout("QueryLoader.ieLoadFix()", QueryLoader.ieLoadFixTime);
	},
	
	ieLoadFix: function() {
		var ie = navigator.userAgent.match(/MSIE (\d+(?:\.\d+)+(?:b\d*)?)/);
		if (ie[0].match("MSIE")) {
			while ((100 / QueryLoader.doneStatus) * QueryLoader.doneNow < 100) {
				QueryLoader.imgCallback();
			}
		}
	},
	
	imgCallback: function() {
		QueryLoader.doneNow ++;
		QueryLoader.animateLoader();
	},
	
	getImages: function(selector) {
		var everything = $(selector).find("*:not(script)").each(function() {
			var url = "";
			
			if ($(this).css("background-image") != "none") {
				var url = $(this).css("background-image");
			} else if (typeof($(this).attr("src")) != "undefined" && $(this).attr("tagName").toLowerCase() == "img") {
				var url = $(this).attr("src");
			}
			
			url = url.replace("url(\"", "");
			url = url.replace("url(", "");
			url = url.replace("\")", "");
			url = url.replace(")", "");
			
			if (url.length > 0) {
				QueryLoader.items.push(url);
			}
		});
	},
	
	createPreloading: function() {
		QueryLoader.preloader = $("<div></div>").appendTo(QueryLoader.selectorPreload);
		$(QueryLoader.preloader).css({
			height: 	"0px",
			width:		"0px",
			overflow:	"hidden"
		});
		
		var length = QueryLoader.items.length; 
		QueryLoader.doneStatus = length;
		
		for (var i = 0; i < length; i++) {
			var imgLoad = $("<img></img>");
			$(imgLoad).attr("src", QueryLoader.items[i]);
			$(imgLoad).unbind("load");
			$(imgLoad).bind("load", function() {
				QueryLoader.imgCallback();
			});
			$(imgLoad).appendTo($(QueryLoader.preloader));
		}
	},




	spawnLoader: function() {
		if (QueryLoader.selectorPreload == "body") {
			var height = $(window).height();
			var width = $(window).width();
			var position = "fixed";
		} else {
			var height = $(QueryLoader.selectorPreload).outerHeight();
			var width = $(QueryLoader.selectorPreload).outerWidth();
			var position = "absolute";
		}
              //alert(width);
             /// alert(height);
                
		var left = $(QueryLoader.selectorPreload).offset()['left'];
		var top = $(QueryLoader.selectorPreload).offset()['top'];
		
                var window_height = $(window).height();
	        var window_width = $(window).width();
//alert(window_width);

		window_width1=window_width/2;
	        window_width2=window_width1-180;
                bgsize=window_width2-150;
                if(window_width<=1024){
                window_width2='41.66%';
                }
                bgwidth=bgsize+"px";
                bgheight=bgsize+"px";
               if(window_width<=768){
                bgwidth=150+"px";
                bgheight=150+"px";
                }
            //  paddingLeft: window_width,


		QueryLoader.overlay = $("<div></div>").appendTo($(QueryLoader.selectorPreload));
		
		$(QueryLoader.overlay).addClass("QOverlay");
		$(QueryLoader.overlay).css({
			position: position,
			top: top,
			left: left,
                        paddingLeft: window_width2,
                        width: width + "px",
			height: height + "px"
		});
		
		QueryLoader.Qubackimage = $("<div></div>").appendTo($(QueryLoader.overlay));
		$(QueryLoader.Qubackimage).addClass("Qubackimage");
		
		QueryLoader.loadBar = $("<div></div>").appendTo($(QueryLoader.Qubackimage));
		$(QueryLoader.loadBar).addClass("QLoader");
		 $(QueryLoader.Qubackimage).css({
                  backgroundSize: bgwidth +" "+bgheight,
                  height: bgheight
                 });
              $(QueryLoader.QLoader).css({
                 
                  height: bgheight
                 });
                 
		
		QueryLoader.QLimage = $("<div></div>").appendTo($(QueryLoader.loadBar));
		$(QueryLoader.QLimage).addClass("QLimage");
		$(QueryLoader.QLimage).css({
                  backgroundSize: bgwidth +" "+ bgheight,
                 height: bgheight,
                 width:  bgheight
                  });
		
		
		/*$(QueryLoader.loadBar).css({
			
			
			
		});*/
	},
	
	animateLoader: function() {
		var perc = (35 / QueryLoader.doneStatus) * QueryLoader.doneNow;
		if (perc > 34) {
			$(QueryLoader.loadBar).stop().animate({
				width: perc + "%"
			}, 1500, "linear", function() { 
				QueryLoader.doneLoad();
			});
		} else {
			$(QueryLoader.loadBar).stop().animate({
				width: perc + "%"
			}, 500, "linear", function() { });
		}
	},
	
	doneLoad: function() {
		//prevent IE from calling the fix
		clearTimeout(QueryLoader.ieTimeout);
		
		//determine the height of the preloader for the effect
		if (QueryLoader.selectorPreload == "body") {
			var height = $(window).height();
		} else {
			var height = $(QueryLoader.selectorPreload).outerHeight();
		}
		
		//The end animation, adjust to your likings
	
			$(QueryLoader.overlay).fadeOut(500);
			$(QueryLoader.preloader).remove();
		
	}
}