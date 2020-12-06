import "jquery/src/jquery.js";

import 'fomantic-ui-css/semantic.min.css';
import 'fomantic-ui-css/semantic.min.js'
import './css/style.css'
//import './scss/style.scss';


//import './index.html'


$(document).ready(function() {

  // fix menu when passed
  $('.masthead')
    .visibility({
      once: false,
      onBottomPassed: function() {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
      }
    })
  ;

  // create sidebar and attach to menu open
  /*$('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
  ;*/

})
;

