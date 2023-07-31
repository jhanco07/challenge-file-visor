
import express from 'express';
import FileManagerController from '../controllers/file-manager-controller.mjs';

const fileManagerController = new FileManagerController();
const router = express.Router();

/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: Obtiene los datos del servicio.
 *     description: Retorna los datos proporcionados por el servicio.
 *     responses:
 *       200:
 *         description: Datos obtenidos exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   file:
 *                     type: string
 *                     description: Nombre del archivo.
 *                   lines:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         text:
 *                           type: string
 *                           description: Texto de la línea.
 *                         number:
 *                           type: number
 *                           description: Número de la línea.
 *                         hex:
 *                           type: string
 *                           description: Valor hexadecimal.
 */

router.get('/files/list', (req, res) => fileManagerController.getFilesList(req, res));
router.get('/files/data', (req, res) => fileManagerController.loadAllDataFile(req, res));




export default router;


