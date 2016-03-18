var $form = $('form');
var $input = $('#list-input');
var $list = $('.list');

$('form').on('submit', function () {
  var $li = $('<li>');

  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
  $input.val('');

});

$('ul').on('click', 'li', function (e) {
  $(this).toggleClass('is-clicked');
});
