import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ShopService } from '../shop.service';
import { State } from 'src/app/common/State';
import { City } from 'src/app/common/City'
import { CartService } from '../cart.service';


@Component({
 selector: 'app-checkout',
 templateUrl: './checkout.component.html',
 styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit  {
 checkoutFormGroup = new FormGroup ({
   customer: new FormGroup({
     firstName: new FormControl(''),
     lastName: new FormControl(''),
     email: new FormControl('')
   })
 });

 creditCardYears: number[] = [];
 creditCardMonths: number[] = [];
 shippingAddressStates: State[] = [];
 billingAddressStates: State[] = [];
 shippingAddressCities: City[] = [];
 billingAddressCities: City[] = [];

 public total : number = 0;
 public products : any = [];
 public productList : any;
 public totalPrice !: number;

 constructor(private formBuilder: FormBuilder, private shop: ShopService, private cart: CartService) { }
 allCountries: Array<any> = ["United States", "United Kingdom", "Brazil", "Nigeria", "India"];
 allStates: Array<any> = ["New York", "London", "Rio  de Janeiro", "Lagos", "Mumbai"];
 allCities: Array<any> = ["New York", "London", "Rio  de Janeiro", "Lagos", "Mumbai"];
 
 ngOnInit(): void {
   this.cart.getProducts().subscribe(result => {     //this method shows the number of items in the cart
     this.total = result.length;
   });
   this.cart.getProducts().subscribe(result=> {     
     this.products = result; 
     this.totalPrice = this.cart.getTotalAmount();
   })
 
   this.checkoutFormGroup = this.formBuilder.group({
     customer: this.formBuilder.group({
       firstName: [''],
       lastName: [''],
       email: ['']
     }),
     shippingAddress: this.formBuilder.group({
       street: [''],
       city: [''],
       state: [''],
       country: ['', [Validators.required]],
       zipCode: ['']
     }),
     billingAddress: this.formBuilder.group({
       street: [''],
       city: [''],
       state: [''],
       country: [''],
       zipCode: ['']
     }),
     creditCard: this.formBuilder.group({
       cardType: [''],
       nameOnCard: [''],
       cardNumber: [''],
       securityCode: [''],
       expirationMonth: [''],
       expirationYear: ['']
     })
   });

   // populate credit card months
   const startMonth: number = new Date().getMonth() + 1;
   console.log("startMonth: " + startMonth);
   this.shop.getCreditCardMonths(startMonth).subscribe(
     data => {
       console.log("Retrieved credit card months: " + JSON.stringify(data));
       this.creditCardMonths = data;
     }
   );
   // populate credit card years
   this.shop.getCreditCardYears().subscribe(
     data => {
       console.log("Retrieved credit card years: " + JSON.stringify(data));
       this.creditCardYears = data;
     }
   );
 }

 copyShippingAddressToBillingAddress(event: any) {
   if (event.target.checked) {
     this.checkoutFormGroup.controls['billingAddress']
           .setValue(this.checkoutFormGroup.controls['shippingAddress'].value);
           // bug fix for states and cities
           this.billingAddressStates = this.shippingAddressStates;
           this.billingAddressCities = this.shippingAddressCities;
   }
   else {
     this.checkoutFormGroup.controls['billingAddress'].reset();
     // bug fix for states and cities
     this.billingAddressStates = [];
     this.billingAddressCities = [];
   }
 }

 onSubmit() {
   console.log("Handling the submit button");
   console.log(this.checkoutFormGroup.get('customer')!.value);
   console.log("The email address is " + this.checkoutFormGroup.get('customer')!.value.email);
   console.log("The shipping address country is " + this.checkoutFormGroup.get('shippingAddress')!.value.country.name);
   console.log("The shipping address state is " + this.checkoutFormGroup.get('shippingAddress')!.value.state.name);
 }

 handleMonthsAndYears() {
   const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
   const currentYear: number = new Date().getFullYear();
   const selectedYear: number = Number(creditCardFormGroup!.value.expirationYear);
   // if the current year equals the selected year, then start with the current month
   let startMonth: number;
   if (currentYear === selectedYear) {
     startMonth = new Date().getMonth() + 1;
   }
   else {
     startMonth = 1;
   }
   this.shop.getCreditCardMonths(startMonth).subscribe(
     data => {
       console.log("Retrieved credit card months: " + JSON.stringify(data));
       this.creditCardMonths = data;
     }
   );
 }

 getStates(formGroupName: string) {
   const formGroup = this.checkoutFormGroup.get(formGroupName);
   const countryCode = formGroup!.value.country.code;
   const countryName = formGroup!.value.country.name;
   console.log(`${formGroupName} country code: ${countryCode}`);
   console.log(`${formGroupName} country name: ${countryName}`);
   this.shop.getStates(countryCode).subscribe(
     data => {
       if (formGroupName === 'shippingAddress') {
         this.shippingAddressStates = data;
       }
       else {
         this.billingAddressStates = data;
       }
       // select first item by default
       formGroup!.get('state')!.setValue(data[0]);
     }
   );
 }

 getCities(formGroupName: string) {
   const formGroup = this.checkoutFormGroup.get(formGroupName);
   const stateId = formGroup!.value.state.id;
   const stateName = formGroup!.value.state.name;
   console.log(`${formGroupName} state id: ${stateId}`);
   console.log(`${formGroupName} state name: ${stateName}`);
   this.shop.getCities(stateId).subscribe(
     data => {
       if (formGroupName === 'shippingAddress') {
         this.shippingAddressCities = data;
       }
       else {
         this.billingAddressCities = data;
       }
       // select first item by default
       formGroup!.get('city')!.setValue(data[0]);
     }
   );
 }

 isSubmitted = false;
 changeCountry(e:any) {
   this.country?.setValue(e.target.value, {onlySelf: true, });
 }
 
 get country() {
   return this.checkoutFormGroup.get('country')
 }
}
