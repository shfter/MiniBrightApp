/* eslint-disable react/jsx-key */
import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Props {
    children?: React.ReactNode;
    box_id: string | string[] | undefined
} 

class LinkUrlBind {
    name: string = 'name to display'; 
    url: string = 'url'

    constructor(name: string, url:string){
        this.name = name; 
        this.url = url; 
    }
} 

const SubOptions = new Map<string, LinkUrlBind[]>(
    [
        ["overview", [new LinkUrlBind("Data","/box/[boxId]/overview/data"), new LinkUrlBind("Info","/box/[boxId]/overview/info"), new LinkUrlBind("CSV","/box/[boxId]/EC/CSV"), new LinkUrlBind("Manage","/box/[boxId]/EC/manage")]],
        ["EC", [new LinkUrlBind("Data", "/box/[boxId]/EC/data"), new LinkUrlBind("Info", "/box/[boxId]/EC/info"), new LinkUrlBind("CSV","/box/[boxId]/EC/CSV"), new LinkUrlBind("Manage","/box/[boxId]/EC/manage")]],
        ["Humidity", [new LinkUrlBind("Data", "/box/[boxId]/Humidity/data"), new LinkUrlBind("Info", "/box/[boxId]/Humidity/info"), new LinkUrlBind("CSV","/box/[boxId]/Humidity/CSV"), new LinkUrlBind("Manage","/box/[boxId]/Humidity/manage")]],
        ["NutritientPump", [new LinkUrlBind("Data", "/box/[boxId]/NutritientPump/data"), new LinkUrlBind("Info", "/box/[boxId]/NutritientPump/info"), new LinkUrlBind("CSV","/box/[boxId]/NutritientPump/CSV"), new LinkUrlBind("Manage","/manage")]],
        ["PH", [new LinkUrlBind("Data", "/box/[boxId]/PH/data"), new LinkUrlBind("Info", "/box/[boxId]/PH/info"), new LinkUrlBind("CSV","/box/[boxId]/PH/CSV"), new LinkUrlBind("Manage","/box/[boxId]/PH/manage")]],
        ["UV", [new LinkUrlBind("Data", "/box/[boxId]/UV/data"), new LinkUrlBind("Info", "/box/[boxId]/UV/info"), new LinkUrlBind("CSV","/box/[boxId]/UV/CSV"), new LinkUrlBind("Manage","/box/[boxId]/UV/manage")]],
        ["WaterTemperature", [new LinkUrlBind("Data", "/box/[boxId]/WaterTemperature/data"), new LinkUrlBind("Info", "/box/[boxId]/WaterTemperature/info"), new LinkUrlBind("CSV","/box/[boxId]/WaterTemperature/CSV"), new LinkUrlBind("Manage","/box/[boxId]/WaterTemperature/manage")]],
        ["AirTemperature", [new LinkUrlBind("Data", "/box/[boxId]/AirTemperature/data"), new LinkUrlBind("Info", "/box/[boxId]/AirTemperature/info"), new LinkUrlBind("CSV","/box/[boxId]/AirTemperature/CSV"), new LinkUrlBind("Manage","/box/[boxId]/AirTemperature/manage")]]
    ]
)


export default function SubNavLayout(){

    const { pathname } = useRouter()  
    const router = useRouter();
    const boxid = router.query.boxId || []; 
    const target = boxid[0]
    const [tab, setTab] = useState(target) 

    useEffect(()=>{
        if (target) {
            setTab(target)
            console.log(pathname)
        } 
    }, [target]);
    
    const lastRoute = (pathname:string, blocks: number) => {
        const parts = pathname.split('/')
        const nonEmptyParts = parts.filter(part => part !== '');
        console.log(pathname.includes('/info'))

        return nonEmptyParts[nonEmptyParts.length - blocks];
    } 

    return(
        <div
        style={{
          height: "40%",
          /*opacity: '0.91', */ backgroundColor: "#16181b",
          display: "flex"
        }}
      >
        <div
          style={{
            maxHeight: "100%",
            display: "flex", 
            flexDirection: "row",
            fontSize: "80%",
            //margin: "0rem 0rem 0rem 0.8rem !important", 
            alignItems: "center"
          }}
        >
            {SubOptions.get(lastRoute(pathname,2))!.map(function(value: LinkUrlBind){
                return (
                    <div style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
                    <Link href={{pathname:value.url, query: {boxId: tab}}} 
                    className={pathname.includes(value.url) ? "sublinkactive" : "sublink"}
                    style={{
                        margin: "0rem 0rem 0rem 1.2rem !important", textDecoration: "none"
                    }}
                    >{value.name}</Link>
                    
                    </div>
                )
            })} 
        </div>
      </div>
    ) 
} 
// &nbsp; &nbsp;Boxes&nbsp; &nbsp; |&nbsp; &nbsp; &nbsp;Sensors&nbsp;
//&nbsp; |&nbsp; &nbsp; Moisture sensor