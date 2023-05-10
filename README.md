#### My Store Project

This project was initially generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Installing dependencies ##

```
npm install
```

#### Summary
> In this project, I will use Angular to create a simple single-page e-commerce application called MyStore.
> The application will include a variety of Angular components that communicate with one another, such as a product list component that displays a list of items for which a user can shop.
> The mock data is generated from the provided static json file, and the items are then rendered into the page.

#### App components
+ Product list `product-list`: list of all product items on homepage
+ Product item `product-item`: single component that makes up product list
+ Product detail `product-detail`: detail of product when users navigate to single product with specific id
+ add-to-cart `add-to-cart`: add product to cart
+ Nav bar `nav-bar`: navigation bar that stays on top of every route
+ Cart `cart`: checkout form with form validation and cart list
+ Confirmation `confirmation`: confirmation page after successful checkout

#### App specifics
##### Model:
+ Product

##### Service:
+ Product
+ Cart

##### Routing:
+ `/products`: product homepage 
+ `products/:id`: product item detail page 
+ `/cart`: cart checkout page 
+ `/confirmation`: confirmation page

#### Run the project

Run `ng serve` OR `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Build the project

Run `ng build` OR `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Prettier ###

```
npm run prettier
```

### Linting ###

```
npm run lint
```