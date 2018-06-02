(function(window){var svgSprite='<svg><symbol id="rock-mima" viewBox="0 0 1024 1024"><path d="M695.466667 407.134815l-12.420741 0c-0.474074 0-0.853333-0.379259-0.853333-0.853333l0-62.672593c0-44.942222-17.161481-87.419259-48.355556-119.466667-25.031111-25.78963-56.983704-42.477037-92.16-48.45037-104.96-18.10963-200.533333 64-200.533333 170.477037l0 60.112593c0 0.474074-0.379259 0.853333-0.853333 0.853333l-10.998519 0c-48.071111 0-87.04 38.968889-87.04 87.04l0 269.558519c0 48.071111 38.968889 87.04 87.04 87.04l365.226667 0c48.071111 0 87.04-38.968889 87.04-87.04L781.558519 493.321481C781.653333 445.724444 743.063704 407.134815 695.466667 407.134815zM382.008889 343.608889c0-78.032593 51.674074-129.611852 129.611852-129.611852 38.21037 0 67.034074 11.946667 93.013333 38.684444 25.41037 26.168889 36.598519 54.234074 36.598519 90.927407l0 62.672593c0 0.474074-0.379259 0.853333-0.853333 0.853333L382.862222 407.134815c-0.474074 0-0.853333-0.379259-0.853333-0.853333L382.008889 343.608889zM740.882963 764.586667c0 30.340741-15.075556 45.416296-45.416296 45.416296L329.386667 810.002963c-25.505185 0-46.26963-20.66963-46.26963-46.26963L283.117037 500.527407c0-29.013333 23.514074-52.527407 52.527407-52.527407l358.874074 0c25.505185 0 46.26963 20.66963 46.26963 46.26963L740.788148 764.586667z"  ></path><path d="M510.388148 561.682963c-14.506667 0-18.962963 10.808889-18.962963 19.437037l0 83.057778c0 8.628148 8.533333 15.644444 18.962963 15.644444 10.42963 0 18.962963-7.016296 18.962963-15.644444l0-83.057778C529.351111 572.491852 522.714074 561.682963 510.388148 561.682963z"  ></path></symbol><symbol id="rock-touxiang" viewBox="0 0 1024 1024"><path d="M510.45 70.554c-243.163 0-442.115 198.951-442.115 442.115 0 243.16 198.952 442.11 442.116 442.11 243.159 0 442.11-198.95 442.11-442.11 0-243.165-198.951-442.115-442.11-442.115z m11.051 132.633c168.556 0 168.556 127.11 168.556 198.95 0 71.847-66.318 204.48-168.556 207.24-99.475 0-168.556-132.632-168.556-207.24 0.001-71.841 0.001-198.95 168.556-198.95z m-11.05 726.723c-127.11 0-243.164-58.03-320.534-149.211 11.051-27.635 24.868-58.03 44.212-74.607 41.446-33.162 165.79-88.425 165.79-88.425l77.37 149.215 13.816-35.923L469 686.747l44.212-44.208 44.212 44.208-19.345 46.974 11.055 35.924 80.132-146.45s124.343 55.262 165.793 88.424c19.34 13.813 33.157 38.685 41.447 60.787C761.9 869.12 643.082 929.91 510.45 929.91z m0 0" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)