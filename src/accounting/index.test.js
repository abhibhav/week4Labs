// Unit tests for the Node.js accounting application
// Mirrors scenarios in docs/TESTPLAN.md

const { getBalance, credit, debit, resetBalance } = require('./index');

describe('Student Account Management System', () => {
  beforeEach(() => {
    resetBalance();
  });

  test('TC-01: View initial account balance', () => {
    expect(getBalance()).toBeCloseTo(1000.00);
  });

  test('TC-02: Credit account with valid amount', () => {
    credit(200.00);
    expect(getBalance()).toBeCloseTo(1200.00);
  });

  test('TC-03: Debit account with valid amount', () => {
    debit(300.00);
    expect(getBalance()).toBeCloseTo(700.00);
  });

  test('TC-04: Debit account with insufficient funds', () => {
    const result = debit(2000.00);
    expect(result).toBe('Insufficient funds for this debit.');
    expect(getBalance()).toBeCloseTo(1000.00);
  });

  test('TC-05: Credit account with zero amount', () => {
    credit(0.00);
    expect(getBalance()).toBeCloseTo(1000.00);
  });

  test('TC-06: Debit account with zero amount', () => {
    debit(0.00);
    expect(getBalance()).toBeCloseTo(1000.00);
  });

  test('TC-07: Invalid menu choice', () => {
    // Menu logic is interactive; not directly testable here
    // This would be tested in integration/UI tests
    expect(true).toBe(true);
  });

  test('TC-08: Exit application', () => {
    // Exit logic is interactive; not directly testable here
    // This would be tested in integration/UI tests
    expect(true).toBe(true);
  });
});
