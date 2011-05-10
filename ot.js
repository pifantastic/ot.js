
(function(global, doc, undefined) {

var ot = {};

ot.makeAllLinksGoToOprah = {
  com: function() {
    var links = doc.links;
    for (var x = 0, len = links.length; x < len; x++) {
      links[x].href = 'http://oprah.com';
    }
  }
};

global.ot = ot;
  
})(this || this.exports, document);
