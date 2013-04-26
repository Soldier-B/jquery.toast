(function($){
	var th = null, cf = null, toast = function(m,o){
		// fix option type
		o = o || { duration: 5000, sticky: false, 'type': ''};
		(typeof o.duration === 'number') || (o.duration = 5000);
		(typeof o.sticky === 'boolean') || (o.sticky = true);
		(typeof o.type === 'string') || (o.type = '');
		// create host on first call
		if(!th){ 
			// get/fix config
			cf = toast.config;
			th = $('<ul></ul>').addClass('toast').appendTo(document.body).hide();
			(typeof cf.width == 'number') || (cf.width = 500);
			(typeof cf.align == 'string') || (cf.align = 'center');
			(typeof cf.closeForStickyOnly === 'boolean') || (cf.closeForStickyOnly = false);
			th.width(cf.width);
			if(cf.align == 'left' || cf.align == 'right')
				th.css('margin','5px').css(cf.align, '0');
			else
				th.css({left: '50%', margin: '5px 0 0 -' + (cf.width / 2) + 'px'});
		}
		// create toast
		var ti = $('<li></li>').hide().html(m).appendTo(th), cb = $('<button>&times;</button>').addClass('close').prependTo(ti), to = null;
		// setup close button
		cb.click(function(){
			clearTimeout(to);
			ti.animate({ height: 0, opacity: 0}, 'fast', function(){
				ti.remove();
				th.children().length || th.removeClass('active').hide();
			});
		});
		cf.closeForStickyOnly && !o.sticky && cb.hide();
		// add type class
		if(o.type !== '') ti.addClass(o.type);
		// show host if necessary
		!th.hasClass('active') && th.addClass('active').show();
		// setup timeout unless sticky
		!o.sticky && o.duration > 0 && (to = setTimeout(function(){ cb.click(); }, o.duration));
		// show toast
		ti.fadeIn('normal');
	};
	toast.config = { width: 500, align: 'center', /* left, center, right */ closeForStickyOnly: false };
	$.extend({ toast: toast });
})(jQuery);