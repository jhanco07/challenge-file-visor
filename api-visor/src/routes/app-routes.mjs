
import express from 'express';
import FileManagerController from '../controllers/file-manager-controller.mjs';

const fileManagerController = new FileManagerController();
const router = express.Router();

router.get('/files/data', (req, res, next) => {
    // Verifica si existe el query param "fileName"
    const fileName = req.query.fileName;
    if (fileName) {
      // Si existe el query param, llama al método que maneja las solicitudes con fileName
      return fileManagerController.getDataFromFile(req, res, fileName);
    }
    // Si no hay query param, llama al método que maneja las solicitudes sin fileName
    return fileManagerController.getFilesList(req, res);
  });
router.get('/file', (req, res) => fileManagerController.getDataFromFile(req, res));
router.get('/allDataFile', (req, res) => fileManagerController.getDataFromFile(req, res));
router.get('/loadAllDataFile', (req, res) => fileManagerController.loadAllDataFile(req, res));

export default router;


