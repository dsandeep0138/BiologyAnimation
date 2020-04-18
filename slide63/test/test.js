
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

global.$ = global.jquery = require('jquery')(window);

// console.log(Slide)
var Slide = require('./../my_modules/utils.js');
var border_turns_yellow = Slide.border_turns_yellow;
var chai = require("chai");
var assert = chai.assert;

describe("Matching", function() {
  var array_of_ids = [1,2,3,4,5];
  
  describe("border_turns_yellow", function() {
    function makeTest(x, clicked) {        
      it(`turns the border color to yellow if it is the only one`, function() {
          if(clicked.length==0){
            assert.equal(border_turns_yellow(x, clicked), "yellow"); 
          }
          else if(x == clicked[0]){ 
            assert.equal(border_turns_yellow(x, clicked), "black"); 
          }
      });
    }

    for (let x = 1; x <= 5; x++) {
      clicked =  [];
      if(Math.random()>0.5){ clicked.push(Math.floor(Math.random()*5)+1); }
      makeTest(x, clicked);
    }
  });

  describe("border_turns_red", function() {
    function makeTest(x, clicked) {        
      it(`turns both border color to red`, function() {
          if(x != clicked){ assert.equal(border_turns_red(x, clicked), "red"); }
      });
    }

    for (let x = 1; x <= 5; x++) {
      clicked =  [];
      clicked.push(Math.floor(Math.random()*5)+1);
      makeTest(x, clicked);
    }
  });

  
  // describe("Select two images", function() {
  //   before(function() {
  //     var questions = $(".row-1").children();
  //     var anwers = $(".row-2").children();
  //     questions.css("border-color", "red")
  //     console.log(questions.css("border-color")=="red");
  //   });
    
  //   it("the borders turn green for two matching images", function (){
      
  //   })
  // })
  
  
});  




