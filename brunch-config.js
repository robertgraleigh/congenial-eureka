// See http://brunch.io for documentation.
exports.paths = {
  public: 'public',
  watched: ['app', 'vender']
};

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
  babel: {presets: ['latest']}
};

exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery',
    motionui: 'motion-ui'
  }
};
