$(document).ready(function(){

  completeWord = function(dataArr,domElement,keyword,k,idforbehind) {
    var flag = false;
    domElement.css("background","transparent");
    for(var i = 0 ; i < dataArr.length ; i++)
      if(dataArr[i][k].toLowerCase().substring(0,keyword.length) == keyword) {
        flag = true;
        break;

      }
      if(flag == true) {
        idforbehind.val(dataArr[i][k].toLowerCase());
        domElement.on("keydown",function(e){
          if(e.keyCode == 39){
            domElement.val(dataArr[i][k].toLowerCase());
          }

        })
      }
      else if(flag == false)
        domElement.css("background-color","#FFFFFF");
  }

  showSuggestions = function(dataArr,k,keyword,idforsinglebox) {

    var loop = '';
    var eachname = '';
    dataArr.forEach(function(singleSuggestion) {
      eachname = '';

      for( var i = 0;i < singleSuggestion[k].toLowerCase().length ; i++) {
        if(singleSuggestion[k].toLowerCase()[i] == keyword[0])
          eachname += '<span style="font-weight:bold;">' + singleSuggestion[k].toLowerCase()[i] + '</span>';
        else
          eachname += singleSuggestion[k].toLowerCase()[i];

      }

      loop += ' <div id="suggestionBox">' + eachname +'</div>';
    });
    idforsinglebox.html(loop);
    return $("#suggestionBox");

  }
  var setWord = function(dataArr,domElement,idforsuggestionbox) {
    var x = idforsuggestionbox;
    var i = 0;
    var y;

    domElement.on('keydown',function(e) {
    if(i == dataArr.length && e.keyCode == 40) {
        i = 0;
        x = idforsuggestionbox;
        y.toggleClass('active');
      }

    if(e.keyCode == 40) {
    i++;
    if(i > 1)
      y.toggleClass('active');

    x.toggleClass('active');
    y = x;
    x = x.next();
    }
    else if(e.keyCode == 13) {
      domElement.css("background-color","#FFFFFF");

      if(y.hasClass('active'))
        domElement.val(y[0].innerText);
    }

  });

  }

  $.fn.typeahead = function(obj) {
    var result;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       result = JSON.parse(this.responseText);
       obj.idforloading.css("display","none");
       obj.idforsinglebox.css("display","block");

       var idforsuggestionbox = showSuggestions(result[obj.arrayFrom], obj.key ,obj.keyword ,obj.idforsinglebox);
       if(obj.autocomplete == true)
        completeWord(result[obj.arrayFrom] , obj.idforbox , obj.keyword , obj.key , obj.idforbehindbox);
       if(obj.keyboard == true) {
         setWord(result[obj.arrayFrom] , obj.idforbox , idforsuggestionbox);
       }

     }
   };
   xmlhttp.open("GET", obj.url, true);
   xmlhttp.send();
  }
});
