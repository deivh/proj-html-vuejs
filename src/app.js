function initVue() {
    new Vue({
        el: '#app', 
        data: {
            'images' : 
                        ["img/jumbotron-1.jpg",
                         "img/jumbotron-2.jpg",
                         "img/jumbotron-3.jpg"
                        ],
            'jumbotronSlides': [
                {
                    'title' : 'Contemporary Ideas',
                    'text'  : 'Lorem ipsum',
                    'button' : true,
                    'videoplayer': false,
                },
                {
                    'title' : 'Contemporary Ideas',
                    'text'  : 'Lorem ipsum',
                    'button' : true,
                    'videoplayer': false,
                },
                {
                    'title' : 'Contemporary Ideas',
                    'text'  : 'Lorem ipsum',
                    'button' : true,
                    'videoplayer': false,
                }
            ],
            'img' : '',
            'cont' : 0,

        },
        methods: {
             slider: function(){
                 this.img = this.images[this.cont];
                 return this.img;
             },
             getClick: function() {
                this.cont  += 1;
                console.log(this.cont);
                this.cont = this.cont >= this.images.length  ? 0 : this.cont = this.cont
                 return this.cont;
             },
             removeClick: function() {
                this.cont  -= 1;
                console.log(this.cont);
                this.cont = this.cont < 0  ? 3 : this.cont = this.cont
                 return this.cont;
             }
    }});
}

function init() {
    initVue();
}

init();
console.log("hello world");
document.addEventListener('DOMContentLoaded', init)
// $(init);
