"use strict";(self["webpackChunkant_design_vue_pro"]=self["webpackChunkant_design_vue_pro"]||[]).push([[680],{48685:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var r=function(){var e=this,t=e._self._c;return t("a-form",{attrs:{layout:e.formLayout,form:e.form}},[t("a-form-item",{attrs:{label:"Form Layout","label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[t("a-radio-group",{attrs:{"default-value":"horizontal"},on:{change:e.handleFormLayoutChange}},[t("a-radio-button",{attrs:{value:"horizontal"}},[e._v(" Horizontal ")]),t("a-radio-button",{attrs:{value:"vertical"}},[e._v(" Vertical ")]),t("a-radio-button",{attrs:{value:"inline"}},[e._v(" Inline ")])],1)],1),t("a-form-item",{attrs:{label:"Field A","label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["fieldA",{initialValue:e.fieldA,rules:[{required:!0,min:6,message:"必须大于五个字符"}]}],expression:"[\n        'fieldA',\n        {\n          initialValue: fieldA,\n          rules: [{ required: true, min: 6, message: '必须大于五个字符' }],\n        },\n      ]"}],attrs:{placeholder:"input placeholder"}})],1),t("a-form-item",{attrs:{label:"Field B","label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["fieldB"],expression:"['fieldB']"}],attrs:{placeholder:"input placeholder"}})],1),t("a-form-item",{attrs:{"wrapper-col":e.buttonItemLayout.wrapperCol}},[t("a-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v(" Submit ")])],1)],1)},o=[],l={data(){return this.form=this.$form.createForm(this),{formLayout:"horizontal",fieldA:"Hello",fieldB:""}},mounted(){setTimeout((()=>{this.form.setFieldsValue({fieldA:"Hello World"})}),3e3)},computed:{formItemLayout(){const{formLayout:e}=this;return"horizontal"===e?{labelCol:{span:4},wrapperCol:{span:14}}:{}},buttonItemLayout(){const{formLayout:e}=this;return"horizontal"===e?{wrapperCol:{span:14,offset:4}}:{}}},methods:{handleFormLayoutChange(e){this.formLayout=e.target.value},handleSubmit(){this.form.validateFields(((e,t)=>{e||(console.log(t),Object.assign(this,t))}))}}},n=l,i=a(1001),u=(0,i.Z)(n,r,o,!1,null,null,null),s=u.exports},19799:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var r=function(){var e=this,t=e._self._c;return t("div",[t("a-form",{attrs:{layout:"horizontal",form:e.form}},[t("a-form-item",{attrs:{label:"付款账户","label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["payAccount",{initialValue:e.step.payAccount,rules:[{required:!0,message:"请输入付款账户"}]}],expression:"[\n          'payAccount',\n          {\n            initialValue: step.payAccount,\n            rules: [{ required: true, message: '请输入付款账户' }],\n          },\n        ]"}],attrs:{placeholder:"请输入付款账户"}})],1),t("a-form-item",{attrs:{label:"收款账户","label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[t("ReceiverAccountVue",{directives:[{name:"decorator",rawName:"v-decorator",value:["receiveAccount",{initialValue:e.step.receiveAccount,rules:[{required:!0,message:"请输入收款账户",validator:(e,t,a)=>{t&&t.number?a():a(!1)}}]}],expression:"[\n          'receiveAccount',\n          {\n            initialValue: step.receiveAccount,\n            rules: [\n              {\n                required: true,\n                message: '请输入收款账户',\n                validator: (rule, value, callback) => {\n                  if (value && value.number) {\n                    callback();\n                  } else {\n                    callback(false);\n                  }\n                },\n              },\n            ],\n          },\n        ]"}]})],1),t("a-form-item",[t("a-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("下一步")])],1)],1)],1)},o=[],l=(a(57658),function(){var e=this,t=e._self._c;return t("a-input-group",{attrs:{compact:""}},[t("a-select",{staticStyle:{width:"130px"},on:{change:e.handleTypeChange},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[t("a-select-option",{attrs:{value:"alipay"}},[e._v(" 支付宝 ")]),t("a-select-option",{attrs:{value:"bank"}},[e._v(" 银行 ")])],1),t("a-input",{staticStyle:{width:"calc(100% - 130px)"},on:{change:e.handleNumberChange},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}})],1)}),n=[],i={props:{value:{type:Object}},watch:{value(e){Object.assign(this,e)}},data(){const{type:e,number:t}=this.value||{};return{type:e||"alipay",number:t||""}},methods:{handleTypeChange(e){this.$emit("change",{...this.value,type:e})},handleNumberChange(e){this.$emit("change",{...this.value,number:e.target.value})}}},u=i,s=a(1001),m=(0,s.Z)(u,l,n,!1,null,"fa4c1a24",null),c=m.exports,p={name:"Step1",components:{ReceiverAccountVue:c},data(){return this.form=this.$form.createForm(this),{formItemLayout:{labelCol:{span:4},wrapperCol:{span:14}}}},computed:{step(){return this.$store.state.form.step}},methods:{handleSubmit(){const{form:e,$store:t,$router:a}=this;e.validateFields(((e,r)=>{e||(t.commit({type:"form/saveStepFormData",payload:r}),a.push("/form/step-form/confirm"))}))}}},f=p,d=(0,s.Z)(f,r,o,!1,null,"7a4a7012",null),h=d.exports},77827:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var r=function(){var e=this,t=e._self._c;return t("div",[t("a-form",{attrs:{layout:"horizontal",form:e.form}},[t("a-form-item",{attrs:{label:"付款账户","label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[e._v(" "+e._s(e.step.payAccount)+" ")]),t("a-form-item",{attrs:{label:"密码","label-col":e.formItemLayout.labelCol,"wrapper-col":e.formItemLayout.wrapperCol}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{initialValue:e.step.payPassword,rules:[{required:!0,message:"请输入付款密码"}]}],expression:"[\n          'password',\n          {\n            initialValue: step.payPassword,\n            rules: [{ required: true, message: '请输入付款密码' }],\n          },\n        ]"}],attrs:{type:"password",placeholder:"请输入付款密码"}})],1),t("a-form-item",[t("a-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("提交")]),t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.onPrev}},[e._v("上一步")])],1)],1)],1)},o=[],l=(a(57658),{name:"Step1",data(){return this.form=this.$form.createForm(this),{formItemLayout:{labelCol:{span:4},wrapperCol:{span:14}}}},computed:{step(){return this.$store.state.form.step}},methods:{handleSubmit(){const{form:e,$store:t,step:a}=this;e.validateFields(((e,r)=>{e||t.dispatch({type:"form/submitStepForm",payload:{...a,...r}})}))},onPrev(){this.$router.push("/form/step-form/info")}}}),n=l,i=a(1001),u=(0,i.Z)(n,r,o,!1,null,"0f60b040",null),s=u.exports},81794:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var r=function(){var e=this,t=e._self._c;return t("div",[e._v("操作成功，预计十分钟到账")])},o=[],l={},n=l,i=a(1001),u=(0,i.Z)(n,r,o,!1,null,"69877075",null),s=u.exports},42103:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var r=function(){var e=this,t=e._self._c;return t("div",[t("router-view")],1)},o=[],l={},n=l,i=a(1001),u=(0,i.Z)(n,r,o,!1,null,"4c85d422",null),s=u.exports}}]);