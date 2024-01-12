# TITLE: USER CAN LOG IN WITH CORRECT CREDENTIALS

## ID: #1

## PRIORITY: 1

## PRE CONDITIONS:

User has access to login page: https://practicesoftwaretesting.com/#/auth/login

## STEPS:

1. User enter correct e-mail
2. User enter correct password
3. User press login button

## EXPECTED RESULT:

User is logged in and is on account site

# TITLE: USER CAN NOT LOG IN WITH INCORRECT CREDENTIALS

## ID: #2

## PRIORITY: 1

## PRE CONDITIONS:

- User has access to login page: https://practicesoftwaretesting.com/#/auth/login
- User must exist in the database

## STEPS:

1. User enter correct e-mail
2. User enter incorrect password
3. User press login button

## EXPECTED RESULT:

User can not log in and the message "Invalid email or password" is visible

# TITLE: USER CAN REGISTER WITH CORRECT DATA

## ID: #3

## PRIORITY: 1

## PRE CONDITIONS:

User has access to register page: https://practicesoftwaretesting.com/#/auth/register

## STEPS:

1. User fills in the required fields with the valid data
2. User press register button

## EXPECTED RESULT:

User is on login page and can log in with new register data
