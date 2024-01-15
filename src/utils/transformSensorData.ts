export default function transformSensorData(sensorData: any[]): { name: string; value: number }[] {
    const transformedData: { name: string; value: number }[] = [];
  
    for (const data of sensorData) {
      const timestamp = new Date(data.sensor_timestamp);
      const formattedDate = `${(timestamp.getMonth() + 1).toString().padStart(2, '0')}-${timestamp.getDate().toString().padStart(2, '0')} | ${timestamp.getHours().toString().padStart(2, '0')}:${timestamp.getMinutes().toString().padStart(2, '0')}`;
  
      transformedData.push({
        name: formattedDate,
        value: data.sensor_value
      });
    }
  
    return transformedData;
  }