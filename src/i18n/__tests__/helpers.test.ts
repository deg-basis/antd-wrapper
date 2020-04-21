import 'jest';
import { plural } from '../helpers';

test('default (string)', () => {
  const result = plural(0, {
    default: 'default',
  });

  expect(result).toEqual('default');
});

test('default (function)', () => {
  const result = plural(0, {
    default: n => `default: ${n}`,
  });

  expect(result).toEqual('default: 0');
});

test('plural (zero)', () => {
  const result = plural(0, {
    default: n => `default: ${n}`,
    plural: n => `plural: ${n}`,
  });

  expect(result).toEqual('plural: 0');
});

test('plural (two)', () => {
  const result = plural(2, {
    default: n => `default: ${n}`,
    plural: n => `plural: ${n}`,
  });

  expect(result).toEqual('plural: 2');
});

test('not a plural (one)', () => {
  const result = plural(1, {
    default: n => `default: ${n}`,
    plural: n => `plural: ${n}`,
  });

  expect(result).toEqual('default: 1');
});

test('plural (string)', () => {
  const result = plural(2, {
    default: n => `default: ${n}`,
    plural: 'plural',
  });

  expect(result).toEqual('plural');
});

test('specific number (string)', () => {
  const result = plural(0, {
    default: n => `default: ${n}`,
    0: 'zero',
  });

  expect(result).toEqual('zero');
});

test('specific number (function)', () => {
  const result = plural(0, {
    default: n => `default: ${n}`,
    0: n => `function: ${n}`,
  });

  expect(result).toEqual('function: 0');
});
