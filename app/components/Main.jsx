var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <div>
        <Navigation/>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            <p>Main.jsx Rendered</p>
            {props.children /*http://mxstbr.blog/2017/02/react-children-deepdive*/}
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
