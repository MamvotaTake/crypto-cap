// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react'

let tvScriptLoadingPromise

export default function TradingViewWidget () {
  const onLoadScriptRef = useRef()

  useEffect(() => {
    onLoadScriptRef.current = createWidget

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise(resolve => {
        const script = document.createElement('script')
        script.id = 'tradingview-widget-loading-script'
        script.src = 'https://s3.tradingview.com/tv.js'
        script.type = 'text/javascript'
        script.onload = resolve

        document.head.appendChild(script)
      })
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    )

    return () => (onLoadScriptRef.current = null)

    function createWidget () {
      if (
        document.getElementById('tradingview_a558c') &&
        'TradingView' in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: 'BTC',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          enable_publishing: false,
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          details: true,
          studies: [
            'STD;24h%Volume',
            'STD;Accumulation_Distribution',
            'STD;Aroon',
            'STD;Average%Day%Range',
            'STD;Average%1Directional%1Index',
            'STD;Average_True_Range',
            'STD;Awesome_Oscillator',
            'STD;Balance%1of%1Power',
            'STD;Fisher_Transform',
            'STD;Gaps',
            'STD;Historical_Volatility'
          ],
          container_id: 'tradingview_a558c'
        })
      }
    }
  }, [])

  return (
    <div
      className='tradingview-widget-container'
      style={{ height: '100%', width: '100%' }}
    >
      <div
        id='tradingview_a558c'
        style={{ height: 'calc(100% - 32px)', width: '100%' }}
      />
      <div className='tradingview-widget-copyright'>
        <a
          href='https://www.tradingview.com/'
          
        >
          <span className='blue-text'>Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  )
}
