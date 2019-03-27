import axios,{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"
import { ICar } from "./Icar";
import Axios from "../../node_modules/axios/index";

let ContentElement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
let GetAllCarsButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("getAllButton");
let AddCarButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("addButton");

GetAllCarsButton.addEventListener('click', ShowAllCars);
AddCarButton.addEventListener('click', addCar);

function addCar():void{
    let addModelelement: HTMLInputElement = <HTMLInputElement> document.getElementById("addModel");
    let addVendorelement: HTMLInputElement = <HTMLInputElement> document.getElementById("addVendor");
    let addPriceelement: HTMLInputElement = <HTMLInputElement> document.getElementById("addPrice");

    let myModel : string = addModelelement.value;
    let myVendor : string = addVendorelement.value;
    let myPrice : number = +addPriceelement.value;

    axios.post<ICar>("https://webapicar20190326034339.azurewebsites.net/api/cars",
    {model:myModel, vendor:myVendor, price:myPrice})
    .then(function(response:AxiosResponse) : void
    {
        console.log("Status er: " + response.status)
    })
    .catch(
        function (error:AxiosError) : void{
        console.log(error);
        }
    )
}

function ShowAllCars():void{

    axios.get<ICar[]>("https://webapicar20190326034339.azurewebsites.net/api/cars")
    .then(function(response:AxiosResponse<ICar[]>) : void
    {
        console.log(response);

        let result: string = "<ol>"

        response.data.forEach((car: ICar) => {
            result += "<li>" + car.model + " " + car.vendor + " " + car.price + "</li>"
        });
        result += "</ol>"

        ContentElement.innerHTML = result;
    })
    .catch(
        function(error:AxiosError) : void{
            console.log(error);
        }
    )
    console.log("Er i slutningen af ShowAllCars Funtion");
}

// ShowAllCars();