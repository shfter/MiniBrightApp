import { Box } from "@/types/Box";
import parseBoxes from "@/utils/parseBoxes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function ModalBoxes(){

    const [boxes, setBoxes] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(()=>{
        fetch('https://minibrightbox.fly.dev/api/fridges/')
        .then((res)=> res.json())
        .then((data)=> {
            setBoxes(data);
            setLoading(false);
        })
    },[])

    function gotoBox(boxId: number){

    }

  

    if (isLoading){
        return(
    <>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4>Connected Boxes</h4>
                <hr style={{ borderTop: "solid", borderColor: "#ffffff" }} />
                <div style={{ height: "40vh", overflowY: "scroll" }}>
                </div>
                    <h5>loading...</h5>
              </div>
              <button
                className="btn btn-primary ors_btn"
                type="button"
                style={{
                  width: "100%",
                  backgroundColor: "var(--bs-gray-300)",
                  border: "none",
                  color: "var(--bs-dropdown-color)"
                }}
              >
                Register New Box
              </button>
    </>
        )}

    return(
        <>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4>Connected Boxes</h4>
                <hr style={{ borderTop: "solid", borderColor: "#ffffff" }} />
                <div style={{ height: "40vh", overflowY: "scroll" }}>
                {parseBoxes(boxes).map(function(value: Box){
                    return(
                    <>
                  <Link href={{pathname:'/box/[boxId]/overview/data', query: {boxId: value.id}}} style={{textDecoration: "none"}} passHref legacyBehavior>
                  <div className="connect_item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-box-seam"
                      style={{ fontSize: "250%", color: "var(--bs-teal)" }}
                    >
                      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                    </svg>
                    <div
                      style={{
                        marginLeft: "5%",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <p style={{ marginBottom: 0}}>BrightBox {value.id}</p>
                      <p style={{ margin: 0, fontSize: "70%", color:"#fffff !important"}}>
                        {value.sensors.length} sensors&nbsp;
                      </p>
                    </div>
                  </div>
                  </Link>
                  </>
                    )
                  })
                    }
                </div>
              </div>
              <button
                className="btn btn-primary ors_btn"
                type="button"
                style={{
                  width: "100%",
                  backgroundColor: "var(--bs-gray-300)",
                  border: "none",
                  color: "var(--bs-dropdown-color)"
                }}
              >
                Register New Box
              </button>
              </>
    )
}