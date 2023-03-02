import path from "path";
import process from "process";
import google from "googleapis";
import { authenticate } from "@google-cloud/local-auth";

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

function SheetValues() {
  async function authorize() {
    await authenticate({
      scopes: SCOPES,
      keyfilePath: CREDENTIALS_PATH,
    });
  }
  return (
    <div>
      {async function listMajors(auth) {
        const sheets = google.sheets({ version: "v4", auth });
        for (let row = 3; row < 1000; row++) {
          const res = await sheets.spreadsheets.values.get({
            spreadsheetId: "1TT6C6lmwNeznUGes82txf2k91eet7pjVj2TldPEyeSU",
            range: `GERAL!A${row}:K${row}`,
          });
          const rows = res.data.values;
          if (!rows || rows.length === 0) {
            console.log("No data found.");
            break;
          }

          return rows;
        }
        authorize().then(listMajors);
      }}
    </div>
  );

  /* async function listMajors(auth) {
    const sheets = google.sheets({ version: "v4", auth });
    for (let row = 3; row < 1000; row++) {
      const res = await sheets.spreadsheets.values.get({
        spreadsheetId: "1J78RpgWAP1hPLqgIy_30kQr-5yXLq4fM",
        range: `GERAL!A${row}:K${row}`,
      });
      const rows = res.data.values;
      if (!rows || rows.length === 0) {
        console.log("No data found.");
        break;
      }

      return rows;
    }
  } */
}

export default SheetValues;