<template>
    <div class="columns">
        <form action="#" class="column is-6">
            <!-- 用户名，不可更改 -->
            <div class="field">
                <label class="label">用户名：</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input">
                </div>
            </div>
            <!-- 姓名，真实姓名 -->
            <div class="field">
                <label class="label">姓名：</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" placeholder="请输入真实姓名..." value="">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                       <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help is-success">连你的名字都不知道，还谈什么合作？</p>
            </div>
            <!-- 昵称 -->
             <div class="field">
                <label class="label">昵称：</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" placeholder="请输入昵称..." value="">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                       <i class="fas fa-check"></i>
                    </span>
                </div>
                <p class="help is-success">一不小心就能暴露你的年龄呢</p>
            </div>
            <!-- 邮箱 -->
            <div class="field">
                <label class="label">邮箱：</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-danger" type="email" placeholder="请输入邮箱..." value="">
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                       <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                <p class="help is-danger">两个亿的业务，源于一个小小邮箱</p>
            </div>
            <!-- 手机号 -->
            <div class="field">
                <label class="label">手机号：</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-danger" type="text" placeholder="请输入手机号..." value="">
                    <span class="icon is-small is-left">
                      <i class="fas fa-mobile"></i>
                    </span>
                    <span class="icon is-small is-right">
                       <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                <p class="help is-danger">连电话都打不通，还谈什么中国梦~</p>
            </div>
            <!-- 学位下拉选择 -->
            <div class="field">
                <label class="label">学位</label>
                <div class="control">
                    <div class="select">
                        <select>
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
                    <textarea class="textarea" placeholder="写点什么吧，不用管文字朴素还是华丽还是逼格高，写就完事了。但是很遗憾的告诉你，字数限制是140字（手动划重点）"></textarea>
                </div>
            </div>
             <!-- 个人介绍 -->
            <div class="field">
                <label class="label">个人介绍：</label>
                <div class="control">
                    <textarea class="textarea" placeholder="写点什么吧，不用管文字朴素还是华丽还是逼格高，写就完事了。但是很遗憾的告诉你，字数限制是140字（手动划重点）"></textarea>
                </div>
            </div>
            <!-- 操作按钮 -->
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link" type="button">提交</button>
                </div>
                <div class="control">
                    <button class="button" type="button">取消</button>
                </div>
            </div>
        </form>
    </div>
</template>