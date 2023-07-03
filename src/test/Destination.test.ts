import {describe, it, expect} from 'vitest'
import { Destination } from '../api/back_solair/models/Destination';

describe('Destination interface', () => {
  it('should allow an object with all optional properties', () => {
    const destination: Destination = {};
    expect(destination).toBeDefined();
  });

  it('should allow an object with some or all properties', () => {
    const destination: Destination = {
      id: 1,
      nom: 'Paris',
      titre: 'France',
    };
    expect(destination).toBeDefined();
  });
});
