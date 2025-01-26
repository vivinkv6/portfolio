/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            hostname:'img.freepik.com',
            protocol:'https'
        },{
            hostname:'www.blogger.com',
            protocol:'https'
        },{
            hostname:'res.cloudinary.com',
            protocol:'https'
        },{
            hostname:'images.unsplash.com',
            protocol:'https'
        },{
             hostname:'blogger.googleusercontent.com',
            protocol:'https'
        },{
            hostname:'assets.aceternity.com',
            protocol:'https'
        }]
    }
};

export default nextConfig;
