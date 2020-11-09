WebFontConfig = {
  google: { families: [ 'Lato:400,700,300:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Initialize Share-Buttons
$.contactButtons({
  effect  : 'slide-on-scroll',
  buttons : {
    'facebook':   { class: 'facebook', use: true, link: 'https://www.facebook.com/muj989', extras: 'target="_blank"' },
	'twitter':   { class: 'twitter', use: true, link: '#', extras: 'target="_blank"' },
	'instagram':   { class: 'instagram', use: true, link: 'https://www.instagram.com/owais989/', extras: 'target="_blank"' },
    'linkedin':   { class: 'linkedin', use: true, link: 'https://www.linkedin.com/in/mujtaba989/', extras: 'target="_blank"' },
	'pinterest':     { class: 'pinterest',    use: true, link: 'https://www.pinterest.com/mujtabakamal123/ss' },
	'youtube':     { class: 'youtube',    use: true, link: 'https://www.pinterest.com/mujtabakamal123/ss' },
    'whatsapp':     { class: 'whatsapp',    use: true, link: 'https://api.whatsapp.com/send?phone=971552466432&text=Hi, I contacted you Through your website.' },
    'phone':      { class: 'phone separated',    use: true, link: '+971552466432' },
    'email':      { class: 'email',    use: true, link: 'twosep89@gmail.com' }
  }
});