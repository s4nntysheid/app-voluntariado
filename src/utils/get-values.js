import React, { Component } from "react";
import ReactGoogleSheets from "react-google-sheets";

class DataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheetLoaded: false,
    };
  }
  render() {
    return (
      <ReactGoogleSheets
        clientId={
          "834868529976-p5nm10rmht8ta4idrgompshi6q2i16bg.apps.googleusercontent.com"
        }
        apiKey={"AIzaSyBwGhu2BIuD9QVClN53W6wCO9-0qevQLyc"}
        spreadsheetId={"1TT6C6lmwNeznUGes82txf2k91eet7pjVj2TldPEyeSU"}
        afterLoading={() => this.setState({ sheetLoaded: true })}
      >
        {this.state.sheetLoaded ? (
          <div>
            {/* Access Data */}
            {console.log(
              "Your sheet data : ",
              this.props.getSheetsData("GERAL")
            )}
            {/* Update Data */}
            <button
              onClick={() => {
                /* this.props.updateCell(
                'sheet02', // sheetName
                'E', // column
                13, // row
                'Apple', // value
                null, // successCallback
                (error) => {
                  console.log('error', error)
                } // errorCallback
              ); */
                this.props.getSheetsData("GERAL");
              }}
            >
              update cell!
            </button>
          </div>
        ) : (
          "loading..."
        )}
      </ReactGoogleSheets>
    );
  }
}

export default ReactGoogleSheets.connect(DataComponent);
