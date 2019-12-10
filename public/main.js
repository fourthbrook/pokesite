document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

var pressed = [null, null];
function buttonPress(clicked_id) {
    var element = clicked_id;
    if(pressed[0]==null) {
        pressed[0] = clicked_id;
        alert(pressed[0]);
        clicked_id.addClass('pressed')
    } else if(pressed[0]==clicked_id){
        pressed[0] = null;
        alert(pressed[0])
    }else if(pressed[1]==null) {
        pressed[1] = clicked_id;
        alert(pressed[1])
    } else if(pressed[1]==clicked_id){
        pressed[1] = null;
        alert(pressed[1])
    } else {
        alert("Only two types can be selected")
    }
}