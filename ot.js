
(function(global, doc, undefined) {

var ot = {};

ot.makeAllLinksGoToOprah = {
  com: function() {
    var links = doc.getElementsByTagName('a');
    for (var x = 0, len = links.length; x < len; x++) {
      links[x].href = 'http://oprah.com';
    }
  }
};

global.ot = ot;
  
})(this, document);
