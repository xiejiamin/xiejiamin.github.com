<?php 
	include "functions.php";
	include "conn.php";

	//获取数据
	$name=$_GET["username"];
	$pwd=$_GET["password"];
	$repwd=$_GET["confirmPassword"];
	$email=$_GET["usermail"];
	$tel=$_GET["userphone"];

	//检测
	if($name=='')
		page_redirect("请输入用户名！",'../register.html',1);

	if($pwd=='')
		page_redirect("请输入密码！",'../register.html',1);
	if($pwd!=$repwd)
		page_redirect("密码前后输入不一致！",'../register.html',1);

	if($email=='')
		page_redirect("请输入邮箱！",'../register.html',1);

	if($tel=='')
		page_redirect("请输入电话号码！",'../register.html',1);

	//处理数据库
	$sql="INSERT INTO `users`(`user_name`,`user_pwd`,`user_email`,`user_phone`) VALUES (?,?,?,?)";
	$stmt=mysqli_prepare($conn,$sql);
	mysqli_stmt_bind_param($stmt,"ssss",$name,$pwd,$email,$tel);
	mysqli_stmt_execute($stmt);
	if(mysqli_affected_rows($conn)>0){
		page_redirect("注册成功！",'../login.html',1);
	}
	else{
		page_redirect("注册失败！",'#',1);
	}
	mysqli_stmt_close($stmt);
	mysqli_close($conn);



 ?>