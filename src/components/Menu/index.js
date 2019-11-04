import React from 'react';
import MenuItem from './MenuItem';
import style from './index.module.css';
import { Location } from '@reach/router';
export default class Menu extends React.Component {
 
  renderMenuItems = (nav, loc) =>
    nav.map((item, index) => {
      
      return (
        <MenuItem 
          item={item}
          key={index}
          className={style.Menu__item}
          location={loc}
          />
      );
    });

  render() {
          return (
            <Location>
              {({ location }) => {
                
                return (
                <nav className={style.Menu}>
                  <ul className={style.Menu__list}>
                    {this.renderMenuItems(this.props.categories, location)}
                  </ul>
                </nav>
                )
             }}
          </Location>
          );
        
   
  }
}