import React from 'react'
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  const customStyle = {
    fontFamily: 'YourChosenFont, sans-serif',
  };
  
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
                      <p style={customStyle}>Welcome to "ServiceClap"</p>
             We,ServiceClap situated at Coimbatore,Tamilnadu provide prompt and efficient
        home appliances repair and services to our honored patrons.We are professionly 
        qualified to repair all major and leading appliance brands,specialized in refrigerator,
        washing machine,Air conditioner,Micro oven repair services.We have a great
        maintanance service as well to keep your machines in full working order so as to avoid
        these expensive repair costs.</p>
        <h2 className="text-center py-4">We Take Care Of...</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://www.hindustantimes.com/ht-img/img/2023/09/18/550x309/32_inch_LED_TV_1695036349175_1695036371179.JPG" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">TELEVISION</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://static.toiimg.com/thumb/msid-86615130,imgsize-7074,width-400,resizemode-4/86615130.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">AIR CONDITIONER</h5>
             </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://www.lifewire.com/thmb/eZgqnW0I2vJojQEzNLlvCiFyL-o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/samsung-ha-ref-rf56k9540sr-family-hub-overview-5aa18f0e18ba010037c023a5.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Fridge</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://lh7-us.googleusercontent.com/mF6oRq5MfCnJNZT584o1fyWcbJYEo-q7aTvHSyMYzZfPy-e4YW3-3-cHgQGuZ02RgALxzfj7pUgYkqloXjpqtMJ3TwTA1Ut3M-_m_V63fAJYJH8GKhq0nAQRAJ6Jl96fvdMtUje7HdUxFZOMWcPnG8U" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Washing Machine</h5>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center py-4">OUR-SERVICES</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkWnfkUDWepVRDQmwEdOnhdJ_t0Mxk3u5Og&usqp=CAU" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Reparation</h5>
                <p>In order to provide the variegated needs and demands of our customers,
                  we provide efficient and reliable reparing services for your wide range
                  of home appliances. 
                </p>
                <button>Enquire Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://img.freepik.com/free-photo/service-maintenance-worker-repairing_23-2149176715.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Annual Maintanance Services</h5>
                <p>With the support of our talented team of professionals,we are also 
                  engaged in providing annual maintanance services for your wide range
                  of appliances.
                </p>
                <button>Enquire Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://www.shutterstock.com/image-photo/repair-coffee-machine-home-spare-600nw-2028121313.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Genuine Spare Parts Dealing</h5>
                <p>In order to fulfill client's varied needs and demands,we are
                 engaged in offering genuine and relaible spare parts for home
                 appliances at market friendly prices.</p>
                 <button>Enquire Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://production-next-images-cdn.thumbtack.com/i/302055516313206963/width/640.jpeg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Express Emergency Reparation</h5>
                <p>We have our experts to deliver an express emergency reparation service 
                  to support as per your requirement with an appropriate quotation.
                </p>
                <button>Enquire Now</button>
              </div>
            </div>
          </div>
        </div>
       
     </div>

      <Footer />
      
      </>
      )
    }

export default AboutPage