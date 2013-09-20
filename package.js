Package.describe({
	summary: "Meteor smart package for node-imap."
});

Npm.depends({
  "utf7": "1.0.0",
  "imap": 'https://github.com/BashtonLtd/node-imap/tarball/511f30f0a2d011899a9b82331c1c45e17b546849'
});

Package.on_use(function (api, where) {
  api.add_files('imap-server.js', 'server');
  api.export(['Imap'], 'server');
});
