/*
Tiny Framework for Interface Previews based loading
Version 0.1
Copyright(c) 2015 Asad Memon.
MIT Licensed. http://www.opensource.org/licenses/mit-license.php

http://asadmemon.com
*/

(function(){
    jQuery.fn.hasLoaded = function() {
        var o = $(this[0]); // It's your element

        if (!o.data("notEmpty"))
            o.find('[data-loading="empty"]').show();
        else
            o.find('[data-loading="empty"]').hide();

        o.find('[data-loading="placeholder"]').hide();
    };

    function observe(target){
        // The node to be monitored
        //var target = $( "#content" )[0];

        // Create an observer instance
        var observer = new MutationObserver(function( mutations ) {
          mutations.forEach(function( mutation ) {
            if (mutation.type === "childList"){
                //re-check if target has childs, if not. Show empty text
                if ($(target).children().not('[data-loading]').length>0)
                    $(target).data("notEmpty",true);
                else
                    $(target).data("notEmpty",false);
                $(target).hasLoaded();
            }
            
          });    
        });

        // Configuration of the observer:
        var config = { 
            attributes: true, 
            childList: true, 
            characterData: true 
        };
         
        // Pass in the target node, as well as the observer options
        observer.observe(target, config);

    }

    //find all the loading containers and add them to observing list.
    function setupPlaceholderLoading(){
        var all = $('[data-loading="container"]');
        for (var i = all.length - 1; i >= 0; i--) {
            $(all[i]).find('[data-loading="empty"]').hide();
            observe(all[i]);
        };
    }
    setupPlaceholderLoading();
})();
