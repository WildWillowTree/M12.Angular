<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Acces-Control-Allow-Headers: Origin, X-requested-With, Content-Type,Accept");

$dynamicEvt = array('title' => '2021-06-25');

echo json_encode($dynamicEvt);