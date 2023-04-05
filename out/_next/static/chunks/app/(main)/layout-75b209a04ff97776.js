(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{8780:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var s=t(9268);t(6006);var l=t(1476),r=t(6470),i=t(2103),a=t(5161),o=t(7886),c=t(6951),d=t(2197),u=t(8029),h=t(7579),x=t(3734),f=t(4821),m=t(5846),p=t.n(m),j=t(3393),b=t(3634),g=t(6008);let C=e=>{let{children:n}=e;return(0,s.jsx)(y,{children:n})},v=[{name:"Dashboard",icon:f.JZ9,iconActive:f.bUq,href:"/dashboard"},{name:"Staff",icon:f.snE,iconActive:f.te,href:"/staff"},{name:"Qualifications",icon:f.Ze$,iconActive:f.MVI,href:"/qualifications"},{name:"Calendar",icon:f.CLb,iconActive:f.mbS,href:"/calendar"}];function y(e){let{children:n}=e,{isOpen:t,onOpen:c,onClose:d}=(0,l.q)();return(0,s.jsxs)(r.xu,{children:[(0,s.jsxs)(i.k,{children:[(0,s.jsx)(k,{onClose:()=>d,display:{base:"none",md:"block"},className:"bg-surface m-4 rounded-xl"}),(0,s.jsx)(a.d,{autoFocus:!1,isOpen:t,placement:"left",onClose:d,returnFocusOnClose:!1,onOverlayClick:d,size:"full",children:(0,s.jsx)(o.s,{children:(0,s.jsx)(k,{onClose:d})})}),(0,s.jsx)(w,{onOpen:c})]}),(0,s.jsx)(r.xu,{ml:{base:0,md:60},p:"4",children:n})]})}let k=e=>{let{onClose:n,...t}=e;return(0,s.jsxs)(r.xu,{transition:"500ms ease",w:{base:"full",md:60},pos:"fixed",h:"100%",sx:{height:"calc(100vh - 2rem)"},...t,children:[(0,s.jsxs)(i.k,{h:"20",alignItems:"center",mx:"8",justifyContent:"space-between",children:[(0,s.jsx)(p(),{href:"/",children:(0,s.jsx)("img",{src:"",alt:"NRP",className:"w-36 text-3xl font-bold pl-2",draggable:!1})}),(0,s.jsx)(c.P,{display:{base:"flex",md:"none"},onClick:n})]}),(0,s.jsx)(i.k,{flexDirection:"column",justifyContent:"space-between",className:"h-[calc(100%-10rem)]",children:(0,s.jsx)(r.xu,{className:"[& p]:mt-0",children:v.map(e=>(0,s.jsx)(N,{icon:e.icon,iconActive:e.iconActive,href:e.href,onClick:n,children:e.name},e.name))})})]})},N=e=>{let{icon:n,iconActive:t,href:l,children:r,...a}=e,o=(0,g.usePathname)();return(0,s.jsx)(p(),{href:l,style:{textDecoration:"none"},children:(0,s.jsxs)(i.k,{align:"center",py:"3",px:"6",mx:"4",my:"2",borderRadius:"400",role:"group",cursor:"pointer",width:"fit-content",_hover:{bg:"rgba(231, 233, 234, 0.5)"},className:o===l?"bg-secondaryContainer text-primaryText":"",...a,children:[n&&(0,s.jsx)(d.J,{mr:"4",fontSize:"16",_groupHover:{},as:o===l?t:n}),(0,s.jsx)("p",{className:o===l?"font-bold":"",children:r})]})})},w=e=>{let{onOpen:n,...t}=e,{isOpen:r,onOpen:a,onClose:o}=(0,l.q)(),c=(0,g.usePathname)();return(0,s.jsxs)(i.k,{ml:{base:5,md:"275px"},px:{base:4,md:4},height:"14",width:"100%",alignItems:"center",className:"bg-surface1 rounded-xl mr-4 mt-4",borderBottomWidth:"1px",borderBottomColor:(0,u.ff)("gray.200","gray.800"),justifyContent:{base:"space-between",md:"flex-end"},...t,children:[(0,s.jsx)(h.h,{display:{base:"flex",md:"none"},onClick:n,variant:"outline","aria-label":"open menu",className:"border-none",icon:(0,s.jsx)(j.cur,{})}),(0,s.jsxs)(x.U,{className:"w-full justify-between pl-4",spacing:{base:"0",md:"6"},children:[(0,s.jsx)(i.k,{className:"uppercase font-bold",justifyContent:"space-between",children:(0,s.jsx)("p",{className:"text-bottom pt-1",children:c?c.slice(1):""})}),"/staff"===c?(0,s.jsx)(h.h,{className:"bg-primary text-white","aria-label":"Add staff",icon:(0,s.jsx)(f.WZt,{}),onClick:a}):null]}),(0,s.jsx)(b.ZP,{isModalOpen:r,onModalOpen:a,onModalClose:o})]})};function S(e){let{children:n}=e;return(0,s.jsx)(C,{children:n})}},3634:function(e,n,t){"use strict";t.d(n,{Cb:function(){return w},HU:function(){return S}});var s=t(9268),l=t(2132),r=t(9414),i=t(5368),a=t(3998),o=t(6626),c=t(9109),d=t(4651),u=t(32),h=t(5834),x=t(3302),f=t(9015),m=t(1304),p=t(6470),j=t(9058),b=t(5136),g=t(2103),C=t(8271),v=t(686),y=t(1747),k=t(6006),N=t(9727);let w=[{label:"Preferred Shift Time",defaultIndex:0,selectedIndex:0,options:["Day","Night"]},{label:"Maximum Working Days in a Row",defaultIndex:3,selectedIndex:3,options:[...Array.from({length:4},(e,n)=>(n+0).toString())]}],S=e=>{let n=[];return n.push((0,s.jsx)("option",{value:e.options[e.selectedIndex],disabled:!0,hidden:!0,children:e.options[e.selectedIndex]},"default")),e.options.forEach((e,t)=>{n.push((0,s.jsx)("option",{value:t,children:e},t))}),n},O=e=>{let{isModalOpen:n,onModalOpen:t,onModalClose:O}=e,{skillList:I,addStaffMember:A}=(0,N.Z)(),[P,Z]=k.useState(""),[E,_]=k.useState(""),[F,U]=(0,k.useState)(""),[D,z]=(0,k.useState)(["STAFF"]),M=k.useRef(null),T=e=>{"STAFF"!==e&&z(n=>n.includes(e)?n.filter(n=>n!==e):[...n,e])},q=e=>{if("Enter"===e.key&&""!==F.trim()){e.preventDefault();let n=F.trim().toUpperCase();D.includes(n)||z(e=>[...e,n]),U("")}},L=()=>{""!==P.trim()&&(A(P.trim(),D,w),Z(""),_(""),z(["STAFF"]),O())},R=e=>{"Enter"===e.key&&L()};return(0,s.jsxs)(l.u_,{isOpen:n,onClose:O,children:[(0,s.jsx)(r.Z,{}),(0,s.jsxs)(i.h,{children:[(0,s.jsx)(a.x,{children:"Create staff member"}),(0,s.jsx)(o.o,{}),(0,s.jsx)(c.f,{children:(0,s.jsxs)("form",{className:"flex flex-col gap-4",onKeyPress:R,children:[(0,s.jsx)(d.I,{onChange:e=>Z(e.target.value),placeholder:"Name",value:P}),(0,s.jsx)(d.I,{onChange:e=>U(e.target.value),onKeyDown:q,placeholder:"New Qualification",value:F}),(0,s.jsxs)(u.E,{children:[Object.keys(I).map((e,n)=>(0,s.jsx)(u.U,{children:(0,s.jsx)(h.C,{size:"l",onClick:()=>T(e),colorScheme:D.includes(e)?"purple":"gray",cursor:"pointer",children:e},n)},n)),D.filter(e=>!I.hasOwnProperty(e)).map((e,n)=>(0,s.jsx)(u.U,{children:(0,s.jsx)(h.C,{size:"l",onClick:()=>T(e),colorScheme:D.includes(e)?"purple":"gray",cursor:"pointer",children:e},"new-".concat(n))},n))]}),(0,s.jsx)(x.U,{allowToggle:!0,children:(0,s.jsxs)(f.Q,{children:[(0,s.jsx)("h2",{children:(0,s.jsxs)(m.K,{children:[(0,s.jsx)(p.xu,{flex:"1",textAlign:"left",children:"Constraints"}),(0,s.jsx)(j.X,{})]})}),(0,s.jsx)(b.H,{pb:4,children:w.map((e,n)=>(0,s.jsxs)("div",{className:"flex my-4 gap-4",children:[(0,s.jsx)(g.k,{className:"text-sm basis-[150%] items-center justify-end",children:(0,s.jsx)("label",{className:"align-right text-right",children:e.label})}),(0,s.jsx)(C.P,{className:"my-1",defaultValue:e.defaultIndex,onChange:n=>{e.selectedIndex=parseInt(n.target.value)},children:S(e)},n)]},n))})]})})]})}),(0,s.jsxs)(v.m,{children:[(0,s.jsx)(y.z,{onClick:O,variant:"ghost",children:"Cancel"}),(0,s.jsx)(y.z,{className:"bg-primary text-white hover:shadow-lg hover:bg-opacity-80",mr:3,onClick:L,disabled:""===P.trim(),ref:M,children:"Create"})]})]})]})};n.ZP=O},9727:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var s=t(5793),l=t(6462);function r(){let[e,n]=(0,s.Z)("staffList",{defaultValue:[]}),[t,r]=(0,s.Z)("skillList",{defaultValue:{}}),i=(s,i,a)=>{i=i.map(e=>e.toUpperCase());let o={id:(0,l.Z)(),name:s,skills:i,constraints:a};n([...e,o]),r({...t,...i.reduce((e,n)=>{var s;return{...e,[n]:{count:((null===(s=t[n])||void 0===s?void 0:s.count)||0)+1,minCount:0}}},{})})},a=t=>{let s=e.filter(e=>e.id!==t);n(s);let l=c(t,[]);r(l)},o=(t,s,l,i)=>{let a=e.map(e=>e.id===t?{id:t,name:s,skills:l,constraints:i}:e);n(a);let o=c(t,l);r(o)},c=(n,s)=>{let l=s.filter(e=>!t.hasOwnProperty(e));return l.forEach(e=>{t[e]={count:0,minCount:0}}),Object.entries(t).reduce((t,l)=>{var r,i;let[a,o]=l,c=null!==(i=null===(r=e.find(e=>e.id===n))||void 0===r?void 0:r.skills.filter(e=>e===a).length)&&void 0!==i?i:0,d=o.count-c,u=s.filter(e=>e===a).length;return{...t,...d+u>0?{[a]:{count:d+u,minCount:0}}:{}}},{})},d=(e,n)=>{t[e]?r({...t,[e]:{...t[e],minCount:n}}):console.warn('Skill "'.concat(e,'" not found in skillList.'))};return{staffList:e,skillList:t,addStaffMember:i,removeStaffMember:a,updateStaffMember:o,countStaffMembers:()=>e.length,setSkillMinCount:d}}},7787:function(e,n,t){Promise.resolve().then(t.bind(t,8780))}},function(e){e.O(0,[739,902,133,368,389,163,916,744],function(){return e(e.s=7787)}),_N_E=e.O()}]);