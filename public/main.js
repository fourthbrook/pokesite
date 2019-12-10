document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

var button1 = null;
var button2 = null;
function buttonPress(clicked_id) {
    if(button1==null) {
        var button1 = clicked_id;
        alert(clicked_id)
    
    } else if(button1==clicked_id) {
        var button1 = null;
    } else{
        var button2 = clicked_id;
    }
}