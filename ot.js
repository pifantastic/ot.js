
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

ot.boom = function() {
  alert('Did you are unimpressed? and now?');
};

global.ot = ot;
  
})(this.exports || this, document);
