
import express from 'express';
import FileManagerController from '../controllers/file-manager-controller.mjs';

const fileManagerController = new FileManagerController();
const router = express.Router();

router.get('/files', (req, res) => fileManagerController.getFilesList(req, res));

export default router;


