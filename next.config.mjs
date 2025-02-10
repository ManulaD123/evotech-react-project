 /** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",       // Use "https" for Amazon images.
          hostname: "m.media-amazon.com", 
          port: "",               // Leave it empty if no specific port is required.
          pathname: "/**"         // Matches all paths under this domain.
        }
      ]
    }
  };
  
  export default nextConfig;


  // const nextConfig = {
//     images:{domains: ["m.media-amazon.com"]},
// };

// export default nextConfig;


//--------------------------------------------------------------

// const nextConfig={
//     images:{
//         remotePatterns:[
//             {
//                 protocol:"http",
//                 hostname:"**.media-amazon.com",
//                 port:"",
//                 search:"",
//             }
//         ]
//     }
// }

// export default nextConfig;