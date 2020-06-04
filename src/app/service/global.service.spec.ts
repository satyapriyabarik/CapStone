import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Product } from '../models/product';
import { GlobalService } from './global.service';

fdescribe('GlobalService',()=>{
    let httpClient:HttpClient;
    let httpTestingController: HttpTestingController;
    let ROOT_URl='http://localhost:3000';
    let globalService: GlobalService;

 beforeEach(()=>{
     TestBed.configureTestingModule({
         imports: [HttpClientTestingModule],
         providers:[GlobalService]
     });
        httpClient = TestBed.get(HttpClient) ;
        httpTestingController = TestBed.get(HttpTestingController) ;
        globalService = TestBed.get(GlobalService) ;
    });
afterEach(()=>{
    httpTestingController.verify();
});
  
 });
 fdescribe('#getAllProducts',()=>{
     beforeEach(()=>{
        let expectedProducts: Product[];
        /*expectedProducts =[
            {
                id: 63,
                productName: "LED Television",
                quantity: "200",
                price: "1234",
                brandName: "Micromax",
                modelName: "Mx2300",
                energyRatings: "5 star",
                capacity: "1234 ",
                annualConsumption: "23456 watt",
                installationType: "Demo",
                color: "Black",
                material: "Steel and Plastic",
                components: "Display Board",
                firstavailableDate: "2020-03-20",
                warranty: "5 years warranty",
                usability: "Fine view Television with multi angle sound digital dolby box.",
                addedOn: "2020-03-30T11:08:07.569Z",
                addedBy: "Gaurav Jha",
                rate: "8"
              },
              {
                "id": 36,
                "productName": "Air Conditioner",
                "quantity": "5",
                "price": "1236",
                "brandName": "Symphony",
                "modelName": "sm23",
                "energyRatings": "4 Star",
                "capacity": "2 ton",
                "annualConsumption": "3456 Watt",
                "installationType": "Demo",
                "color": "Blue",
                "material": "Silver",
                "components": "Air pollution  guard",
                "firstavailableDate": "2020-01-02",
                "warranty": "2 years manufacturer warranty",
                "usability": "Best product to heat the summer with in budget.",
                "addedOn": "2020-03-31T08:25:14.105Z",
                "addedBy": "Gaurav Jha",
                "rate": "5"
              },
              {
                "id": 43,
                "productName": "Washing Machine",
                "quantity": "12",
                "price": "123",
                "brandName": "Samsung",
                "modelName": "Sm1234",
                "energyRatings": "5 star",
                "capacity": "234 ltr",
                "annualConsumption": "2345 watt",
                "installationType": "free",
                "color": "Silver",
                "material": "Steel",
                "components": "stand and cover",
                "firstavailableDate": "2020-04-09",
                "warranty": "2 years manufacturer warranty",
                "usability": "Washing is great experience make it easy and quick through this",
                "addedOn": "2020-04-01T14:03:34.900Z",
                "addedBy": "Samik Gupta",
                "rate": "6"
              }
        ]*/
     })
 })