(function() {
  test('constructor', function() {
    var id, web_prop;
    id = 'UA-123-Y';
    web_prop = new Analytics.WebProperty(id);
    equal(web_prop.id, id, '@id param is set');
    return equal(web_prop._optout_window_property_key, "ga-disable-" + id, 'initialized _optout_window_property_key instance variable');
  });

  test('optout', function() {
    var id, key, web_prop;
    id = 'UA-123-Y';
    key = "ga-disable-" + id;
    web_prop = new Analytics.WebProperty(id);
    web_prop.optout();
    ok(document.cookie.indexOf("ga-disable-" + id + "=true") > -1, 'added optout cookie');
    return equal(window[key], true, 'set window property to true');
  });

  test('optin', function() {
    var id, key, web_prop;
    id = 'UA-123-Y';
    key = "ga-disable-" + id;
    web_prop = new Analytics.WebProperty(id);
    web_prop.optin();
    ok(document.cookie.indexOf("ga-disable-" + id + "=false") > -1, 'added optout cookie');
    return equal(window[key], false, 'set window property to false');
  });

  test('has_optout_cookie', function() {
    var web_prop;
    web_prop = new Analytics.WebProperty('UA-123-Y');
    equal(web_prop.has_optout_cookie(), false, 'cookie is absent by default so no cookie detected');
    web_prop.optout();
    equal(web_prop.has_optout_cookie(), true, 'detected cookie');
    web_prop.optin();
    return equal(web_prop.has_optout_cookie(), false, 'no cookie detected');
  });

}).call(this);
