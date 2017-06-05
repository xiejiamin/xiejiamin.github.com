<?php 
	include "functions.php";
	include "conn.php";

	//获取数据
	$name=$_GET["username"];
	$pwd=$_GET["password"];

	//检测
	if($name=='')
		page_redirect("请输入用户名！",'../login.html',1);

	if($pwd=='')
		page_redirect("请输入密码！",'../login.html',1);

    //登录检测
    $sql="select user_pwd from users where user_name=?";
    $stmt=mysqli_prepare($conn,$sql);
	mysqli_stmt_bind_param($stmt,"s",$name);
	mysqli_stmt_execute($stmt);
	mysqli_stmt_bind_result($stmt,$userPwd);
	if(mysqli_stmt_fetch($stmt))
	{
		if($userPwd==$pwd)
			page_redirect("登录成功！",'../index.html',1);
		else
			page_redirect("密码错误！",'../login.html',1);
	}
	else
		page_redirect("用户名错误！",'../login.html',1);

	mysqli_stmt_close($stmt);
	mysqli_close($conn);
	
 ?>