var Radminton = {
  letsPlay: function() {
    this.emails.deobfuscate();

    if (this.env() == 'dev') {
      this.debug();
    }
  },

  emails: {
    deobfuscate: function() {
      var nodes = document.querySelectorAll('.email');

      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];

        var email = node.textContent = node.textContent
          .replace(/ \[at\] /g, '@')
          .replace(/ \[dot\] /g, '.')
        ;

        var a = document.createElement('a');
        a.href = 'mailto:' + email;
        a.textContent = email;

        node.parentNode.replaceChild(a, node);
      }
    }
  },

  env: function() {
    var env, urls = ['radminton.github.io', 'radminton.co.uk', 'www.radminton.co.uk'];

    if (urls.indexOf(window.location.hostname) !== -1) {
      env = 'production'
    } else {
      env = 'dev'
    }

    return env;
  },

  debug: function() {
    // Live js
    document.write('\x3Cscript src="http://livejs.com/live.js">\x3C/script>');
  }
};

Radminton.letsPlay();
