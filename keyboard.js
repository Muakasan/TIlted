//http://stackoverflow.com/questions/4416505/how-to-take-keyboard-input-in-javascript
addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        alert('Left was pressed');
    }
    else if(event.keyCode == 39) {
        alert('Right was pressed');
    }
});
