
  // service workerの登録関係
  if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service_worker.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
      console.log('ServiceWorker registration failed: ', err);
  });
  }
  // vue.jsの設定関係
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  });
