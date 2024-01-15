import LineChart from "@/components/DataDisplay/Charts/LineChart";
import getSensorId from "@/utils/getSensorId";
import transformSensorData from "@/utils/transformSensorData";
import { InferGetServerSidePropsType } from "next/types";
import { useEffect, useState } from "react"


export const getServerSideProps = (async(context:any)=>{
    const {boxId = ''} = context.params;
    const sensors = await fetch(`https://minibrightbox.fly.dev/api/fridges/${boxId}`)
    .then((res)=> res.json());
    const sensorId = getSensorId(sensors, "EC Sensor");
    const data = await fetch(`https://minibrightbox.fly.dev/api/sensors?id=${sensorId}&type=ec`)
    return{
        props: {
            data: await data.json()
        }
    } 
})

export default function Page({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
      <>
    <LineChart width={"100%"} height={"100%"} color={"#187cd9"} name={"Electrical Conductivity"} unit={'mS/m'} data={transformSensorData(data)} datakey={"value"} domain={[100,130]}/>
      </>
    )
}