
import Script from 'next/script'

export default function GoogleAnalytics(props){
    console.log(process.env.GA_MEASUREMENT_ID)
    return(
        <div className='container'>
        <Script
        src={"https://www.googletagmanager.com/gtag/js?id=" + process.env.GA_MEASUREMENT_ID}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.GA_MEASUREMENT_ID}');
      `}
    </Script>
    </div>

        )
    }