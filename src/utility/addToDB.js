const getStoredBook=()=>{
const storedBookSTR = localStorage.getItem("readlist");
if (storedBookSTR){
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
}
else{
    return[];
}
}
const addToStoredDB=(id)=>{

}