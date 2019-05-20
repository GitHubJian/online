;(function(global, factory) {
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define([], factory())
  } else if (typeof exports === 'object') {
    exports['Net'] = factory()
  } else {
    global['Net'] = factory()
  }
})(this, function() {
  function checkOnLine() {
    return navigator.onLine
  }

  function online(callback) {
    window.addEventListener('online', function(e) {
      callback && callback(e)
    })
  }

  function offline(callback) {
    window.addEventListener('offline', function(e) {
      callback && callback(e)
    })
  }

  function type() {
    return navigator.connection.type || navigator.connection.effectiveType
  }

  function change(callback) {
    if (callback) {
      navigator.connection.onchange = callback
    }
  }

  const ConnectionType = {
    bluetooth: 'bluetooth', // A Bluetooth connection.
    cellular: 'cellular', // A cellular connection (e.g., EDGE, HSPA, LTE, etc.).
    ethernet: 'ethernet', // An Ethernet connection.
    mixed: 'mixed', // The user agent is using multiple connection types.
    none: 'none', // No network connection.
    other: 'other', // The connection type that is known, but not one of enumerated connection types.
    unknown: 'unknown', // The user agent has established a network connection, but is unable, or unwilling
    wifi: 'wifi', // A Wi-Fi connection.
    wimax: 'wimax' // A WiMAX connection.
  }
  // minimum rtt (ms) Round-trip delay time
  // maximum downlink (Kbps)
  const effectiveConnectionTypes = {
    // The network is suited for small transfers only such as text-only pages.
    slow2g: {
      rtt: 2000,
      downlink: 50
    },
    // The network is suited for transfers of small images
    g2: {
      rtt: 1400,
      downlink: 50
    },
    // The network is suited for transfers of large assets such as high resolution images, audio and SD video.
    g3: {
      rtt: 270,
      downlink: 700
    },
    // The network is suited for HD video, real-time, etc.
    g4: {
      rtt: 0,
      downlink: Infinity
    }
  }

  const effectiveConnectionType = {
    $2g: '2g',
    $3g: '3g',
    $4g: '4g',
    $slow2g: 'slow-2g'
  }

  return {
    checkOnLine,
    online,
    offline
  }
})
