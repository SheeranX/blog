// 电话号码验证
export const mobileRule = /(?:^1[3456789]|^9[28])\d{9}$/;

// 邮箱验证
export const emailRule = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 

// 密码验证 (8-20位,且包含数字或字母)
export const pwdRule = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{8,20}$/;

//用户名验证 判断是否包含特殊字符
export const usernameRule = /^[A-Za-z0-9]{8,15}$/;