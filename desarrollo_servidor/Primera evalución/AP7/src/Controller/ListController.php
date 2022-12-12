<?php

namespace app\Controller;

use app\Entity\Tareas;
use app\Core\EntityManager;
use app\Core\AbstractController;

class ListController extends AbstractController
{
  private $em;
  public function __construct(EntityManager $em )
  {
    $this->em = $em->getEm();
    parent::__construct();
  }
  public function main(mixed $page = null)
  {
    $tareasRepository = $this->em->getRepository(Tareas::class);
    $data = $tareasRepository->findAll();
    $this->render("list.html.twig", [
      "data" => $data,
      "page" => $this->getLastPage($page)
    ]);
  }

  private function getLastPage(mixed $page): int{
    if(!is_null($page) && is_numeric($page) ){
      $currentPage = intval($page);

    }elseif(isset($_SESSION["page"])){  
      $currentPage = $_SESSION["page"];

    }else{
      $currentPage = 1;
      
    }

    $_SESSION["page"] = $currentPage;
    return $currentPage;
  }
}
