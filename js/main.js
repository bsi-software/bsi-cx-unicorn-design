/*
 * Copyright (c) BSI Business Systems Integration AG. All rights reserved.
 * http://www.bsiag.com/
 */

/* ---- BANNER ROTATION ---- */

function rotateBanners() {
  let bannerNo = 1;
  return setInterval(() => {
    bannerNo++;
    if (bannerNo >= 4) {
      bannerNo = 1;
    }
    $('#banner-image').attr('src', 'img/banner-' + bannerNo + '.png');
  }, 10 * 1000 /* 10 sec. */);
}

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

function hideAllNavigationFolderPanels() {
  $('navigation-visible').each(() => {
    hideNavigationFolderPanel($(this));
  });
}

/* ---- MAIN ---- */

$(document).ready(() => {
  // FIXME [awe] 16.3: remove this hack if ContentEditor ensures .js is loaded only once
  if (!window.self['bannerIntervalId']) {
    window.self.bannerIntervalId = rotateBanners();
  }
  hideAllNavigationFolderPanels();
  attachNavigation();
});

