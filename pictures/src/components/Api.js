import React from 'react';

class Api {
  constructor({baseUrl, apiKey}) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  _fetch(url, params) {
    params.headers = {
      Authorization: `Client-ID ${this._apiKey}` ,
      'Content-Type': 'application/json'
    };
    return fetch(this._baseUrl + url, params)
      .then((res) => {
        if(!res.ok) {
          return Promise.reject(res.status);
        } else {
          return res.json();
        }
      })
  }

  getPhotos(url) {
    return this._fetch(url, {
      method: 'GET'
    })
  }

}

export const api = new Api({
  baseUrl: 'https://api.unsplash.com/',
  apiKey: '55njZnpIytZyl-QJIBWcYZXMmgEild0SE2DmtryetO0'
});
