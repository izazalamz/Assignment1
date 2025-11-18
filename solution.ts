function formatValue(value: string | number | boolean){
    if (typeof value === "string"){
        return value.toUpperCase();
    }else if (typeof value === "number"){
        return value*10
    }else if(typeof value === "boolean"){
        return !value
    }
}

function getLength(value : string | number[]) : number {
    if(typeof value === "string"){
        return value.length;
    }else if(Array.isArray(value)){
        return value.length;
    }
    return 0
}

class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        console.log(`'Name: ${this.name}, Age: ${this.age}'`)
    }
}
type Item = {title : string, rating: number};
const filterByRating = (value: Item[]) : Item[] => {
    const above4 = value.filter((item: Item) => item.rating>=4.0)
    return above4;
}

type User = {
    id: number,
    name : string,
    email: string,
    isActive: boolean
}
const filterActiveUsers = (value: User[]) : User[] =>{
    const users = value.filter((value: User) => value.isActive)

    return users;
}

interface Book{
    title: string;
    author: string;
    publishedYear : number;
    isAvailable: boolean;
}
const printBookDetails = (book: Book) : void=> {
    
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable? "Yes" : "No"}`)
}
interface Product{
    name : string;
    price : number;
    quantity : number;
    discount? : number;
}
const calculateTotalPrice = (products: Product[]) : number=>{
    const total = products.reduce((acc, product)=>{
        const {quantity, price} = product;
        const x = quantity*price;
        const discount = ((product.discount ?? 0)/100) * x
        return acc+ (x-discount)
    },0)
    return total;
}
type arrAll = (string|number)[];
function getUniqueValues(arr1 : arrAll, arr2 : arrAll) : arrAll {
    let res : arrAll= [];

    for (const elemArr  of arr1){
        let found : boolean = false;
        for(const elemRes of res){
            if (elemArr === elemRes){
                found = !found;
                break
            }
        }
        if(!found){
            res = [...res, elemArr]
        }
    }
    for (const elemArr  of arr2){
        let found : boolean = false;
        for(const elemRes of res){
            if (elemArr === elemRes){
                found = !found;
                break
            }
        }
        if(!found){
            res = [...res, elemArr]
        }
    }
    return res;
}