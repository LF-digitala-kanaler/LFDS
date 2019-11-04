import React from 'react';
import style from './index.module.css';
import MenuLink from './MenuLink';
import classNames from 'classnames/bind';

let cx = classNames.bind(style);

export default class MenuItem extends React.Component {
  
  state = {
    open: false
  };
  componentDidMount() {
    const {item} = this.props;
    const categoryUrl = this.removeTrailingSlash(item.component[0].fields.slug);
     if (this.props.location.pathname.match(categoryUrl)) {
       this.setState({
          open: true
        });  
     }
    
  }

  toggleSubMenu = () => {
    this.setState({
      open: !this.state.open
    });
  };
  
  removeTrailingSlash = (url) => {
    let stripTrailingSlash = url.slice(0, -1);
    let to = stripTrailingSlash.lastIndexOf('/');
        to = to === -1 ? stripTrailingSlash.length : to + 1;
     return stripTrailingSlash = stripTrailingSlash.substring(0, to); 
  }

  renderSubMenuItems = (items) => {
    return items.map((item) => {
      return (
        <li className={style.Menu__item} key={item.id}><MenuLink title={item.frontmatter.title} path={item.fields.slug} /></li>
      );
    });
  };  

  getNavLinkClass = (path) => {
     
    return this.props.location.pathname.includes(path)
      ? style["Menu__item--active"]
      : ''
  };

  render() {
    
    const {item} = this.props;
    const hasCategory = !(item.category === 'null');
    const categoryUrl = this.removeTrailingSlash(item.component[0].fields.slug);
    
    let className = cx({
        Menu__item: true,
        'Menu__item--active': this.getNavLinkClass(categoryUrl),
        'Menu__item--active': this.state.open,
        '' : !this.state.open
      });
    
    return( 
      <>
        {hasCategory ? (
          
          <li key={item.component[0].fields.slug} className={className} >
            <MenuLink parent path={categoryUrl} title={item.category}  collapse={this.toggleSubMenu} />
            <ul className={style.Menu__sub} >
              {this.renderSubMenuItems(item.component)}
            </ul>
          </li>
        ) : (
          null 
        )}   
      </>
    ) 
  }
}


