var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    //setting up spy
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCoundown={spy}/>);

    var $el = $(ReactDOM.findDOMNode(countdownForm));

    // accesing element on component giving it a value
    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]); //pulling down first element on the form and applying submit to it
    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should NOT call onSetCountdown if invalid seconds entered', () => {
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCoundown={spy}/>);

    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 'qwerty';
    expect(spy).toNotHaveBeenCalled();
  })
});
