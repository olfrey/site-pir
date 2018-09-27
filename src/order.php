<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['guests'])) {$guests = $_POST['guests'];}
if (isset($_POST['date'])) {$date = $_POST['date'];}
if (isset($_POST['dontnowdate'])) {$dontnowdate = $_POST['dontnowdate'];}
if (isset($_POST['alco'])) {$alco = $_POST['alco'];}
if (isset($_POST['dops'])) {$dops = $_POST['dops'];}

$message;
if ($name) {
	$message .= "Имя: $name";
}
if ($phone) {
	$message .= "\nТелефон: $phone";
}
if ($guests) {
	$message .= "\nГостей: $guests";
}
if ($date) {
	$message .= "\nДата: $date";
}
if ($dontnowdate) {
	$message .= "\nЕще не знает дату";
}
if ($alco) {
	if ($alco == "yes") {
		$message .= "\nБудет ли свой алкоголь: Да";
	} else if ($alco == "no"){
		$message .= "\nБудет ли свой алкоголь: Нет";
	} else {
		$message .= "\nБудет ли свой алкоголь: Не знает";
	}
}

if ($dops) {
	$message .= "\nДополнительные услуги:";
	if ($dops == 1) {
		$message .= "\nВыездная регистрация";
	}
	if ($dops == 2){
		$message .= "\nУслуга декоратора";
	}
	if ($dops == 3){
		$message .= "\nПрограмма с ведущим";
	}
	if ($dops == 4){
		$message .= "\nСвадебная фотосессия";
	}
	if ($dops == 5){
		$message .= "\nОрганизация трансфера";
	}
	if ($dops == 5){
		$message .= "\nУслуга декоратора";
	}
	if ($dops == 6){
		$message .= "\nПрограмма с ведущим";
	}
	if ($dops == 7){
		$message .= "\nНе понадобится";
	} 
}

$headers = "Content-type: text/plain; charset = UTF-8";
$subject = "Новый заказ с сайта";
$to = "olfrey@ya.ru";
$send = mail($to, $subject, $message, $headers);
$to = "e5ash.bro@gmail.com";
$send = mail($to, $subject, $message, $headers);
?>