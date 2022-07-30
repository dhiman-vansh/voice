import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Contact() {
  return (
    <>
      <div className="contact">

        <div className="form">
          <section>
            <h3 style={{ fontSize: "30px", fontWeight: "600" }}>Give Us a Call On</h3>
            <br></br>
            <div className="call">
              <MDBIcon fas icon="phone-alt" style={{fontSize:"30px"}} />
              {/* <MDBIcon style={{ fontSize: "100px" }} icon="phone-alt" /> */}
              <span>+91-9068025401    </span>
              <span>+91-9068025301    </span>
              <span>+91-9411150250  </span>
            </div>


          </section>
          
          {/* <section>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <br></br>
              <input type="submit" value="Send" />
            </form>
          </section>
 */}

        </div>
        <section>
          <h1> OUR LOCATION</h1>
          <h4> Getting here is easy. See our Google Map for detailed driving directions.</h4>
        </section>

        <div className="locat" id="locat">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27555.00220117665!2d78.04492951957313!3d30.3118417613922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909292959f520a5%3A0x768113420a5b86b9!2sUma%20creatives!5e0!3m2!1sen!2sin!4v1658989791537!5m2!1sen!2sin"
            width={"100%"}
            height={"500px"}
          />
        </div>
      </div>
    </>
  )
}