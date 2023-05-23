import { Lifeguard_system } from "./Lifeguard_system";

export class sensor {
  constructor(/*פה נשלחים הID SENSORמהקומפוננטה בריאקט ופרטי המשכיר*/) {
    // this.GetInformation(60, 0)
    //יצירת מופע של המחלקה
  }

  

  GetInformation(numberOfSecond, HowManyTrueLastCheck) {
    for (i = 0; i < numberOfSecond; i++) {
      // if(i==60)
      // {
      // Lifeguard_system.changeColor()
      //     //פה לקרא לפונקציה ששולחת למערכת המציל את המיקום של הבלוטוס שמחובר לחיישן
      //     //ואומרת לו לשנות לצבע כתום
      // }
      // if(i==90)
      // {
      //     //פה לקרא לפונקציה ששולחת למערכת המציל את המיקום של הבלוטוס שמחובר לחיישן
      //     //ואומרת לו לשנות לצבע אדום
      // }

      const randomBoolean = Math.random() >= 0.5;
      if (randomBoolean == false) {
        HowManyTrueLastCheck = 0;
      }
      else {
        HowManyTrueLastCheck++;
      }
      // else
      // {
      //     this.second[i]=randomBoolean;
      // }
      // console.log(randomBoolean); // ידפיס true או false באקראיות
    }
    //פה צריך לעשות מיקום רנדומלי במקום לקבל את המידע בזמן אמת
    location = { "lng": 31.799690845064756, "lnt": 34.62993189824117 }
    return { "HowManyTrueLastCheck": HowManyTrueLastCheck, "location": location }

  }
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

}
