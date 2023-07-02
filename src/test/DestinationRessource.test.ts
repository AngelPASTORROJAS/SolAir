import {describe, it, expect, beforeEach, afterEach} from 'vitest'
import { DestinationRessource } from '../api/back_solair/ressources/DestinationRessource';
import { httpClient } from '../api/back_solair/httpClient';
import sinon from 'sinon';

describe('DestinationResource', () => {
  let destinationResource: DestinationRessource;

  beforeEach(() => {
    destinationResource = new DestinationRessource();
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should call httpClient.get with the correct URL for getDestinationsAsync', async () => {
    const getStub = sinon.stub(httpClient, 'get').resolves({ data: [] });

    await destinationResource.getDestinationsAsync();

    sinon.assert.calledOnce(getStub);
    sinon.assert.calledWith(getStub, 'api/destinations');
  });

  it('should call httpClient.get with the correct URL for getDestinationsRandomAsync', async () => {
    const getStub = sinon.stub(httpClient, 'get').resolves({ data: [] });

    await destinationResource.getDestinationsRandomAsync();

    sinon.assert.calledOnce(getStub);
    sinon.assert.calledWith(getStub, 'api/destinations/random');
  });

  it('should return an array of destinations for getDestinationsAsync', async () => {
    const destinations = [
      { id: 1, nom: 'Paris' },
      { id: 2, nom: 'New York' },
    ];
    const getStub = sinon.stub(httpClient, 'get').resolves({ data: destinations });

    const result = await destinationResource.getDestinationsAsync();

    expect(result).toEqual(destinations);
    sinon.assert.calledOnce(getStub);
    sinon.assert.calledWith(getStub, 'api/destinations');
  });

  it('should return an array of random destinations for getDestinationsRandomAsync', async () => {
    const destinations = [
      { id: 1, nom: 'Paris' },
      { id: 2, nom: 'New York' },
    ];
    const getStub = sinon.stub(httpClient, 'get').resolves({ data: destinations });

    const result = await destinationResource.getDestinationsRandomAsync();

    expect(result).toEqual(destinations);
    sinon.assert.calledOnce(getStub);
    sinon.assert.calledWith(getStub, 'api/destinations/random');
  });
});
