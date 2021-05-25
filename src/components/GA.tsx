const GA = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.measurement_id}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${process.env.measurement_id}');
          `,
      }}
    />
  </>
);
export default GA;
