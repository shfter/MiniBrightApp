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
    <h5 className="upsector_label">About Humidity Sensor</h5>
    <p className="innersector_p">
    model: AM2301
    </p>
    <p className="innersector_p">
    The AM2301 is a very accurate temperature and humidity sensor. The sensor is a lot more accurate than the DHT11, and comparable to the DHT22. The sensor is relatively large, but this makes it easier to mount.<br/><br/>
    <br/>
    Minimum supply voltage V DC	3.3 <br/>
    Maximum supply voltage V DC	5.5 <br/>
    Minimum IO-pin input voltage V	3.3 <br/>
    Maximum IO-pin input voltage V	5.5 <br/>
    IO-pin output voltage V	Equal to supply voltage <br/>
    </p>
  </div>
  )
}