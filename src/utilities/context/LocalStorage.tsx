export const SetStorage = (name, item) =>{
    localStorage.setItem(name, item)
    return JSON.parse(item)
}

export const GetStorage = ( name, initial ) =>{
    const data = localStorage.getItem( name )
    if(data){
        return JSON.parse(data) 
    }else{
        return initial
    }
}

export const SetStorageMass = (name, item) =>{
    localStorage.setItem(name, JSON.stringify(item))
    return item
}