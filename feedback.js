(function () {
  var f = document.getElementById('fb');
  if (!f) return;
  var err = document.getElementById('err'),
      ok = document.getElementById('ok'),
      link = document.getElementById('wl');
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('fn').value.trim(),
        contact = document.getElementById('fc').value.trim(),
        msg = document.getElementById('fm').value.trim(),
        r = f.querySelector('input[name="rating"]:checked');
    if (!name) { err.textContent = 'Enter your name.'; return; }
    if (!r) { err.textContent = 'Choose a star rating.'; return; }
    if (msg.length < 5) { err.textContent = 'Write a few words about your experience.'; return; }
    err.textContent = '';
    var text = 'Hello Supreme Events, here is my feedback.\nName: ' + name +
      (contact ? '\nContact: ' + contact : '') +
      '\nRating: ' + r.value + '/5\nMessage: ' + msg;
    var url = 'https://wa.me/2348063440543?text=' + encodeURIComponent(text);
    link.href = url;
    f.hidden = true;
    ok.hidden = false;
    ok.focus();
    window.open(url, '_blank', 'noopener');
  });
})();
