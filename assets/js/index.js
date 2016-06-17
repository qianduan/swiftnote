/**
 * Main JS file for swiftNote behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {
    	$("#search-field").ghostHunter({
            results   : "#results",
            onKeyUp         : true,
            zeroResultsInfo     : false
        });
        $("#results").hide();
        $("#search-field").focus(function(){
            $("#results").show();
        })
        $(function(){
         $(document).bind("click",function(e){
          var target  = $(e.target);
          if(target.closest(".nav-extra").length == 0){
           $("#results").hide();
          }
         }) 
        })
    });

})(jQuery);
