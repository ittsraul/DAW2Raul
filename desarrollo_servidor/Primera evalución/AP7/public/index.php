<?php
require_once "../vendor/autoload.php";


use Dotenv\Dotenv;
use app\Core\Dispatcher;
use DI\ContainerBuilder;

$dotenv = Dotenv::createImmutable('../');
$dotenv->load();

session_start();

$builder = new ContainerBuilder();
$builder->addDefinitions(__DIR__ . '/../config/' . $_ENV['DICONFIGFILE']);
$container = $builder->build();

$container->get(Dispatcher::class);



