function initVue() {
    new Vue({
        el: '#app', 
        data: {

          // NAVBAR MENU DATA 
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

            // JUMBOTRON DATA
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
            // SERVICE INFO DATA
            'servicesInfo' : [
              {
                'img' : 'img/service-card-1.png',
                'label' : 'Languages'
              },
              {
                'img' : 'img/service-card-2.png',
                'label' : 'Software'
              },
              {
                'img' : 'img/service-card-3.png',
                'label' : 'Business'
              },
              {
                'img' : 'img/service-card-4.png',
                'label' : 'Chemistry'
              },
              {
                'img' : 'img/service-card-5.png',
                'label' : 'Science'
              },
              {
                'img' : 'img/service-card-6.png',
                'label' : 'DIY&Craft'
              },
            ],
              // sliderProfile DATA
              'sliderProfileInfo' : [
                {
                  'img' : 'img/profile-1.png',
                  'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis eius dolores recusandae earum! Quos harum',
                  'name' : 'Sarah Bale',
                  'profession' : 'student'
                },
                {
                  'img' : 'img/profile-2.png',
                  'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis eius dolores recusandae earum! Quos harum',
                  'name' : 'Frank Thomas',
                  'profession' : 'student'
                },
                {
                  'img' : 'img/profile-3.png',
                  'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis eius dolores recusandae earum! Quos harum',
                  'name' : 'Jimmy Boyle',
                  'profession' : 'student'
                },
              ],

              // OFFERS SLIDER DATA
              'offerSliderInfo' : [
                {
                  'img' : 'img/offer-slider-1.jpg',
                  'offer' : 'Business English',
                  'price' : '$20',
                  'author' : 'Preston Marshall',
                  'tutorNumber' : 1,
                  'subject': 'Languages'
                },
                {
                  'img' : 'img/offer-slider-2.jpg',
                  'offer' : 'Social Computing',
                  'price' : 'FREE',
                  'author' : 'David Sanders',
                  'tutorNumber' : 1,
                  'subject': 'Programming'
                },
                {
                  'img' : 'img/offer-slider-3.jpg',
                  'offer' : 'Learn Spanish',
                  'price' : '$20',
                  'author' : 'Jennie King',
                  'tutorNumber' : 1,
                  'subject': 'Languages'
                },
              ],

              // TUTOR BOX DATA
              'tutorInfo' : [
                {
                  'name': 'Brenda Harris',
                  'img' : 'img/tutor-1.png'
                },
                {
                  'name':'Lisa Griffin',
                  'img' : 'img/tutor-2.png'
                },
                {
                  'name':'Victor Green',
                  'img' : 'img/tutor-3.png'
                }
              ],

              // PRICING PLAN DATA

              'pricingPlan' : [
                {
                  'name' : 'Number of Courses',
                  'standard': 2,
                  'professional': 4,
                  'advanced' : 6
                },
                {
                  'name' : 'Time',
                  'standard': '15 days',
                  'professional': '30 days',
                  'advanced' : '30 days'
                },
                {
                  'name' : 'Web Designing',
                  'standard': 'fas fa-check',
                  'professional': 'fas fa-check',
                  'advanced' : 'fas fa-check'
                },
                {
                  'name' : 'Human-Centered Design',
                  'standard': 'fas fa-check',
                  'professional': 'fas fa-check',
                  'advanced' : 'fas fa-check'
                },
                {
                  'name' : 'Basic Marketing',
                  'standard': 'fas fa-times',
                  'professional': 'fas fa-check',
                  'advanced' : 'fas fa-check'
                },
                {
                  'name' : 'Python for Everybody',
                  'standard': 'fas fa-times',
                  'professional': 'fas fa-check',
                  'advanced' : 'fas fa-check'
                },
                {
                  'name' : 'Android Developer',
                  'standard': 'fas fa-times',
                  'professional': 'fas fa-times',
                  'advanced' : 'fas fa-check'
                },
                {
                  'name' : 'Business English',
                  'standard': 'fas fa-times',
                  'professional': 'fas fa-times',
                  'advanced' : 'fas fa-check'
                },
              ],
              'partnerLogos' : [
                'educator.png',
                'teach-hub.png',
                'scholar.png',
                'icademy.png',
                'studycentral.png'
              ],
              'footerLists' : [
                {
                  'logo' : 'img/icademy-logo.png',
                  'text' : 'Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home',
                  'number' : '1-677-124-44227',
                  'timeframe' : 'Mon - Sat 8.00 - 18.00'
                },
                {
                  'name' : 'Popular Courses',
                  'be' : 'Business English',
                  'teachbe': 'Preston Marshall',
                  'sc' : 'Social Computing',
                  'teachsc' : 'David Sanders',
                  'ls' : 'Learn Spanish',
                  'teachls' : 'Jennie King'
                },
                {
                  'name' : 'Support',
                  'text1' : 'User Dashboard',
                  'text2' : 'Contact Us',
                  'text3' : 'FAQ',
                  'text4' : 'Course Offer',
                  'text5' : 'Events'
                }
              ],

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
