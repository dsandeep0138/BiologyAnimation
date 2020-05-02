// var jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { assert, expect } = require("chai");
// const { should } = require("mocha");
// var jQuery = require('jquery')

var expect = chai.expect;

describe("Select two images", function() {
  var top_row;
  var bot_row;
  before(function() {
    top_row = $(".row-1");
    bot_row = $(".row-2");
    // return JSDOM.fromFile("./index.html").then((dom) => {
    //     global.document = dom.window.document;
    //     global.window = document.defaultView;
    //     global.$ = jQuery(window);
    //     top_rows = $(".row-1");
    //     bot_rows = $(".row-2");
    // })
  });
  it("the borders turn green for two matching images", function (){
    var img_id = 1;
    var selected_image_1 = top_row.find(`#${img_id}`);
    var selected_image_2 = bot_row.find(`#${img_id}`);
    $(selected_image_1).trigger("click");
    expect(`#${img_id}`).eq('#1')
    expect(selected_image_1.css("border-color")).eq("rgb(255, 255, 0)");
    
    $(selected_image_2).trigger("click");
    expect(selected_image_1.css("border-color")).eq("rgb(124, 252, 0)");
    expect(selected_image_2.css("border-color")).eq("rgb(124, 252, 0)");
  })
  
  it("the matching image will not be clickable anymore", function (){
    var img_id = 4;
    var selected_image_1 = top_row.find(`#${img_id}`);
    var selected_image_2 = bot_row.find(`#${img_id}`);
    $(selected_image_1).trigger("click");
    expect(selected_image_1.css("border-color")).eq("rgb(255, 255, 0)");
    
    $(selected_image_2).trigger("click");
    expect(selected_image_1.css("border-color")).eq("rgb(124, 252, 0)");
    expect(selected_image_2.css("border-color")).eq("rgb(124, 252, 0)");
    
    $(selected_image_1).trigger("click");
    expect(selected_image_1.css("border-color")).not.eq("rgb(255, 255, 0)");
    expect(selected_image_1.css("border-color")).eq("rgb(124, 252, 0)");
  })

  it("one image will yellow after clicking", function (){
    var img_id = 5;
    var selected_image_1 = top_row.find(`#${img_id}`);
    $(selected_image_1).trigger("click");
    expect(`#${img_id}`).eq('#5')
    expect(selected_image_1.css("border-color")).eq("rgb(255, 255, 0)");
  })

  it("Unclick the one image", function (){
    var img_id = 5;
    var selected_image_1 = top_row.find(`#${img_id}`);
    $(selected_image_1).trigger("click");
    expect(`#${img_id}`).eq('#5')
    expect(selected_image_1.css("border-color")).eq("rgb(0, 0, 0)");
  })

  it("the borders turn red for two unmatching images", function (){
    var img_id = 2;
    var selected_image_1 = top_row.find(`#${img_id}`);
    var selected_image_2 = bot_row.find(`#${img_id+1}`);
    $(selected_image_1).trigger("click");
    expect(`#${img_id}`).eq('#2')
    expect(selected_image_1.css("border-color")).eq("rgb(255, 255, 0)");
    
    $(selected_image_2).trigger("click");
    expect(selected_image_1.css("border-color")).eq("rgb(255, 0, 0)");
    expect(selected_image_2.css("border-color")).eq("rgb(255, 0, 0)");
  })

// describe('small test', function(){
  this.enableTimeouts(false)
  it('red borders disappear after 1 second', function(done){
      // console.log('waiting 3 seconds');
      setTimeout(function(){
        var img_id = 2;
        var selected_image_1 = top_row.find(`#${img_id}`);
        expect(`#${img_id}`).eq('#2')
        expect(selected_image_1.css("border-color")).eq("rgb(0, 0, 0)");
        // console.log('waiting over.');
        done();
      }, 2000)
  })
// })

  it('recall the wrong matching', function(){
    var img_id = 2;
    var image_1 = top_row.find(`#${img_id}`);
    var image_2 = bot_row.find(`#${img_id+1}`);
    var image_3 = bot_row.find('#5')
    
    $(image_1).trigger("click");
    expect(image_1.css("border-color")).eq("rgb(255, 255, 0)");
    expect(image_2.css("border-color")).eq("rgb(255, 0, 0)");
    
    $(image_3).trigger("click");
    expect(image_1.css("border-color")).eq("rgb(255, 0, 0)");
    expect(image_2.css("border-color")).eq("rgb(0, 0, 0)");
    expect(image_3.css("border-color")).eq("rgb(255, 0, 0)");
  })
  
})