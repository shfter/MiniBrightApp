export default function getSensorId(sensors:any[], targetSensorType: string): number | null {
    for (let i = 0; i < sensors.length; i++) {
        if (sensors[i].sensor_type === targetSensorType) {
          return sensors[i].sensor_id;
        }
      }
      return null;
} 