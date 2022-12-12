<?php

namespace app\Controller;

use app\Entity\Tareas;
use app\Model\DetailModel;
use app\Core\EntityManager;
use app\Core\AbstractController;

class DetailController extends AbstractController
{
  private $id;
  public function __construct(EntityManager $em)
  {
    $this->em = $em->getEm();
    parent::__construct();
  }
  public function main(int $id)
  {
    $tareasRepository = $this->em->getRepository(Tareas::class);
    $data = $tareasRepository->find($id);
    $this->render("detail.html.twig", [
      "id" => $data->getId(),
      "titulo" => $data->getTitulo(),
      "descripcion" => $data->getDescripcion(),
      "fecha_creacion" => $data->getFechaCreacion(),
      "fecha_vencimiento" => $data->getFechaVencimiento()
    ]);
  }
}
