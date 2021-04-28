function initVue() {
    new Vue({
        el: '#app', 
        data: {
            'navbarMenus' : [
                {
                  'label' : 'menu',
                  'content' : 'home' 
                },
                {
                    'label' : 'menu',
                    'content' : 'courses' 
                },
                {
                  'label' : 'menu',
                  'content' : 'instructors' 
                },
                {
                  'label' : 'menu',
                  'content' : 'events' 
                },
                {
                  'label' : 'menu',
                  'content' : 'pages' 
                },
                {
                  'label' : 'menu',
                  'content' : 'elements' 
                },
                {
                  'label' : 'icon',
                  'content' : 'fas fa-search' 
                },
                {
                  'label' : 'icon',
                  'content' : 'fas fa-shopping-bag' 
                },
                {
                  'label' : 'icon',
                  'content' : 'fas fa-bars' 
                }
            ],
            'jumbotronSlides': [
                {
                    'title' : 'Contemporary Ideas',
                    'text'  : 'Lorem ipsum',
                    'button' : true,
                    'videoplayer': false,
                    'img': "img/jumbotron-1.jpg"
                },
                {
                    'title' : 'Contemporary Ideas',
                    'text'  : 'Lorem ipsum',
                    'button' : true,
                    'videoplayer': false,
                    'img': "img/jumbotron-2.jpg"
                },
                {
                    'title' : 'Contemporary Ideas',
                    'text'  : 'Lorem ipsum',
                    'button' : true,
                    'videoplayer': false,
                    'img': "img/jumbotron-3.jpg"
                }
            ],
            'img' : '',
            'cont' : 0,

        },
        methods: {
             slider: function(){
                 this.img = this.jumbotronSlides[this.cont].img;
                 return this.img;
             },
             getClick: function() {
                this.cont  += 1;
                console.log(this.cont);
                this.cont = this.cont >= this.jumbotronSlides.length  ? 0 : this.cont = this.cont
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


document.addEventListener('DOMContentLoaded', init);
// $(init);
