import React from 'react';
import Checkbox from 'checkbox';
import omit from 'lodash/omit';

import getControlGroup from '../getControlGroup';
import unknownProps from '../unknownProps';

const CheckboxGroup = Checkbox.Group;
const CheckboxGroupWrap = props => {
  const passableProps = omit(props, unknownProps);
  return (
    <CheckboxGroup className="zent-form__checkbox-group" {...passableProps} />
  );
};
const CheckboxGroupField = getControlGroup(CheckboxGroupWrap);

export default CheckboxGroupField;
