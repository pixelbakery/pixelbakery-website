
import Isotope  from "isotope-layout" ;

console.log("Isotopes loaded");


// element argument can be a selector string
//   for an individual element
var iso = new Isotope( '.portfolio-isotopes', {
  // itemSelector: '.portfolio-project',
  percentPosition: true,
  layoutMode: 'cellsByColumn',
  cellsByColumn: {
    columnWidth: 100,
    rowHeight: 100
  }

});