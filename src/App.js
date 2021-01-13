import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import styleModule from './App.module.scss';
import { XML_Head } from './scenic_spot_C_f.json';

const { Infos: { Info: ItemList }} = XML_Head;

function App() {
  return (
    <div className={styleModule.App}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            itemSize={35}
            width={width}
            height={height}
            itemData={ItemList}
            itemCount={ItemList.length}
            className={styleModule.List}
          >
            {({ data, index, style }) => (
              <div className={styleModule.ListItem} style={style}>
                <div className={styleModule.Region}>{data[index].Region}</div>
                <div className={styleModule.Town}>{data[index].Town}</div>
                <div className={styleModule.Name}>{data[index].Name}</div>
              </div>
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  );
}

export default App;
