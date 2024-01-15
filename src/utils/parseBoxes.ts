import { Box } from "@/types/Box";

export default function parseBoxes(response:any): Box[] {
    console.log(response)
    const uniqueBoxes: Box[] = [];
    response.forEach(sensorData => {
        const existingBox = uniqueBoxes.find(box => box.id === sensorData.fridge_id.toString());

        if (existingBox) {
            existingBox.sensors.push({
                id: sensorData.sensor_id.toString(),
                sensorType: sensorData.sensor_type
            });
        } else {
            uniqueBoxes.push({
                id: sensorData.fridge_id.toString(),
                sensors: [{
                    id: sensorData.sensor_id.toString(),
                    sensorType: sensorData.sensor_type
                }]
            });
        }
    });
    console.log(uniqueBoxes)
    return uniqueBoxes;
}