"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[857],{857:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(791),o=n(434),r="NameContactsList_contacts__XJtW7",s="NameContactsList_contacts__list__I4Cl9",c="NameContactsList_item__content__BT3qC",i="NameContactsList_contacts__btn__9vGLa",l=n(208),u=n(329),_=function(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.contacts.items})),n=(0,o.v9)((function(e){return e.filter}));console.log(n),console.log(t);var a=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return(0,u.jsx)("div",{className:r,children:(0,u.jsx)("ul",{className:s,children:a.length>0?a.map((function(t){var n=t.id,a=t.name,o=t.number;return(0,u.jsx)("li",{children:(0,u.jsxs)("div",{className:c,children:[a,": ",o,(0,u.jsx)("button",{className:i,type:"button",onClick:function(){return e((0,l.GK)(n))},children:"Delete"})]})},n)})):null})})},m=n(439),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},h="PhonebookForm_phonebook__gIbYH",f="PhonebookForm_phonebook__form__E5kS6",p="PhonebookForm_phonebook__label__U+Cq+",b="PhonebookForm_phonebook__input__7lcvp",v="PhonebookForm_phonebook__btn__+cRIC",x=function(){var e=(0,a.useState)(""),t=(0,m.Z)(e,2),n=t[0],r=t[1],s=(0,a.useState)(""),c=(0,m.Z)(s,2),i=c[0],_=c[1],x=(0,o.v9)((function(e){return e.contacts.items})),j=(0,o.I0)();return(0,u.jsx)("div",{className:h,children:(0,u.jsxs)("form",{className:f,onSubmit:function(e){if(e.preventDefault(),x.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))window.alert("".concat(n," is already in contacts"));else{var t={id:d(),number:i,name:n};j((0,l.el)(t))}r(""),_("")},children:[(0,u.jsxs)("label",{className:p,children:["Name",(0,u.jsx)("input",{className:b,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:function(e){return r(e.target.value)}})]}),(0,u.jsxs)("label",{className:p,children:["Numder",(0,u.jsx)("input",{className:b,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:i,onChange:function(e){return _(e.target.value)}})]}),(0,u.jsx)("button",{className:v,type:"submit",children:"Add contact"})]})})},j="Filter_filter__label__ttfPR",C="Filter_filter__text__aAasw",N="Filter_filter__input__toa89",g=n(429),k=function(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.filter}));return(0,u.jsxs)("label",{className:j,children:[(0,u.jsx)("span",{className:C,children:"Find contacts by name"}),(0,u.jsx)("input",{className:N,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Enter the person's name",value:t,onInput:function(t){return e((0,g.p)(t.target.value.toLowerCase()))}})]})};function y(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.contacts.isLoading})),n=(0,o.v9)((function(e){return e.contacts.error}));(0,a.useEffect)((function(){e((0,l.yF)())}),[e]);var r={title:{fontWeight:500,fontSize:34}};return(0,u.jsxs)("section",{children:[(0,u.jsx)("h2",{style:r.title,children:"Phonebook"}),(0,u.jsx)(x,{}),(0,u.jsx)("h2",{style:r.title,children:"Contacts"}),t&&!n&&(0,u.jsx)("p",{children:"Request in progress..."}),(0,u.jsx)(k,{}),(0,u.jsx)(_,{})]})}}}]);
//# sourceMappingURL=857.06facc91.chunk.js.map