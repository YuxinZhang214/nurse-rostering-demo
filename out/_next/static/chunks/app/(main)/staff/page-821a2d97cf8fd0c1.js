(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{9881:function(e,l,t){Promise.resolve().then(t.bind(t,8847))},8847:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return C}});var s=t(7437),r=t(5220),a=t(6035),i=t(9898),n=t(6465),o=(0,a.G)((e,l)=>{var t;let{overflow:r,overflowX:a,className:o,...c}=e;return(0,s.jsx)(i.m.div,{ref:l,className:(0,n.cx)("chakra-table__container",o),...c,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(t=null!=r?r:a)?t:"auto",overflowY:"hidden",maxWidth:"100%"}})}),c=t(8519),d=t(446),[m,u]=(0,t(310).k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),h=(0,a.G)((e,l)=>{let t=(0,c.jC)("Table",e),{className:r,layout:a,...o}=(0,d.Lr)(e);return(0,s.jsx)(m,{value:t,children:(0,s.jsx)(i.m.table,{ref:l,__css:{tableLayout:a,...t.table},className:(0,n.cx)("chakra-table",r),...o})})});h.displayName="Table";var x=(0,a.G)((e,l)=>{let t=u();return(0,s.jsx)(i.m.thead,{...e,ref:l,__css:t.thead})}),f=(0,a.G)((e,l)=>{let t=u();return(0,s.jsx)(i.m.tr,{...e,ref:l,__css:t.tr})}),j=(0,a.G)(({isNumeric:e,...l},t)=>{let r=u();return(0,s.jsx)(i.m.th,{...l,ref:t,__css:r.th,"data-is-numeric":e})}),b=(0,a.G)((e,l)=>{let t=u();return(0,s.jsx)(i.m.tbody,{...e,ref:l,__css:t.tbody})}),v=(0,a.G)(({isNumeric:e,...l},t)=>{let r=u();return(0,s.jsx)(i.m.td,{...l,ref:t,__css:r.td,"data-is-numeric":e})}),p=t(9900),g=t(1730),w=t(7305),_=t(7839),k=t(4305),N=t(2265),S=t(1517),I=t(3159),y=t(9150),C=()=>{let{isOpen:e,onOpen:l,onClose:t}=(0,r.q)(),[a,i]=(0,N.useState)(""),{staffList:n,addStaffMember:c}=(0,S.Z)(),d=e=>{i(e),l()};return(0,s.jsxs)("main",{children:[(0,s.jsx)("div",{className:"flex ml-1 md:ml-5 items-center justify-left h-full bg-surface1 rounded-xl",children:(0,s.jsx)(o,{className:"w-full hover-shadow rounded-xl overflow-visible",children:(0,s.jsxs)(h,{variant:"simple",size:"lg",className:"w-full",children:[(0,s.jsx)(x,{children:(0,s.jsxs)(f,{children:[(0,s.jsx)(j,{hidden:!0,children:"Id"}),(0,s.jsx)(j,{className:"border-b-0",children:"Name"}),(0,s.jsx)(j,{className:"border-b-0 invisible md:visible",children:"Qualifications"})]})}),(0,s.jsx)(b,{children:n&&n.map(e=>(0,s.jsxs)(f,{cursor:"pointer",className:"hover:bg-surface1 rounded-xl",onClick:()=>{d(e.id)},children:[(0,s.jsx)(v,{hidden:!0,children:e.name}),(0,s.jsx)(v,{className:"border-b-0",children:e.name}),(0,s.jsx)(v,{className:"border-b-0 invisible md:visible",children:(0,s.jsx)(p.E,{children:e.skills.map((e,l)=>(0,s.jsx)(p.U,{children:(0,s.jsx)(g.C,{size:"lg",children:e})},l))})})]},e.id))})]})})}),(0,s.jsxs)("div",{className:"flex ml-1 mt-4 md:ml-5 items-center justify-between h-full rounded-xl",children:[(0,s.jsx)(w.z,{leftIcon:(0,s.jsx)(I.Xur,{}),variant:"outline",children:(0,s.jsx)("label",{htmlFor:"import",className:"",children:"Import"})}),(0,s.jsx)(_.I,{className:"hidden",type:"file",id:"import",variant:"outline",placeholder:"Import",onChange:e=>{let l=e.target.files[0];if(l){let e=new FileReader;e.onload=e=>{var l;let t=null===(l=e.target)||void 0===l?void 0:l.result;if("string"==typeof t){let[e,l,s]=t.split("|||");localStorage.staffList=e,localStorage.skillList=l,localStorage.schedule=s}},e.readAsText(l)}window.location.reload()}}),(0,s.jsx)(w.z,{leftIcon:(0,s.jsx)(y.XzY,{}),variant:"outline",onClick:()=>{localStorage.removeItem("staffList"),localStorage.removeItem("skillList"),localStorage.removeItem("schedule"),window.location.reload()},children:"Clear All"}),(0,s.jsx)(w.z,{leftIcon:(0,s.jsx)(I.u$v,{}),variant:"outline",onClick:()=>{console.log("started");let e=localStorage.getItem("staffList"),l=localStorage.getItem("skillList"),t=localStorage.getItem("schedule");if(e&&l&&t){let s=document.getElementById("exportLink"),r=new Blob([e,"|||",l,"|||",t],{type:"octet/stream"}),a="Staff_"+Date.now()+".json",i=window.URL.createObjectURL(r);console.log(s),s&&(s.setAttribute("href",i),s.setAttribute("download",a),s.click())}},children:"Export"}),(0,s.jsx)("a",{id:"exportLink",className:"hidden",children:"Export"})]}),(0,s.jsx)(k.Z,{staffId:a,isModalOpen:e,onModalOpen:l,onModalClose:t})]})}}},function(e){e.O(0,[582,420,712,854,437,454,625,305,971,596,744],function(){return e(e.s=9881)}),_N_E=e.O()}]);