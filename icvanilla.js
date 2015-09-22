// ==UserScript==
// @name        Icrontic Vanilla Hide Thread
// @namespace   MiraclemanS.Vanilla
// @description Hides a thread in Icrontic, yo
// @include     http://icrontic.com/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @version     1.1
// @downloadURL https://raw.githubusercontent.com/MiracleManS/ICVanilla/master/icvanilla.js
// @updateURL https://raw.githubusercontent.com/MiracleManS/ICVanilla/master/icvanilla.js
// @grant       none
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

//just an update test
$(document).ready(function()
{
  var eles = document.createElement("a");
    eles.href='#';
    eles.id = 'showhid';
    eles.appendChild(document.createTextNode('Show hidden threads'));
    eles.onclick = showItems;
  
  $('.HomepageTitle').after(eles);
  
  var old = localStorage.getItem('items');
  //alert(old);
  if(old != null)
  {
	  var spl = old.split('|');
	  
	  $.each(spl, function()
	  {
		$('' + this + '').hide();
	  });
  }

  
  //GM_log(items);
  
  var list = $(".Meta-Discussion");
  $.each(list, function()
  {
    var ele = document.createElement("a");
    ele.href='#';
    ele.appendChild(document.createTextNode('Hide'));
    ele.onclick = hideThread;
    
    this.appendChild(ele);
  });
  
  
});

function hideThread()
  {
    var thread = $(this).closest('.ItemDiscussion').hide();
    
    var oldvals = localStorage.getItem('items');
    
    var newvals = oldvals + "|#" + thread.attr('id');
    
    localStorage.setItem('items', newvals);
  }
  
  function unHideThread()
  {
      
    var thread = $(this).closest('.ItemDiscussion');
    thread.css('background-color', 'transparent');
    var oldvals = localStorage.getItem('items').replace('|#' + thread.attr('id'), '');
    $(this).hide();
    localStorage.setItem('items', oldvals);
  }

function showItems()
{
  $('#showhid').hide();
  var old = localStorage.getItem('items');
  //alert(old);
  if(old != null)
  {
	  var spl = old.split('|');
	  
	  $.each(spl, function()
	  {
		var ele = document.createElement("a");
		ele.href='#';
		ele.appendChild(document.createTextNode('Unhide'));
		ele.onclick = unHideThread;
          $('' + this + '').show().css('background-color', '#c0f2ff').append(ele);
	  });
  }
}

  


