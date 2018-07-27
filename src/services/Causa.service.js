import ApiService from './Api.service.js'

class CausaService extends ApiService {
  constructor (endpoint) {
    super(endpoint)
    this.name = endpoint
  }
}

export const causaService = new CausaService('causa{/id}')
