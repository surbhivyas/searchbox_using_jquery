var Events = function(ui,api) {
this.ui = ui;
this.api = api;
this.checkingtimeout = null;
}
Events.prototype = {
  constructor:Events,
  keydownfn: function(e,_this){

    setTimeout(function(){
      var keyword = e.target.value;

      if(e.keyCode >= 65 && e.keyCode <= 90) {

      _this.ui.display(_this.ui.suggestionbox,'inline-block');
      _this.ui.display(_this.ui.singleBox,'none');
      _this.ui.display(_this.ui.loading,'block');
        var result;
        setTimeout(function(){

          $("#box").typeahead({
            url:"http://35.154.56.172/api/project-search/Gurgaon/"+keyword+"/Flats",
            autocomplete:true,
            keyboard:true,
            key:"name",
            arrayFrom:"data",
            keyword:e.target.value,
            idforloading:$("#loading-suggestions"),
            idforbox:$("#box"),
            idforsinglebox:$("#single-box"),
            idforbehindbox:$("#boxbehind")
          });

      },1000);
    }
    },0);
  },
  capture: function() {
    var _this = this;
    //alert('I AM CAPTURED');
    this.ui.searchbox.on('keydown',function(e){
      clearTimeout(_this.checkingtimeout);
      _this.checkingtimeout = setTimeout(function(){
        _this.keydownfn(e,_this);
      },1000);

    })
  }
}
