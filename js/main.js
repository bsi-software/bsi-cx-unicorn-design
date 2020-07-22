/*
 * Copyright (c) BSI Business Systems Integration AG. All rights reserved.
 * http://www.bsiag.com/
 */
var bannerNo = 1;

function animate() {
  bannerNo++;
  if (bannerNo >= 4) {
	bannerNo = 1;
  }
  var $img = $('#banner-image');
  $img.attr('src', 'img/banner-' + bannerNo + '.png');
  setTimeout(animate, 10 * 1000);
}

$(document).ready(function() {
  setTimeout(animate, 10 * 1000);
});