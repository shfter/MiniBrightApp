import * as React from 'react';
import ModalBoxes from './ModalBoxes';
import { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import Link from 'next/link';
import SubNavLayout from './SubNavLayout';

interface Props {
    children?: React.ReactNode;
    box_id: string | string[] | undefined
} 

export default function BoxNavLayout({children, ...props}:Props){
    const { pathname} = useRouter()  
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

    return(
        <div
    id="stage_wrap"
    style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
  >
    <div style={{ height: "11vh", fontFamily: '"Coda"' }}>
      <nav
        className="navbar navbar-dark navbar-expand-md bg-dark py-3"
        style={{ width: "100%", maxHeight: "60%" }}
      >
        <div className="container">
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-6"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0 order-md-first"
            id="navcol-6"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link href={{pathname:'/box/[boxId]/overview/data', query: {boxId: tab}}} className={router.pathname.includes('overview') ? "nav-link active" : "nav-link"}>Overview</Link>
              </li>
              <li className="nav-item">
              <Link href={{pathname:'/box/[boxId]/EC/data', query: {boxId: tab}}} className={router.pathname.includes('EC') ? "nav-link active" : "nav-link"}>EC</Link>
              </li>
              <li className="nav-item">
              <Link href={{pathname:'/box/[boxId]/Humidity/data', query: {boxId: tab}}} className={router.pathname.includes('Humidity') ? "nav-link active" : "nav-link"}>Humidity</Link>
              </li>
              <li className="nav-item">
              <Link href={{pathname:'/box/[boxId]/PH/data', query: {boxId: tab}}} className={router.pathname.includes('PH') ? "nav-link active" : "nav-link"}>PH</Link>
              </li>
              <li className="nav-item">
              <Link href={{pathname:'/box/[boxId]/UV/data', query: {boxId: tab}}} className={router.pathname.includes('UV') ? "nav-link active" : "nav-link"}>UV</Link>
              </li>
              <li className="nav-item">
              <Link href={{pathname:'/box/[boxId]/AirTemperature/data', query: {boxId: tab}}} className={router.pathname.includes('AirTemperature') ? "nav-link active" : "nav-link"}>Air Temperature</Link>
              </li>
              <li className="nav-item">
              <Link href={{pathname:'/box/[boxId]/WaterTemperature/data', query: {boxId: tab}}} className={router.pathname.includes('WaterTemperature') ? "nav-link active" : "nav-link"}>Water Temperature</Link>
              </li>
            </ul>
            <div className="d-md-none my-2">
              <button className="btn btn-light me-2" type="button">
                Button
              </button>
              <button className="btn btn-primary" type="button">
                Button
              </button>
            </div>
          </div>
          <div className="d-none d-md-block" />
        </div>
      </nav>
      <SubNavLayout/>
    </div>
    <div id="content_parent_wrap">
      <div id="util_content">
        {children}
      </div>
    </div>
  </div>
    ) 
}