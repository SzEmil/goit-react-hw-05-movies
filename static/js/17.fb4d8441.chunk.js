"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[17],{866:function(e,t,n){n.d(t,{a:function(){return i}});n(791);var r=n(402),s=n(184),i=function(e){var t=e.isLoading;return(0,s.jsx)(s.Fragment,{children:t&&(0,s.jsx)(r.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},608:function(e,t,n){n.d(t,{O:function(){return f}});n(791);var r=n(87),s=n(182),i="MovieList_movieList__FvhbG",a="MovieList_movieListCard__ActnW",o="MovieList_movieItem__eDX7p",c="MovieList_movieImgContainer__BBwMj",u="MovieList_movieImg__Y9deq",l="MovieList_movieDesription__Nwn4N",m="MovieList_movieVote__kxUEv",v="MovieList_movieIcon__10IVM",p="MovieList_movieListNoImg__3BU-E",h=n(689),d=n(184),f=function(e){var t=e.movies,n=(0,h.TH)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{className:(0,s.Z)(i),children:t.map((function(e){return(0,d.jsx)("li",{className:(0,s.Z)(o),children:(0,d.jsx)(r.rU,{to:"/movies/".concat(e.id),state:{from:n},children:(0,d.jsx)("div",{className:(0,s.Z)(a),children:(0,d.jsxs)("div",{className:(0,s.Z)(c),children:[null===e.poster_path?(0,d.jsx)("img",{className:(0,s.Z)(p),src:"https://www.izba.lodz.pl/wp-content/themes/consultix/images/no-image-found-360x260.png",alt:"no pic found"}):(0,d.jsx)("img",{className:(0,s.Z)(u),src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:"som pic"}),(0,d.jsxs)("div",{className:(0,s.Z)(l),children:[(0,d.jsx)("p",{children:e.original_title}),(0,d.jsx)("p",{children:e.release_date}),(0,d.jsxs)("p",{className:(0,s.Z)(m),children:[(0,d.jsx)("img",{className:(0,s.Z)(v),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACp0lEQVRIS61VQUgUURh+/5td2cTdebMIIoJ6iYIuQtcK65AHM8xL0KEILehSK106BNap43YLUtNbdWlXyqKIDPEckRBEQRIUGbn7Zlw1Hef/ezOgTbuzu2+jd5g5zHvf93/v/75/gDWwVvPmaX97ctB+qHsMdDf6+5zn5kf/neqz9+qe0yYoPLIOGa04zzgD7wc/nB4qLuiQaBM4z8QcJanXB4U19klXhRZBcVZ08SR99qsPqkZG5hGb/zcF8omYAEHDYUCyIS/65al6JFoKnFdinZpoz19gmirqEjiPrVtk4bWoSknCpDghR2qpqEtgvzSLLMFEFAhswUbqmGyuSVCcEiJmUR8ZvAc57QeDdUGc2hmASTFK7Da2Ggqqlm8xBxA2CNgyIFtCog/g0rw54DwFezyd4QnKYicyZtRrmeZ3T1n5O18jB64HV7Q6LnpZE5/DDkWSIE2UKtt+AeNfuUMunEuNrOR3e1C6K3pYnM94HdjJmv+RZD0AXwQXz7ZclG+DUIbrCPrhQY7aqJesxkigCAxWYGGbaMA6L+UObqSLSpPprLfPyzRyV8YX4567iVfD4BUKdgCD0WDSUiME1QZgpIJa4apKarP7Zr99pvx7NEFocuqqgHV4nzouD+gRvBDfqFmFLbx8b/9UA1Q5mVrVI14GpQKnJmxFkiIV2PMm7ibYBy4phyxzGz12Awgk5zSGbdhd7jR0wbKO/nFQZJP9/y62sgdBfb6vlxX4Jky7Bo6GHeI7TU3YDLYrO++EswCj5kl5O6ytQoGcFTlooUH/OsCBRbaNl5MX5OuoXgTh5DyHFnVTm5rfEf+ICgJnRrxTl9CFW2wMYzhd7usoomCexViWmfgmOSQP1lRQmkhPuS7etC7JhnJQvCO64038SstwYTRM8BtUgh82sAYgSQAAAABJRU5ErkJggg==",alt:"star pic"}),e.vote_average]})]})]})})})},e.id)}))})})}},17:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(861),s=n(439),i=n(757),a=n.n(i),o=n(791),c=n(182),u="SearchMovieForm_searchForm__XEN1f",l="SearchMovieForm_searchInput__iyl8+",m="SearchMovieForm_searchButton__xhPWd",v=n(184),p=function(e){var t=e.onSubmit;return(0,v.jsxs)("form",{className:u,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,r=n.elements.text.value;t(r),n.reset()},children:[(0,v.jsx)("input",{className:l,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search videos",name:"text"}),(0,v.jsx)("button",{className:(0,c.Z)(m),type:"submit",children:"Search"})]})},h=n(934),d=n(440),f=n(608),g=n(866),x="BtnNextPage_btn__c-dPb",_=function(e){var t=e.handleOnClick;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("button",{type:"button",className:(0,c.Z)(x),onClick:t,children:"Next Page"})})},b=n(87),j="BtnPreviousPage_btn__jHBxp",w=function(e){var t=e.handleOnClick;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("button",{type:"button",className:(0,c.Z)(j),onClick:t,children:"PreviousPage"})})},Z="Movies_movieListContainer__TUXpJ",k="Movies_movieListBtnWrapper__DuVgM",A="Movies_movieListPage__o8SmG",M="Movies_movieListNoMovies__EzVvS",N=function(){var e=(0,h.tG)(),t=e.movies,n=e.setMovies,i=(0,b.lr)(),u=(0,s.Z)(i,2),l=u[0],m=u[1],x=(0,o.useState)(!1),j=(0,s.Z)(x,2),N=j[0],L=j[1],S=(0,o.useState)(null),C=(0,s.Z)(S,2),y=C[0],B=C[1],F=(0,o.useState)(0),U=(0,s.Z)(F,2),D=U[0],z=U[1],E=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L(!0),m(""!==t?{query:t}:{});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=l.get("query");(0,o.useEffect)((function(){if(null!==I){var e=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(1),e.prev=1,e.next=4,(0,d.Wf)(I,1);case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),B(e.t0);case 11:return e.prev=11,L(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[n,I]),(0,o.useEffect)((function(){n([])}),[n]);var P=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.prev=1,e.next=4,(0,d.Wf)(I,D+1);case 4:t=e.sent,console.log("dostarczam nowe moviesy na stronie",D),z(D+1),n(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),B(e.t0);case 13:return e.prev=13,L(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.prev=1,e.next=4,(0,d.Wf)(I,D-1);case 4:t=e.sent,z(D-1),n(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),B(e.t0);case 12:return e.prev=12,L(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:(0,c.Z)(Z),children:[(0,v.jsx)(p,{onSubmit:E}),y&&(0,v.jsxs)("p",{children:["Oh, something went wrong :c error: ",y.message]}),0===t.length?(0,v.jsx)("p",{className:(0,c.Z)(M),children:"sorry, video you looking for doesn't exist"}):(0,v.jsx)(f.O,{movies:t}),(0,v.jsx)(g.a,{isLoading:N}),0===D||0===t.length?null:(0,v.jsxs)("div",{className:(0,c.Z)(k),children:[1===D?(0,v.jsx)(v.Fragment,{}):(0,v.jsx)(w,{handleOnClick:q}),(0,v.jsx)("p",{className:(0,c.Z)(A),children:D}),(0,v.jsx)(_,{handleOnClick:P})]})]})})}}}]);
//# sourceMappingURL=17.fb4d8441.chunk.js.map