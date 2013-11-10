var should = require('should');

describe('main', function() {

  var main = require('../main');

  it('has a main function', function() {
    main.should.have.property('main');
  })
})
