const express = require("express");
const app = express();

const instaGetURL = require("instagram-url-direct");

app.use("/",getURL);

async function getURL(req,res){
const urls = await instaGetURL("https://www.instagram.com/reel/C79KiLBStb-/?igsh=MXU0YXd0ejltcWJxbA==");
const links = await urls.url_list[0];

const fetch = (await import('node-fetch')).default;

const response = await fetch(links);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${type},${error}`);
    }

    const contentLength = await response.headers.get('content-length');
    const contentType = await response.headers.get('content-type');

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const randomIdentifier = Math.random().toString(36).substring(2, 8);
    const filename = `RapidTube_instagram_${timestamp}_${randomIdentifier}`;

    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type',contentType);
    res.setHeader('Content-Length', contentLength || null);

    // Stream response body to the client
    response.body.pipe(res);
};

app.listen(2626,() => console.log("hello"));
