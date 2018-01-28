<?php 
$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['telefon']);
$form = htmlspecialchars($_POST['form']);
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
//$mail->SMTPDebug = 3;                               // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'vlokosov@list.ru';                 // SMTP username
$mail->Password = '19981801PHT13q';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
$mail->setFrom('vlokosov@list.ru', 'Ildar S. Zhiganshin');
$mail->addAddress('Slaw.lokosoff@yandex.ru', 'Joe User');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Заявка с формы';
$mail->Body    = 'Это имя отправителя: '.$name.' , '.'Это телефон отправителя '.$phone;
$mail->AltBody = 'Это сообщение в формате plain text';
if(!$mail->send()) {
    echo 'Не ушло(';
}else{
	echo 'Сообщение отправлено';
}
?>