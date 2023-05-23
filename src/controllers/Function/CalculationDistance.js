const https = require('https');
// const express = require('express');

function getDistance(origin, dest, apiKey) {
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${dest}&key=${apiKey}`;

  https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;  
    });
    res.on('end', () => {
      const result = JSON.parse(data);
      console.log(result);
      console.log((result.rows))
      // עכשיו ניתן לעבד את התוצאה בהתאם לצרכי היישומון שלכם.
    });

  }).on('error', (err) => {
    console.log("Error: " + err.message);
  });
}

// קריאה לפונקציה עם פרמטרים של כתובת המקור, היעד ומפתח ה-API שלכם.
getDistance('בני ברק', 'אשדוד', 'AIzaSyBs28fQD8-yiY6leR2cAXSv9CGl5Sm4eVQ');
module.exports = {getDistance};