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
    <h5 className="upsector_label">About PH Sensor</h5>
    <p className="innersector_p">
    model: DFRobot Gravity Analog pH Sensor Kit V2
    </p>
    <p className="innersector_p">
    DFRobot’s Gravity: Analog pH meter V2 designed to measure the pH of a solution and reflect it’s acidity or alkalinity. This sensor is commonly used in various applications such as aquaponics, aquaculture, and environmental water testing.<br/>
    The onboard voltage regulator chip supports the wide voltage supply of 3.3~5.5V, which is compatible with 5V and 3.3V main control board. The output signal is filtered by hardware and has low overall jitter. The software library adopts the two-point calibration method, and can automatically identify two standard buffer solutions (4.0 and 7.0)<br/><br/>
    Probe Type: Laboratory Grade
    <br/>
    Detection Range: 0~14<br/>
    Temperature Range: 5~60°C<br/>
    Zero Point: 7±0.5<br/>
    Response Time: less than 2min<br/>
    Internal Resistance: less than250MΩ<br/>
    Probe Life: more than 0.5 year (depending on frequency of use)<br/>
    Cable Length: 100cm

    </p>
  </div>
  )
}