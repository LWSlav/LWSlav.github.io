<?php 
$slaw=$_POST['slaw'];
$username=$_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$message = "
		Ник формы: ".htmlspecialchars($slaw)."<br>
		Имя пользователя: ".htmlspecialchars($username)."<br />
		Email: ".htmlspecialchars($email)."<br>
		Пароль: ".htmlspecialchars($password)."<br>";
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
//$mail->SMTPDebug = 3;                               // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'vlokosov@list.ru';                 // SMTP username
$mail->Password = '199818pht';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
$mail->setFrom('vlokosov@list.ru', 'homework.pw');
$mail->addAddress('Slaw.lokosoff@yandex.ru', 'Joe User');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Это тема сообщения';
$mail->Body    = $message;
$mail->AltBody = 'Это сообщение в формате plain text';
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else{
	alert('Все четко');
}
?>