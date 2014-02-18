/*
Date 	: 2012-07-10
MAJ 	: 2012-08-10
Auteur 	: Samuel
Rôle 	: Fonctions utilitaires de base
Requis	: jQuery : http://code.jquery.com/jquery-latest.min.js
*/
$(document).ready(function() {

	/*
	*	------------------------------------------------------
	*	Classes used :
	*	.t_block
	*	.t_link
	*	.t_blank
	*	.t_ph
	*	.t_email
	*	.t_truncate_c_<number>
	*	.t_truncate_w_<number>
	*	.t_truncate_l_<number>
	*	------------------------------------------------------
	*/

	/* 
	*	Extends a link to a full block
	*	<div class="t_block">
	*		<a href="page.html" class="t_link">text</a>
	*	</div>
	*/
	$('.t_link').each(function() {
		$(this).click(function(e) { e.preventDefault(); });
		$(this).mousedown(function(e) { e.preventDefault(); });
	});
	$('.t_block').each(function() {
		$(this).css('cursor', 'pointer');
		$(this).click(function(e) { 
			if (e.ctrlKey) {
				window.open($(this).find('.t_link').attr('href'), '_blank');
			} else {
				window.location.href = $(this).find('.t_link').attr('href');
			}
			e.preventDefault();
		});
		$(this).mousedown(function(e) { 
			if(e.which == 2 ) {
				window.open($(this).find('.t_link').attr('href'), '_blank');
				e.preventDefault();
			} 
		});
	});

	/* 
	*	Blank target for links
	*	<a href="http://www.domain.com" class="t_blank">text</a>
	*/
	$('.wysiwyg a').attr('target', '_blank');
	$('.t_blank').attr('target', '_blank');

	/* 
	*	Placeholder for old browsers
	*	<input type="text" class="t_ph" value="text" />
	*/
	$('.t_ph').each(function() {
	    $(this).attr('placeholder', $(this).val());
	});
	$('.t_ph').blur(function() {
	    if ($(this).val() == '') 
	        $(this).val($(this).attr('placeholder'));
	});
	$('.t_ph').focus(function() {
	    if ($(this).val() == $(this).attr('placeholder')) 
	        $(this).val('');
	});

	/* 
	*	Email spam protection
	*	<span class="t_email">name[at]domain[dot]com</span>
	*/
    $('.t_email').each(function() {
        var $email = $(this);
        var address = $email.text()
        .replace(/\s*\[at\]\s*/, '@')
        .replace(/\s*\[dot\]\s*/g, '.');
        $email.html('<a href="mailto:' + address + '">'+ address +'</a>');
    });

    /*
    *	Truncate a text bloc after x chars
    *	<p class="t_truncate_c_5">Lorem ipsum magna eiusmod sit labore.</p>
    */
    $("*").filter(function () { 
    	return /t_truncate_c_/.test($(this).attr('class')); 
    }).each(function() {
		var el = $(this);
		var content = el.text();
		var classList = el.attr('class').split(/\s+/);
		$.each(classList, function(index, item){
		    if (/^t_truncate_c_/.test(item)) {
		    	var n = item.substr(13);
		    	content = content.substring(0, n-3) + '...';
		    	el.text(content);
		    }
		});
	});

	/*
    *	Truncate a text bloc after x words
    *	<p class="t_truncate_w_3">Lorem ipsum magna eiusmod sit labore.</p>
    */
    $("*").filter(function () { 
    	return /t_truncate_w_/.test($(this).attr('class')); 
    }).each(function() {
		var el = $(this);
		var content = el.text();
		var classList = el.attr('class').split(/\s+/);
		$.each(classList, function(index, item){
		    if(/^t_truncate_w_/.test(item)) {
		    	var n = item.substr(13);
		    	var words = content.split(/\s+/);
		    	content = '';
		    	for(var i=0 ; i<n ; i++)
		    		content += words[i] + (i < n-1 ? ' ' : '...');
		    	el.text(content);
		    }
		});
	});

	/*
    *	Truncate a text bloc after x lines
    *	<p class="t_truncate_l_2">Lorem ipsum magna eiusmod sit labore.</p>
    */	
	$("*").filter(function () { 
    	return /t_truncate_l_/.test($(this).attr('class')); 
    }).each(function() {
		var el = $(this);
		var content = el.text();
		var classList = el.attr('class').split(/\s+/);
		$.each(classList, function(index, item){
		    if(/^t_truncate_l_/.test(item)) {
		    	var n = item.substr(13);
				var lineHeight = parseInt(el.css('line-height'));
                if(lineHeight == 1 || el.css('line-height') == 'normal')
                    lineHeight = parseInt(el.css('font-size')) * 1.3;
				var maxHeight = n * lineHeight;
				var truncated = $.trim(content);
				var old; 
				if(el.height() > maxHeight)
					truncated += '...';
				while(el.height() > maxHeight && old != truncated) {
					old = truncated;
					truncated = truncated.replace(/\s[^\s]*\.\.\.$/, '...'); 
					el.text(truncated);
				}
		    }
		});
	});


});