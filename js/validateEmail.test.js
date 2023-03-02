
//let assert = chai.assert;
const {assert} = chai;


describe("describe", function(){
    it('test', function(){
    })
})


describe("validateEmail", function() {
    describe('valid string', function(){
      it('not an empty string', function() {
        assert.equal(validateEmail(''), false);
      });
      it('typeof string', function() {
        assert.equal(validateEmail(222), false, 'number error');
        assert.equal(validateEmail(true), false, 'boolean error');
        assert.equal(validateEmail({}), false, 'object error');
      });
      it('not all spaces', function() {
        assert.equal(validateEmail('     '), false);
      });
      it('less than 5 characters', function() {
        assert.lengthOf('gmail', 5, 'string has length of 5');
      });
    })
    describe('valid data', function(){
      it('Don\'t have the @ or @ the first character', function(){
        assert.isFalse(validateEmail('emailgmail.com'), 'Don\'t have the @');
        assert.isFalse(validateEmail('@emailgmail.com'), '@ the first character');
     })
        it('more than 1 characters @', function() {
              assert.isFalse(validateEmail('@@emailgmail.com'), '@ more than one');
          });
          it('Is correct email', function() {
            assert.equal(validateEmail('e.mail@gmail.com'), true, 'dot after @');
        });
        it('dot after @', function() {
            assert.equal(validateEmail('e.mail@gmailcom'), false, 'error no dot after @');
        });
        it('dot before @', function() {
            assert.equal(validateEmail('e.mail.@gmail.com'), true, 'error dot before .@');
        });
    })
  })
  
 