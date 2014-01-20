(function() {

  var k = window.open('https://kippt.com/extensions/new/?url=' +
    
    // window location
    // https://stackoverflow.com/questions/9555997/browser-extension-how-to-get-the-current-pages-url
    encodeURIComponent(window.content.location.href) +
    
    // page title
    '&title=' + encodeURIComponent(document.title) +
    
    // selected content (if any, does not work on form inputs)
    // https://stackoverflow.com/questions/9555997/browser-extension-how-to-get-the-current-pages-url
    '&source=bp1&notes=' + encodeURIComponent(content.getSelection()),

    // window stuff
    'kippt',
    'width=420,height=240,location=0,links=0,scrollbars=0,toolbar=0'
  );

  if (k) {
    setTimeout(function() {
      k.focus();
    }, 100);
  } else {
    alert('It seems that you have a popup blocker. Please, hold the CTRL-key and try again');
  }

})();