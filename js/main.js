/*
 * Copyright (c) BSI Business Systems Integration AG. All rights reserved.
 * http://www.bsiag.com/
 */
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

  let $form = this;
  let requestUrl = $form.find('#request-url').val();
  let requestMethod = $form.find('#request-method').val();
  let callUrl = restBaseUrl + '/' + requestUrl;
  let payload = null;

  if ('POST' === requestMethod || 'PUT' === requestMethod) {
    payload = $form.find('#request-payload').val();
  }

  console.log('Performing REST call to URL', callUrl);
  $.ajax({
    method: requestMethod,
    url: callUrl,
    contentType: 'application/json',
    dataType: 'json',
    data: payload,
    error: onRestCallError.bind(this), // $form
    success: onRestCallSuccess.bind(this) // $form
  });
}

function onRestCallError(jqXHR, textStatus, errorThrown) {
  let $form = this;
  let $result = $form.find('#rest-response');
  $result.text('Error: ' + textStatus + '\n' + errorThrown);
  console.error('REST call failed: ' + textStatus, errorThrown);
}

function onRestCallSuccess(result) {
  let $form = this;
  let $result = $form.find('#rest-response');
  if (result && typeof result === 'object') {
    $result.text(JSON.stringify(result));
  } else {
    $result.text(result);
  }
}

/* ---- FORMS ---- */
function attachFormHandlers() {
  // Look for forms with an ID 'ajax' and install an asynchronous form handler.
  // Note: in a productive design you should probably make a form content-element
  // with a fixed class like 'ajax-form' or an attribute like 'data-ajax-form'.
  // We use the ID here because we don't want to add additional content elements
  // for this rare case. In BSI CX you must enable the ajax form processing by
  // setting the 'asyncFormSubmit' property on the studio.ContentFormConfig object.
  $('form[id=ajax]').ajaxForm({
    beforeSubmit: beforeFormSubmit,
    success: showFormSuccess,
    error: showFormError
  });
}

function beforeFormSubmit(formData, $form, options) {
  let queryString = $.param(formData);
  console.log('About to submit: \n\n' + queryString);
  return true;
}

function showFormSuccess(responseText, statusText, xhr, $form) {
  console.log('responseText: \n' + responseText +
    '\n\nThe output div should have already been updated with the responseText.');
}

function showFormError(responseText, statusText, xhr, $form) {
  console.log('error code: ' + responseText.status + '\n\nError Json' +
    '\n\n' + responseText.responseText);
}

/* ---- MAIN ---- */

$(document).ready(() => {
  readDesignBaseUrl();
  hideAllNavigationFolderPanels();
  attachNavigation();
  attachFormHandlers();
  attachRestHandlers();
  rotateBanners();
});

