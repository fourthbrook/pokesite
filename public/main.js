document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

var pressed = [null, null];
function buttonPress(clicked_id) {
    var element = clicked_id;
    if(pressed[0]==null && pressed[1]!=clicked_id) {
        pressed[0] = clicked_id;
        document.getElementById(clicked_id).classList.add('pressed');
    } else if(pressed[0]==clicked_id){
        pressed[0] = null;
        document.getElementById(clicked_id).classList.remove('pressed');
    }else if(pressed[1]==null) {
        pressed[1] = clicked_id;
        document.getElementById(clicked_id).classList.add('pressed');
    } else if(pressed[1]==clicked_id){
        pressed[1] = null;
        document.getElementById(clicked_id).classList.remove('pressed');
    } else {
        alert("Only two types can be selected")
    }
}