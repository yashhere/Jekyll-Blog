/* Fading In and Out the text on landing page. */

$("document").ready(function() {
    var rotate = $('#mid');
    var i = 0;
    var array = [
        'write',
        'develop',
        'create',
        'imagine',
        'code',
        'learn',
        'invent',
        'design',
    ];
    (function loop() {
        rotate.fadeOut(1000, function() {
            rotate.html(array[i]);
            rotate.fadeIn(1000, function() {
                loop();
            });
        });
        i++;
        if(i >= array.length) {
            i = 0;
        }
    }());
});

