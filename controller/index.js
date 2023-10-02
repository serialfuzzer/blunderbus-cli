const helper = require("../helper");
const blunderbus = require("blunderbus");

const Controller = function() {}



Controller.prototype = {
    
    generateSpecificTypo: function (string, type) {
        const supportedTypes = ["substitute", "cognitiveErrors", "transposition", "omission", "insertion", "all"];
        if(supportedTypes.includes(type)){
            for(let typo of blunderbus[type](string) ){
                console.log(typo);
            }
        }else{
            console.log("Your type was not found!")
        }
        
    }
    // core controller features
    
}

ControllerInstance = new Controller();

module.exports = ControllerInstance;