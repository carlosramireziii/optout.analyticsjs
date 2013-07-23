class WebProperty

  _optout_window_property_key: null

  constructor: (@id) ->
    @_optout_window_property_key = "ga-disable-#{@id}"

  optout: ->
    @_toggle_optout_state true

  optin: ->
    @_toggle_optout_state false

  has_optout_cookie: ->
    document.cookie.indexOf("#{@_optout_window_property_key}=true") > -1
    
  _toggle_optout_state: (is_opted_out) ->
    document.cookie = "#{@_optout_window_property_key}=#{is_opted_out}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/"
    window[@_optout_window_property_key] = is_opted_out

window.Analytics ?= {}  
window.Analytics.WebProperty ?= WebProperty