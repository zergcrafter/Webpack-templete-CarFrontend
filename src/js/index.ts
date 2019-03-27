import axios,{
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"
import { ICar } from "./Icar";

let ContentElement: HTMLDivElement = <HTMLDivElement> document.getElementById("content");

function ShowAllCars():void{

    axios.get<ICar[]>("https://webapicar20190326034339.azurewebsites.net/api/cars")
    .then(function(response:AxiosResponse<ICar[]>) : void
    {
        console.log(response);
    })
    .catch(
        function(error:AxiosError) : void{
            console.log(error);
        }
    )
    console.log("Er i slutningen af ShowAllCars Funtion");
}

ShowAllCars();