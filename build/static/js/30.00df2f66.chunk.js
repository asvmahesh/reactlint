(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{412:function(e,a,t){"use strict";var l=t(68);t.d(a,"c",function(){return l.b});var n=t(8);t.d(a,"a",function(){return n.a});var r=t(55);t.d(a,"e",function(){return r.b});var m=t(151);t.d(a,"b",function(){return m.a}),t.d(a,"d",function(){return m.b})},818:function(e,a,t){"use strict";t.r(a);var l=t(3),n=t(4),r=t(6),m=t(5),s=t(7),c=t(0),o=t.n(c),i=t(412),d=t(24),u=t(1),b=t.n(u),p=(t(548),function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){b()(Object(d.findDOMNode)(this)).bootstrapValidator(this.props.options||{})}},{key:"render",value:function(){return this.props.children}}]),a}(o.a.Component)),E={feedbackIcons:{valid:"glyphicon glyphicon-ok",invalid:"glyphicon glyphicon-remove",validating:"glyphicon glyphicon-refresh"},fields:{title:{group:".col-md-8",validators:{notEmpty:{message:"The title is required"},stringLength:{max:200,message:"The title must be less than 200 characters long"}}},genre:{group:".col-md-4",validators:{notEmpty:{message:"The genre is required"}}},director:{group:".col-md-4",validators:{notEmpty:{message:"The director name is required"},stringLength:{max:80,message:"The director name must be less than 80 characters long"}}},writer:{group:".col-md-4",validators:{notEmpty:{message:"The writer name is required"},stringLength:{max:80,message:"The writer name must be less than 80 characters long"}}},producer:{group:".col-md-4",validators:{notEmpty:{message:"The producer name is required"},stringLength:{max:80,message:"The producer name must be less than 80 characters long"}}},website:{group:".col-md-6",validators:{notEmpty:{message:"The website address is required"},uri:{message:"The website address is not valid"}}},trailer:{group:".col-md-6",validators:{notEmpty:{message:"The trailer link is required"},uri:{message:"The trailer link is not valid"}}},review:{validators:{stringLength:{max:500,message:"The review must be less than 500 characters long"}}},rating:{validators:{notEmpty:{message:"The rating is required"}}}}},g=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault(),console.log("submit stuff")}},{key:"render",value:function(){return o.a.createElement(p,{options:E},o.a.createElement("form",{id:"movieForm",onSubmit:this.onSubmit},o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Default Form Elements"),o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-8"},o.a.createElement("label",{className:"control-label"},"Movie title"),o.a.createElement("input",{type:"text",className:"form-control",name:"title"})),o.a.createElement("div",{className:"col-md-4 selectContainer"},o.a.createElement("label",{className:"control-label"},"Genre"),o.a.createElement("select",{className:"form-control",name:"genre"},o.a.createElement("option",{value:""},"Choose a genre"),o.a.createElement("option",{value:"action"},"Action"),o.a.createElement("option",{value:"comedy"},"Comedy"),o.a.createElement("option",{value:"horror"},"Horror"),o.a.createElement("option",{value:"romance"},"Romance")))))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 col-md-4"},o.a.createElement("label",{className:"control-label"},"Director"),o.a.createElement("input",{type:"text",className:"form-control",name:"director"})),o.a.createElement("div",{className:"col-sm-12 col-md-4"},o.a.createElement("label",{className:"control-label"},"Writer"),o.a.createElement("input",{type:"text",className:"form-control",name:"writer"})),o.a.createElement("div",{className:"col-sm-12 col-md-4"},o.a.createElement("label",{className:"control-label"},"Producer"),o.a.createElement("input",{type:"text",className:"form-control",name:"producer"}))))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 col-md-6"},o.a.createElement("label",{className:"control-label"},"Website"),o.a.createElement("input",{type:"text",className:"form-control",name:"website"})),o.a.createElement("div",{className:"col-sm-12 col-md-6"},o.a.createElement("label",{className:"control-label"},"Youtube trailer"),o.a.createElement("input",{type:"text",className:"form-control",name:"trailer"}))))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"control-label"},"Review"),o.a.createElement("textarea",{className:"form-control",name:"review",rows:"8"}))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 col-md-12"},o.a.createElement("label",{className:"control-label"},"Rating")),o.a.createElement("div",{className:"col-sm-12 col-md-10"},o.a.createElement("label",{className:"radio radio-inline no-margin"},o.a.createElement("input",{type:"radio",name:"rating",value:"terrible",className:"radiobox style-2"}),o.a.createElement("span",null,"Terrible")," "),o.a.createElement("label",{className:"radio radio-inline"},o.a.createElement("input",{type:"radio",name:"rating",value:"watchable",className:"radiobox style-2"}),o.a.createElement("span",null,"Watchable")," "),o.a.createElement("label",{className:"radio radio-inline"},o.a.createElement("input",{type:"radio",name:"rating",value:"best",className:"radiobox style-2"}),o.a.createElement("span",null,"Best ever")," "))))),o.a.createElement("div",{className:"form-actions"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("button",{className:"btn btn-default",type:"submit"},o.a.createElement("i",{className:"fa fa-eye"}),"Validate"))))))}}]),a}(o.a.Component),v={feedbackIcons:{valid:"glyphicon glyphicon-ok",invalid:"glyphicon glyphicon-remove",validating:"glyphicon glyphicon-refresh"},fields:{firstName:{validators:{notEmpty:{message:"The first name is required"}}},lastName:{validators:{notEmpty:{message:"The last name is required"}}},company:{validators:{notEmpty:{message:"The company name is required"}}},job:{validators:{notEmpty:{message:"The job title is required"}}},department:{validators:{notEmpty:{message:"The department name is required"}}},mobilePhone:{validators:{notEmpty:{message:"The mobile phone number is required"},digits:{message:"The mobile phone number is not valid"}}},homePhone:{validators:{digits:{message:"The home phone number is not valid"}}},officePhone:{validators:{digits:{message:"The office phone number is not valid"}}}}},f=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(r.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={jobInfo:!1,phoneInfo:!1},t}return Object(s.a)(a,e),Object(n.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault(),console.log("submit stuff")}},{key:"toggleInfo",value:function(e){var a={};a[e]=!this.state[e],this.setState(a),b()(this.refs.form).data("bootstrapValidator").disableSubmitButtons(!1)}},{key:"render",value:function(){return o.a.createElement(p,{options:v},o.a.createElement("form",{id:"togglingForm",ref:"form",onSubmit:this.onSubmit,className:"form-horizontal"},o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Default Form Elements"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Full name ",o.a.createElement("sup",null,"*")),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("input",{type:"text",className:"form-control",name:"firstName",placeholder:"First name"})),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("input",{type:"text",className:"form-control",name:"lastName",placeholder:"Last name"})))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Company ",o.a.createElement("sup",null,"*")),o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("input",{type:"text",className:"form-control",name:"company",required:!0,"data-bv-notempty-message":"The company name is required"})),o.a.createElement("div",{className:"col-lg-2"},o.a.createElement("button",{type:"button",className:"btn btn-info btn-sm",onClick:this.toggleInfo.bind(this,"jobInfo")},"Add more info")))),o.a.createElement("div",{id:"jobInfo",style:{display:this.state.jobInfo?"block":"none"}},o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Job title ",o.a.createElement("sup",null,"*")),o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("input",{type:"text",className:"form-control",name:"job"})))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Department ",o.a.createElement("sup",null,"*")),o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("input",{type:"text",className:"form-control",name:"department"}))))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Mobile phone ",o.a.createElement("sup",null,"*")),o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("input",{type:"text",className:"form-control",name:"mobilePhone"})),o.a.createElement("div",{className:"col-lg-2"},o.a.createElement("button",{type:"button",className:"btn btn-info btn-sm",onClick:this.toggleInfo.bind(this,"phoneInfo")},"Add more phone numbers")))),o.a.createElement("div",{id:"phoneInfo",style:{display:this.state.phoneInfo?"block":"none"}},o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Home phone"),o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("input",{type:"text",className:"form-control",name:"homePhone"})))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Office phone"),o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("input",{type:"text",className:"form-control",name:"officePhone"}))))),o.a.createElement("div",{className:"form-actions"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("button",{className:"btn btn-default",type:"submit"},o.a.createElement("i",{className:"fa fa-eye"}),"Validate"))))))}}]),a}(o.a.Component),h=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault(),console.log("submit stuff")}},{key:"render",value:function(){return o.a.createElement(p,null,o.a.createElement("form",{id:"attributeForm",onSubmit:this.onSubmit,className:"form-horizontal","data-bv-message":"This value is not valid","data-bv-feedbackicons-valid":"glyphicon glyphicon-ok","data-bv-feedbackicons-invalid":"glyphicon glyphicon-remove","data-bv-feedbackicons-validating":"glyphicon glyphicon-refresh"},o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Set validator options via HTML attributes"),o.a.createElement("div",{className:"alert alert-warning"},o.a.createElement("code",null,'< input data-bv-validatorname data-bv-validatorname-validatoroption="..." / >'),o.a.createElement("br",null),o.a.createElement("br",null),"More validator options can be found here:",o.a.createElement("a",{href:"http://bootstrapvalidator.com/validators/",rel:"noopener noreferrer",target:"_blank"},"http://bootstrapvalidator.com/validators/")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Full name"),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("input",{type:"text",className:"form-control",name:"firstName",placeholder:"First name","data-bv-notempty":"true","data-bv-notempty-message":"The first name is required and cannot be empty"})),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("input",{type:"text",className:"form-control",name:"lastName",placeholder:"Last name","data-bv-notempty":"true","data-bv-notempty-message":"The last name is required and cannot be empty"})))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Username"),o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("input",{type:"text",className:"form-control",name:"username","data-bv-message":"The username is not valid","data-bv-notempty":"true","data-bv-notempty-message":"The username is required and cannot be empty","data-bv-regexp":"true","data-bv-regexp-regexp":"^[a-zA-Z0-9_\\.]+$","data-bv-regexp-message":"The username can only consist of alphabetical, number, dot and underscore","data-bv-stringlength":"true","data-bv-stringlength-min":"6","data-bv-stringlength-max":"30","data-bv-stringlength-message":"The username must be more than 6 and less than 30 characters long","data-bv-different":"true","data-bv-different-field":"password","data-bv-different-message":"The username and password cannot be the same as each other"})))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Email address"),o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("input",{className:"form-control",name:"email",type:"email","data-bv-emailaddress":"true","data-bv-emailaddress-message":"The input is not a valid email address"})))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Password"),o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("input",{type:"password",className:"form-control",name:"password","data-bv-notempty":"true","data-bv-notempty-message":"The password is required and cannot be empty","data-bv-identical":"true","data-bv-identical-field":"confirmPassword","data-bv-identical-message":"The password and its confirm are not the same","data-bv-different":"true","data-bv-different-field":"username","data-bv-different-message":"The password cannot be the same as username"})))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Retype password"),o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("input",{type:"password",className:"form-control",name:"confirmPassword","data-bv-notempty":"true","data-bv-notempty-message":"The confirm password is required and cannot be empty","data-bv-identical":"true","data-bv-identical-field":"password","data-bv-identical-message":"The password and its confirm are not the same","data-bv-different":"true","data-bv-different-field":"username","data-bv-different-message":"The password cannot be the same as username"})))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Languages"),o.a.createElement("div",{className:"col-lg-5"},o.a.createElement("div",{className:"checkbox"},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",name:"languages[]",value:"english","data-bv-message":"Please specify at least one language you can speak","data-bv-notempty":"true"}),"English"," ")),o.a.createElement("div",{className:"checkbox"},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",name:"languages[]",value:"french"}),"French"," ")),o.a.createElement("div",{className:"checkbox"},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",name:"languages[]",value:"german"}),"German"," ")),o.a.createElement("div",{className:"checkbox"},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",name:"languages[]",value:"russian"}),"Russian"," ")),o.a.createElement("div",{className:"checkbox"},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",name:"languages[]",value:"other"}),"Other"," "))))),o.a.createElement("div",{className:"form-actions"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("button",{className:"btn btn-default",type:"submit"},o.a.createElement("i",{className:"fa fa-eye"}),"Validate"))))))}}]),a}(o.a.Component),N={excluded:":disabled",feedbackIcons:{valid:"glyphicon glyphicon-ok",invalid:"glyphicon glyphicon-remove",validating:"glyphicon glyphicon-refresh"},fields:{gender:{validators:{notEmpty:{message:"The gender is required"}}},"languages[]":{validators:{choice:{min:1,max:2,message:"Please choose 1 - 2 languages you can speak"}}}}},y=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault(),console.log("submit stuff")}},{key:"render",value:function(){return o.a.createElement(p,{options:N},o.a.createElement("form",{id:"buttonGroupForm",onSubmit:this.onSubmit,className:"form-horizontal"},o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Default Form Elements"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Gender"),o.a.createElement("div",{className:"col-lg-9"},o.a.createElement("div",{className:"btn-group","data-toggle":"buttons"},o.a.createElement("label",{className:"btn btn-default"},o.a.createElement("input",{type:"radio",name:"gender",value:"male"}),"Male"," "),o.a.createElement("label",{className:"btn btn-default"},o.a.createElement("input",{type:"radio",name:"gender",value:"female"}),"Female"," "),o.a.createElement("label",{className:"btn btn-default"},o.a.createElement("input",{type:"radio",name:"gender",value:"other"}),"Other"," "))))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-lg-3 control-label"},"Languages"),o.a.createElement("div",{className:"col-lg-9"},o.a.createElement("div",{className:"btn-group","data-toggle":"buttons"},o.a.createElement("label",{className:"btn btn-default"},o.a.createElement("input",{type:"checkbox",name:"languages[]",value:"english"}),"English"," "),o.a.createElement("label",{className:"btn btn-default"},o.a.createElement("input",{type:"checkbox",name:"languages[]",value:"german"}),"German"," "),o.a.createElement("label",{className:"btn btn-default"},o.a.createElement("input",{type:"checkbox",name:"languages[]",value:"french"}),"French"," "),o.a.createElement("label",{className:"btn btn-default"},o.a.createElement("input",{type:"checkbox",name:"languages[]",value:"russian"}),"Russian"," "),o.a.createElement("label",{className:"btn btn-default"},o.a.createElement("input",{type:"checkbox",name:"languages[]",value:"italian"}),"Italian"," "))))),o.a.createElement("div",{className:"form-actions"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("button",{className:"btn btn-default",type:"submit"},o.a.createElement("i",{className:"fa fa-eye"}),"Validate"))))))}}]),a}(o.a.Component),w={feedbackIcons:{valid:"glyphicon glyphicon-ok",invalid:"glyphicon glyphicon-remove",validating:"glyphicon glyphicon-refresh"},fields:{price:{validators:{notEmpty:{message:"The price is required"},numeric:{message:"The price must be a number"}}},amount:{validators:{notEmpty:{message:"The amount is required"},numeric:{message:"The amount must be a number"}}},color:{validators:{notEmpty:{message:"The color is required"}}},size:{validators:{notEmpty:{message:"The size is required"}}}}},x=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault(),console.log("submit stuff")}},{key:"render",value:function(){return o.a.createElement(p,{options:w},o.a.createElement("form",{id:"productForm",onSubmit:this.onSubmit,className:"form-horizontal"},o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Default Form Elements"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-xs-2 col-lg-3 control-label"},"Price"),o.a.createElement("div",{className:"col-xs-9 col-lg-6 inputGroupContainer"},o.a.createElement("div",{className:"input-group"},o.a.createElement("input",{type:"text",className:"form-control",name:"price"}),o.a.createElement("span",{className:"input-group-addon"},"$"))))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-xs-2 col-lg-3 control-label"},"Amount"),o.a.createElement("div",{className:"col-xs-9 col-lg-6 inputGroupContainer"},o.a.createElement("div",{className:"input-group"},o.a.createElement("span",{className:"input-group-addon"},"\u20ac"),o.a.createElement("input",{type:"text",className:"form-control",name:"amount"}))))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-xs-2 col-lg-3 control-label"},"Color"),o.a.createElement("div",{className:"col-xs-9 col-lg-6 selectContainer"},o.a.createElement("select",{className:"form-control",name:"color"},o.a.createElement("option",{value:""},"Choose a color"),o.a.createElement("option",{value:"blue"},"Blue"),o.a.createElement("option",{value:"green"},"Green"),o.a.createElement("option",{value:"red"},"Red"),o.a.createElement("option",{value:"yellow"},"Yellow"),o.a.createElement("option",{value:"white"},"White"))))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-xs-2 col-lg-3 control-label"},"Size"),o.a.createElement("div",{className:"col-xs-9 col-lg-6 selectContainer"},o.a.createElement("select",{className:"form-control",name:"size"},o.a.createElement("option",{value:""},"Choose a size"),o.a.createElement("option",{value:"S"},"S"),o.a.createElement("option",{value:"M"},"M"),o.a.createElement("option",{value:"L"},"L"),o.a.createElement("option",{value:"XL"},"XL"))))),o.a.createElement("div",{className:"form-actions"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("button",{className:"btn btn-default",type:"submit"},o.a.createElement("i",{className:"fa fa-eye"}),"Validate"))))))}}]),a}(o.a.Component),k={feedbackIcons:{valid:"glyphicon glyphicon-ok",invalid:"glyphicon glyphicon-remove",validating:"glyphicon glyphicon-refresh"},fields:{email:{validators:{notEmpty:{message:"The email address is required"},emailAddress:{message:"The email address is not valid"}}},password:{validators:{notEmpty:{message:"The password is required"}}}}},T=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault(),console.log("submit stuff")}},{key:"render",value:function(){return o.a.createElement(p,{options:k},o.a.createElement("form",{id:"profileForm",onSubmit:this.onSubmit},o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Default Form Elements"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Email address"),o.a.createElement("input",{type:"text",className:"form-control",name:"email"}))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Password"),o.a.createElement("input",{type:"password",className:"form-control",name:"password"}))),o.a.createElement("div",{className:"form-actions"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("button",{className:"btn btn-default",type:"submit"},o.a.createElement("i",{className:"fa fa-eye"}),"Validate"))))))}}]),a}(o.a.Component),j={container:"#messages",feedbackIcons:{valid:"glyphicon glyphicon-ok",invalid:"glyphicon glyphicon-remove",validating:"glyphicon glyphicon-refresh"},fields:{fullName:{validators:{notEmpty:{message:"The full name is required and cannot be empty"}}},email:{validators:{notEmpty:{message:"The email address is required and cannot be empty"},emailAddress:{message:"The email address is not valid"}}},title:{validators:{notEmpty:{message:"The title is required and cannot be empty"},stringLength:{max:100,message:"The title must be less than 100 characters long"}}},content:{validators:{notEmpty:{message:"The content is required and cannot be empty"},stringLength:{max:500,message:"The content must be less than 500 characters long"}}}}},O=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault(),console.log("submit stuff")}},{key:"render",value:function(){return o.a.createElement(p,{options:j},o.a.createElement("form",{id:"contactForm",onSubmit:this.onSubmit,className:"form-horizontal"},o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Showing messages in custom area"),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-md-3 control-label"},"Full name"),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("input",{type:"text",className:"form-control",name:"fullName"})))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-md-3 control-label"},"Email"),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("input",{type:"text",className:"form-control",name:"email"})))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-md-3 control-label"},"Title"),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("input",{type:"text",className:"form-control",name:"title"})))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{className:"col-md-3 control-label"},"Content"),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("textarea",{className:"form-control",name:"content",rows:"5"})))),o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{className:"col-md-9 col-md-offset-3"},o.a.createElement("div",{id:"messages"})))),o.a.createElement("div",{className:"form-actions"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("button",{className:"btn btn-default",type:"submit"},o.a.createElement("i",{className:"fa fa-eye"}),"Validate"))))))}}]),a}(o.a.Component);t.d(a,"default",function(){return q});var q=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"content"},o.a.createElement("div",{className:"row"},o.a.createElement(i.a,{items:["Forms","Bootstrap Form Validation"],icon:"fa fa-fw fa-pencil-square-o",className:"col-xs-12 col-sm-7 col-md-7 col-lg-4"}),o.a.createElement(i.c,null)),o.a.createElement(i.d,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-6"},o.a.createElement(i.b,{id:"wid-id-0",colorbutton:!1,editbutton:!1,deletebutton:!1,sortable:!1},o.a.createElement("header",null,o.a.createElement("h2",null,"#movieForm ")),o.a.createElement("div",null,o.a.createElement("div",{className:"widget-body"},o.a.createElement(g,null)))),o.a.createElement(i.b,{id:"wid-id-1",colorbutton:!1,editbutton:!1,deletebutton:!1,sortable:!1},o.a.createElement("header",null,o.a.createElement("h2",null,"#togglingForm ")),o.a.createElement("div",null,o.a.createElement("div",{className:"widget-body"},o.a.createElement(f,null)))),o.a.createElement(i.b,{id:"wid-id-2",colorbutton:!1,editbutton:!1,deletebutton:!1,sortable:!1},o.a.createElement("header",null,o.a.createElement("h2",null,"#attributeForm ")),o.a.createElement("div",null,o.a.createElement("div",{className:"widget-body"},o.a.createElement(h,null))))),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement(i.b,{id:"wid-id-3",colorbutton:!1,editbutton:!1,deletebutton:!1,sortable:!1},o.a.createElement("header",null,o.a.createElement("h2",null,"#buttonGroupForm ")),o.a.createElement("div",null,o.a.createElement("div",{className:"widget-body"},o.a.createElement(y,null)))),o.a.createElement(i.b,{id:"wid-id-4",colorbutton:!1,editbutton:!1,deletebutton:!1,sortable:!1},o.a.createElement("header",null,o.a.createElement("h2",null,"#productForm ")),o.a.createElement("div",null,o.a.createElement("div",{className:"widget-body"},o.a.createElement(x,null)))),o.a.createElement(i.b,{id:"wid-id-5",colorbutton:!1,editbutton:!1,deletebutton:!1,sortable:!1},o.a.createElement("header",null,o.a.createElement("h2",null,"#profileForm ")),o.a.createElement("div",null,o.a.createElement("div",{className:"widget-body"},o.a.createElement(T,null)))),o.a.createElement(i.b,{id:"wid-id-6",colorbutton:!1,editbutton:!1,deletebutton:!1,sortable:!1},o.a.createElement("header",null,o.a.createElement("h2",null,"#contactForm ")),o.a.createElement("div",null,o.a.createElement("div",{className:"widget-body"},o.a.createElement(O,null))))))))}}]),a}(o.a.Component)}}]);
//# sourceMappingURL=30.00df2f66.chunk.js.map