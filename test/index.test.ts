import { expect } from 'chai';
import { getUniqueId } from '../src';

describe('getUniqueId', () => {
  it('should return the unique id', () => {
    expect(getUniqueId()).to.not('');
  });
});
