import React from 'react';
import { View, ViewProps, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../Colors';
import { HorizontalView, InputLabel } from './styled';

/**
 * @typedef TextInputButtonProps
 */
export interface TextInputButtonProps {
  label?: string;
  placeholder?: string;
  onPress: () => void;
  viewProps?: ViewProps;
  accessibilityLabel?: string;
  testID?: string;
}

const TextPlaceholder = styled.Text`
  font-size: 16;
  text-align-vertical: center;
  text-align: left;
`;

/**
 * @see {@link InputLabel}
 * @typedef InputBorderView
 */
export const InputBorderView = styled.View`
  border-bottom-width:2px;
  height: 40px;
  align-content: flex-start;
  justify-content: center;
  border-bottom-color:${Colors.disabled}
`;

/**
 *
 * Children are place horizontally so you can add an icon after the placeholder.
 *
 * @example <label>Clickable element that looks like a TextInput</label>
          <TextInputButton
              viewProps={{style: props.style}}
              onPress={() => setIsOpen(true)}
              label={'What´s it gonna be?'}
              placeholder='Adress'>
          </TextInputButton>
 * @param {TextInputButtonProps} props `onPress`, `label`, `viewProps`, `placeholder`, `children`
 * @returns {Pressable}
 */
const TextInputButton: React.FC<TextInputButtonProps> = (props) => {
  return (
    <View>
      <InputLabel>{props.label}</InputLabel>
      <TouchableOpacity
        onPress={props.onPress}
        testID={props.testID}
        accessibilityLabel={props.accessibilityLabel}>
        <InputBorderView {...(props.viewProps as any)}>
          <HorizontalView>
            <TextPlaceholder>{props.placeholder}</TextPlaceholder>
            {props.children}
          </HorizontalView>
        </InputBorderView>
      </TouchableOpacity>
    </View>
  );
};

export default TextInputButton;
