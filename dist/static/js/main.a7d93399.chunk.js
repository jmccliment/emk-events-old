(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{379:function(e,t,a){e.exports=a(698)},384:function(e,t,a){},698:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),i=a.n(c),l=(a(384),a(386),a(31)),o=a(32),s=a(34),m=a(33),u=a(35),d=a(701),h=a(703),p=a(699),E=a(448),f=a(700),b=a(12),g=Object(b.withStyles)({linkList:{display:"flex"},linkListItem:{margin:"0 .5em"},linkListItemLink:{color:"#FFF"}}),v=a(119),j=a.n(v),O=a(17),N=a(13),y=Object(N.d)(g,Object(O.b)(function(e,t){return{}},function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){return e({type:"SIGNOUT_SUCCESS"})})})}}}))(function(e){var t=e.classes,a=e.signOut,n=e.profile;return r.a.createElement("ul",{className:t.linkList},r.a.createElement("li",{className:t.linkListItem},r.a.createElement(f.a,{className:t.linkListItemLink,to:"/project/new"},"New Project")),r.a.createElement("li",{className:t.linkListItem},r.a.createElement(f.a,{className:t.linkListItemLink,to:"/events/new"},"New Event")),r.a.createElement("li",{className:t.linkListItem},r.a.createElement("a",{onClick:a},"Log Out")),r.a.createElement("li",{className:t.linkListItem},r.a.createElement(f.a,{to:"/"},r.a.createElement(j.a,null,n.initials))))}),S=g(function(e){var t=e.classes;return r.a.createElement("ul",{className:t.linkList},r.a.createElement("li",{className:t.linkListItem},r.a.createElement(f.a,{className:t.linkListItemLink,to:"/signup"},"Sign Up")),r.a.createElement("li",{className:t.linkListItem},r.a.createElement(f.a,{className:t.linkListItemLink,to:"/signin"},"Login")))}),w=a(120),C=a.n(w),x=a(199),k=Object(N.d)(Object(b.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},link:{color:"#FFF"}}),Object(O.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))(function(e){var t=e.classes,a=e.auth,n=e.profile,c=a.uid?r.a.createElement(y,{profile:n}):r.a.createElement(S,null);return r.a.createElement(C.a,{position:"static"},r.a.createElement(x.a,null,r.a.createElement(E.a,{to:"/",className:t.link},r.a.createElement(x.b,{variant:"h6",color:"inherit",className:t.grow},"East Mesa Karate Events Online")),c))}),R=a(49),F=a.n(R),L=a(50),I=a.n(L),_=a(14),A=a.n(_),T=a(70),P=a.n(T),U=Object(b.withStyles)({card:{minWidth:275,marginBottom:".5rem",marginTop:"1rem"},title:{fontSize:14}})(function(e){var t=e.classes,a=e.notifications;return r.a.createElement(F.a,{className:t.card},r.a.createElement(I.a,null,r.a.createElement(A.a,{variant:"h6",color:"textSecondary",gutterBottom:!0},"Notifications"),r.a.createElement("ul",{className:"notifications"},a&&a.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(A.a,{color:"textSecondary"},e.user),r.a.createElement(A.a,{color:"textPrimary"},e.content),r.a.createElement(A.a,{component:"div"},P()(e.time.toDate()).fromNow()))}))))}),B=Object(b.withStyles)({card:{minWidth:275,marginBottom:".5rem",marginTop:"1rem"},title:{fontSize:14}})(function(e){var t=e.classes,a=e.event;return r.a.createElement(F.a,{className:t.card},r.a.createElement(I.a,null,r.a.createElement(A.a,{className:t.title,color:"textSecondary",gutterBottom:!0},a.title),r.a.createElement(A.a,{component:"p"},a.date),r.a.createElement(A.a,{component:"p"},"Posted by ",a.authorFirstName," ",a.authorLastName),r.a.createElement(A.a,{component:"p",color:"textSecondary"},"3rd September, 2am")))}),D=function(e){var t=e.events;return r.a.createElement("div",null,t&&t.map(function(e){return r.a.createElement(E.a,{to:"/events/".concat(e.id),key:e.id},r.a.createElement(B,{event:e}))}))},G=function(e){var t=e.project;return r.a.createElement("div",null,r.a.createElement("div",{className:"card z-depth-0 event-summary"},r.a.createElement("div",{className:"card-context grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},P()(t.createdAt.toDate()).calendar()))))},W=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(E.a,{to:"/project/".concat(e.id),key:e.id},r.a.createElement(G,{project:e}))}))},z=a(39),J=a(702),V=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.events,n=e.auth,c=e.notifications;return n.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(D,{events:a})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(U,{notifications:c}))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(W,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset -m1"},r.a.createElement(U,{notifications:c})))):r.a.createElement(J.a,{to:"/signin"})}}]),t}(n.Component),X=Object(N.d)(Object(O.b)(function(e){return{projects:e.firestore.ordered.projects,events:e.firestore.ordered.events,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}},function(){return{}}),Object(z.firestoreConnect)([{collection:"projects"},{collection:"events",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(V),K=Object(N.d)(Object(O.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects,r=n?n[a]:{};return{auth:e.firebase.auth,project:r}}),Object(z.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return e.auth.uid?t&&t.title&&t.content?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,P()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(J.a,{to:"/signin"})}),Y=a(121),q=a.n(Y),H=Object(O.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=e.allow,c=e.deny,i=e.to,l=e.children,o=n||function(){return!!c},s=c||function(){return!1};return function(e,t){return!s(e,t)&&!!o(e,t)}(t,a)?r.a.createElement("div",null,l):r.a.createElement(J.a,{to:i})}),M=function(e){var t=e.to,a=e.children;return r.a.createElement(H,{allow:function(e){return e&&e.uid},to:t},a)},Z=Object(N.d)(Object(b.withStyles)({card:{minWidth:275,marginBottom:".5rem",marginTop:"1rem"},title:{fontSize:14}}),Object(O.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.events;return{event:n?n[a]:{}}}),Object(z.firestoreConnect)([{collection:"events"}]))(function(e){var t=e.classes,a=e.event;return a&&a.title?r.a.createElement(M,{to:"/signin"},r.a.createElement(F.a,{className:t.card},r.a.createElement(I.a,null,r.a.createElement(A.a,{className:t.title,color:"textSecondary",gutterBottom:!0},a.title),r.a.createElement(A.a,{component:"p"},a.content)),r.a.createElement(q.a,null,r.a.createElement(A.a,{component:"div"},a.authorFirstName," ",a.authorLastName),r.a.createElement(A.a,{component:"div"},a&&a.createdAt&&a.createdAt.toString&&a.createdAt.toString())))):r.a.createElement(M,{to:"/signin"},r.a.createElement("span",null,"loading..."))}),$=a(42),Q=a(25),ee=a.n(Q),te=a(38),ae=a.n(te),ne=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){return a.setState(Object($.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.auth,n=e.authError;return a.uid?r.a.createElement(J.a,{to:"/"}):r.a.createElement("div",{className:t.container},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(A.a,{variant:"h4",color:"textSecondary",gutterBottom:!0},"Sign In"),r.a.createElement(ee.a,{label:"Email",type:"email",id:"email",className:t.textField,onChange:this.handleChange}),r.a.createElement(ee.a,{label:"Password",type:"password",id:"password",className:t.textField,onChange:this.handleChange}),r.a.createElement(ae.a,{color:"primary",onClick:this.handleSubmit},"Login"),r.a.createElement("div",null,n?r.a.createElement("p",null,n):r.a.createElement("p",null))))}}]),t}(n.Component),re=Object(N.d)(Object(b.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200}}}),Object(O.b)(function(e,t){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){return e({type:"LOGIN_SUCCESS"})}).catch(function(t){return e({type:"LOGIN_ERROR",err:t})})}));var a}}}))(ne),ce=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){return a.setState(Object($.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError,n=e.classes;return t.uid?r.a.createElement(J.a,{to:"/"}):r.a.createElement("div",{className:n.container},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(A.a,{variant:"h4",color:"textSecondary",gutterBottom:!0},"Sign Up"),r.a.createElement(ee.a,{label:"Email",type:"email",id:"email",className:n.textField,onChange:this.handleChange}),r.a.createElement(ee.a,{label:"Password",type:"password",id:"password",className:n.textField,onChange:this.handleChange}),r.a.createElement(ee.a,{label:"Last Name",type:"text",id:"lastName",className:n.textField,onChange:this.handleChange}),r.a.createElement(ee.a,{label:"First Name",type:"text",id:"firstName",className:n.textField,onChange:this.handleChange}),r.a.createElement(ae.a,{color:"primary",onClick:this.handleSubmit},"Sign Up"),r.a.createElement(A.a,null,a)))}}]),t}(n.Component),ie=Object(N.d)(Object(O.b)(function(e,t){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){return t({type:"SIGNUP_SUCCESS"})}).catch(function(e){return t({type:"SIGNUP_ERROR",err:e})})}}(t))}}}),Object(b.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200}}}))(ce),le=a(43),oe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){return a.setState(Object($.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes;return e.auth.uid?r.a.createElement("div",{className:t.container},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(A.a,{variant:"h4",color:"textSecondary",gutterBottom:!0},"Create new project"),r.a.createElement(ee.a,{label:"Title",type:"text",id:"title",className:t.textField,onChange:this.handleChange}),r.a.createElement(ee.a,{label:"Project Content",multiline:!0,type:"text",id:"content",className:t.textField,onChange:this.handleChange}),r.a.createElement(ae.a,{color:"primary",onClick:this.handleSubmit},"Create"))):r.a.createElement(J.a,{to:"/signin"})}}]),t}(n.Component),se=Object(N.d)(Object(O.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(le.a)({},e,{authorId:i,authorFirstName:c.firstName,authorLastName:c.lastName,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))}}}),Object(b.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200}}}))(oe),me="CREATE_EVENT",ue="CREATE_EVENT_ERROR",de={events:[{id:"1",title:"Some Event",date:"1/12/19"},{id:"2",title:"Some Other Event",date:"2/12/19"},{id:"3",title:"Yet Another Event",date:"3/12/19"}]},he=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){return a.setState(Object($.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createEvent(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(M,{to:"/signin"},r.a.createElement("div",{className:e.container},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(A.a,{variant:"h4",color:"textSecondary",gutterBottom:!0},"Create new event"),r.a.createElement(ee.a,{label:"Title",type:"text",id:"title",className:e.textField,onChange:this.handleChange}),r.a.createElement(ee.a,{label:"Event Content",multiline:!0,type:"text",id:"content",className:e.textField,onChange:this.handleChange}),r.a.createElement(ae.a,{color:"primary",onClick:this.handleSubmit},"Create"))))}}]),t}(n.Component),pe=Object(N.d)(Object(O.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}},function(e){return{createEvent:function(t){return e(function(e){return function(t,a,n){var r=n.getFirestore;n.getFirebase,r().collection("events").add(Object(le.a)({},e,{authorId:12345,createdAt:new Date})).then(function(){t({type:me,payload:e})}).catch(function(e){t({type:ue,payload:e})})}}(t))}}}),Object(b.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:200}}}))(he),Ee=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:X}),r.a.createElement(p.a,{exact:!0,path:"/project/new",component:se}),r.a.createElement(p.a,{exact:!0,path:"/events/new",component:pe}),r.a.createElement(p.a,{path:"/project/:id",component:K}),r.a.createElement(p.a,{path:"/events/:id",component:Z}),r.a.createElement(p.a,{path:"/signin",component:re}),r.a.createElement(p.a,{path:"/signup",component:ie}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe={authError:null},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return Object(le.a)({},e,{authError:null});case"LOGIN_ERROR":return Object(le.a)({},e,{authError:"Login failed"});case"SIGNOUT_SUCCESS":return e;case"SIGNUP_SUCCESS":return Object(le.a)({},e,{authError:null});case"SIGNUP_ERROR":return Object(le.a)({},e,{authError:t.err.message});default:return e}},ge={projects:[{id:"1",title:"help me find peach",content:"blah, blah, blah"},{id:"2",title:"collect all the stars",content:"blah, blah, blah"},{id:"3",title:"egg hunt with yoshi",content:"blah, blah, blah"}]},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project"),console.table(t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error"),console.table(t.err),e;default:return e}},je=a(89),Oe=Object(N.c)({auth:be,project:ve,event:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return console.log("created event"),console.table(t.payload),e;case ue:return console.log("create event error"),console.table(t.payload),e;default:return e}},firestore:je.firestoreReducer,firebase:z.firebaseReducer}),Ne=a(303),ye=a(125),Se=a.n(ye);a(692),a(696);Se.a.initializeApp({apiKey:"AIzaSyAjW-WF2Nh7mHREY-os5ZThA3I0cknpqG0",authDomain:"east-mesa-karate-events.firebaseapp.com",databaseURL:"https://east-mesa-karate-events.firebaseio.com",projectId:"east-mesa-karate-events",storageBucket:"east-mesa-karate-events.appspot.com",messagingSenderId:"1002918899966"}),Se.a.firestore().settings({timestampsInSnapshots:!0});var we=Se.a,Ce=Object(N.e)(Oe,Object(N.d)(Object(N.a)(Ne.a.withExtraArgument({getFirestore:je.getFirestore,getFirebase:z.getFirebase})),Object(je.reduxFirestore)(we),Object(z.reactReduxFirebase)(we,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Ce.firebaseAuthIsReady.then(function(){return i.a.render(r.a.createElement(O.a,{store:Ce},r.a.createElement(Ee,null)),document.getElementById("root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[379,2,1]]]);
//# sourceMappingURL=main.a7d93399.chunk.js.map