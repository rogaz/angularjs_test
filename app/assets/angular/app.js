(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.products = gem;
    });

    var gem = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Yellow',
            soldOut: false,
            images: [],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
                },
                {
                    stars: 1,
                    body: "This product sucks",
                    author: "tim@hater.com"
                }

            ]
        },
        {
            name: 'Ruby',
            price: 6.52,
            description: 'Red',
            soldOut: false,
            images: [
                'img1.jpg',
                'img2.jpg',
                'img3.jpg'
            ],
            reviews: []
        }
    ];

    app.controller("PanelController", function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected =  function(checkTab){
            return this.tab === checkTab;
        };
    });

    app.controller("GalleryController", function(){
        this.current = 0;

        this.setCurrent = function(current){
            if (current === null)
                this.current = 0;
            else
                this.current = current;
        };

        this.isSelected = function(image){
            return this.current === image;
        };
    });

    app.controller("ReviewController", function(){
        this.review = {};

        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });
})();
