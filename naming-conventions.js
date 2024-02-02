//Naming Conventions to JS

/*Booleans
Boolean variables should use “is” or “has” as prefixes.*/
var hasOwner = true;
var isTrained = false;
var hasVaccinations = true;


/*Functions
JavaScript function names should be in camel case and use descriptive nouns and verbs as prefixes.*/
function getName(dogName, ownerName) {
    return `${dogName} ${ownerName}`;
}
function calculateDogAgeInHumanYears(dogAge) {
    return dogAge * 7;
}

/*Constants
Constants, which are non-changing variables, should be written in uppercase. 
If the name contains more than one word, use UPPER_SNAKE_CASE (uppercase letters with underscores between words).*/
const DAYS_IN_WEEK = 7;
const MONTHS_IN_YEAR = 12;
const MAX_DOG_WEIGHT = 150;

/*Classes
Class names should follow Pascal Case, which means that each word in the name starts with an uppercase letter.*/
class DogCartoon {
    constructor(dogName, ownerName) {
        this.dogName = dogName;
        this.ownerName = ownerName;
    }
}
class DogBreed {
    constructor(breedName, breedSize) {
        this.breedName = breedName;
        this.breedSize = breedSize;
    }
}

/*Components
Component names should be in Pascal case, treating them similarly to classes.*/
function DogCartoon(roles) {
    return (
        <div>
            <span>Dog Name: {roles.dogName}</span>
            <span>Owner Name: {roles.ownerName}</span>
        </div>
    );
}
function DogBreedInformation(props) {
    return (
        <div>
            <span>Breed Name: {props.breedName}</span>
            <span>Breed Size: {props.breedSize}</span>
        </div>
    );
}

/*Methods
JavaScript method names should follow the same rules as functions: camel case with verbs as prefixes. 
This makes the method’s purpose clear and easy to understand.*/
class DogCartoon {
    constructor(dogName, ownerName) {
        this.dogName = dogName;
        this.ownerName = ownerName;
    }
    getName() {
        return ${ this.dogName } ${ this.ownerName };
    }
  class DogBreed {
    constructor(breedName, breedSize) {
        this.breedName = breedName;
        this.breedSize = breedSize;
    }
    getBreedDetails() {
        return The ${ this.breedName } is a ${ this.breedSize } sized breed.;
    }
}

/*Denoting Private Function
Use an underscore ( _ ) as a prefix to denote private variables or functions. 
This helps developers understand that these elements should not be accessed directly outside the class or object they belong to.*/
class DogCartoon {
    constructor(dogName, ownerName) {
        this.dogName = dogName;
        this.ownerName = ownerName;
        this.name = _toonName(dogName, ownerName);
    }
    _toonName(dogName, ownerName) {
        return `${dogName} ${ownerName}`;
    }
}

/*Global Variables
For global variables, it is recommended to use camel case for mutable (changeable) global variables 
and uppercase for immutable (non-changeable) global variables.*/
var globalCounter = 0;
const GLOBAL_MAX_COUNT = 100;

/*File Names
Use lowercase file names to avoid potential issues when switching between case-sensitive and case-insensitive servers.
Consistency in file naming conventions ensures that your codebase remains organized and easy to navigate.*/
dog-cartoon.js
dog-breed-information.js