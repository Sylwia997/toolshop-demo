## Login Tests Cases:

## TITLE: USER CAN LOG IN WITH CORRECT CREDENTIALS

### ID: #1

### PRIORITY: 1

### PRE CONDITIONS:

User has access to login page: https://practicesoftwaretesting.com/#/auth/login

### STEPS:

1. User enter correct e-mail
2. User enter correct password
3. User press login button

### EXPECTED RESULT:

User is logged in and is on account site

## TITLE: USER CAN NOT LOG IN WITH INCORRECT CREDENTIALS

### ID: #2

### PRIORITY: 1

### PRE CONDITIONS:

- User has access to login page: https://practicesoftwaretesting.com/#/auth/login
- User must exist in the database

### STEPS:

1. User enter correct e-mail
2. User enter incorrect password
3. User press login button

### EXPECTED RESULT:

User can not log in and the message "Invalid email or password" is visible

## Register Test Cases:

## TITLE: USER CAN REGISTER WITH CORRECT DATA

### ID: #3

### PRIORITY: 1

### PRE CONDITIONS:

User has access to register page: https://practicesoftwaretesting.com/#/auth/register

### STEPS:

1. User fills in the required fields with the valid data
2. User press register button

### EXPECTED RESULT:

User is on login page and can log in with new register data

## Product-lifecycle Tests Cases:

## TITLE: USER CAN ACCESS SINGLE PRODUCT

### ID: #4

### PRIORITY: 1

### PRE CONDITIONS:

User is logged in and has access to the product page: https://practicesoftwaretesting.com/#/

### STEPS:

1. User clicks on the selected product

### EXPECTED RESULT:

User has accesses to the product page and is transferred to it

## TITLE: USER CAN ADD PRODUCT TO CART

### ID: #5

### PRIORITY: 1

### PRE CONDITIONS:

User is logged in and has access to the product page: https://practicesoftwaretesting.com/#/

### STEPS:

1. User enter on the selected product
2. User press 'add to cart' button

### EXPECTED RESULT:

Product has been added to cart and the message 'Product added to shopping cart.' is display

## TITLE: The price of a product is displayed correctly in cart

### ID: #6

### PRIORITY: 3

### PRE CONDITIONS:

User is logged in and has access to the product page: https://practicesoftwaretesting.com/#/

### STEPS:

1. User enter on the selected product
2. User press 'add to cart' button
3. User go to cart
4. User enter 'Proceed to checkout' button

### EXPECTED RESULT:

The price of the product in the cart corresponds to the price of the product on the product page

## TITLE: The logged-in user can see this information in the cart

### ID: #7

### PRIORITY: 3

### PRE CONDITIONS:

User is logged in and has access to the product page: https://practicesoftwaretesting.com/#/

### STEPS:

1. User enter on the selected product
2. User press 'add to cart' button
3. User go to cart
4. User enter 'proceed to checkout' button

### EXPECTED RESULT:

User see information that he is logged in: `Hello ${user Name}, you are already logged in. You can proceed to checkout'

## TITLE: User can completed address data in checkout

### ID: #8

### PRIORITY: 3

### PRE CONDITIONS:

User is logged in and has access to the product page: https://practicesoftwaretesting.com/#/

### STEPS:

1. User enter on the selected product
2. User press 'add to cart' button
3. User go to cart
4. User enter 'proceed to checkout' button

### EXPECTED RESULT:

User see information that he is logged in: `Hello ${user Name}, you are already logged in. You can proceed to checkout'
