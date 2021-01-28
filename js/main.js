/*
 * Copyright (c) BSI Business Systems Integration AG. All rights reserved.
 * http://www.bsiag.com/
 */
const REST_URL = 'api/story-property/participant';

let designBaseUrl = null;
let restBaseUrl = null;

/* ---- BANNER ROTATION ---- */

function rotateBanners() {
  let bannerNo = 1;
  return setInterval(() => {
    bannerNo++;
    if (bannerNo >= 4) {
      bannerNo = 1;
    }
    $('#banner-image').attr('src', designBaseUrl + '/img/banner-' + bannerNo + '.png');
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

/**
 * This is a show-case for how to use the designBaseUrl property in JavaScript dynamically.
 */
function readDesignBaseUrl() {
  let metaElement = document.querySelector('meta[name="studio-design-base-url"]');
  if (metaElement) {
    designBaseUrl = metaElement.getAttribute('value');
  }
}

function attachRestHandlers() {
  // determine REST base url, assuming the website is deployed under a path 'www/'.
  let url = document.location.href;
  let wwwIndex = url.lastIndexOf('/www');
  if (wwwIndex > -1) {
    restBaseUrl = url.substring(0, wwwIndex);
  }

  let $restCallForms = $('.rest-call-form');
  if (!$restCallForms.length) {
    return;
  }

  $restCallForms.each(function() {
    let $form = $(this);
    $form.submit(event => event.preventDefault());
    let $button = $form.find('button');
    $button.on('click', onRestButtonClick.bind($form));
  });
}

function onRestButtonClick(event) {
  if (!restBaseUrl) {
    console.warn('Cannot perform REST request: restBaseUrl is missing. Check if the URL has a /www path');
    return;
  }

  let callUrl = restBaseUrl + '/' + REST_URL;
  console.log('Performing REST call to URL', callUrl);
  $.ajax({
    url: callUrl,
    contentType: 'application/json',
    dataType: 'json',
    success: onRestCallSuccess.bind(this) // $form
  });
}

function onRestCallSuccess(result) {
  let $form = this;
  let $result = $form.find('.result');
  $result.text(result);
}

/* ---- MAIN ---- */

$(document).ready(() => {
  readDesignBaseUrl();
  hideAllNavigationFolderPanels();
  attachNavigation();
  attachRestHandlers();
  rotateBanners();
});

