exports.getData = function(url, csrftoken) {

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
    }.bind(this),
    error: function(xhr, status, err) {
    }.bind(this)
  });
};
