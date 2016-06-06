function call(url, type, callback) {
  var  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = ensureReadiness;

  function ensureReadiness() {
    if(xhr.readyState < 4) {
      return;
    }

    if(xhr.status !== 200) {
      return;
    }

    // Success!
    if(xhr.readyState === 4) {
      callback(xhr);
    }
  }

  xhr.open(type, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  xhr.send('');
}
