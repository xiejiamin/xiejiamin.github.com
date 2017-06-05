<?php 
	include "functions.php";
	include "conn.php";

	//获取数据
	$email=$_GET["usermail"];
	$pwd=$_GET["password"];
	$repwd=$_GET["confirmPassword"];
    
	//检测
	if($email=='')
		page_redirect("请输入邮箱！",'../forget.html',1);

	if($pwd=='')
		page_redirect("请输入密码！",'../forget.html',1);
	if($pwd!=$repwd)
		page_redirect("密码前后输入不一致！",'../forget.html',1);

    //修改检测
    $sql="select user_email from users where user_email=?";
    $stmt=mysqli_prepare($conn,$sql);
	mysqli_stmt_bind_param($stmt,"s",$email);
	mysqli_stmt_execute($stmt);
	if(mysqli_stmt_fetch($stmt))
	{
		mysqli_stmt_close($stmt);
		$sql="update users set user_pwd=? where user_email=?";
		$stmt=mysqli_prepare($conn,$sql);
		mysqli_stmt_bind_param($stmt,"ss",$pwd,$email);
		mysqli_stmt_execute($stmt);
		if(mysqli_affected_rows($conn)>0){
		page_redirect("修改密码成功！",'../login.html',1);
		}
		else{
			page_redirect("修改密码失败！",'../forget.html',1);
		}
	}
	else
	{
		page_redirect("邮箱不存在！",'../forget.html',1);
	}
	mysqli_stmt_close($stmt);
	mysqli_close($conn);

 ?>