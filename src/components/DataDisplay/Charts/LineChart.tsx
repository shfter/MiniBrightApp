import * as Chartt from 'recharts'

interface Props {
    width: any, 
    height: any, 
    color: string, 
    name: string, //name to be dispayed at the bottom 
    unit: any ,
    data: any[] ,
    datakey: string, 
    domain: number[]
} 

export default function LineChartComponent(props:Props){

    return(
        <Chartt.ResponsiveContainer width={props.width} height={props.height}>
        <Chartt.LineChart
            margin={{ top: 0, left: 0, right: 0, bottom: -25 }}
            data={props.data}
            >
         <Chartt.XAxis
            dataKey="name"
            name=""
            tickLine = {false}
            tick={false}
            tickSize={30}
            unit="units"
        />
  <Chartt.YAxis
  width={30}
  domain={props.domain}
    axisLine
    tick
    tickLine
  />
  <Chartt.Legend iconType="line" />
  <Chartt.Tooltip separator=":  " />
  <Chartt.Line
    dataKey={props.datakey} //height
    fill="#262424"

    stroke= {props.color} //#7be04d
    strokeWidth={3}
    type="linear"
    unit={props.unit}
  />
</Chartt.LineChart>
</Chartt.ResponsiveContainer>
    )
} 