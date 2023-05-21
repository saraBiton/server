
const Sensor = require("../models/sensorModel");



//אתחול החיישנים

const initSensors = () => {
  const sensorsArray = [];//לשלוף מהדאטה בייס
  const bounds = {
    north: 31.831348,
    south: 31.768045,
    east: 34.699001,
    west: 34.572064,
  };

  // // Generate a random point within the boundaries of Ashdod
  // const lat = Math.random() * (bounds.north - bounds.south) + bounds.south;
  // const lng = Math.random() * (bounds.east - bounds.west) + bounds.west;
  for (let i = 0; i < 10; i++) {
    sensorsArray.push({
      position: {
        lat: Math.random() * (bounds.north - bounds.south)
          + bounds.south, lng: Math.random() *
            (bounds.east - bounds.west) + bounds.west
      }, content: Math.random().toFixed(4) * 100, icon: ''
    });
  }
  //console.log("sensorsArray", sensorsArray);
  sensorsArray.forEach(async s => {
    if (s.content > 75) {
      s.icon = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
    }
    else if (s.content > 50) {
      s.icon = 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png'
    }
    else {
      s.icon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
    }
    console.log(s)
    const sen = new Sensor(s);
    console.log(sen)
    await (sen.save())
    return 'Created!';

  });

  // console.log("sensorsArray", sensorsArray);
  return sensorsArray;
}
const sortSensors = (sensors) => {
  console.log("SensorS", sensors)
  const n = sensors.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (sensors[j].content < sensors[minIndex].content) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = sensors[i];
      sensors[i] = sensors[minIndex];
      sensors[minIndex] = temp;
    }
  }
  return sensors;
}

const updateContent = async () => {
  let sensors = await Sensor.find({});
  for (let i = 0; i < 10; i++) {
    sensors[i] = content = Math.random().toFixed(4) * 100;
    if (content > 75) {
      sensors[i].icon = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
    }
    else if (content > 50) {
      sensors[i].icon = 'https://maps.google.com/mapfiles/ms/icons/orange-dot.png'
    }
    else {
      sensors[i].icon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
    }
  }
  sensors = sortSensors(sensors);
  //console.log("sensors", sensors)

  sensors.forEach(async s => {
    let { _id, position, content, icon } = s;

    await Sensor.findByIdAndUpdate(_id, { position, content, icon });
    return 'updated'
  })
  //for(let i = 0; i<sensors.length; i++){
  //   console.log('Sensor A:  ', sensors[i].position.lat,'   ', sensors[i].content )
  // }
}

//ממינת את החישנים לפי התכולה של הפחים

setInterval(() => {
  const sensorsArray = initSensors();
  console.log(sensorsArray);
}, 300000); // 300000 מילישניות הם 5  דקות


module.exports = { initSensors, sortSensors, updateContent }