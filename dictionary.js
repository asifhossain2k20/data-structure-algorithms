class Dictionary{
    constructor(){
        this.dictionary = {};
    }
    add(key,value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}

const dictionaryData=new Dictionary();
dictionaryData.add(1,"Asif")
dictionaryData.add(2,"XOEN")
dictionaryData.add(3,"Roy")
console.log(dictionaryData.dictionary)

const getData=dictionaryData.get(2);
console.log(getData)