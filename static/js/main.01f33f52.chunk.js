(this["webpackJsonpscroll-data-hook-example"]=this["webpackJsonpscroll-data-hook-example"]||[]).push([[0],{10:function(e,i,t){"use strict";t.r(i);var a=t(0),u=t.n(a),o=t(1),s=t.n(o),n=(t(9),function(){return(n=Object.assign||function(e){for(var i,t=1,a=arguments.length;t<a;t++)for(var u in i=arguments[t])Object.prototype.hasOwnProperty.call(i,u)&&(e[u]=i[u]);return e}).apply(this,arguments)}),r=100,l={scrolling:!1,time:0,direction:{x:null,y:null},speed:{x:0,y:0},totalDistance:{x:0,y:0},relativeDistance:{x:0,y:0},position:{x:0,y:0}},m="undefined"!==typeof window;function c(e,i){return e>i.position.x?"right":e<i.position.x?"left":null}function d(e,i){return e>i.position.y?"down":e<i.position.y?"up":null}function p(e,i){return i.totalDistance.x+Math.abs(e-i.position.x)}function q(e,i){return i.totalDistance.y+Math.abs(e-i.position.y)}function v(e,i){return Math.abs(e-i.position.x)}function b(e,i){return Math.abs(e-i.position.y)}var f=function(e){void 0===e&&(e={});var i=Object(a.useState)(l),t=i[0],u=i[1],o=Object(a.useRef)(l),s=Object(a.useRef)(l),f=Object(a.useRef)(),x=Object(a.useRef)(),E=Object(a.useRef)(null),g=Object(a.useRef)(null);function h(e){f.current||(f.current=e);var i=e-f.current,t={x:window.pageXOffset||0,y:window.pageYOffset||0},a={x:c(t.x,s.current),y:d(t.y,s.current)},r={x:p(t.x,s.current),y:q(t.y,s.current)},l={x:v(t.x,o.current),y:b(t.y,o.current)},m=e-(x.current||0),E={x:Math.round(Math.abs(s.current.position.x-t.x)/Math.max(1,m)*1e3),y:Math.round(Math.abs(s.current.position.y-t.y)/Math.max(1,m)*1e3)},N=n(n({},s.current),{scrolling:!0,time:Math.round(i),direction:a,speed:E,totalDistance:r,relativeDistance:l,position:t});s.current=N,u(N),x.current=e,g.current=requestAnimationFrame(h)}function N(){s.current.scrolling||(o.current=n({},s.current),g.current=requestAnimationFrame(h),"function"===typeof e.onScrollStart&&e.onScrollStart()),E.current&&clearTimeout(E.current),E.current=setTimeout(_,r)}function _(){s.current=n(n({},s.current),{scrolling:!1,time:0,direction:{x:null,y:null},speed:{x:0,y:0},totalDistance:{x:0,y:0},relativeDistance:{x:0,y:0}}),u(s.current),cancelAnimationFrame(g.current),f.current=null,x.current=null,"function"===typeof e.onScrollEnd&&e.onScrollEnd()}return Object(a.useEffect)((function(){if(m)return window.addEventListener("scroll",N,!0),function(){clearTimeout(E.current),window.removeEventListener("scroll",N,!0)}}),[]),t},x=function(){var e=f({onScrollStart:function(){},onScrollEnd:function(){}}),i=e.scrolling,t=e.time,a=e.speed,o=e.direction,s=e.position,n=e.relativeDistance,r=e.totalDistance;return u.a.createElement("div",null,u.a.createElement("div",{className:"scroll-data"},u.a.createElement("div",{className:"scroll-data__inner"},u.a.createElement("div",{className:"data-item"},u.a.createElement("div",{className:"data-item__inner"},u.a.createElement("div",{className:"data-item__label"},"isScrolling"),u.a.createElement("div",{className:"data-item__value"},i?"Yes":"No"))),u.a.createElement("div",{className:"data-item"},u.a.createElement("div",{className:"data-item__inner"},u.a.createElement("div",{className:"data-item__label"},"Time (ms)"),u.a.createElement("div",{className:"data-item__value"},t))),u.a.createElement("div",{className:"data-item"},u.a.createElement("div",{className:"data-item__inner"},u.a.createElement("div",{className:"data-item__label"},"Direction"),u.a.createElement("div",{className:"data-item__value"},"X: ",o.x,", Y: ",o.y))),u.a.createElement("div",{className:"data-item"},u.a.createElement("div",{className:"data-item__inner"},u.a.createElement("div",{className:"data-item__label"},"Speed (px/s)"),u.a.createElement("div",{className:"data-item__value"},"X: ",a.x,", Y: ",a.y))),u.a.createElement("div",{className:"data-item"},u.a.createElement("div",{className:"data-item__inner"},u.a.createElement("div",{className:"data-item__label"},"Relative Distance"),u.a.createElement("div",{className:"data-item__value"},"X: ",n.x,", Y: ",n.y))),u.a.createElement("div",{className:"data-item"},u.a.createElement("div",{className:"data-item__inner"},u.a.createElement("div",{className:"data-item__label"},"Total Distance"),u.a.createElement("div",{className:"data-item__value"},"X: ",r.x,", Y: ",r.y))),u.a.createElement("div",{className:"data-item"},u.a.createElement("div",{className:"data-item__inner"},u.a.createElement("div",{className:"data-item__label"},"Current position"),u.a.createElement("div",{className:"data-item__value"},"X: ",s.x,", Y: ",s.y))))),u.a.createElement("div",{className:"page-container"},u.a.createElement("h1",null,"ScrollData Hook demo"),u.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"),u.a.createElement("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."),u.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"),u.a.createElement("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."),u.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"),u.a.createElement("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."),u.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"),u.a.createElement("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."),u.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),u.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"),u.a.createElement("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.")))};s.a.render(u.a.createElement(x,null),document.getElementById("root"))},2:function(e,i,t){e.exports=t(10)},9:function(e,i,t){}},[[2,1,2]]]);
//# sourceMappingURL=main.01f33f52.chunk.js.map