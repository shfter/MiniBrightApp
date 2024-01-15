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
    <h5 className="upsector_label">About Waterproof Temperature Sensor</h5>
    <p className="innersector_p">
    model: LilyGO TTGO Waterproof DS18B20
    </p>
    <br/>
    <p className="innersector_p">
    Sensor (chip)	DS18B20  <br/>
    Minimum measuring range [°C]	-55  <br/>
    Maximum measuring range [°C]	125  <br/>
    Smallest resolution [°C]	0.0625  <br/>
    Maximum resolution [bit]	12  <br/>
    Accuracy [±°C]	0.5  <br/>
    (-10°C to 85°C)  <br/>
    </p>
  </div>
  )
}