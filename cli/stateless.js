const fs = require('fs');
const path = require('path');

module.exports = (componentName) => {

  const componentCode = `
import './${componentName}';

import React from 'react';



export default class function(props) {
 
        return (
            <div className="${componentName}"></div>

        )
    }
}`;

  fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
    componentCode,
  );
};