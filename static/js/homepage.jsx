"use strict";

function Homepage() {
  return (
    <div>
      Welcome!!
      <div>
        <a href="/cards">Click here to see the cards!</a>
      </div>
      <div>
        <img src="/static/img/balloonicorn.jpg"></img>
      </div>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
