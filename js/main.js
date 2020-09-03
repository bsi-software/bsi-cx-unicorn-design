/*
 * Copyright (c) BSI Business Systems Integration AG. All rights reserved.
 * http://www.bsiag.com/
 */

// Animate Banner Interval
// Make the interval is only registered once in the Studio Content-Editor.
// The reason for this awkward code is that this JS is loaded and executed
// each time a new content is set in the editor. However, the variables have
// already been set on the window instance (which is the same all of the time).
if (!window.self['intervalId']) {
  let bannerNo = 1;
  window.self.intervalId = setInterval(() => {
    bannerNo++;
    if (bannerNo >= 4) {
      bannerNo = 1;
    }
    $('#banner-image').attr('src', 'img/banner-' + bannerNo + '.png');
  }, 10 * 1000 /* 10 sec. */);
}

$(document).ready(attachNavigation);

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
  setTimeout(() => {
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
