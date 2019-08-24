<template>
    <div class="columns">
        <form action="#" class="column is-6">
            <!-- 用户名，不可更改 -->
            <div class="field">
                <label class="label">用户名：</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input" v-model.trim="form.username" @blur="check('empty,username',$event)" name="username" data-text="用户名" id="username">
                </div>
                <p class="help has-text-grey">专属ID,用于登录(长度8～20位，且必须包含数字和字母)</p>
            </div>
            <!-- 姓名，真实姓名 -->
            <div class="field">
                <label class="label">姓名：</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="请输入真实姓名..." value="" v-model.trim="form.name" @blur="check('empty,unique',$event)" data-text="真实姓名" name="realname" id="realname">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                       <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help has-text-grey">连你的名字都不知道，还谈什么合作？</p>
            </div>
            <!-- 昵称 -->
             <div class="field">
                <label class="label">昵称：</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="请输入昵称..." value="" v-model.trim="form.nickname" id="nickname">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                       <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help has-text-grey">一不小心就能暴露你的年龄呢</p>
            </div>
            <!-- 邮箱 -->
            <div class="field">
                <label class="label">邮箱：</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="请输入邮箱..." value="" v-model.trim="form.email" id="email" @blur="check('empty,email',$event)" data-text='邮箱'>
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                       <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                <p class="help has-text-grey">两个亿的业务，源于一个小小邮箱</p>
            </div>
            <!-- 手机号 -->
            <div class="field">
                <label class="label">手机号：</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="请输入手机号..." value="" v-model.trim="form.mobile" id="phone" @blur="check('phone',$event)" data-text='手机'>
                    <span class="icon is-small is-left">
                      <i class="fas fa-mobile"></i>
                    </span>
                    <span class="icon is-small is-right">
                       <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                <p class="help has-text-grey">连电话都打不通，还谈什么中国梦~</p>
            </div>
            <!-- 学位下拉选择 -->
            <div class="field">
                <label class="label">学位</label>
                <div class="control">
                    <div class="select">
                        <select v-model="form.bachlor">
                            <option>大专</option>
                            <option selected>本科</option>
                            <option>硕士</option>
                            <option>博士</option>
                        </select>
                    </div>
                </div>
            </div>
            <!-- 个人介绍 -->
            <div class="field">
                <label class="label">个人介绍：</label>
                <div class="control">
                    <textarea class="textarea" v-model.trim="form.introduce" placeholder="写点什么吧，不用管文字朴素还是华丽还是逼格高，写就完事了。但是很遗憾的告诉你，字数限制是140字（手动划重点）" id="introduce"></textarea>
                </div>
            </div>
            <!-- 操作按钮 -->
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link" type="button" @click="submit">提交</button>
                </div>
                <div class="control">
                    <button class="button" type="button">取消</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import {savePersonnel} from "@/assets/scripts/getData.js";
import * as rule from "@/assets/scripts/util.js";
export default {
    data() {
        return {
            form:{
                username:"",
                name:"",
                nickname:"",
                email:"",
                mobile:"",
                bachlor:"本科",
                introduce:"",
                isPassed: false
            }
        }
    },
    methods: {
        submit(){
            if(this.isPassed)
              savePersonnel(this.form).then(res=>{
                console.log(res);
              });
            else
                this.$message.error('提交的信息有误，请核对后提交');
        },
        check(type,$event){
            console.log($event);
            let val = $event.target.value;
            let text = $event.target.dataset.text;
            let typeArr = type.split(',');
            let id = $event.target.id;
            let $ele = document.querySelector('#'+id);
            let isPassed = true;
            if(Array.isArray(typeArr) && typeArr.length>0)
            {
                typeArr.forEach(item => {
                    switch(item){
                        case "empty":
                            if(val==''||val==null)
                            {
                                this.$message.error(text+"不能为空");
                                isPassed = false;
                                return
                            }
                            break
                        case "unique":   
                           // alert(text+"唯一");
                            isPassed = false;
                            return
                            break
                        case "email":
                            if(!rule.emailRule.test(this.form.email)) {
                                this.$message.error(text+'格式有误');
                                isPassed = false;
                                return
                            }
                            break
                        case "phone":
                            if(!rule.mobileRule.test(this.form.email)) {
                                this.$message.error(text+'格式有误');
                                isPassed = false;
                                return
                            }
                            break
                        case "username":
                            if(!rule.usernameRule.test(this.form.username)) {
                                this.$message.error(text+'格式有误');
                                isPassed = false;
                                return
                            }
                            break
                    }
                });
            }
            if(!isPassed) {
                 $ele.classList.add('is-danger');
            } else {
                 $ele.classList.remove('is-danger');
                 $ele.classList.add('is-success');
                 this.isPassed = isPassed;
            }
            console.log($event);
        }
    },
    computed: {
        
    },
}
</script>
<style>
    .message{
        position: fixed;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
    }
</style>
