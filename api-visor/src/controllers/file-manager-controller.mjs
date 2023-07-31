import FileManagerService from '../services/file-manager-service.mjs'

export default class FileManagerController{

    fileManagerService= new FileManagerService();

    constructor(){
        this.fileManagerService= new FileManagerService();
    }

    async getFilesList(req, res) {
        let result= null;
        try {
            result= await this.fileManagerService. getFilesList();
            if(null==result){
                throw new Error("Error when get list");
            }
        } catch (err) {
            res.status(500).code
            result="Error when load files list";
        }
        res.set('Content-Type', 'application/json');
        res.status(200).json({files: result});
      }
      

      async loadAllDataFile(req, res){
        let result= null;
        try{
            result= await this.fileManagerService.loadAllData(req.query.fileName);
            res.set('Content-Type', 'application/json');
            res.status(200).code
        }catch(e){
            res.status(500).code
            result="Error when load data";
        }
        res.json(result);
      }

}