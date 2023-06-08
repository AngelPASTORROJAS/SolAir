import { httpClient } from '../httpClient';
import { Destination } from '../models/Destination';

const ressource = 'api/destinations';

class DestinationRessource {
  public async getDestinationsAsync(): Promise<Destination[]> {
    const response = await httpClient.get(`${ressource}`);
    return response.data as Destination[];
  }

  public async getDestinationsRandomAsync(): Promise<Destination[]> {
    const response = await httpClient.get(`${ressource}`);
    return response.data as Destination[];
  }
}

export { DestinationRessource };
