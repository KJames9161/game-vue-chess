webpackJsonp([0,4],{218:function(e,s,r){var t,a,i={};t=r(244),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports.default);var o="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(o.template=a),o.computed||(o.computed={}),Object.keys(i).forEach(function(e){var s=i[e];o.computed[e]=function(){return s}})},244:function(e,s,r){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0});var a=r(4),i=t(a),o=r(34);s.default={template:r(358),data:function(){var e={age:26,sexo:"mascul",password:"",passwordRepit:"",firstName:"",lastName:"",name:"",username:""};return{editPassword:!0,formValid:!1,user:i.default.getUser()||e,error:"",formValidMsg:{password:{success:"Luce bien",error:"muy corta"},passwordRepit:{success:"Luce bien",error:"No coincide"},user:{success:"Luce bien",error:"No menos de 4 ni más de 10"}}}},vuex:{actions:{setUser:o.setUser}},methods:{validPassword:function(){return!this.editPassword||(!(this.user.password.length<5)||(this.formValidMsg.errorMsgPasswrd="corta la contraseña",!1))},repitPasswordValidate:function(){return!this.editPassword||this.user.password===this.user.passwordRepit},validUser:function(){return!(this.user.username.length<4||this.user.username.length>10)},registerUser:function(){this.validUser()&&this.repitPasswordValidate()&&this.validPassword()&&(this.error="procesando",i.default.signin(this,this.user).then(function(e){console.log(e),this.error="redireccionando",this.user._id?window.location.reload():this.$route.router.go(this.user._id?"user/"+this.user.username:"/")},function(e){for(var s in e.data.errors)this.error=e.data.errors[s].message}))}},created:function(){this.user.password=""}}},358:function(e,s){e.exports='<div class=row> <h3 class=flat-text-header style="text-align: center" v-if=!user._id>{{ $t("register.title") }}</h3> <div style="text-align: center"><p>{{error| json}}</p></div> <form class="col s12" v-on:submit.prevent=registerUser()> <div class="row card-panel"> <div class="row demo"> <md-input name=usuario :value.sync=user.username class="col s12 m6 l6" :success-msg=formValidMsg.user.success :error-msg=formValidMsg.user.error :valid=validUser()> {{ $t("register.username") }} </md-input> <md-input name=last_name :value.sync=user.email class="col s12 m6 l6"> {{ $t("register.email") }} </md-input> </div> <div class="row demo"> <md-input name=first_name :value.sync=user.name class="col s12 m4 l4"> {{ $t("register.name") }} </md-input> <md-input name=last_name :value.sync=user.firstName class="col s12 m4 l4"> {{ $t("register.firstName") }} </md-input> <md-input name=last_name :value.sync=user.lastName class="col s12 m4 l4"> {{ $t("register.lastName") }} </md-input> </div> <div class="row demo" v-if=user._id> <div class="col s4"> <md-checkbox :value.sync=editPassword> Editar contraseña </md-checkbox> </div> </div> <div class="row card-panel" v-if=editPassword> <md-input type=password class="col s12 m6 l6" :value.sync=user.password :success-msg=formValidMsg.password.success :error-msg=formValidMsg.password.error :valid=validPassword()> {{ $t("register.password") }} </md-input> <md-input type=password class="col s12 m6 l6" :value.sync=user.passwordRepit :success-msg=formValidMsg.passwordRepit.success :error-msg=formValidMsg.passwordRepit.error :valid=repitPasswordValidate()> {{ $t("register.passwordRepit") }} </md-input> </div> <div class=row> <p class=flat-text-header>Sexo</p> <md-radio-group group=firstNameValid class="col s6 m6 l6"> <md-radio :value.sync=user.sexo radio-value=f class=with-gap> {{ $t("register.femen") }} </md-radio> <md-radio :value.sync=user.sexo radio-value=m class=with-gap> {{ $t("register.mascul") }} </md-radio> </md-radio-group> <md-input :value.sync=user.age type=number :number=true class="col s6 m6 l6" :error-msg="\'si tambien\'" :valid="user.age < 100 && user.age > 3"> {{ $t("register.age") }} </md-input> </div> </div> <md-button class="waves-effect waves-light col s6 m6 l6" @click=registerUser()> <md-icon left>cloud</md-icon> {{ [user._id?\'Editar\':$t("register.insert")] }} </md-button> <md-button class="waves-effect waves-light col s6 m6 l6" v-link="{name: user._id?\'user\':\'home\'}"> <md-icon right>cloud</md-icon> {{ $t("register.cancel") }} </md-button> </form> <style scoped> .input-field label {\r\n            right: 10px !important;\r\n            left: 10px;\r\n            width: 100%;\r\n        }\r\n\r\n        input:not([type]) + label:after, input[type=text] + label:after, input[type=password] + label:after, input[type=email] + label:after, input[type=url] + label:after, input[type=time] + label:after, input[type=date] + label:after, input[type=datetime-local] + label:after, input[type=tel] + label:after, input[type=number] + label:after, input[type=search] + label:after, textarea.materialize-textarea + label:after {\r\n            display: block;\r\n            content: "";\r\n            position: absolute;\r\n            top: 57px;\r\n            opacity: 0;\r\n            transition: .2s opacity ease-out, .2s color ease-out;\r\n        } </style> </div>'}});
//# sourceMappingURL=0.7d19780f419711a2d2f5.js.map