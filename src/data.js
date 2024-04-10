export const API_KEY = 'AIzaSyAnoFJlO0FdE_ntdVZwR07VRJcrk8v7CXk';

export const value_converter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }

}