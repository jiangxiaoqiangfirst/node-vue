(function (doc, win) {
     var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc = function () {
               var clientWidth = docEl.clientWidth;

                 if (clientWidth>=640) {
                    clientWidth = 640;
                 }
                 if (!clientWidth) return;
               // docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';

               // 100vw 除以设计图的图纸的百分之一
               // if (clientWidth >= 750) {
               //      clientWidth = 750;
               // } else if (clientWidth >= 720) {
               //      clientWidth = 720;
               // } else if (clientWidth >= 640) {
               //      clientWidth = 640;
               // } else if (clientWidth >= 375) {
               //      clientWidth = 375;
               // }
               // if (!clientWidth) return;
               
               docEl.style.fontSize = 100 / (clientWidth/100) + 'vw';
          };
     if (!doc.addEventListener) return;
     win.addEventListener(resizeEvt, recalc, false);
     doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);