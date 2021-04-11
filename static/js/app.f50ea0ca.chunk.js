(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));var r=n(10),a=n.n(r),o=n(89),l={user_profile:null,access_token:null,auth_token:null,refresh_token:null,is_verified:!1,is_waitlisted:!1,is_onboarding:!1},i=Object(o.b)({name:"app",initialState:l,reducers:{setAuth:function(e,t){e.user_profile=t.payload.user_profile,e.access_token=t.payload.access_token,e.auth_token=t.payload.auth_token,e.refresh_token=t.payload.refresh_token,e.is_verified=t.payload.is_verified,e.is_waitlisted=t.payload.is_waitlisted,e.is_onboarding=t.payload.is_onboarding},logout:function(e){e=a()(e,l)}}}),u=i.reducer,c=i.actions},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(0),a=n.n(r).a.createContext({rtc:null,pubnub:null,room:null,loading:!0}),o=function(){return Object(r.useContext)(a)}},130:function(e,t,n){"use strict";n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return v}));var r=n(22),a=n.n(r),o=n(89),l=n(49),i=n(252),u=n(128),c=n(129),s=n(254),A=n.n(s),d={key:"root",version:1,storage:c.a,whitelist:["auth"],migrate:Object(u.a)({},{debug:!1}),stateReconciler:A.a,timeout:null},m=n(100),f=n(75),g=Object(i.createLogger)(),h=[].concat(a()(Object(o.c)({serializableCheck:!1})),[g]),b=Object(l.c)({auth:m.b,room:f.b}),p=Object(u.b)(d,b),y=Object(o.a)({reducer:p,middleware:h}),v=Object(u.c)(y)},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={defaultTheme:{name:"defaultTheme",bg:"#F0F0E3",bg2:"#FFFFFF",fg:"#454245",fg2:"#9c9c9c"},nightTheme:{name:"nightTheme",bg:"#16171C",bg2:"#202126",fg:"#eee",fg2:"#ccc"}}},251:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return g}));var r=n(11),a=n.n(r),o=n(273),l=n(364),i=n(0),u=n.n(i),c=n(8),s=n(2),A=n(1),d=n(272),m=n(147),f=n(83);function g(){var t=Object(l.a)({"Nunito-Regular":n(357),"Nunito-SemiBold":n(358),"Nunito-Bold":n(359),"Nunito-Light":n(360)}),r=a()(t,2),i=r[0];r[1];return i?u.a.createElement(A.a,{style:h.container},u.a.createElement(d.a,null),u.a.createElement(o.a,{style:"auto"}),u.a.createElement(f.b,{ref:function(t){return e.toast=t}})):null}"web"!==c.a.OS&&m.LogBox.ignoreLogs(["Setting a timer for a long period of time"]);var h=s.a.create({container:{flex:1,backgroundColor:"#fff",paddingHorizontal:c.a.select({web:"30%",default:void 0})}})}).call(this,n(59))},272:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(223),l=n(270),i=n(228),u=n(4),c=n.n(u),s=n(11),A=n.n(s),d=n(9),m=n.n(d),f=n(58),g=n(2),h=n(18),b=n(40),p=n(37),y=n(1),v=n(369),E=n(10),w=n.n(E),j=n(17),_=n.n(j),O=n(91),S=n(45),C=g.a.create({container:{width:"100%",height:"100%"}}),k=function(e){var t=e.children,n=e.style,r=_()(e,["children","style"]),o=Object(S.b)().theme;return console.log("theme",o),a.a.createElement(O.a,w()({style:[C.container,{backgroundColor:o.bg},n]},r),t)},x=n(67),T=n(55),B=n(192),R=n(83);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=g.a.create({title:{fontSize:25,fontFamily:"Nunito-Light",marginTop:100},inputContainer:{backgroundColor:"#fff",width:"70%",height:40,marginTop:56,borderRadius:4,flexDirection:"row",alignItems:"center",paddingHorizontal:8},input:{fontSize:15,fontFamily:"Nunito-Regular",width:"100%",height:"100%",textAlignVertical:"center",marginTop:4},button:{width:175,backgroundColor:"#5576AB",height:46,justifyContent:"center",alignItems:"center",flexDirection:"row",marginTop:72,borderRadius:24},buttonTitle:{color:"#fff",fontFamily:"Nunito-SemiBold",fontSize:18}}),z=function(){var e=Object(r.useState)(""),t=A()(e,2),n=t[0],o=t[1],l=Object(r.useState)({callingCode:["1"],cca2:"US",currency:["USD"],flag:"flag-us",name:"United States",region:"Americas",subregion:"North America"}),i=A()(l,2),u=i[0],c=i[1],s=Object(T.useNavigation)().navigate,d=Object(r.useState)(!1),g=A()(d,2),E=g[0],w=g[1],j=Object(R.c)();return a.a.createElement(k,{style:{alignItems:"center"}},a.a.createElement(h.a,{style:N.title},"Enter your phone"),a.a.createElement(y.a,{style:N.inputContainer},a.a.createElement(B.b,{countryCode:u.cca2,withFlag:!0,withFilter:!0,withAlphaFilter:!0,withCallingCode:!0,onSelect:function(e){console.log("selected country",e),c(e)},containerButtonStyle:{marginTop:-6,marginBottom:-8,marginRight:-4},visible:!1,theme:F(F({},B.a),{},{backgroundColor:"#f2efe4"})}),a.a.createElement(h.a,{style:{fontFamily:'"Nunito-Regular',fontSize:15}},"+",u.callingCode[0]),a.a.createElement(b.a,{placeholder:"Phone Number",onChangeText:o,style:N.input,value:n,keyboardType:"numeric"})),a.a.createElement(p.a,{style:N.button,onPress:function(){var e,t,r;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e="",e=n.startsWith("0")?n.slice(1,n.length):n,e="+"+u.callingCode[0]+e,console.log("fullPhoneNumber",e),w(!0),a.next=7,m.a.awrap(Object(x.a)("/start_phone_number_auth",{method:"POST",body:{phone_number:e}}));case 7:return t=a.sent,console.log(t),a.next=11,m.a.awrap(t.json());case 11:if(r=a.sent,!t.ok){a.next=18;break}if(!r.is_waitlisted){a.next=15;break}return a.abrupt("return",null==j?void 0:j.show("You need to get invited by someone first"));case 15:s("VerificationCode",{phonenumber:e}),a.next=20;break;case 18:(null==r?void 0:r.error_message)&&(null==j||j.show(null==r?void 0:r.error_message)),(null==r?void 0:r.is_blocked)&&(null==j||j.show("You are blocked from using clubhouse"));case 20:w(!1);case 21:case"end":return a.stop()}}),null,null,null,Promise)}},E?a.a.createElement(f.a,{size:"small",color:"#fff"}):a.a.createElement(a.a.Fragment,null,a.a.createElement(h.a,{style:N.buttonTitle},"Next"),a.a.createElement(v.a,{name:"chevron-right",size:22,color:"#fff"}))))},D=n(31),I=n(32),U=n(100),M=g.a.create({title:{fontSize:25,fontFamily:"Nunito-Light",marginTop:"25%",textAlign:"center"},inputContainer:{backgroundColor:"#fff",width:"70%",height:40,marginTop:56,borderRadius:4,flexDirection:"row",alignItems:"center",paddingHorizontal:8},input:{fontSize:17,fontFamily:"Nunito-Regular",width:"100%"},button:{width:175,backgroundColor:"#5576AB",height:45,justifyContent:"center",alignItems:"center",flexDirection:"row",marginTop:72,borderRadius:24},buttonTitle:{color:"#fff",fontFamily:"Nunito-SemiBold",fontSize:18}}),H=function(e){var t=e.route,n=Object(r.useState)(""),o=A()(n,2),l=o[0],i=o[1],u=(Object(D.useNavigation)(),Object(I.c)()),c=Object(r.useState)(!1),s=A()(c,2),d=s[0],g=s[1],E=Object(R.c)();return a.a.createElement(k,{style:{alignItems:"center"}},a.a.createElement(h.a,{style:M.title},"Enter the code \n we just texted you"),a.a.createElement(y.a,{style:M.inputContainer},a.a.createElement(b.a,{placeholder:"Verification Code",onChangeText:i,style:M.input,keyboardType:"numeric"})),a.a.createElement(p.a,{style:M.button,onPress:function(){var e,n;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log("phonenumber",t.params.phonenumber),l){r.next=3;break}return r.abrupt("return",null==E?void 0:E.show("Please enter the verification code"));case 3:return g(!0),r.next=6,m.a.awrap(Object(x.a)("/complete_phone_number_auth",{method:"POST",body:{phone_number:t.params.phonenumber,verification_code:l}}));case 6:return e=r.sent,r.next=9,m.a.awrap(e.json());case 9:n=r.sent,console.log("login result",n),e.ok?u(U.a.setAuth(n)):!n.is_verified&&(null==E||E.show("The code you entered was incorrect, remaining attempts: "+n.number_of_attempts_remaining)),g(!1);case 13:case"end":return r.stop()}}),null,null,null,Promise)}},d?a.a.createElement(f.a,{size:"small",color:"#fff"}):a.a.createElement(a.a.Fragment,null,a.a.createElement(h.a,{style:M.buttonTitle},"Next"),a.a.createElement(v.a,{name:"chevron-right",size:22,color:"#fff"}))))},L=n(29),K=n(68),Q=n(77),Y=n(8),V=n(34),Z=function(e){var t=e.justify,n=e.align,r=e.direction,o=e.style,l=e.flex,i=e.children,u=_()(e,["justify","align","direction","style","flex","children"]);return a.a.createElement(y.a,w()({style:[{flex:l,justifyContent:t,alignItems:n,flexDirection:r},o]},u),i)},W=n(87),J=n(51),G=(g.a.create({container:{}}),function(e){var t=e.children,n=e.style,r=_()(e,["children","style"]);return"android"===Y.a.OS?a.a.createElement(J.a,w()({background:J.a.Ripple("rgba(0,0,0,.2)",!1)},r),a.a.createElement(y.a,{style:n},t)):a.a.createElement(p.a,r)}),q="data:image/jpeg;base64,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",X=g.a.create({container:{position:"absolute",bottom:0,right:0,left:0,height:64,backgroundColor:"red",borderTopRightRadius:40,borderTopLeftRadius:40,paddingHorizontal:16,flexDirection:"row",alignItems:"center",width:"100%",elevation:10},avatar:{height:36,width:36,borderRadius:20},avatarsContainer:{height:"100%",flexDirection:"row",alignItems:"center",marginRight:16},topic:{fontFamily:"Nunito-Regular",flex:1}}),$=function(){var e,t,n,r,o,l,i=Object(I.d)((function(e){return e.room.currentRoom})),u=Object(T.useNavigation)().navigate,c=Object(S.b)().theme;return i?a.a.createElement(G,{style:[X.container,{backgroundColor:c.bg2}],onPress:function(){return u("Room",{channel_id:null==i?void 0:i.channel_id,channel:null==i?void 0:i.channel})}},a.a.createElement(y.a,{style:X.avatarsContainer},a.a.createElement(L.a,{source:{uri:null!=(e=null==i||null==(t=i.users[0])?void 0:t.photo_url)?e:q},style:X.avatar}),a.a.createElement(L.a,{source:{uri:null!=(n=null==i||null==(r=i.users[1])?void 0:r.photo_url)?n:q},style:[X.avatar,{marginLeft:-8}]}),a.a.createElement(L.a,{source:{uri:null!=(o=null==i||null==(l=i.users[2])?void 0:l.photo_url)?o:q},style:[X.avatar,{marginLeft:-8}]})),a.a.createElement(h.a,{numberOfLines:1,style:[X.topic,{color:c.fg}]},null==i?void 0:i.topic)):null},ee=g.a.create({header:{height:64,width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},avatar:{height:32,width:32,backgroundColor:"#fff",borderRadius:22,marginLeft:"auto",marginRight:16},channelsContainer:{paddingHorizontal:16},channel:{width:"100%",backgroundColor:"#FEFCFF",marginBottom:16,borderRadius:16,padding:16,shadowColor:"rgba(0,0,0,5)",shadowOffset:{width:0,height:1},shadowOpacity:.1,shadowRadius:.1,elevation:1},channelTopic:{fontFamily:"Nunito-Bold",color:"#454245",fontSize:15},channelBodyContainer:{flexDirection:"row",marginTop:16},channelUserAvatar:{height:40,width:40,borderRadius:16},channelUser1Avatar:{position:"absolute",top:16,right:0},channelUser2Avatar:{position:"absolute",bottom:16,left:0},channelUserName:{fontFamily:"Nunito-SemiBold",fontSize:17,color:"#49464A"},channelUsersStatsContainer:{marginTop:8},channelUsersStats:{fontFamily:"Nunito-SemiBold",color:"#49464A"}}),te=function(e){e.navigation;var t,n,r=Object(W.useQuery)("channels",(function(){return g()})),o=r.isLoading,l=(r.error,r.data),i=r.refetch,u=Object(I.d)((function(e){return e.auth})),c=Object(T.useNavigation)(),s=c.navigate,A=(c.reset,Object(I.c)(),Object(S.b)()),d=A.theme,f=A.toggleTheme,g=function(){var e,t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(Object(x.a)("/get_channels"));case 2:return e=n.sent,n.next=5,m.a.awrap(e.json());case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),null,null,null,Promise)};return a.a.createElement(k,{style:{paddingTop:Y.a.select({android:V.a.currentHeight,default:0})}},a.a.createElement(y.a,{style:ee.header},a.a.createElement(G,{onPress:f,style:{marginRight:16}},a.a.createElement(v.a,{name:"theme-light-dark",size:28,color:d.fg})),a.a.createElement(p.a,{onPress:function(){var e;return s("UserProfile",{user_id:null==(e=u.user_profile)?void 0:e.user_id,user:u.user_profile})}},a.a.createElement(L.a,{source:{uri:null!=(t=null==(n=u.user_profile)?void 0:n.photo_url)?t:q},style:ee.avatar}))),a.a.createElement(K.a,{data:null==l?void 0:l.channels,renderItem:function(e){var t,n,r,o,l=e.item;e.index;return a.a.createElement(G,{key:l.channel,onPress:function(){return s("Room",{channel_id:l.channel_id,channel:l.channel})},style:[ee.channel,{backgroundColor:d.bg2}]},a.a.createElement(h.a,{style:[ee.channelTopic,{color:d.fg}]},l.topic),a.a.createElement(y.a,{style:ee.channelBodyContainer},a.a.createElement(y.a,{style:{width:72,height:72,marginRight:16}},a.a.createElement(L.a,{source:{uri:null!=(t=null==(n=l.users[0])?void 0:n.photo_url)?t:q},style:[ee.channelUserAvatar,ee.channelUser1Avatar]}),a.a.createElement(L.a,{source:{uri:null!=(r=null==(o=l.users[1])?void 0:o.photo_url)?r:q},style:[ee.channelUserAvatar]})),a.a.createElement(y.a,null,l.users.map((function(e){return a.a.createElement(Z,{key:e.user_id,direction:"row",align:"center"},a.a.createElement(h.a,{style:[ee.channelUserName,{color:d.fg}]},e.name),!1)})),a.a.createElement(y.a,{style:ee.channelUsersStatsContainer},a.a.createElement(h.a,{style:[ee.channelUsersStats,{color:d.fg2}]},l.num_all," ",a.a.createElement(v.a,{name:"account",size:14,color:d.fg2})," / ",l.num_speakers," ",a.a.createElement(v.a,{name:"message-processing",size:12.5,color:d.fg2,style:{marginLeft:4}}))))))},contentContainerStyle:ee.channelsContainer,keyExtractor:function(e){return e.channel},refreshControl:a.a.createElement(Q.a,{refreshing:o,onRefresh:i})}),a.a.createElement($,null))},ne=n(191),re=n(102),ae=g.a.create({user:{width:100/3+"%",alignItems:"center",marginBottom:24,height:110},userSmall:{width:"25%",height:110},userName:{fontFamily:"Nunito-Bold",color:"#4e4b4e",fontSize:13,marginTop:8,textAlign:"center"},userAvatar:{borderRadius:28.8,width:72,height:72},userAvatarSmall:{borderRadius:28,width:54,height:54},userAvatarSpeaking:{borderWidth:3,borderColor:"#CCCBC5",padding:3,borderRadius:34},userMicContainer:{position:"absolute",bottom:0,right:0,backgroundColor:"#FEFCFF",width:24,height:24,borderRadius:12,alignItems:"center",justifyContent:"center"}}),oe=Object(r.memo)((function(e){var t,n=e.user,r=Object(D.useNavigation)(),o=(r.goBack,r.navigate),l=Object(I.d)((function(e){return e.room.speakingUsers.includes(n.user_id)})),i=Object(S.b)().theme,u=!n.is_speaker&&!n.is_followed_by_speaker;return a.a.createElement(G,{style:[ae.user,{backgroundColor:i.bg2},u&&ae.userSmall],onPress:function(){return o("UserProfile",{user_id:n.user_id,user:n})},key:n.user_id.toString()},a.a.createElement(y.a,{style:[ae.userAvatar,u&&ae.userAvatarSmall,l&&ae.userAvatarSpeaking]},a.a.createElement(L.a,{source:{uri:null!=(t=n.photo_url)?t:q},style:[{height:"100%",width:"100%",borderRadius:ae.userAvatar.borderRadius},u&&ae.userAvatarSmall]}),n.is_speaker&&a.a.createElement(y.a,{style:[ae.userMicContainer,{backgroundColor:i.bg2}]},a.a.createElement(v.a,{name:"microphone",size:18,color:i.fg}))),a.a.createElement(h.a,{style:[ae.userName,{color:i.fg}]},n.name))})),le=n(48),ie=function(){var e=Object(r.useState)(!0),t=A()(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){le.a.runAfterInteractions().then((function(){a(!1)}))}),[]),n},ue=g.a.create({container:{width:"100%"},body:{borderTopRightRadius:40,borderTopLeftRadius:40,width:"100%",justifyContent:"center",alignItems:"center",flex:1},list:{padding:24},topic:{fontFamily:"Nunito-Bold",color:"#454245",fontSize:15},usersContainer:{flexDirection:"row",flexWrap:"wrap",paddingVertical:16},sectionTitle:{color:"#d7d5d8",marginLeft:16,fontFamily:"Nunito-Bold"},footer:{height:72,width:"100%",flexDirection:"row",alignItems:"center",paddingHorizontal:16},leaveButton:{paddingHorizontal:16,paddingVertical:8,backgroundColor:"#B8B7B9",borderRadius:24,alignItems:"center",justifyContent:"center"},leaveButtonTitle:{fontFamily:"Nunito-Bold",color:"#8E4B60"},raiseHandButton:{padding:8,backgroundColor:"#B8B7B9",borderRadius:24,alignItems:"center",justifyContent:"center",marginLeft:"auto"}}),ce=function(e){var t,n,o=e.route,l=Object(re.b)(),i=l.loading,u=(l.rtc,l.pubnub,l.join),c=l.leave,s=Object(I.d)((function(e){return e.room.currentRoom})),A=ie();Object(r.useEffect)((function(){u&&u(o.params.channel)}),[]);var d=Object(D.useNavigation)(),m=d.goBack,g=(d.navigate,Object(S.b)().theme),b=function(e){return a.a.createElement(oe,{user:e})},p=Object(r.useMemo)((function(){return null==s?void 0:s.users.filter((function(e){return!e.is_speaker&&!e.is_followed_by_speaker}))}),[null==s?void 0:s.users.length]);return a.a.createElement(k,null,a.a.createElement(y.a,{style:[ue.body,{backgroundColor:g.bg2}]},i||A?a.a.createElement(f.a,{size:"large",color:g.fg2}):a.a.createElement(ne.a,{contentContainerStyle:[ue.list],ListHeaderComponent:i?null:a.a.createElement(a.a.Fragment,null,a.a.createElement(h.a,{style:[ue.topic,{color:g.fg}]},null==s?void 0:s.topic),a.a.createElement(y.a,{style:ue.usersContainer},null==s||null==(t=s.users)?void 0:t.map((function(e){return e.is_speaker&&b(e)}))),a.a.createElement(h.a,{style:[ue.sectionTitle,{color:g.fg2}]},"Followed by speakers"),a.a.createElement(y.a,{style:ue.usersContainer},null==s||null==(n=s.users)?void 0:n.map((function(e){return e.is_followed_by_speaker&&b(e)}))),a.a.createElement(h.a,{style:[ue.sectionTitle,{marginBottom:24,color:g.fg2}]},"Audience (",null==p?void 0:p.length,")")),data:p,renderItem:function(e){var t=e.item;return b(t)},numColumns:4,keyExtractor:function(e){return e.user_id.toString()},removeClippedSubviews:!0,getItemLayout:function(e,t){return{length:110,offset:110*t,index:t}}})),a.a.createElement(y.a,{style:ue.footer},a.a.createElement(ne.b,{style:[ue.leaveButton,{backgroundColor:g.bg2}],disabled:i,onPress:function(){c&&c(),m()}},a.a.createElement(h.a,{style:[ue.leaveButtonTitle]},"\u270c\ufe0f Leave quietly")),a.a.createElement(y.a,{style:[ue.raiseHandButton,{backgroundColor:g.bg2}]},a.a.createElement(v.a,{name:"hand-right",size:25,style:{marginRight:2},color:g.fg}))))},se=n(54),Ae=n(268),de=n.n(Ae),me=g.a.create({container:{padding:16},avatar:{width:72,height:72,borderRadius:32},userName:{fontFamily:"Nunito-Bold",fontSize:16,marginTop:16},username:{fontFamily:"Nunito-Regular",fontSize:14,marginTop:8},followCount:{fontFamily:"Nunito-Regular",fontSize:15},followCountNumber:{fontFamily:"Nunito-Bold",fontSize:17},bio:{marginTop:16,fontFamily:"Nunito-SemiBold",fontSize:14},inviterContainer:{marginTop:40,flexDirection:"row"},inviterAvatar:{width:40,height:40,borderRadius:16},joinDate:{fontFamily:"Nunito-SemiBold"},inviter:{fontFamily:"Nunito-SemiBold"},button:{width:135,backgroundColor:"#5576AB",height:40,justifyContent:"center",alignItems:"center",flexDirection:"row",marginTop:24,borderRadius:24},buttonTitle:{color:"#fff",fontFamily:"Nunito-SemiBold",fontSize:16}}),fe=function(e){var t,n,r=e.route,o=Object(W.useQuery)("user_profile"+r.params.user_id,(function(){return d()})),l=o.isLoading,i=(o.error,o.data),u=o.refetch,c=Object(S.b)().theme,s=(Object(re.b)().leave,Object(I.c)()),A=Object(I.d)((function(e){var t;return(null==(t=e.auth.user_profile)?void 0:t.user_id)===r.params.user_id})),d=function(){var e,t;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(Object(x.a)("/get_profile",{method:"POST",body:{user_id:r.params.user_id}}));case 2:return e=n.sent,n.next=5,m.a.awrap(e.json());case 5:return t=n.sent,console.log("user profile",t),n.abrupt("return",t.user_profile);case 8:case"end":return n.stop()}}),null,null,null,Promise)};return a.a.createElement(k,null,l?a.a.createElement(Z,{justify:"center",align:"center"},a.a.createElement(f.a,{size:"large",color:c.fg2})):a.a.createElement(se.a,{refreshControl:a.a.createElement(Q.a,{refreshing:l,onRefresh:u}),contentContainerStyle:me.container},a.a.createElement(L.a,{source:{uri:null!=(t=null==i?void 0:i.photo_url)?t:q},style:me.avatar}),a.a.createElement(h.a,{style:[me.userName,{color:c.fg}]},null==i?void 0:i.name),a.a.createElement(h.a,{style:[me.username,{color:c.fg2}]},"@",null==i?void 0:i.username),a.a.createElement(Z,{direction:"row",style:{marginTop:16}},a.a.createElement(h.a,{style:[me.followCount,{color:c.fg2}]},a.a.createElement(h.a,{style:[me.followCountNumber,{color:c.fg}]},null==i?void 0:i.num_followers)," ","followers"),a.a.createElement(h.a,{style:[me.followCount,{marginLeft:16,color:c.fg2}]},a.a.createElement(h.a,{style:[me.followCountNumber,{color:c.fg}]},null==i?void 0:i.num_following)," ","followings")),a.a.createElement(h.a,{style:[me.bio,{color:c.fg2}]},null==i?void 0:i.bio),((null==i?void 0:i.twitter)||(null==i?void 0:i.instagram))&&a.a.createElement(Z,{direction:"row",style:{marginTop:16}},(null==i?void 0:i.twitter)&&a.a.createElement(h.a,{style:[me.followCount,{color:c.fg2,marginRight:16}]},a.a.createElement(v.a,{name:"twitter",color:"#5B549F",size:20})," ",null==i?void 0:i.twitter),(null==i?void 0:i.instagram)&&a.a.createElement(h.a,{style:[me.followCount,{color:c.fg2}]},a.a.createElement(v.a,{name:"instagram",color:"#5B549F",size:20})," ",null==i?void 0:i.instagram)),a.a.createElement(y.a,{style:me.inviterContainer},a.a.createElement(L.a,{source:{uri:null!=(n=null==i?void 0:i.invited_by_user_profile.photo_url)?n:q},style:me.inviterAvatar}),a.a.createElement(Z,{style:{marginLeft:8}},a.a.createElement(h.a,{style:[me.joinDate,{color:c.fg2}]},"Joined ",de()(null==i?void 0:i.time_created).format("MMM DD, YYYY")),a.a.createElement(h.a,{style:[me.inviter,{color:c.fg2}]},"Nominated by"," ",a.a.createElement(h.a,{style:{color:c.fg}},null==i?void 0:i.invited_by_user_profile.name)))),A&&a.a.createElement(G,{style:me.button,onPress:function(){s(U.a.logout())}},a.a.createElement(h.a,{style:me.buttonTitle},"Logout"))))},ge=Object(o.a)();t.a=function(){var e=Object(I.d)((function(e){return e.auth})),t=Object(S.b)().theme;return a.a.createElement(i.a,null,a.a.createElement(ge.Navigator,{screenOptions:{headerShown:!0,headerStyle:{backgroundColor:t.bg,borderBottomWidth:0,shadowRadius:0,shadowOffset:{height:0,width:0},elevation:0},headerTintColor:t.fg,animationEnabled:!0,cardStyleInterpolator:l.a.forHorizontalIOS}},e.auth_token?a.a.createElement(a.a.Fragment,null,a.a.createElement(ge.Screen,{name:"Home",component:te,options:{title:"All rooms",headerShown:!1}}),a.a.createElement(ge.Screen,{name:"Room",component:ce,options:{title:""}}),a.a.createElement(ge.Screen,{name:"UserProfile",component:fe,options:{title:""}})):a.a.createElement(a.a.Fragment,null,a.a.createElement(ge.Screen,{name:"Login",component:z,options:{title:""}}),a.a.createElement(ge.Screen,{name:"VerificationCode",component:H,options:{title:""}}))))}},298:function(e,t,n){e.exports=n(361)},357:function(e,t,n){e.exports=n.p+"./fonts/Nunito-Regular.ttf"},358:function(e,t,n){e.exports=n.p+"./fonts/Nunito-SemiBold.ttf"},359:function(e,t,n){e.exports=n.p+"./fonts/Nunito-Bold.ttf"},360:function(e,t,n){e.exports=n.p+"./fonts/Nunito-Light.ttf"},361:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(370),l=n(32),i=n(87),u=n(183),c=n.n(u),s=(n(307),n(83)),A=n(251),d=n(130),m=n(271),f=(n(10),n(12)),g=n.n(f),h=n(15),b=n.n(h),p=n(14),y=n.n(p),v=n(16),E=n.n(v),w=n(5),j=n.n(w),_=n(9),O=n.n(_),S={};function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j()(e);if(t){var a=j()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E()(this,n)}}var k=a.a.createContext({engine:null}),x=function(e){y()(n,e);var t=C(n);function n(){var e;g()(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={rtcEngine:null},e.initRtc=function(){var t;return O.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("connecting to rtc engine"),n.prev=1,n.next=4,O.a.awrap(S.createWithConfig(new(void 0)("938de3e8055e42b281bb8c6f69c21f78")));case 4:(t=n.sent).setDefaultAudioRoutetoSpeakerphone(!0),t.enableAudioVolumeIndication(1500,3,!1),t.muteLocalAudioStream(!0),e.setState({rtcEngine:t}),console.log("rtc engine initialized"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log("error initializing rtc engine",n.t0);case 15:case"end":return n.stop()}}),null,null,[[1,12]],Promise)},e}return b()(n,[{key:"componentDidMount",value:function(){this.props.authState.auth_token&&this.initRtc()}},{key:"componentDidUpdate",value:function(e){var t;(!e.authState.auth_token&&this.props.authState.auth_token&&this.initRtc(),e.authState.auth_token&&!this.props.authState.auth_token)&&(null==(t=this.state.rtcEngine)||t.destroy(),console.log("destroyed rtc engine, reason: logout"))}},{key:"render",value:function(){return a.a.createElement(k.Provider,{value:{engine:this.state.rtcEngine}},this.props.children)}}]),n}(r.Component),T=Object(l.b)((function(e){return{authState:e.auth}}))(x),B=n(11),R=n.n(B),P=n(129),F=n(34),N=n(45),z=n(162),D=function(e){var t=e.children,n=Object(r.useState)("defaultTheme"),o=R()(n,2),l=o[0],i=o[1],u=Object(r.useState)(!0),c=R()(u,2),s=c[0],A=c[1];Object(r.useEffect)((function(){d()}),[]),Object(r.useEffect)((function(){P.a.setItem("theme",l),"defaultTheme"===l&&F.a.setBarStyle("dark-content"),"nightTheme"===l&&F.a.setBarStyle("light-content")}),[l]);var d=function(){var e;return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return A(!0),t.next=3,O.a.awrap(P.a.getItem("theme"));case 3:(e=t.sent)&&i(e),A(!1);case 6:case"end":return t.stop()}}),null,null,null,Promise)};return s?null:a.a.createElement(N.a.Provider,{value:{theme:z.a[l],toggleTheme:function(){i("defaultTheme"===l?"nightTheme":"defaultTheme")}}},t)},I=n(67),U=n(102),M=n(75),H=function(e){var t=e.children,n=Object(l.d)((function(e){return e.room.currentRoom})),o=Object(r.useState)(!1),i=R()(o,2),u=i[0],s=i[1],A=Object(r.useContext)(k).engine,d=Object(r.useState)(null),m=R()(d,2),f=m[0],g=m[1],h=Object(l.d)((function(e){return e.auth})),b=Object(l.c)(),p=function(){var e,t,r;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=null==n?void 0:n.channel,b(M.a.setRoom(null)),null==A||A.leaveChannel(),null==A||A.removeAllListeners(),null==f||f.unsubscribeAll(),null==f||f.stop(),a.next=8,O.a.awrap(Object(I.a)("/leave_channel",{method:"POST",body:{channel:e}}));case 8:return t=a.sent,a.next=11,O.a.awrap(t.json());case 11:return r=a.sent,b(M.a.setSpeakingUsers([])),console.log("leave channel result",r),a.abrupt("return",r);case 15:case"end":return a.stop()}}),null,null,null,Promise)},y=function(e){return O.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:v(e),null==A||A.addListener("AudioVolumeIndication",(function(e){console.log("loadest spkears",e),b(M.a.setSpeakingUsers(e.map((function(e){return e.uid}))))}));case 2:case"end":return t.stop()}}),null,null,null,Promise)},v=function(e){var t,n;return O.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log("channel token",e.token),e&&e.token){r.next=3;break}return r.abrupt("return");case 3:return r.next=5,O.a.awrap(null==A?void 0:A.joinChannel(e.token,e.channel,null,null!=(t=null==(n=h.user_profile)?void 0:n.user_id)?t:0));case 5:case"end":return r.stop()}}),null,null,null,Promise)},E=function(e){var t,r,a;console.log("pubnub token",e.pubnub_token);var o=new c.a({publishKey:"pub-c-6878d382-5ae6-4494-9099-f930f938868b",subscribeKey:"sub-c-a4abea84-9ca3-11ea-8e71-f2b83ac9263d",authKey:e.pubnub_token,uuid:null==(t=h.user_profile)?void 0:t.user_id.toString(),origin:"clubhouse.pubnub.com",presenceTimeout:e.pubnub_heartbeat_value,heartbeatInterval:null==n?void 0:n.pubnub_heartbeat_interval});g(o),null==o||o.subscribe({channels:["users."+(null==(r=h.user_profile)?void 0:r.user_id),"channel_user."+e.channel+"."+(null==(a=h.user_profile)?void 0:a.user_id),"channel_all."+e.channel]}),null==o||o.addListener({message:w,status:function(e){return console.log("pubnub status",e)}})},w=function(e){console.log("pubnub message:",e);var t=e.message;"join_channel"===t.action&&j(t),"leave_channel"===t.action&&_(t)},j=function(e){var t=e.user_profile;b(M.a.addRoomUser(t))},_=function(e){b(M.a.removeRoomUser({user_id:e.user_id}))},S={loading:u,rtc:A,pubnub:f,join:function(e){var t,r;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if((null==n?void 0:n.channel)!==e){a.next=2;break}return a.abrupt("return");case 2:return n&&p(),s(!0),a.next=6,O.a.awrap(Object(I.a)("/join_channel",{method:"POST",body:{channel:e,attribution_source:"feed",attribution_details:"eyJpc19leHBsb3JlIjpmYWxzZSwicmFuayI6MX0="}}));case 6:return t=a.sent,a.next=9,O.a.awrap(t.json());case 9:return r=a.sent,console.log("joined channel result",r),s(!1),b(M.a.setRoom(r)),y(r),E(r),a.abrupt("return",r);case 16:case"end":return a.stop()}}),null,null,null,Promise)},leave:p};return a.a.createElement(U.a.Provider,{value:S},t)},L=new i.QueryClient;Object(o.a)((function(){return a.a.createElement(l.a,{store:d.b},a.a.createElement(m.a,{persistor:d.a},a.a.createElement(i.QueryClientProvider,{client:L},a.a.createElement(T,null,a.a.createElement(s.a,null,a.a.createElement(D,null,a.a.createElement(H,null,a.a.createElement(A.a,null))))))))}))},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return i}));var r=n(0),a=n.n(r),o=n(162),l=a.a.createContext({theme:o.a.nightTheme,toggleTheme:function(){}}),i=function(){return Object(r.useContext)(l)}},67:function(e,t,n){"use strict";var r=n(130),a={"CH-Languages":"en-JP,ja-JP","CH-Locale":"en_JP",Accept:"application/json","Accept-Language":"en-JP;q=1, ja-JP;q=0.9","Accept-Encoding":"gzip, deflate","CH-AppBuild":"304","CH-AppVersion":"0.1.28","User-Agent":"clubhouse/304 (iPhone; iOS 14.4; Scale/2.00)",Connection:"close","Content-Type":"application/json; charset=utf-8",Host:"www.clubhouseapi.com"};t.a=function(e,t){var n,o=r.b.getState().auth.auth_token;return o&&(a.Authorization="Token "+o),fetch("https://www.clubhouseapi.com/api"+e,{method:null!=(n=null==t?void 0:t.method)?n:"GET",headers:a,body:null!=t&&t.body?JSON.stringify(null==t?void 0:t.body):void 0})}},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var r=n(89),a=Object(r.b)({name:"room",initialState:{currentRoom:null,speakingUsers:[]},reducers:{setSpeakingUsers:function(e,t){e.speakingUsers=t.payload},setRoom:function(e,t){e.currentRoom=t.payload},addRoomUser:function(e,t){var n;null==(n=e.currentRoom)||n.users.push(t.payload)},removeRoomUser:function(e,t){var n,r;null!=(n=e.currentRoom)&&n.users&&(e.currentRoom.users=null==(r=e.currentRoom)?void 0:r.users.filter((function(e){return e.user_id!==t.payload.user_id})))}}}),o=a.reducer,l=a.actions}},[[298,1,2]]]);
//# sourceMappingURL=app.f50ea0ca.chunk.js.map