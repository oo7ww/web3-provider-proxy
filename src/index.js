const debug = require("debug")("provider-proxy");
const Web3HttpProvider = require("web3-providers-http");
const { ethToConflux, defaultAdaptor } = require("./ethToConflux");
const format = require("./format");
const { Conflux } = require('js-conflux-sdk');

class Web3HttpProviderProxy extends Web3HttpProvider {
  constructor(host, options) {
    super(host, options);
    this.chainAdaptor = options.chainAdaptor || {};
    if (!options.networkId) {
      throw new Error("options.networkId is needed");
    }
    this.cfx = new Conflux({
      url: host,
      networkId: options.networkId
    });
  }

  send(payload, callback) {
    let originMethod = payload.method;
    let adaptor = ethToConflux[originMethod] || defaultAdaptor;
    adaptor.cfx = this.cfx;
    
    const promiseSend = () => new Promise((resolve, reject) => {
      debug(`Proxy ${originMethod} to ${payload.method}`);
      debug(`Proxy params: ${JSON.stringify(payload, null, '\t')}`);
      super.send(payload, (err, response) => {
        // console.log(err, response);
        err ? reject(err) : resolve(response)
      });
    });

    adaptor
      .adaptInput(payload)
      .then(promiseSend)
      .then(adaptor.adaptOutput.bind(adaptor))
      .then(response => callback(null, response))
      .catch(err => callback(err));
  }
}

module.exports = {
  HttpProvider: Web3HttpProviderProxy,
  ethToConflux,
  format,
  util: require('./util'),
};
