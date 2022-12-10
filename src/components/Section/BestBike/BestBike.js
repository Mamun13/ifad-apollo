import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const BestBike = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <Tabs
              defaultActiveKey="profile"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="home" title="Home">
                asdgfadgsdfgsfdgsfdghsgf
              </Tab>
              <Tab eventKey="profile" title="Profile">
                asdgasdgasdg
              </Tab>
              <Tab eventKey="longer-tab" title="Loooonger Tab">
                asdasgadga
              </Tab>
              <Tab eventKey="contact" title="Contact">
                asdfasd
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  )
}

export default BestBike