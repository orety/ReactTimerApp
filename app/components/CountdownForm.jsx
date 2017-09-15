var React = require('react');

var CountdownForm = React.createClass({
    render: function () {
      return (
        <div>
          <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
            <input type="text" ref="seconds" placeholder="Enter time and seconds"/>
            <button className="button expanded">Start</button>
          </form>
        </div>
      );
    },
    onSubmit: function(e) {
      e.preventDefault();
      var strSeconds = this.refs.seconds.value;

      if(strSeconds.match(/^[0-9]*$/)) {
        this.refs.seconds='';
        this.props.onSetCoundown(parseInt(strSeconds, 10));
      }
    }
});


module.exports = CountdownForm;
