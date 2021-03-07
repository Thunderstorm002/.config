/* global Vue, browserAction */
;(function () {
  // XXX: There seems to be a problem with margin on the right side of body
  // Resize body once to get it working properly
  const bodyWidth = document.body.clientWidth
  document.body.style.width = `${bodyWidth}px`

  window.env = {
    AUTH0_DOMAIN: 'twoseven.auth0.com',
    AUTH0_CLIENT_ID: 'LTLTR7u491sBTLqGW1hWEWVp1ZC75ZXW'
  }

  new Vue({
    render: h => h(browserAction)
  }).$mount('#app')
})()
