import ApiService from './Api.service.js'

class EspecieService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const especieService = new EspecieService('especie{/id}')
