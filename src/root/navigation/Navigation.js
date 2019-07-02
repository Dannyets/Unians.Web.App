import React, { Component } from 'react';
import { NavigationContainer, List, ListItem } from './Navigation.styles.js';

/**
 * @render react
 * @name Navigation component
 * @description Main navigation for an app.
 * @example
 * <Navigation
 *    links={[
 *      { label: 'Home', href: '/home', isActive: true },
 *      { label: 'Browse', href: 'http://browse.to.somewhere' },
 *      { label: 'My List', href: '/my-list' },
 *      { label: 'Top Picks', href: '/top' },
 *      { label: 'Recent', href: '/recent' }
 *    ]}
 *    />
 */
class Navigation extends Component {
  state = {
    links: {},
    currentActiveLink: null
  }

  componentDidMount(){
    const { links } = this.props;
    this.formatLinks(links);
  }

  componentDidUpdate(prevProps){
    const { links } = this.props;

    if(prevProps.links !== links){
      this.formatLinks(links);
    }
  }

  formatLinks = (links) => {
    const mappedLinks = {};
    let currentActiveLink;

    links.forEach(link => {
      const { href, isActive } = link;

      mappedLinks[href] = link;

      if(isActive){
        currentActiveLink = href;
      }
    });

    this.setState({ links: mappedLinks, currentActiveLink });
  }

  static defaultProps = {
    links: [
      { label: 'Unians', href: '/unians', isActive: true },
    ]
  }

  handleOnClick = (href) => {
    const { links, currentActiveLink } = this.state;

    const updatedLinks = { ...links };

    if(currentActiveLink){
      updatedLinks[currentActiveLink] = {
        ...links[currentActiveLink],
        isActive: false
      }
    }

    updatedLinks[href] = {
      ...links[href],
      isActive: true
    };
    
    this.setState({ links: updatedLinks, currentActiveLink: href });

    const { history } = this.props;

    if(history){
      history.push(href);
    }
  }

  render(){
    const { links } = this.state;

    return (
      <NavigationContainer>
        <List>
          {Object.values(links).map(({ label, href, isActive }, index) =>
            <ListItem key={index}
                      isActive={isActive}
                      onClick={() => !isActive && this.handleOnClick(href)}>
              {label}
            </ListItem>
          )}
        </List>
      </NavigationContainer>
    )
  }
}

export default Navigation;
