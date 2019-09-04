// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap"
import '../stylesheets/application'

$(document).ready(function(){
    
    $( "#contain" ).animate({
        'margin-left': 0
    }, 400 );

    $('#sidebarCollapse').on('click',function(){
        $('#sidebar').toggleClass('active');
        
        
    });
}); 

$(function() {
    $('[data-toggle="popover"]').popover({
          html: true,
          content: function() {
              return $('#popover-content').html();
          }
    });
  });


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
