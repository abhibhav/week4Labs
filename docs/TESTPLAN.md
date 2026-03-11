# Student Account Management System – Test Plan

This test plan covers all business logic implemented in the COBOL application for student account management. It is designed to be used for validation with business stakeholders and as a basis for future unit and integration tests in a Node.js implementation.

| Test Case ID | Test Case Description                | Pre-conditions                | Test Steps                                                                 | Expected Result                                         | Actual Result | Status (Pass/Fail) | Comments |
|--------------|--------------------------------------|-------------------------------|----------------------------------------------------------------------------|---------------------------------------------------------|---------------|--------------------|----------|
| TC-01        | View initial account balance         | Application started           | 1. Start app<br>2. Select 'View Balance'                                   | Balance displayed as 1000.00                            |               |                    |          |
| TC-02        | Credit account with valid amount     | Application started           | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter 200.00              | Balance updated to 1200.00, confirmation displayed       |               |                    |          |
| TC-03        | Debit account with valid amount      | Application started, balance ≥ debit amount | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter 300.00              | Balance updated to 700.00, confirmation displayed        |               |                    |          |
| TC-04        | Debit account with insufficient funds| Application started, balance < debit amount | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter 2000.00             | Error message: 'Insufficient funds for this debit.'      |               |                    |          |
| TC-05        | Credit account with zero amount      | Application started           | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter 0.00                | Balance remains unchanged, confirmation displayed        |               |                    |          |
| TC-06        | Debit account with zero amount       | Application started           | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter 0.00                 | Balance remains unchanged, confirmation displayed        |               |                    |          |
| TC-07        | Invalid menu choice                  | Application started           | 1. Start app<br>2. Enter invalid menu option (e.g., 5 or letter)           | Error message: 'Invalid choice, please select 1-4.'      |               |                    |          |
| TC-08        | Exit application                     | Application started           | 1. Start app<br>2. Select 'Exit'                                          | Application exits with 'Goodbye!' message                |               |                    |          |

> **Note:** All operations are in-memory; balance resets to 1000.00 on each run.
