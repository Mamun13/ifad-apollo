// import React from "react";
// // import { render } from "react-dom";
// import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

// import "react-tabs/style/react-tabs.css";

// class App extends React.Component {
//   state = {
//     selectedIndex: 0
//   };

//   handleSelect = index => {
//     this.setState({ selectedIndex: index });
//   };

//   handleButtonClick = () => {
//     this.setState({ selectedIndex: 0 });
//   };

//   render() {
//     return (
//       <Tabs
//         selectedIndex={this.state.selectedIndex}
//         onSelect={this.handleSelect}
//       >
//         <TabList>
//           <Tab>Preview</Tab>
//           <Tab>Edit</Tab>
//         </TabList>
//         <TabPanel>
//           <h1>Preview</h1>
//         </TabPanel>
//         <TabPanel>
//           <h1>Edit</h1>
//           <button onClick={this.handleButtonClick}>Finish</button>
//         </TabPanel>
//       </Tabs>
//     );
//   }
// }