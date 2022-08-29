Feature: New test

    Background: Navigate to page
        Given The user navigate to login page

    Scenario Outline: Login form validation
        And Page is open in resolution "<resolution>"
        When The user clicks on login button
        Then The user sees message about faild login
        Examples:
            | resolution |
            | XL         |
            | L          |
            | M          |

    Scenario Outline: Success Login
        And Page is open in resolution "<resolution>"
        When The user input username: "<user_name>"
        And The user input password: "<password>"
        And The user clicks on login button
        Then The user sees inventory page for "<user_name>"
        Examples:
            | resolution |  | user_name               | password     |
            | XL         |  | standard_user           | secret_sauce |
            | XL         |  | problem_user            | secret_sauce |
            | XL         |  | performance_glitch_user | secret_sauce |
            | L          |  | standard_user           | secret_sauce |
            | L          |  | problem_user            | secret_sauce |
            | L          |  | performance_glitch_user | secret_sauce |
            | M          |  | standard_user           | secret_sauce |
            | M          |  | problem_user            | secret_sauce |
            | M          |  | performance_glitch_user | secret_sauce |