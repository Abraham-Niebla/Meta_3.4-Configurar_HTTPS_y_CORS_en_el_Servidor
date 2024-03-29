const express = require('express');
const router = express.Router();

// Importando funciones para aplicar los métodos HTTP
const responsablesController = require("../Controllers/responsablesController");

// Métodos HTTP GET POST PUT PATCH y DELETE a partir de la ruta '/responsables'
/*          MÉTODOS GET          */
router.get("/", responsablesController.getAll);
router.get("/id/:id", responsablesController.getById);
router.get("/emp/:noEmp", responsablesController.getByNoEmp);

/*          MÉTODOS POST          */
router.post("/", responsablesController.saveElement);

/*          MÉTODOS PUT          */
router.put("/id/:id", responsablesController.replaceById);
router.put("/emp/:noEmp", responsablesController.replaceByNoEmp);

/*          MÉTODOS PATCH          */
router.patch("/id/:id", responsablesController.updateById);
router.patch("/emp/:noEmp", responsablesController.updateByNoEmp);

/*          MÉTODOS DELETE          */
router.delete("/id/:id", responsablesController.deleteId);
router.delete("/emp/:noEmp", responsablesController.deleteNoEmp);

module.exports = router;