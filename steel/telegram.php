<?php

/* https://api.telegram.org/bot450005779:AAFuXVog1rxKiswBhbe5dViT3L5eHCqW6mM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$hidden = $_POST['hidden'];
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "450005779:AAFuXVog1rxKiswBhbe5dViT3L5eHCqW6mM";
$chat_id = "-287071593";
$arr = array(
	'Откуда пришла заявка: ' => $hidden,
	'Имя заказчика: ' => $name,
  	'Телефон заказчика: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
 	header('location: thanks.html');
} else {
  	echo "Error";
}
?>