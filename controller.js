"use strict";
function PetCtrl() {
    const vm = this; //vm stands for View Model

    vm.pets = [
        {
            name: "Ella",
            breed: "Corgi"
        },
        {
            name: "Rocket",
            breed: "Doberman"
        },
        {
            name: "Cricket",
            breed: "Pitbull"
        },
        {
            name: "Sarang",
            breed: "Kishu Ken"
        },
        {
            name: "Doge",
            breed: "Shiba Inu"
        },
        {
            name: "Amelia Barkhart",
            breed: "Beagle"
        }
    ];

}



// getter syntax
angular
    .module("petApp")
    .controller("PetCtrl", PetCtrl); // first param is ref to conroller and second is the function