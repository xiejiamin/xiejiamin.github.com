<?php
	$conn=mysqli_connect("localhost","root","","eye");
	if(!$conn) die("db connect fail!");
	$sql="set names utf8";
	mysqli_query($conn,$sql);
?>