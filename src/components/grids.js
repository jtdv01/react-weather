import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

// const tilesData = [
//   {
//     img: 'http://placehold.it/350x150',
//     title: 'Monday',
//     author: 'jill111',
//     key:
//   },
// ];

  // {
  //   img: 'http://placehold.it/350x150',
  //   title: 'Monday',
  //   author: 'jill111',
  // },

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListExampleSingleLine = (props) => (
    <MuiThemeProvider>
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {props.tilesData.map((tile) => (
        <GridTile
          key={tile.dateTime}
          title={`${tile.dateTime} | Temp: ${tile.temp} C`}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
        <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>

  </MuiThemeProvider>
);

export default GridListExampleSingleLine;