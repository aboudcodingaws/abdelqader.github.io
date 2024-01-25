document.addEventListener('DOMContentLoaded', function() {
    let btn = document.getElementsByTagName('button')[0];

    btn.addEventListener('click', function(){
        let name = prompt('Enter your name');
        if (name) {
            alert('Hello ' + name);
        } else {
            alert('You did not enter a name.');
        }
    });
});
