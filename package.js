Package.describe({
	summary: "Meteor smart package for node-imap."
});

Npm.depends({
  "utf7": "1.0.0",
  "imap": 'https://github.com/BashtonLtd/node-imap/tarball/0a8a4d5294f6c3291ddc96efc84c88f4207bece9'
});

Package.on_use(function (api, where) {
  api.add_files('imap-server.js', 'server');
});
