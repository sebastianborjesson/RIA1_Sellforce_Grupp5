<?php
require_once '../../../../wp-load.php';
require_once '../PHPMailer/PHPMailerAutoload.php';

$formData = file_get_contents('php://input');
$data = json_decode($formData);

$name = $data->contactName;
$email = $data->contactEmail;
$message = $data->contactMessage;

if($name != '' && $email != '' && $message != '') {
	$phone = $data->contactPhone;
	$subject = $data->contactSubject;
	$toAddress = get_option('admin_email');

	$body = 'From: '.$name;
	$body .= "\r\nE-mail: ".$email;
	if($phone != '') {
		$body .= "\r\nPhone: ".$phone;
	}
	$body .= "\r\nMessage:\r\n\r\n".$message;

	$mail = new PHPMailer(true);
	$mail->IsSMTP();
	$mail->Host = 'mailtrap.io';
	$mail->Port = 2525;
	$mail->SMTPAuth = true;
	$mail->Username = '3256653bed9bf70f3';
	$mail->Password = '90b20e4a14b66a';

	$mail->CharSet = 'UTF-8';
	$mail->AddAddress($toAddress);
	$mail->From = $email;
	$mail->FromName = $name;
	$mail->AddReplyTo($email, $name);

	$mail->IsHTML(true);

	$mail->Subject = $subject;
	$mail->Body = $body;

	if(!$mail->send()) {
		$responseData = array(
			'success' => false,
			'message' => 'Message could not be sent.',
			'errorInfo' => $mail->ErrorInfo
		);
		echo json_encode($responseData);
		exit;
	}

	$responseData = array(
		'success' => true,
		'message' => 'Thank you! We have received your message and will reply as soon as possible.' 
	);
	echo json_encode($responseData);
} else {
	$responseData = array(
		'success' => false,
		'message' => 'Message could not be sent.'
	);
	echo json_encode($responseData);
}