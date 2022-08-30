Feature: New test

    Scenario Outline: Login form validation
        Given The user navigate to login page in "<resolution>"
        When The user clicks on login button
        Then The user sees message about faild login
        Examples:
            | resolution |
            | XL         |
            | L          |
            | M          |

    Scenario Outline: Success Login
        Given The user navigate to login page in "<resolution>"
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

    Scenario Outline: Locked user
        Given The user navigate to login page in "<resolution>"
        When The user input username: "locked_out_user"
        And The user input password: "secret_sauce"
        And The user clicks on login button
        Then The user sees information that is blocked
        Examples:
            | resolution |
            | XL         |
            | L          |
            | M          |