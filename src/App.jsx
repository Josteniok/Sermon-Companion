import "@glideapps/glide-data-grid/dist/index.css";

import {
  DataEditor,
  GridCell,
  GridCellKind,
  GridColumn,
  Item,
  Theme
} from "@glideapps/glide-data-grid";

const data = [
  {
    dateCreated: "2015-07-14",
    catalog: "#-01",
    messageTitle: "12 Year Old Jesus",
    primaryScripture: "Luke 2:40-52",
    print: true,
    audio: false,
    presentation: false,
    drive: true,
    other: false,
    locations: "NorthOak, SIBIchapel",
    occasionSeriesNumber: "",
    keywords: "Glorifying God Growth Jesus Ministry"
  }
];

// Grid columns may also provide icon, overlayIcon, menu, style, and theme overrides
const columns = [
  { title: "Created Date", width: 100 },
  { title: "Catalog", width: 65 },
  { title: "Message Title", width: 150 },
  { title: "Primary Scripture", width: 150 },
  { title: "Print", width: 50 },
  { title: "Audio", width: 50 },
  { title: "Presentation", width: 100 },
  { title: "Drive", width: 50 },
  { title: "Other", width: 50 },
  { title: "Locations", width: 150 },
  { title: "Occasion, Series, #", width: 150 },
  { title: "Keywords", width: 250 }
];

let sermons;
window.apis.requestSermonData();
window.apis.recieveSermonData.then((data) => {
  sermons = data;
});

// If fetching data is slow you can use the DataEditor ref to send updates for cells
// once data is loaded.
function getData([col, row]) {
  // if (!sermons) {
  //   console.log("HERE");
  //   return "";
  // }
  // else {    
    console.log(`Row ${row}, Col ${col}`);
    console.log(`Print: ${sermons[row].print}`)
    let nodeversion = window.versions.node();
    console.log(nodeversion);
    console.log(sermons);
    const sermon = sermons[row];

    switch (col) {
      case 0:
        return {
          kind: GridCellKind.Text,
          data: sermon.date_created,
          allowOverlay: false,
          displayData: sermon.date_created
        };
      case 1:
        return {
          kind: GridCellKind.Text,
          data: sermon.catalog,
          allowOverlay: false,
          displayData: sermon.catalog
        };
      case 2:
        return {
          kind: GridCellKind.Text,
          data: sermon.title,
          allowOverlay: false,
          displayData: sermon.title
        };
      case 3:
        return {
          kind: GridCellKind.Text,
          data: sermon.primary_scripture,
          allowOverlay: false,
          displayData: sermon.primary_scripture
        };
      case 4:
        return {
          kind: GridCellKind.Boolean,
          data: sermon.print,
          allowOverlay: false
        };
      case 5:
        return {
          kind: GridCellKind.Boolean,
          data: sermon.audio,
          allowOverlay: false
        };
      case 6:
        return {
          kind: GridCellKind.Boolean,
          data: sermon.presentation,
          allowOverlay: false
        };
      case 7:
        return {
          kind: GridCellKind.Boolean,
          data: sermon.drive,
          allowOverlay: false
        };
      case 8:
        return {
          kind: GridCellKind.Boolean,
          data: sermon.other,
          allowOverlay: false
        };
      case 9:
        return {
          kind: GridCellKind.Text,
          data: sermon.locations,
          allowOverlay: false,
          displayData: sermon.locations
        };
      case 10:
        return {
          kind: GridCellKind.Text,
          data: sermon.occasion,
          allowOverlay: false,
          displayData: sermon.occasion
        };
      case 11:
        return {
          kind: GridCellKind.Text,
          data: sermon.keywords,
          allowOverlay: false,
          displayData: sermon.keywords
        };
      default:
        throw new Error();
    }
  //}
}

export default function App() {
  return (
    <DataEditor
    theme={{
      bgCell: "#F2F9FF"
    }}
    columns={columns} getCellContent={getData} rows={sermons.length} />
  );
}