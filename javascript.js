'use strict';

var redSquare = {
    color: 'red',
    width: 100,
    create: function () {
        var el = document.createElement('div');
        el.classList.add('square');
        el.style.width = this.width + 'px';
        el.style.height = this.width + 'px';
        el.style.position = 'absolute';
        el.style.backgroundColor = this.color;

        //wrapper = el;
        this.el = el;
        document.body.appendChild(el);
    },

    goToLeft: function() {
        var currentLeft = parseInt(getComputedStyle(this.el).getPropertyValue('left'));
        this.el.style.left = currentLeft - 6 + 'px';
    },
    goToRight: function() {
        var currentLeft = parseInt(getComputedStyle(this.el).getPropertyValue('left'));
        this.el.style.left = currentLeft + 6 + 'px';

    },
    goToTop: function() {
        var currentTop = parseInt(getComputedStyle(this.el).getPropertyValue('top'));
        this.el.style.top = currentTop - 6 + 'px';
    },
    goToBottom: function() {
        var currentTop = parseInt(getComputedStyle(this.el).getPropertyValue('top'));
        this.el.style.top = currentTop + 6 + 'px';
    }
};

redSquare.create();
redSquare.width = 200;



document.body.addEventListener('keydown', function(event) {
    if (event.keyCode === 37) {
        redSquare.goToLeft();
    }
    if(event.keyCode === 38) {
        redSquare.goToTop();
    }
    if(event.keyCode === 39) {
        redSquare.goToRight();
    }
    if(event.keyCode === 40) {
        redSquare.goToBottom();
    }
});

