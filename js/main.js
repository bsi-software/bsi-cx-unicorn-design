/*
 * Copyright (c) BSI Business Systems Integration AG. All rights reserved.
 * http://www.bsiag.com/
 */
var bannerNo = 1;

function animateBanner() {
  bannerNo++;
  if (bannerNo >= 4) {
    bannerNo = 1;
  }
  var $img = $('#banner-image');
  $img.attr('src', 'img/banner-' + bannerNo + '.png');
  setTimeout(animateBanner, 10 * 1000);
}

$(document).ready(function() {
  setTimeout(animateBanner, 10 * 1000);
  attachNavigation();
})

/* ---- NAVIGATION ---- */

function attachNavigation() {
  $('.navigation-folder').on('click', onNavigationFolderClick);
}

function onNavigationFolderClick(event) {
  let $folder = $(event.currentTarget);
  let $panel = $folder.parent().find('.navigation-item-container-lv2');
  if ($panel.hasClass('navigation-visible')) {
    hideNavigationFolderPanel($panel);
    return;
  }
  let clickHandler = onNavigationFolderClickOutside.bind($panel);
  $panel.addClass('navigation-visible navigation-fade-in');
  $panel.data('clickHandler', clickHandler);
  setTimeout(function() {
    $(document).on('click', clickHandler);
  });
}

function onNavigationFolderClickOutside(event) {
  let $panel = this;
  if ($panel[0] !== event.target) {
    hideNavigationFolderPanel($panel);
  }
}

function hideNavigationFolderPanel($panel) {
  $panel.removeClass('navigation-visible');
  $(document).off('click', $panel.data('clickHandler'));
  $panel.removeData('clickHandler');
}
