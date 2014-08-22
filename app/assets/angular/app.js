(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.products = gem;
    });

    var gem = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: '...',
            soldOut: false,
            images: [
                'img1.jpg',
                'img2.jpg',
                'img3.jpg'
            ]
        },
        {
            name: 'Ruby',
            price: 6.52,
            description: 'Red',
            soldOut: false,
            images: []
        }
    ];

    app.controller("PanelController", function(){
        this.tab = 1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        }
        this.isSelected =  function(checkTab){
            return this.tab === checkTab;
        }
    });
})();
