const express = require('express');
const router = express.Router();

// Importando funciones para aplicar los métodos HTTP
const ubicacionesController = require("../Controllers/ubicacionesController");

// Métodos HTTP GET POST PUT PATCH y DELETE a partir de la ruta '/ubicaciones'
/*          MÉTODOS GET          */
router.get("/", ubicacionesController.getAll);
router.get("/id/:id", ubicacionesController.getById);

/*          MÉTODOS POST          */
router.post("/", ubicacionesController.saveElement);

/*          MÉTODOS PUT          */
router.put("/id/:id", ubicacionesController.replaceById);

/*          MÉTODOS PATCH          */
router.patch("/id/:id", ubicacionesController.updateById);

/*          MÉTODOS DELETE          */
router.delete("/id/:id", ubicacionesController.deleteId);

module.exports = router;