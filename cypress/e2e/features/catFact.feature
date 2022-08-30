Feature: Cat Facts

    Scenario: Get Cat Fact
        Given The user is sending request for random cat fact
        Then The user sees funfact in cypress log
        And The user sees length of funfact in cypress log