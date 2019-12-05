document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

var instance = M.Collapsible.getInstance(elem);
console.log("hello")
instance.open(3);