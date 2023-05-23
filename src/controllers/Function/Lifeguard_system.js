import axios from 'axios';
// מערך שניות שהחיישן מתחת למים
const arraySeconds = [];
const sensorData = 60;//60 שניות אדום
//30 שניות כתום
export function underwaterTime(sensorData) {
  let underwater = false;
  let totalTime = 0;
  for (let i = 0; i < sensorData.length; i++) {
    if (sensorData[i] && !underwater) {
      underwater = true;
    } else if (!sensorData[i] && underwater) {
      underwater = false;
    }
    if (underwater) {
      totalTime++;
    }
  }
  return totalTime;
}
//פה אמור להיות פונקציות להפעלת פונקציות בחיישן..
const PressureSensor = require('node-pressure-sensor');

// פונקציה שמבצעת פעולות כאשר הלחץ מוגדר כלשהו מתקבל מחיישן הלחץ
function handlePressure(pressure) {
  // התנאים והפעולות שברצונך לבצע בהתאם לערכי הלחץ
  if (pressure > 50) {
    console.log('שולח התראה למערכת המציל עם שינוי צבע המיקום של החיישן לכתום על פני המפה');
  } else  {
    console.log('לחץ תקין');
  }
}
// יצירת אינסטנס לחיישן הלחץ והתחלת הפעלתו עם הפונקציה שלנו
const sensor = new PressureSensor();
sensor.start(handlePressure);

//לשלוח בקשה למדא
export function sendAlertToMada() {
  const alertData = {
    // פרטי התראה, כמו מיקום, סוג האירוע, תיאור ועוד
    // אפשר להתאים את הפרמטרים לפי הצורך
  };

  axios.post('https://api.mada.org.il/alerts', alertData)
    .then(response => {
      // התראה נשלחה בהצלחה
      console.log(response.data);
    })
    .catch(error => {
      // שגיאה בשליחת התראה
      console.error(error);
    });
}

//חישוב של המסלול הקצר 
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBs28fQD8-yiY6leR2cAXSv9CGl5Sm4eVQ', //מפתח ה- API  
});

export function calculateRescueRoute(destination) {
  const origin = 'תחנת מדא הקרובה'; // נקודת התחלה של כוחות הצלה

  return new Promise((resolve, reject) => {
    googleMapsClient.directions({
      origin,
      destination,
      mode: 'driving', // אפשרויות: driving (נסיעה ברכב), walking (הליכה), biking (רכיבה על אופניים)
    }, (error, response) => {
      if (error) {
        reject(error);
      } else {
        const route = response.json.routes[0];
        const duration = route.legs[0].duration.text;
        const distance = route.legs[0].distance.text;

        const rescueRoute = {
          duration,
          distance,
          steps: route.legs[0].steps.map(step => step.html_instructions),
        };

        resolve(rescueRoute);
      }
    });
  });
}

// לדוגמה, כאן אנו מחשבים את המסלול לנקודת 'אבן גבירול' ומדפיסים את התוצאה
calculateRescueRoute('אבן גבירול')
  .then(rescueRoute => {
    console.log('מסלול הצלה:');
    console.log('משך הזמן:', rescueRoute.duration);
    console.log('מרחק:', rescueRoute.distance);
    console.log('שלבים:');
    rescueRoute.steps.forEach((step, index) => {
      console.log(`${index + 1}.`, step);
    });
  })
  .catch(error => {
    console.error('שגיאה בחישוב מסלול הצלה:', error);
  });

//שליחת ביטול הגעה למדא
const { sensor } = require("./sensorStartWork")
export class Lifeguard_system {

  //הריאקט קורה לפונקציה הזו
  //הפונקציה הזו מחזירה תשובה לריאקט
  //התשובה שחוזרת היא: כמה שניות ברץ האחרונות שהוא היה מתחת למים, מיקום של הבנאדם, והצבע שצריך להשתנות
  powerTheSensor() {
    const ans = sensor.GetInformation();
    const color = "green";
    if (ans.HowManyTrueLastCheck > 60 && ans.HowManyTrueLastCheck < 90)
      color = "orange"
    if (ans.HowManyTrueLastCheck >= 90) {
      color = "red"
      //פה צריך לקרא לפונקציה שמזעיקה את כוחות ההצלה
    }


    return { "HowManyTrueLastCheck": ans.HowManyTrueLastCheck, "location": location, "color": color }

  }

  changeColor(location,) {
    //לפתוח קריאה לשרת 
  }
}