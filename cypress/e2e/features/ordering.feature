Feature: Ordering feature

    Background: Navigate to page
        Given The user navigate to login page
        And The user input username: "standard_user"
        And The user input password: "secret_sauce"
        And The user clicks on login button

    Scenario Outline: Success Order
        And Page is open in resolution "<resolution>"
        And The user sees inventory page for "standard_user"
        Then The user add "Sauce Labs Backpack" to cart
        And The user is navigating to cart
        And The user sees "Sauce Labs Backpack" in cart
        And The user sees price for item to be "$29.99"
        And The user is clicks on checkout
        And The user is filling checkout form with: "<first_name>","<last_name>","<zip_code>"
        And The user click on continue button
        And The user click on finish button
        Then The user sees that order complit correctly
        Examples:
            | resolution | first_name | last_name | zip_code |
            | XL         | fist       | last      | 000      |
            | L         | fist       | last      | 000      |
            | M         | fist       | last      | 000      |
