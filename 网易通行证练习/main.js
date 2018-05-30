// 获得元素对象
function $(ElementId){
	return document.getElementById(ElementId);

}
button1 = '<img src="./images/li_err.gif">&nbsp;' ;
button2 = '<img src="./images/li_ok.gif">&nbsp;';
function mess(){
    var mess=document.getElementById('mymess');
	mess.style.background='yellow';
	mess.style.borderWidth=1+'px';
	mess.style.borderColor= '#ccc';
    mess.innerHTML='1.包含汉字，字母，下划线，数字以及！@#￥%&*字符<br>2.长度为4-20个字符<br>3.一个汉字占两个字符';
}
// $('#nicheng').blur(function() {
//     $('#nicheng').parent().find('#mymess').hide();
// })
// 表单验证
function check(){
	//验证用户名
	var user=$('user');
	var userId = $('userId');
	userId.innerHTML='';
	// var imgerr ='<img src="./images/li_err.gif">&nbsp;'
	// var div=document.getElementsByTagName('div')[0];
	// div
	if(user.value.length ==0){
		//innerHTML将值写入元素中
		
		
		document.getElementById('userId').style.backgroundColor = '#E9967A';
	    document.getElementById('userId').style.borderColor = '#EE4000';
        document.getElementById('userId').style.borderWidth  = 1 +'px';
		userId.innerHTML=button1+'用户名不能为空';
		return false;
	}else{
		document.getElementById('userId').style.backgroundColor = '#97FFFF';
	    document.getElementById('userId').style.borderColor = '#1E90FF';
	    document.getElementById('userId').style.borderWidth  = 1 +'px';
		userId.innerHTML=button2+'通行证用户名输入正确';
		
	}

	//验证密码

	var pwd=$('pwd');
	var pwdId=$('pwdId');
    pwdId.innerHTML='';
    if(pwd.value.length<6 || pwd.value.length>16){
    
        document.getElementById('pwdId').style.backgroundColor = '#E9967A';
	    document.getElementById('pwdId').style.borderColor = '#EE4000';
        document.getElementById('pwdId').style.borderWidth  = 1 +'px';
		
    	pwdId.innerHTML=button1 +'密码长度为6-16';
    	return false;

    }else{
    	document.getElementById('pwdId').style.backgroundColor = '#97FFFF';
	    document.getElementById('pwdId').style.borderColor = '#1E90FF';
	    document.getElementById('pwdId').style.borderWidth  = 1 +'px';

    	pwdId.innerHTML= button2 +'密码输入正确';
     
    }	

    //验证 重复密码
    var repwd = $('repwd');
    var repwdId = $('repwdId');
    repwdId.innerHTML='';
    if(repwd.value==''){
    	document.getElementById('repwdId').style.backgroundColor = '#E9967A';
	    document.getElementById('repwdId').style.borderColor = '#EE4000';
        document.getElementById('repwdId').style.borderWidth  = 1 +'px';
		
    	repwdId.innerHTML=button1 +'重复密码不能为空，请重复输入密码';
    	return false;

    }else if(repwd.value != pwd.value){
    	document.getElementById('repwdId').style.backgroundColor = '#E9967A';
	    document.getElementById('repwdId').style.borderColor = '#EE4000';
        document.getElementById('repwdId').style.borderWidth  = 1 +'px';
		
    	repwdId.innerHTML=button1 +'重复密码不一致，请重复输入密码';
    	return false;

    }else{
    	document.getElementById('repwdId').style.backgroundColor = '#97FFFF';
	    document.getElementById('repwdId').style.borderColor = '#1E90FF';
	    document.getElementById('repwdId').style.borderWidth  = 1 +'px';

    	repwdId.innerHTML=button2 +'两次密码输入正确';
    }

    //昵称验证
    var nicheng = $('nicheng');
    var nichengId = $('nichengId');
    nichengId.innerHTML='';
    if(nicheng.value==''){
    	document.getElementById('nichengId').style.backgroundColor = '#E9967A';
	    document.getElementById('nichengId').style.borderColor = '#EE4000';
        document.getElementById('nichengId').style.borderWidth  = 1 +'px';
		
    	nichengId.innerHTML=button1 +'昵称不能为空';
    	return false;

    }else{
    	document.getElementById('nichengId').style.backgroundColor = '#97FFFF';
	    document.getElementById('nichengId').style.borderColor = '#1E90FF';
	    document.getElementById('nichengId').style.borderWidth  = 1 +'px';
    	nichengId.innerHTML=button2 +'昵称输入正确';
    }
    //手机号验证
    var tel = $('tel');
    var telId = $('telId');
    telId.innerHTML='';
    if(tel.value==''){
    	document.getElementById('telId').style.backgroundColor = '#E9967A';
	    document.getElementById('telId').style.borderColor = '#EE4000';
        document.getElementById('telId').style.borderWidth  = 1 +'px';
		
    	telId.innerHTML=button1 +'关联手机号不能为空，请输入关联手机号码';
    	return false;

    }else{
    	document.getElementById('telId').style.backgroundColor = '#97FFFF';
	    document.getElementById('telId').style.borderColor = '#1E90FF';
	    document.getElementById('telId').style.borderWidth  = 1 +'px';

    	telId.innerHTML=button2 +'关联手机号输入正确';
    }

    //邮箱验证
    var eml= $('eml');
    var emlId = $('emlId');
    emlId.innerHTML='';
    if(eml.value==''){
    	document.getElementById('emlId').style.backgroundColor = '#E9967A';
	    document.getElementById('emlId').style.borderColor = '#EE4000';
        document.getElementById('emlId').style.borderWidth  = 1 +'px';
		
    	emlId.innerHTML=button1 +'保密邮箱不能为空，请输入保密邮箱';
    	return false;

    }else{
    	document.getElementById('emlId').style.backgroundColor = '#97FFFF';
	    document.getElementById('emlId').style.borderColor = '#1E90FF';
	    document.getElementById('emlId').style.borderWidth  = 1 +'px';
        // var mess=document.getElementById('mymess');
        // mess.blur();
    	emlId.innerHTML=button2 +'保密邮箱输入正确';
    }
   window.location.href = 'succ.html';

    return true;


}