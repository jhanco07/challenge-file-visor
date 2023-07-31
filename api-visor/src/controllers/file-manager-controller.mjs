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

      async getDataFromFile(req, res) {
        try {
          let file = req.query.fileName;
          if (!file) {
            res.status(400).json("Bad request");
            return;
          }
      
          const result = await this.fileManagerService.getDataFromFile(file);
          if (result === null) {
            res.status(404).json("Not found");
            return;
          }
      
          res.set('Content-Type', 'text/csv');
          res.status(200).send(result);
        } catch (err) {
          console.error(err);
          res.status(500).json("Error when loading files list");
        }
      }
      

      async loadAllDataFile(req, res){
        let result= null;
        try{
            result= await this.fileManagerService.loadAllData();
            res.set('Content-Type', 'application/json');
            res.status(200).code
        }catch(e){
            res.status(500).code
            result="Error when load data";
        }
        res.json(result);
      }

}