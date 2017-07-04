var UI = function(){

this.searchbox = $("#box");
this.suggestionbox = $("#parent-box");
this.singleBox = $("#single-box");
this.loading = $("#loading-suggestions");

}

UI.prototype = {
  constructor:UI,
  display: function(element,property) {
    element.css('display',property);

  }
}
