"use strict";(self.webpackChunksen_chat=self.webpackChunksen_chat||[]).push([[572],{84980:(e,t,l)=>{l.d(t,{A:()=>d});var s=l(65043),a=l(51318),i=l(42039),r=l(38489),x=l(21263),n=l(25108),c=l(99052),m=l(70579);const d=e=>{const[t,l]=(0,s.useState)(),[d,o]=(0,s.useState)([]),p="0x29c1b65fdac043877744270c32eb579c49374ac5";(0,s.useEffect)((()=>{if(t&&(0,n.a6)(t)){window.web3=new c.Ay$(t);const e=window.web3,l=async t=>{try{const l=await new e.eth.Contract(r,p).methods.tokenByIndex("".concat(t)).call(),s=await new e.eth.Contract(r,p).methods.tokenURI("".concat(l)).call();if(l.toString().startsWith("2"))return{tokenId:l,tokenURI:s}}catch(l){return console.error("Error fetching details for token at index ".concat(t,":"),l.message),null}},s=async(e,t)=>{const s=[],a=Array.from({length:t-e+1},((e,s)=>l(t-s)));return(await Promise.all(a)).filter((e=>null!==e)).forEach((e=>s.push(e))),s};(async()=>{const e=await new window.web3.eth.Contract(r,p).methods.totalSupply().call(),t=parseInt(e,10),l=await s(0,t-1);for(const s of l)if(void 0!==s&&void 0!==s.tokenId&&void 0!==s.tokenURI){if(s.tokenURI.startsWith("ipfs://"))try{const e=s.tokenURI.replace("ipfs://",""),t="https://cloudflare-ipfs.com/ipfs/".concat(e),l=await fetch(t);if(!l.ok)throw new Error("Failed to fetch from IPFS. Status: ".concat(l.status));const a=await l.json(),i=a.image.replace("ipfs://",""),r="https://cloudflare-ipfs.com/ipfs/".concat(i);let x="";if(a.userimage){const e=a.userimage.replace("ipfs://","");x="https://cloudflare-ipfs.com/ipfs/".concat(e)}const n=new Date(a.date),c=n.getHours(),m=n.getMinutes(),d=n.toLocaleDateString([],{year:"numeric",month:"2-digit",day:"2-digit"});o((t=>[...t,{data:r,titleofprops:a.username,anasabdin:a.description,education:"Feeds",userimage:x,time:"".concat(c,":").concat(m," ").concat(d),cid:e,repliescounter13:"",anasabdinone10:a.username}]))}catch(a){console.error("Error fetching from IPFS: ".concat(a.message))}}})()}}),[t]);return(0,m.jsxs)("div",{className:e.className,children:[(0,m.jsx)(x.pK.Custom,{children:e=>{let{chain:t}=e;t&&l(t.rpcUrl)}}),Array.isArray(d)?d.map(((e,t)=>{return(0,m.jsxs)("div",{className:"flex flex-col gap-[20px] items-center w-full shadow-xl",children:[(0,m.jsx)("div",{children:e.titleofthread}),(0,m.jsxs)(a.N_,{to:"/thread/".concat(encodeURIComponent(e.cid)),className:"flex flex-1 md:flex-col flex-row gap-[16px] items-start justify-start max-w-[1039px] px-5 py-[15px] w-full",children:[(0,m.jsx)(a.N_,{to:"/thread",children:(0,m.jsx)(i.E9,{src:null===e||void 0===e?void 0:e.userimage,alt:"Image Alt Text",className:"cursor-pointer h-[46px] w-[46px] rounded-[10px]"})}),(0,m.jsx)("div",{className:"flex md:flex-1 flex-col items-start justify-start w-[79%] md:w-full",children:(0,m.jsxs)("div",{className:"flex flex-col items-start justify-start w-[71%] md:w-full",children:[(0,m.jsx)("div",{className:"flex flex-col items-center justify-start",children:(0,m.jsx)(i.EY,{className:"text-[17px] text-black-900",size:"txtPromptSemiBold17",children:null===e||void 0===e?void 0:e.titleofprops})}),(0,m.jsx)("div",{className:"flex flex-row gap-[7px] items-center justify-between w-full",children:(0,m.jsx)(i.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:(l=null===e||void 0===e?void 0:e.anasabdin,l.length<=350?l:l.substring(0,350)+"...")})}),(0,m.jsx)(i.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:null===e||void 0===e?void 0:e.time})]})}),(0,m.jsx)("div",{className:"flex md:flex-1 flex-col items-start justify-start pr-[3px] py-[3px] w-[14%] md:w-full",children:(0,m.jsxs)("div",{className:"flex flex-row gap-4 items-end justify-start mb-1.5 w-[77%] md:w-full",children:[(0,m.jsx)(i.N1,{className:"bg-gray-500_02 py-3 h-12 w-px"}),(0,m.jsxs)("div",{className:"flex flex-col items-start justify-start mt-1.5",children:[(0,m.jsx)(i.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:null===e||void 0===e?void 0:e.repliescounter13}),(0,m.jsx)(i.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:null===e||void 0===e?void 0:e.anasabdinone10})]})]})})]}),(0,m.jsx)(i.N1,{className:"self-center h-px bg-teal-100 w-full"})]},t);var l})):(0,m.jsx)("div",{children:"No Feeds available"})]})}},88595:(e,t,l)=>{l.d(t,{A:()=>x});l(65043);var s=l(34223),a=l(42039),i=l(70579);const r=e=>{const t=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],l=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],r=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],x=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],n=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],c=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],m=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],d=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],o=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],p=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],f=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],u=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],h=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],j=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],b=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}],g=[{label:"Title of Thread"},{label:"@anasabdin"},{label:"Replies 200"}];return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.Bx,{className:e.className,children:[(0,i.jsx)("div",{className:"bg-gray-100 h-[99px] w-full"}),(0,i.jsx)(a.EY,{className:"bg-gray-100 h-[51px] justify-center md:ml-[0] ml-[59px] pb-3 sm:pr-5 pr-[35px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[333px]",size:"txtPromptBold24",children:"Top Trending"}),(0,i.jsx)(a.$n,{className:"bg-blue_gray-100 cursor-pointer font-prompt font-semibold h-[46px] leading-[normal] md:ml-[0] ml-[79px] mr-[266px] mt-7 py-[7px] rounded-[10px] text-black-900 text-center text-xl w-[46px]",children:"P"}),(0,i.jsxs)(s.W1,{menuItemStyles:{button:{padding:0,"flex-direction":"column",color:"#afabab","font-weight":500,"font-size":"14px","font-family":"Prompt","padding-left":"109px","padding-right":"109px","&:hover, &.ps-active":{color:"#000000","font-weight":"600 !important"}}},className:"flex flex-col items-center justify-start mb-[15px] pb-[19px] md:pr-10 sm:pr-5 pr-[60px] w-[85%]",children:[(0,i.jsx)("div",{className:"flex flex-col gap-[1.55px] items-center justify-start w-full",children:null===t||void 0===t?void 0:t.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenuItem".concat(t))))}),(0,i.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Education"}),(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Views 2k"})]}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-3.5 w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-[1.55px] items-center justify-start mt-[9px] w-full",children:null===l||void 0===l?void 0:l.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu1Item".concat(t))))}),(0,i.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Education"}),(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Views 2k"})]}),(0,i.jsx)(a.$n,{className:"bg-teal-A400 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl",children:"M"}),(0,i.jsx)(a.N1,{className:"bg-teal-100_01 h-px mt-3.5 w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-[1.55px] items-center justify-start mt-[9px] w-full",children:null===r||void 0===r?void 0:r.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu2Item".concat(t))))}),(0,i.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Education"}),(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Views 2k"})]}),(0,i.jsx)(a.$n,{className:"bg-blue_gray-400 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl",children:"L"}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-3.5 w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-[1.55px] items-center justify-start mt-[9px] w-full",children:null===x||void 0===x?void 0:x.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu3Item".concat(t))))}),(0,i.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Education"}),(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Views 2k"})]}),(0,i.jsx)(a.$n,{className:"bg-deep_purple-A200 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl",children:"O"}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-3.5 w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-[1.55px] items-center justify-start mt-[9px] w-full",children:null===n||void 0===n?void 0:n.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu4Item".concat(t))))}),(0,i.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Education"}),(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Views 2k"})]}),(0,i.jsx)(a.$n,{className:"bg-blue_gray-100 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-black-900 text-center text-xl",children:"M"}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-3.5 w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-[1.55px] items-center justify-start mt-[9px] w-full",children:null===c||void 0===c?void 0:c.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu5Item".concat(t))))}),(0,i.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Education"}),(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Views 2k"})]}),(0,i.jsx)(a.$n,{className:"bg-blue_gray-400 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl",children:"T"}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-3.5 w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-[1.55px] items-center justify-start mt-[9px] w-full",children:null===m||void 0===m?void 0:m.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu6Item".concat(t))))}),(0,i.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Education"}),(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Views 2k"})]}),(0,i.jsx)(a.$n,{className:"bg-blue_gray-100 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl",children:"M"}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-3.5 w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-[0.48px] items-center justify-start mt-[9px] w-full",children:null===d||void 0===d?void 0:d.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu7Item".concat(t))))}),(0,i.jsxs)("div",{className:"flex flex-col items-center justify-start w-full",children:[(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Education"}),(0,i.jsx)(a.EY,{className:"text-gray-500_02 text-sm",size:"txtPromptMedium14",children:"Views 2k"})]}),(0,i.jsx)(a.$n,{className:"bg-pink-A200 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl",children:"B"}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-[15px] w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full",children:null===o||void 0===o?void 0:o.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu8Item".concat(t))))}),(0,i.jsx)(a.$n,{className:"bg-blue_gray-100 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-[7px] rounded-[10px] text-center text-white-A700 text-xl",children:"H"}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-[35px] w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full",children:null===p||void 0===p?void 0:p.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu9Item".concat(t))))}),(0,i.jsx)(a.$n,{className:"bg-yellow-900 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl",children:"C"}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-[34px] w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full",children:null===f||void 0===f?void 0:f.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu10Item".concat(t))))}),(0,i.jsx)(a.$n,{className:"bg-blue_gray-100 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl",children:"S"}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-[34px] w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full",children:null===u||void 0===u?void 0:u.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu11Item".concat(t))))}),(0,i.jsx)(a.$n,{className:"bg-blue_gray-100 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl",children:"S"}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-[34px] w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full",children:null===h||void 0===h?void 0:h.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu12Item".concat(t))))}),(0,i.jsx)(a.$n,{className:"bg-blue_gray-100 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl",children:"S"}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-[34px] w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full",children:null===j||void 0===j?void 0:j.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu13Item".concat(t))))}),(0,i.jsx)(a.$n,{className:"bg-blue_gray-100 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl",children:"S"}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-[34px] w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full",children:null===b||void 0===b?void 0:b.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu14Item".concat(t))))}),(0,i.jsx)(a.$n,{className:"bg-blue_gray-100 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl",children:"S"}),(0,i.jsx)(a.N1,{className:"bg-teal-100 h-px mt-[34px] w-full"}),(0,i.jsx)("div",{className:"flex flex-col gap-0.5 items-center justify-start mt-2.5 w-full",children:null===g||void 0===g?void 0:g.map(((e,t)=>(0,i.jsx)(s.Dr,{...e,children:e.label},"sideBarMenu15Item".concat(t))))}),(0,i.jsx)(a.$n,{className:"bg-blue_gray-100 cursor-pointer font-prompt font-semibold leading-[normal] min-w-[333px] py-2 rounded-[10px] text-center text-white-A700 text-xl",children:"S"})]})]})})};r.defaultProps={};const x=r},98572:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var s=l(65043),a=(l(34223),l(42039)),i=l(84980),r=l(88595),x=l(75816),n=l(70579);const c=()=>{const[e,t]=s.useState("");return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"bg-gray-100 flex flex-col font-prompt items-center justify-end mx-auto w-full",children:(0,n.jsxs)("div",{className:"flex flex-col items-center justify-end w-full",children:[(0,n.jsxs)("div",{className:"bg-black-900 flex md:flex-col flex-row md:gap-5 items-center justify-start p-1.5 w-full",children:[(0,n.jsxs)("div",{className:"flex md:flex-1 flex-col gap-[5px] items-center justify-start md:ml-[0] ml-[53px] md:px-5 w-[4%] md:w-full",children:[(0,n.jsx)(a.E9,{className:"h-[43px] md:h-auto object-cover w-full",src:"images/img_image3.png",alt:"imageThree"}),(0,n.jsx)(a.EY,{className:"text-[7.39px] text-teal-A400",size:"txtPromptSemiBold739",children:"SENCHAT"})]}),(0,n.jsxs)("div",{className:"flex md:flex-1 flex-row items-center justify-center ml-11 md:ml-[0] pr-[27px] md:px-5 w-[21%] md:w-full",children:[(0,n.jsx)(a.EY,{className:"text-white-A700 text-xl",size:"txtPromptBold20WhiteA700",children:"Forum"}),(0,n.jsx)(a.EY,{className:"ml-[52px] text-teal-A400 text-xl",size:"txtPromptBold20",children:"Threads"}),(0,n.jsx)(a.EY,{className:"ml-[51px] text-white-A700 text-xl",size:"txtPromptBold20WhiteA700",children:"NFT"})]}),(0,n.jsx)(a.pd,{name:"frameSix",placeholder:"Search....",value:e,onChange:e=>t(e),className:"leading-[normal] p-0 placeholder:text-gray-700_a5 sm:px-5 text-gray-700_a5 text-left text-xs w-full",wrapClassName:"bg-gray-100 flex md:flex-1 md:ml-[0] ml-[60px] md:mt-0 my-[5px] pl-[21px] pr-[35px] py-[15px] rounded-[25px] w-[31%] md:w-full",prefix:(0,n.jsx)("div",{className:"h-[17px] mr-[5px] w-[17px] bg-gray-500_01 my-px",children:(0,n.jsx)(a.E9,{className:"cursor-pointer h-[17px] my-auto",src:"images/img_search.svg",alt:"search"})}),suffix:(0,n.jsx)(x.P,{fillColor:"#616060a5",className:"cursor-pointer h-[17px] my-auto",onClick:()=>t(""),style:{visibility:(null===e||void 0===e?void 0:e.length)<=0?"hidden":"visible"},height:17,width:17,viewBox:"0 0 17 17"})}),(0,n.jsxs)("div",{className:"flex md:flex-1 flex-row gap-[25px] items-start justify-center md:ml-[0] ml-[181px] md:px-5 w-[13%] md:w-full",children:[(0,n.jsx)(a.EY,{className:"text-white-A700 text-xl",size:"txtPromptBold20WhiteA700",children:"New post"}),(0,n.jsx)(a.EY,{className:"text-base text-white-A700",size:"txtPromptBold16",children:"username"})]}),(0,n.jsx)(a.E9,{className:"h-[34px] md:h-auto md:ml-[0] ml-[19px] rounded-[50%] w-[34px]",src:"images/img_ellipse42.png",alt:"ellipseFortyThree"}),(0,n.jsx)(a.E9,{className:"h-[23px] ml-5 md:ml-[0]",src:"images/img_notification.svg",alt:"notification"})]}),(0,n.jsxs)("div",{className:"flex md:flex-col flex-row gap-5 items-start justify-between mx-auto md:px-5 w-full",children:[(0,n.jsx)(r.A,{className:"!sticky !w-[392px] bg-gray-100 flex h-screen md:hidden justify-start overflow-auto top-[0]"}),(0,n.jsxs)("div",{className:"flex flex-1 flex-col items-center justify-start w-full",children:[(0,n.jsx)("div",{className:"bg-gray-100 flex flex-col items-center justify-end py-[13px] w-full",children:(0,n.jsx)("div",{className:"flex flex-col items-center justify-start mt-[82px] w-full",children:(0,n.jsxs)("div",{className:"flex flex-col gap-2 items-center justify-start w-full",children:[(0,n.jsxs)("div",{className:"flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[81%] md:w-full",children:[(0,n.jsx)(a.EY,{className:"text-2xl md:text-[22px] text-black-900 sm:text-xl",size:"txtPromptSemiBold24Black900",children:"Recent"}),(0,n.jsx)(a.EY,{className:"sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-black-900 sm:text-xl",size:"txtPromptSemiBold24Black900",children:"My Threads"}),(0,n.jsx)(a.EY,{className:"mb-0.5 text-2xl md:text-[22px] text-teal-A400 sm:text-xl",size:"txtPromptSemiBold24",children:"Unanswered Threads"})]}),(0,n.jsx)(a.E9,{className:"h-1",src:"images/img_group94.svg",alt:"groupNinetyFive"})]})})}),(0,n.jsx)("div",{className:"flex flex-col items-center justify-start w-full",children:(0,n.jsx)(i.A,{className:"bg-white-A700_cc flex flex-col items-start max-w-[1039px] py-2.5 rounded-[10px] w-full"})})]})]})]})})})}}}]);
//# sourceMappingURL=572.de0a8eda.chunk.js.map