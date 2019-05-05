interface Parameters {
  [key: string]: any;
}

export default class Base {
  params: Parameters;

  constructor() {
    this.params = {};
  }

  getParams(): Parameters {
    return this.params;
  }

  setParams(params: Parameters = {}) {
    this.params = { ...this.params, ...params };
    return this;
  }
}
