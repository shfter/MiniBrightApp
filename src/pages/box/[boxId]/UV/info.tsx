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
    <h5 className="upsector_label">About UV Sensor</h5>
    <p className="innersector_p">
    model:UV Light Sensor Module - 200-370nm
    </p>
    <br/>
    <p className="innersector_p">
    Supply voltage: 3.3-5V DC   <br/>
    Maximum current consumption: 0.1mA   <br/>
    Average current consumption: 0.06mA   <br/>
    Output voltage: 0 - 1.2V 0 - 11 on UV index, see images  <br/>
    Accuracy: ±1 UV index   <br/>
    Wavelength detection range: 200 - 370nm   <br/>
    Working temperature: -20 - 85°C   <br/>
    Mounting hole diameter: 3.6mm   <br/>
    Dimensions PCB: 20 x 15mm   <br/>
    </p>
  </div>
  )
}