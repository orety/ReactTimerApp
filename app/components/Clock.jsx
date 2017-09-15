var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function () {
    totalSeconds: 0
  },

  propTypes: {
    totalSeconds: React.PropTypes.number
  },

  formatSeconds: function (totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60); //rounds down

    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    if(minutes < 10) {
      minutes =  '0' + minutes;
    }
    // console.log('formatSeconds, minutes: ' + minutes);
    // console.log('formatSeconds, seconds: ' + seconds);
    // console.log('formatSeconds, minutes + ':' + seconds: ', minutes + ':' + seconds);
    return minutes + ':' + seconds;
  },

  render: function () {
    var {totalSeconds} = this.props  //es6 descructuring
    return (
      <div className = "clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    )
  }
})

module.exports = Clock;
