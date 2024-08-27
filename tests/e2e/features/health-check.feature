Feature: Health Check

  Scenario: Check the health status
    When I request the health status
    Then I should receive a healthy response
