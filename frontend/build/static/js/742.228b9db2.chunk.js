"use strict";(self.webpackChunksen_chat=self.webpackChunksen_chat||[]).push([[742],{76337:(e,t,s)=>{s.d(t,{A:()=>r});var a=s(65043),c=s(42039),l=(s(75816),s(70579));const n=e=>{let{children:t}=e;const[s,n]=a.useState(""),[r,o]=(0,a.useState)(!1),[i,x]=(0,a.useState)();return(0,a.useEffect)((()=>{const e=localStorage.getItem("userData");if(e){const t=JSON.parse(e);x(t)}}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)("header",{className:" flex justify-around md:justify-between items-center py-3 md:py-5 w-full",children:[(0,l.jsx)("div",{className:"flex flex-col gap-[5px] mx-6 items-center md:mt-0 my-[7px] w-[5rem]",children:(0,l.jsxs)("a",{href:"/",children:[(0,l.jsx)(c.E9,{className:"h-[43px] md:h-auto object-cover w-[4rem] ",src:"images/img_image3.png",alt:"imageThree"}),(0,l.jsx)(c.EY,{className:"text-[7.39px] text-teal-A400",size:"txtPromptSemiBold739",children:"SENCHAT"})]})}),(0,l.jsx)("ul",{className:"flex md:hidden justify-between items-center gap-2"})]}),(0,l.jsx)("div",{className:"",children:t})]})})};n.defaultProps={};const r=n},24742:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var a=s(65043),c=s(86971),l=s(42039),n=s(76337),r=s(38489),o=s(21263),i=(s(59196),s(25108)),x=s(99052),d=s(65813),m=s(70579);const u=()=>{const[e,t]=(0,a.useState)(!1),[s,u]=(0,a.useState)(),[f,p]=(0,a.useState)(),[h,j]=(0,a.useState)(null),[g,w]=(0,a.useState)(null),N=(0,c.Zp)(),b=(0,o.F7)(),y=(0,o.XK)();console.log(y),(0,a.useEffect)((()=>{y&&(0,i.a6)(y)&&(window.web3=new x.Ay$(y))}),[y]),(0,a.useEffect)((()=>{(async()=>{try{b&&p(!0)}catch(e){console.error("Error fetching data:",e)}})()}),[b]);return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:"bg-gray-100 flex flex-col font-prompt gap-11 items-end justify-start mx-auto w-full",children:[(0,m.jsx)("div",{className:"flex flex-col items-center w-full",children:(0,m.jsx)(n.A,{className:"bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full"})}),(0,m.jsxs)("div",{className:"bg-white-A700 flex flex-col gap-[27px] items-center justify-start p-[33px] md:px-5 rounded-bl-[70px] rounded-tl-[70px] w-[63%] md:w-full",children:[(0,m.jsxs)("div",{className:"flex flex-col gap-[5px] items-center justify-start w-[7%] md:w-full",children:[(0,m.jsx)(l.E9,{className:"h-[43px] md:h-auto object-cover w-full",src:"images/img_image3.png",alt:"imageThree_One"}),(0,m.jsx)(l.EY,{className:"text-[7.39px] text-teal-A400",size:"txtPromptSemiBold739",children:"SENCHAT"})]}),(0,m.jsxs)("div",{className:"flex flex-col gap-[45.5px] items-center justify-start w-auto sm:w-full",children:[(0,m.jsxs)("div",{className:"flex flex-col gap-[18.2px] items-center justify-start w-auto sm:w-full",children:[(0,m.jsx)(l.EY,{className:"sm:text-[32.4px] md:text-[34.4px] text-[36.4px] text-black-900 w-auto",size:"txtPromptSemiBold364",children:"Welcome back"}),(0,m.jsx)(l.EY,{className:"text-[18.2px] text-gray-600 tracking-[0.18px] w-auto",size:"txtPromptRegular182",children:"Welcome back! Please connect your wallet."})]}),(0,m.jsx)(o.pK.Custom,{children:e=>{let{account:t,chain:a,openAccountModal:c,openConnectModal:n,openChainModal:r}=e;return a?"https://artio.rpc.berachain.com"===a.rpcUrl?(u(!0),p(!0)):(u(!1),p(!1)):p(!1),(0,m.jsxs)("div",{children:[!t&&(0,m.jsx)(l.$n,{onClick:n,className:"justify-start bg-teal-A400 cursor-pointer font-medium leading-[normal] w-[150%] py-[19px] rounded-[32px] text-[17.51px] text-black-900 text-center",children:"Connect to web3"}),t&&(0,m.jsxs)("div",{className:"flex justify-start",children:[(0,m.jsx)(l.$n,{onClick:c,className:"bg-teal-A400 cursor-pointer font-medium leading-[normal] min-w-[50%] py-[19px] rounded-[32px] text-[17.51px] text-black-900 text-center",children:"".concat(t.slice(0,10),"...").concat(t.slice(-5))}),(0,m.jsx)(l.$n,{onClick:r,className:"bg-teal-A400 cursor-pointer font-medium leading-[normal] min-w-[30%] py-[19px] rounded-[32px] text-[17.51px] text-black-900 text-center ml-8",children:s?"Network Connected":"Wrong Network"})]})]})}}),f&&(0,m.jsx)(l.$n,{onClick:async()=>{if(t(!0),!b)return p(!1),void j("Account Not Connected");const e=(e=>(0,d.sha256)(e.toString()))(b),s=(e=>{const t=e.match(/\d/g);return t?t.join(""):""})(e),a=s.substring(0,10);try{const e=(await new window.web3.eth.Contract(r,"0x29c1b65fdac043877744270c32eb579c49374ac5").methods.tokenURI("1".concat(a)).call()).replace("ipfs://",""),s="https://cloudflare-ipfs.com/ipfs/".concat(e),c=await fetch(s);if(!c.ok)throw j("Failed to fetch from your data"),new Error("Failed to fetch from IPFS. Status: ".concat(c.status));const l=await c.json();localStorage.setItem("userData",JSON.stringify(l)),w("connected succesfully"),t(!1),N("/education",{replace:!0})}catch(c){t(!1),console.error(c),j("Account Do not Exist and try to signup")}},className:"bg-teal-A400 cursor-pointer font-medium leading-[normal] min-w-full py-[19px] rounded-[32px] text-[17.51px] text-black-900 text-center bg-green-500",children:e?(0,m.jsx)("div",{className:"flex items-center justify-center",children:(0,m.jsx)("div",{className:"animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900"})}):"Verify and Sign in"}),h&&(0,m.jsx)("div",{className:"text-red-600",children:h}),(0,m.jsx)("div",{className:"flex flex-col gap-11 items-center justify-start w-full",children:(0,m.jsx)("div",{className:"flex flex-col gap-[22.75px] items-start justify-start w-auto sm:w-full",children:g&&(0,m.jsx)("div",{className:"text-green-600",children:g})})})]}),(0,m.jsxs)("div",{className:"flex flex-row font-roboto gap-[4.55px] items-center justify-start mb-[59px] w-auto",children:[(0,m.jsxs)(l.EY,{className:"text-[15.93px] text-gray-600 w-auto",size:"txtRobotoRomanMedium1593",children:["Don\u2019t have an account?"," "]}),(0,m.jsx)("a",{href:"/signup",className:"text-[15.93px] text-teal-A400 w-auto",children:(0,m.jsx)(l.EY,{size:"txtRobotoRomanMedium1593TealA400",children:"Sign up"})})]})]})]})})}}}]);
//# sourceMappingURL=742.228b9db2.chunk.js.map