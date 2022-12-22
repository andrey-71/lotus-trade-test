import { serverUrl } from './constants';

class Api {
  constructor(options) {
    this._serverUrl = options.serverUrl;
    this._headers = options.headers;
  }

  startTimer(timersAmount) {
    return fetch(`${this._serverUrl}/timer`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        amount: timersAmount
      })
    })
      .then(res => this._handleResult(res));
  }

  // Обработчик результата запроса
  _handleResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`"${res.status} ${res.statusText}"`);
  }
}

const api = new Api({
  serverUrl: serverUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;