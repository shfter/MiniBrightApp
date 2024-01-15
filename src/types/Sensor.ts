import { SensorDataChunk } from "./SensorData"

export type Sensor = {
    id: string, 
    sensorType: string, 
    data?: SensorDataChunk[]
}