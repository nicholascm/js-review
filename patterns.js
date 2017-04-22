"use strict"

var _ = require('lodash'); 

// Factory Pattern, creational for creating objects
// Used as an alterntative to using the 'new' constructor 
// Helps for when object creation is complex

function Apartment(options) {
    this.levels = options.levels || 'unknown'; 
    this.siding = options.siding || 'unknown';
}

function SingleFamilyHome(options) {
    this.levels = options.levels || 'unknown'; 
    this.acreage = options.acreage || 'unknown'; 
}

function HomeFactory() {}

HomeFactory.prototype.homeType = SingleFamilyHome; 

HomeFactory.prototype.createHome = function(options) {
    switch (options.homeType) {
        case "singleFamilyHome":
            this.homeType = SingleFamilyHome; 
            break;
        case "apartment": 
            this.homeType = Apartment; 
            break;
    }

    return new this.homeType(options); 
}

const homeGenerator = new HomeFactory(); 
let myHome = homeGenerator.createHome({
   homeType: 'singleFamilyHome', 
   levels: 2, 
   acreage: 1.4
})

// console.log('my home', myHome); 
console.log('homeGenerator __proto__', homeGenerator.__proto__); 

// How do we extend the HomeFactory to just be an ApartmentBuilder?

function ApartmentBuilder() {}
ApartmentBuilder.prototype = new HomeFactory(); 
console.log('new homefactory', new HomeFactory()); 
console.log(ApartmentBuilder.prototype.createHome); 
ApartmentBuilder.prototype.homeType = 'apartment'; 
console.log(ApartmentBuilder.prototype); 
console.log('new apartmentBuilder', new ApartmentBuilder()); 



// Mixins - great for utilizing JS Prototypal inheritance well
const mixins = () => {
    const checkOut = () => {
        console.log('check out'); 
    }

    const checkIn = () => {
        console.log('check in'); 
    }
    return { checkOut, checkIn }
}


function PatientManager(id) {
    this.patientId = id || 'unknown';
}

console.log(PatientManager.prototype); 

_.extend(PatientManager.prototype, mixins())

console.log(PatientManager.prototype); 

function NailSalonCustomerManager(id) {}

_.extend(NailSalonCustomerManager.prototype, mixins()); 

console.log(NailSalonCustomerManager.prototype); 

