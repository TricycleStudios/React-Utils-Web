var $ = require('../bower_components/jquery/jquery.min.js');

exports.getData = function(url, csrftoken, setState, stateVariable) {

  $.ajax({
    beforeSend: function(request) {
        if (csrftoken) {
        request.setRequestHeader("X-CSRFToken", csrftoken);
      }
    },
    url: url,
    dataType: 'json',
    cache: false,
    type: 'GET',

    success: function(data) {
      alert('Success!');
      setState({stateVariable:data});
    }.bind(this),

    error: function(xhr, status, err) {
      console.error(data, status, err.toString());
    }.bind(this)
  });
};
