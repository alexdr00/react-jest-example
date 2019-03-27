import React from 'react';
import Square from '../Square';

import { shallow } from 'enzyme';

it('Renders without crashing', () => {
  shallow(<Square/>)
});

