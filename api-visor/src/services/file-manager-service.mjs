import FileManagerClient from '../clients/file-manager-client.mjs'

export default  class FileManagerService {

    filemanagerClient= null;

    constructor(){
        this.filemanagerClient= new FileManagerClient();
    }

    async getFilesList(){
        let listFiles = null;
        try{
            listFiles= this.filemanagerClient.loadFileList();
        }catch(e){
            throw e;
        }
        return listFiles;
    }

    async getDataFromFile (filename) {
        let result = null
        try {
          result = this.filemanagerClient.getDataFromFile(filename);
        } catch (e) {
            throw e;
        }
        return result
    }

}
