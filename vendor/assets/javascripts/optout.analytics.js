(function() {
  var WebProperty, _base;

  WebProperty = (function() {
    WebProperty.prototype._optout_window_property_key = null;

    function WebProperty(id) {
      this.id = id;
      this._optout_window_property_key = "ga-disable-" + this.id;
    }

    WebProperty.prototype.optout = function() {
      return this._toggle_optout_state(true);
    };

    WebProperty.prototype.optin = function() {
      return this._toggle_optout_state(false);
    };

    WebProperty.prototype.has_optout_cookie = function() {
      return document.cookie.indexOf("" + this._optout_window_property_key + "=true") > -1;
    };

    WebProperty.prototype._toggle_optout_state = function(is_opted_out) {
      document.cookie = "" + this._optout_window_property_key + "=" + is_opted_out + "; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
      return window[this._optout_window_property_key] = is_opted_out;
    };

    return WebProperty;

  })();

  if (window.Analytics == null) {
    window.Analytics = {};
  }

  if ((_base = window.Analytics).WebProperty == null) {
    _base.WebProperty = WebProperty;
  }

}).call(this);
