// @ts-nocheck
import React from 'react';
import icons from './icons';

function formatIcon(name: string) {
  return name
    .replace(name[0], name[0].toUpperCase())
    .replace(/-(w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
}

export function patchRoutes({ routes, initialState }) {
  Object.keys(routes).forEach((key) => {
    const { icon } = routes[key];
    if (icon && typeof icon === 'string') {
      const upperIcon = formatIcon(icon);
      if (icons[upperIcon] || icons[upperIcon + 'Outlined']) {
        routes[key].icon = React.createElement(
          icons[upperIcon] || icons[upperIcon + 'Outlined']
        );
      }
    }
  });
}

export function renderMenuIcon(icon: string) {
  const upperIcon = formatIcon(icon);
  if (icons[upperIcon] || icons[upperIcon + 'Outlined']) {
    return React.createElement(
      icons[upperIcon] || icons[upperIcon + 'Outlined']
    );
  }
  return <span></span>;
}
