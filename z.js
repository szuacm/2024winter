// Global site tag (gtag.js) - Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-46766886-4');
function visibility_on(id) {
     var e = document.getElementById(id+"_text");
     if(e.style.display == 'none')
         e.style.display = 'block';
     var e = document.getElementById(id+"_img");
     if(e.style.display == 'none')
         e.style.display = 'block';
}
function visibility_off(id) {
     var e = document.getElementById(id+"_text");
     if(e.style.display == 'block')
         e.style.display = 'none';
     var e = document.getElementById(id+"_img");
     if(e.style.display == 'block')
         e.style.display = 'none';
}
function toggle_visibility(id) {
    var e = document.getElementById(id+"_text");
    if(e.style.display == 'inline')
       e.style.display = 'block';
    else
       e.style.display = 'inline';
    var e = document.getElementById(id+"_img");
    if(e.style.display == 'inline')
       e.style.display = 'block';
    else
       e.style.display = 'inline';
}
function toggle_vis(id) {
    var e = document.getElementById(id);
    if (e.style.display == 'none')
        e.style.display = 'inline';
    else
        e.style.display = 'none';
}
