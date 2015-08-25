window.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body');
  var fxosBanner = document.createElement('div');
  fxosBanner.classList.add('fxos-banner');
  var bannerText = document.createElement('p');
  var closeBtn = document.createElement('button');

  fxosBanner.appendChild(bannerText);
  fxosBanner.appendChild(closeBtn);
  body.appendChild(fxosBanner);

  closeBtn.textContent = 'X';
  bannerText.textContent = 'Wow, you have an extension installed!';

  closeBtn.onclick = function() {
  	fxosBanner.parentNode.removeChild(fxosBanner);
  }
});
