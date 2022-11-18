(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{32:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(6);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},33:function(e,t,n){"use strict";var r=n(32),c=n(3),s=n(7),o=n(5),a=n(0);function u(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(a.useReducer)(u,{status:t?"pending":null,data:null,error:null}),i=Object(o.a)(n,2),m=i[0],j=i[1],d=Object(a.useCallback)(function(){var t=Object(s.a)(Object(c.a)().mark((function t(n){var r;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,j({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),j({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:d},m)}},34:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return p}));var r=n(3),c=n(32),s=n(7),o="https://quotes-216e6-default-rtdb.firebaseio.com";function a(){return u.apply(this,arguments)}function u(){return(u=Object(s.a)(Object(r.a)().mark((function e(){var t,n,s,a,u;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(a in s=[],n)u=Object(c.a)({id:a},n[a]),s.push(u);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(Object(r.a)().mark((function e(t){var n,s,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(s=e.sent,n.ok){e.next=8;break}throw new Error(s.message||"Could not fetch quote.");case 8:return a=Object(c.a)({id:t},s),e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(Object(r.a)().mark((function e(t){var n,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return l.apply(this,arguments)}function l(){return(l=Object(s.a)(Object(r.a)().mark((function e(t){var n,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:c.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=Object(s.a)(Object(r.a)().mark((function e(t){var n,s,a,u,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(s=e.sent,n.ok){e.next=8;break}throw new Error(s.message||"Could not get comments.");case 8:for(u in a=[],s)i=Object(c.a)({id:u},s[u]),a.push(i);return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},35:function(e,t,n){"use strict";var r=n(36),c=n.n(r),s=n(4);t.a=function(){return Object(s.jsx)("div",{className:c.a.spinner})}},36:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__scOrC"}},39:function(e,t,n){e.exports={quote:"HighlightedQuote_quote__1URlM"}},40:function(e,t,n){e.exports={comments:"Comments_comments__2sf_E"}},41:function(e,t,n){e.exports={form:"NewCommentForm_form__2E8Q6",loading:"NewCommentForm_loading__1QiYn",control:"NewCommentForm_control__11dZW",actions:"NewCommentForm_actions__1ifKS"}},42:function(e,t,n){e.exports={item:"CommentItem_item__sWVb9"}},43:function(e,t,n){e.exports={comments:"CommentsList_comments__2OHz1"}},48:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(39),s=n.n(c),o=n(4),a=function(e){return Object(o.jsxs)("figure",{className:s.a.quote,children:[Object(o.jsx)("p",{children:e.text}),Object(o.jsx)("figcaption",{children:e.author})]})},u=n(5),i=n(2),m=n(40),j=n.n(m),d=n(33),b=n(34),l=n(41),p=n.n(l),f=n(35),O=function(e){var t=Object(r.useRef)(),n=Object(d.a)(b.a),c=n.sendRequest,s=n.status,a=e.onAddComment;Object(r.useEffect)((function(){"completed"===s&&a()}),[s,a]);var u=function(n){n.preventDefault();var r=t.current.value;c({commentData:{text:r},quoteId:e.quoteId})};return Object(o.jsxs)("form",{className:p.a.form,onSubmit:u,children:["pending"===s&&Object(o.jsx)("div",{className:"centered",children:Object(o.jsx)(f.a,{})}),Object(o.jsxs)("div",{className:p.a.control,onSubmit:u,children:[Object(o.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(o.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(o.jsx)("div",{className:p.a.actions,children:Object(o.jsx)("button",{className:"btn",children:"Add Comment"})})]})},h=n(42),x=n.n(h),v=function(e){return Object(o.jsx)("li",{className:x.a.item,children:Object(o.jsx)("p",{children:e.text})})},w=n(43),g=n.n(w),y=function(e){return Object(o.jsx)("ul",{className:g.a.comments,children:e.comments.map((function(e){return Object(o.jsx)(v,{text:e.text},e.id)}))})},C=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(i.o)(),a=s.quoteid,m=Object(d.a)(b.c),l=m.sendRequest,p=m.status,h=m.data;Object(r.useEffect)((function(){l(a)}),[a,l]);var x,v=Object(r.useCallback)((function(){l(a)}),[l,a]);return"pending"===p&&(x=Object(o.jsx)(f.a,{})),"completed"===p&&h&&(x=Object(o.jsx)(y,{comments:h})),"completed"!==p||h&&0!==h.length||(x=Object(o.jsx)("p",{className:"centered",children:"no comments added yet"})),Object(o.jsxs)("section",{className:j.a.comments,children:[Object(o.jsx)("h2",{children:"User Comments"}),!n&&Object(o.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(o.jsx)(O,{quoteId:s.quoteid,onAddComment:v}),x]})},_=n(12);t.default=function(){var e=Object(i.o)(),t=e.quoteid,n=Object(d.a)(b.e,!0),c=n.sendRequest,s=n.status,u=n.data,m=n.error;return Object(r.useEffect)((function(){c(t)}),[c,t]),"pending"===s?Object(o.jsx)("div",{className:"centered",children:Object(o.jsx)(f.a,{})}):m?Object(o.jsx)("p",{className:"centered focused",children:m}):(u.text,Object(o.jsxs)("div",{children:[Object(o.jsx)(a,{text:u.text,author:u.author}),Object(o.jsx)("div",{className:"centered",children:Object(o.jsx)(_.b,{className:"btn--flat",to:"/allquotes/".concat(e.quoteid,"/comment"),children:"Add Comment"})}),Object(o.jsx)(i.d,{children:Object(o.jsx)(i.b,{path:"/comment",element:Object(o.jsx)(C,{})})})]}))}}}]);
//# sourceMappingURL=3.b3732521.chunk.js.map