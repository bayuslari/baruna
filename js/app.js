(function(e) {
    e(window.jQuery, window, document);
})(function($, window, document) {

    var app = {

        // ==============================================================================================
        // Call your function here to become a single function
        // * This method make your code more modular and make it easy to toggle your function
        // * If you want to disable a function, just commented on function that you need to disable below
        // ==============================================================================================

        init: function($) {
            app.menuToggle();

        },

        // ======================================================================
        // Your function here
        // * Don't forget to use proper function name to describes your function
        // ======================================================================
        menuToggle: function() {
           
        },
  

    };

    // This code will initialize your whole function in this JS file
    $(function() {
        app.init($);
    });

    $(window).resize(function() {
        // Insert your JS function here that need to triggered when window resize
        
    });
});
