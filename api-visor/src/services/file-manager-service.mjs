import FileManagerClient from '../clients/file-manager-client.mjs'
import GeneralUtilities from '../utils/general-utilities.mjs'
import Big from 'big.js';

export default  class FileManagerService {

    filemanagerClient= null;

    constructor(){
        this.filemanagerClient= new FileManagerClient();
    }

    async getFilesList(){
        let listFiles = null;
        try{
            listFiles=await  this.filemanagerClient.loadFileList();
        }catch(e){
            throw e;
        } 
        var list= GeneralUtilities.sortStringsByNumber(listFiles);
        return list;
    }

    async getDataFromFile (filename) {
        let result = null
        try {
          result =await this.filemanagerClient.getDataFromFile(filename);
        } catch (e) {
            throw e;
        }
        return result
    }

    async processLoadData(fileName){
        try{
            var fileres=  await this.getDataFromFile(fileName);
            var dataClean= this.cleanData(fileres, fileName);
            return dataClean;
        }catch(e){console.log(e)}
    }

    async loadAllData(fileName=null){
        var listFiles=await this.getFilesList();
        var listLoad=[];
        if(fileName){ 
            var dataClean= await this.processLoadData(fileName);
            if(dataClean && dataClean.lines && dataClean.lines.length > 0){
                    listLoad=listLoad.concat(dataClean);
            }
            return listLoad;
        }
        for (const file of listFiles) {
            var dataClean= await this.processLoadData(file);
            if(dataClean && dataClean.lines && dataClean.lines.length > 0){
                listLoad=listLoad.concat(dataClean);
            }
        }
        
        return listLoad;

    }

    cleanData(data, fileName){ 

        if(!data)return;

        const lines = data.split("\n");
       
        let result= [];
        if(lines.length<=1){
            return;
        }

        for (var i = 1; i < lines.length; i++) { 
            const properties = lines[i].split(",");
            var validatelin=this.validateLine(properties, fileName);
            if(validatelin)  { 
                var obj= this.converLine(properties);
                result= result.concat(obj)

            }
        }

        return {
            "file": fileName,
            "lines": result
        }
    }

    converLine(properties){
        var format= {
            "text": properties[1],
            "number": parseInt(properties[2]),
            "hex": properties[3]
        };
        return format;

    }

    validateLine(properties, fileName){
        
        try{
            if( fileName!==properties[0]){ 
                return false;
            }
            if(properties[1] === null){ 
                return false;
            }
            if(!GeneralUtilities.isNumber(properties[2]) ){
                return false;
            }
            if(!GeneralUtilities.validHexa(properties[3]) ){
                return false;
            }

            return true;
        }catch(e){
            console.log(e);
        }
        
    }

   

}
