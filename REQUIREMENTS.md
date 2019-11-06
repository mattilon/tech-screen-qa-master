# Requirements for Assemble Store

## 1. General

1. All assemble store pages shall have a header bar at the top of the web page
2. The header bar shall be Assemble branded (blue bar, C-92%, M-69%, Y-0%, K-0%)
3. The header title, labeled "Assemble Store", shall be Assemble branded (white lettering, C-0%, M-0%, Y-0%, K-0%)
4. The header title, when clicked, shall navigate the user to the cart

## 2. Cart

1. The Assemble Store cart shall contain a table, labeled "Your Cart", to display the cart items
2. The table shall have the following columns: "SKU", "Quantity" , and "Price"
3. The Assemble Store Cart table shall contain the subtotal of all items in the Price Column, labeled "Subtotal"
4. The Assemble Store page shall contain a button, labelled "Checkout", located at the bottom, right of the page
5. The checkout button shall navigate the user to the Checkout page

## 3. Checkout

1. All fields should be fillable and have an appropriate label
2. The user shall be able to use the `Tab` key to tab through each of the form fields
3. The Checkout page shall contain a payment information section with the following labeled form fields:
   - Name on Card
   - Card Number
   - Expiration Date
   - CVV
4. The shipping information section shall contain the following labeled form fields:
   - Name
   - Address
   - Apt/Suite
   - City
   - State
   - Zip Code
   - Country
5. The State field shall use drop down functionality to list all states alphabetically
6. The Country field shall use drop down functionality to list all countries alphabetically
7. An Assemble branded checkout button, labeled "Place Order", shall be located in the bottom right corner of the check out page
8. The Place Order button shall validate that valid credit card information was entered, and provide an error if not
9. The Place Order button shall navigate the user to the order completion page

## 4. Order Completion

1. There shall be copy on the page stating, "Hooray! Way to order those products!"
2. An Assemble branded button, labeled "Go Home", shall be located on the order complete page
3. The Go Home button shall navigate the user to the home page when the button is clicked

## 5. Software Reuirements

1. Node version `12.13.0`

v1.4
