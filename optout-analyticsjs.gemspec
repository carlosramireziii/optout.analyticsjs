# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'optout-analyticsjs/version'

Gem::Specification.new do |spec|
  spec.name          = "optout-analyticsjs"
  spec.version       = OptoutAnalyticsjs::VERSION

  spec.authors       = ["Carlos Ramirez III"]
  spec.email         = ["carlos@cetrasoft.com"]

  spec.description   = %q{Provides methods to easily enable user opt-out functionality to analytics.js}
  spec.summary       = %q{Provides methods to easily enable user opt-out functionality to analytics.js}
  spec.homepage      = "https://bitbucket.org/cetrasoft/optout.analyticsjs"
  spec.license       = "MIT"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_dependency 'railties', '>= 3.1.0'
  
  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"
  spec.add_development_dependency "guard-coffeescript", "~> 1.3.2"
end
