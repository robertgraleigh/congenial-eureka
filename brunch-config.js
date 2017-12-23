// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']},
  sass: {
    options: {
      includePaths: ['node_modules/foundation-sites/scss']
    }
  }
};

exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery',
    motionui: 'motion-ui',
    Foundation: 'foundation-sites'
  },
  styles: {
    Foundation: ['scss/settings','scss/foundation.scss']
  }
};
