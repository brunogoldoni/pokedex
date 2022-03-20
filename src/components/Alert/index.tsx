import React, {useRef, useEffect} from 'react';
import {View} from 'react-native';

import {colors} from '../../styles/colors';

import Icon from 'react-native-vector-icons/Feather';
import DropdownAlert from 'react-native-dropdownalert';

interface IAlert {
  type: string,
  getRef: any,
}

const Alert = ({type, getRef}: IAlert) => {
  const dropDownAlertRef = useRef();

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'check-circle';
      case 'error':
        return 'alert-circle';
      case 'warn':
        return 'alert-triangle';
    }
  };

  useEffect(() => {
    getRef(dropDownAlertRef);
  }, [dropDownAlertRef]);

  return (
    <View>
      <DropdownAlert
        ref={dropDownAlertRef}
        inactiveStatusBarBackgroundColor={colors.mediuDark}
        renderImage={() => (
          <Icon
            name={getIcon()}
            size={30}
            color="#FFF"
            style={{marginTop: 5, marginHorizontal: 8}}
          />
        )}
      />
    </View>
  );
};

export default Alert;
