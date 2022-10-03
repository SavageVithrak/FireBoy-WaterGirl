/*!
 * jQuery lightweight Fly to
 * Author: @ElmahdiMahmoud
 * Licensed under the MIT license
 */
!function(t,e,i,o){t.fn.flyto=function(e){var i=t.extend({item:".flyto-item",target:".flyto-target",button:".flyto-btn",shake:!0},e);return this.each((function(){var e=t(this),o=e.find(i.button),f=t(i.target);e.find(i.item);ust_item=e.find(i.item),o.on("click",(function(){t(this);var e=t(ust_item).find("img").eq(0);if(e){var o=e.clone().offset({top:e.offset().top,left:e.offset().left}).css({opacity:"0.5",position:"absolute",height:e.height()/2,width:e.width()/2,"z-index":"111111"}).appendTo(t("body")).animate({top:f.offset().top+10,left:f.offset().left+15,height:e.height()/2,width:e.width()/2},1e3,"easeInOutExpo");i.shake&&setTimeout((function(){f.effect("shake",{times:2},200)}),1500),o.animate({width:0,height:0},(function(){t(this).detach()}))}}))}))}}(jQuery,window,document);