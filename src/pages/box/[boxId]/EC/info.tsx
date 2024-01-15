export default function text() {
  return (
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
    <h5 className="upsector_label">About electrical conductivity Sensor</h5>
    <p className="innersector_p">
    model: DFRobot Gravity: analog electrical conductivity meter V2
    </p>
    <p className="innersector_p">
    Analog electrical conductivity meter V2 is specially used to measure the electrical conductivity of aqueous solutions, and then to evaluate the water quality. This sensor is often used in water culture, aquaculture, environmental water detection and other fields.<br/>
    The output signal is filtered by hardware and has low jitter. The excitation source adopts an AC signal, which effectively reduces the polarization effect, improves the precision and prolongs the life of the probe. The software library uses a two-point calibration method, and can automatically identify the standard buffer solution<br/><br/>
    <br/>
    Supply Voltage: 3.0~5.0V<br/>
    Output Voltage: 0~3.4V<br/>
    Probe Connector: BNC<br/>
    Signal Connector: PH2.0-3Pin<br/>
    Measurement Accuracy: ±5% F.S.<br/>
    Board size: 42mm*32mm/1.65in*1.26in<br/>

    </p>
  </div>
  )
}