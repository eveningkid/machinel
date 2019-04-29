class Base {
  constructor() {
    this.params = {};
  }

  getParams() {
    return this.params;
  }

  setParams(params = {}) {
    this.params = { ...this.params, ...params };
    return this;
  }
}

module.exports = Base;
