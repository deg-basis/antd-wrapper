import { isSupportedFileType } from '../isSupportedFileType';

test('empty', () => {
  expect(isSupportedFileType([], 'image/png')).toBeFalsy();
});

test('exact match', () => {
  expect(isSupportedFileType(['image/png'], 'image/png')).toBeTruthy();
});

test('exact match with an item', () => {
  expect(isSupportedFileType(['text/plain', 'image/png', 'application/json'], 'image/png')).toBeTruthy();
});

test('wildcard match', () => {
  expect(isSupportedFileType(['text/plain', 'image/*', 'application/json'], 'image/png')).toBeTruthy();
});

test('not match with wildcard', () => {
  expect(isSupportedFileType(['image/*'], 'text/csv')).toBeFalsy();
});
