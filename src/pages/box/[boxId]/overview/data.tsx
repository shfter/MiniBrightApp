import LineChart from "@/components/DataDisplay/Charts/LineChart";
import getSensorId from "@/utils/getSensorId";
import transformSensorData from "@/utils/transformSensorData";
import getMostRecent from "@/utils/getMostRecent"
import { InferGetServerSidePropsType } from "next/types";
import { useRouter } from "next/router";



export const getServerSideProps = (async(context:any)=>{
    const {boxId = ''} = context.params;
    const sensors = await fetch(`https://minibrightbox.fly.dev/api/fridges/${boxId}`)
    .then((res)=> res.json());
    const EcsensorId = getSensorId(sensors, "EC Sensor");
    const HumidityId = getSensorId(sensors, "Humidity Sensor");
    const PHsensorId = getSensorId(sensors, "PH Sensor");
    const UVsensorId = getSensorId(sensors, "UV Sensor");
    const WTsensorId = getSensorId(sensors, "Water Temp Sensor");
    const ATsensorId = getSensorId(sensors, "Ambient Temp Sensor");
    const ECdata = await fetch(`https://minibrightbox.fly.dev/api/sensors?id=${EcsensorId}&type=ec`)
    const Hdata = await fetch(`https://minibrightbox.fly.dev/api/sensors?id=${HumidityId}&type=humidity`)
    const PHdata = await fetch(`https://minibrightbox.fly.dev/api/sensors?id=${PHsensorId}&type=ph`)
    const UVdata = await fetch(`https://minibrightbox.fly.dev/api/sensors?id=${UVsensorId}&type=uv`)
    const WTdata = await fetch(`https://minibrightbox.fly.dev/api/sensors?id=${WTsensorId}&type=water_temp`)
    const ATdata = await fetch(`https://minibrightbox.fly.dev/api/sensors?id=${ATsensorId}&type=ambient_temp`)
    return{
        props: {
            data: {
            ec: await ECdata.json(), //there is data
            hd: await Hdata.json(), //there is data
            ph: await PHdata.json(), //no data - analog
            uv: await UVdata.json(), //no - analog
            wt: await WTdata.json(), //no - cel
            at: await ATdata.json(), //no - cel
            }
        }
    } 
})


export default function Page({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  
  console.log(transformSensorData(data.ec)) 
  const recentEc = getMostRecent(transformSensorData(data.ec))
  const recH = getMostRecent(transformSensorData(data.hd))
  const recPH = getMostRecent(transformSensorData(data.ph))
  const recuv = getMostRecent(transformSensorData(data.uv))
  const recwt = getMostRecent(transformSensorData(data.wt))
  const recat = getMostRecent(transformSensorData(data.at))
    return (
      <div style={{display:"flex",flexDirection:"row", justifyContent: "space-between", flexWrap:"wrap"}}>
  <div className="sector_wrap">
    <h5 className="upsector_label">Current State</h5>
    <div
      className="sector"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "1vw",
        backgroundColor: "var(--bs-gray-400)"
      }}
    >
      <p className="innersector_p">
        Electrical Conductivity: {recentEc?.value} mS/m
        <span className="timespantag">&nbsp;&nbsp;&nbsp;{recentEc?.name}</span>
      </p>
      <p className="innersector_p">
        Humidity: {recH?.value} %<span className="timespantag">&nbsp;{recH?.name}</span>
      </p>
      <p className="innersector_p">
        PH: level {recPH?.value}<span className="timespantag">&nbsp;{recPH?.name}</span>
      </p>
      <p className="innersector_p">
        UV: {recuv?.value} nm<span className="timespantag">&nbsp;{recuv?.name}</span>
      </p>
      <p className="innersector_p">
        Air Temperature: {recat?.value} °C&nbsp;
        <span className="timespantag">&nbsp;{recat?.name}</span>
      </p>
      <p className="innersector_p">
        Water Temperature: {recwt?.value} °C&nbsp;
        <span className="timespantag">&nbsp;{recwt?.name}</span>
      </p>
    </div>
  </div>
  <div className="sector_wrap">
    <h5 className="upsector_label">Electrical Conductivity</h5>
    <LineChart width={"100%"} height={"100%"} color={"#187cd9"} name={"Electrical Conductivity"} unit={'mS/m'} data={transformSensorData(data.ec)} datakey={"value"} domain={[100,130]}/>
    <div className="sector" />
  </div>
  <div className="sector_wrap">
    <h5 className="upsector_label">Humidity</h5>
    <LineChart width={"100%"} height={"100%"} color={"#b3280c"} name={"Electrical Conductivity"} unit={'%'} data={transformSensorData(data.hd)} datakey={"value"} domain={[0,100]}/>
    <div className="sector" />
  </div>
  <div className="sector_wrap">
    <h5 className="upsector_label">PH</h5>
    <LineChart width={"100%"} height={"100%"} color={"#66d65c"} name={"Electrical Conductivity"} unit={'ph'} data={transformSensorData(data.ph)} datakey={"value"} domain={[0,14]}/>
    <div className="sector" />
  </div>
  <div className="sector_wrap">
    <h5 className="upsector_label">Air Temperature</h5>
    <LineChart width={"100%"} height={"100%"} color={"#deab3c"} name={"Electrical Conductivity"} unit={'°C'} data={transformSensorData(data.at)} datakey={"value"} domain={[0,40]}/>
    <div className="sector" />
  </div>
  <div className="sector_wrap">
    <h5 className="upsector_label">Water Temperature</h5>
    <LineChart width={"100%"} height={"100%"} color={"#2db9e3"} name={"Electrical Conductivity"} unit={'°C'} data={transformSensorData(data.wt)} datakey={"value"} domain={[0,40]}/>
    <div className="sector" />
  </div>
  <div className="sector_wrap">
    <h5 className="upsector_label">UV</h5>
    <LineChart width={"100%"} height={"100%"} color={"#650cb3"} name={"UV"} unit={'nm'} data={transformSensorData(data.uv)} datakey={"value"} domain={[450, 600]}/>
    <div className="sector" />
  </div>


      </div>
    )
}