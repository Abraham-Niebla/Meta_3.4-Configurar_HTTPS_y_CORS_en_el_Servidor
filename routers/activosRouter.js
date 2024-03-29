const express = require('express');
const router = express.Router();

// Importando funciones para aplicar los métodos HTTP
const activosController = require("../Controllers/activosController");

// Métodos HTTP GET POST PUT PATCH y DELETE a partir de la ruta '/activos'
/*          MÉTODOS GET          */
router.get("/", activosController.getAll);
router.get("/id/:id", activosController.getById);
router.get("/serial/:serial", activosController.getBySerial);

/*          MÉTODOS POST          */
router.post("/", activosController.saveElement);

/*          MÉTODOS PUT          */
router.put("/id/:id", activosController.replaceById);
router.put("/serial/:serial", activosController.replaceBySerial);

/*          MÉTODOS PATCH          */
router.patch("/id/:id", activosController.updateById);
router.patch("/serial/:serial", activosController.updateBySerial);

/*          MÉTODOS DELETE          */
router.delete("/id/:id", activosController.deleteId);
router.delete("/serial/:serial", activosController.deleteSerial);

module.exports = router;