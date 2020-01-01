import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLink = ({
  link,
  name
}) => {
  return (
    <div className="navigation__item" key={link}>
      <Link to={link}>{name}</Link>
    </div>
  )
}


export const Navigation = (props) => {

  let views = [];
  _.forEach(props.views, (view) => {
    views.push(
      <NavigationLink key={view.link} name={view.name} link={view.link} />
    );
  });

  return (
    <nav className="navigation">
      {views}
      <p>Here</p>
    </nav>
  );
}

export default Navigation;