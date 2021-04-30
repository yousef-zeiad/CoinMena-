import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../Colors';
import { ViewProps } from 'react-native';
import { StyleProp } from 'react-native';


/**
 * @typedef {type} ButtonType
 */
export type ButtonType = Omit<TouchableOpacityProps, 'style'> & {
  loading?: boolean;
  backgroundColor?: string;
  width?: number;
  testID?: string;
  marginTop?: number;
  marginBottom?: number;
  /**
   * Default '100%'
   */
  containerWidth?: number | string;
  alignStart?: boolean;
  spaceAround?: boolean;
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
};

export const ButtonWrapper = styled.TouchableOpacity<ButtonType>`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: 45px;
  background-color: ${(props) =>
    props.disabled ? Colors.disabled : Colors.primary};
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  align-self: center;
  text-align: center;
  border: 2px solid ${(props) => (props.disabled ? Colors.disabled : 'transparent')};
`;
/**
 * Button that can be used with subcomponents
 *
 * @example
     <ButtonsContainer>
      <Button onClicked={action('clicked-text')}>
        <ButtonText>{text('Button text', 'Hello Button')}</ButtonText>
      </Button>
    </ButtonsContainer>
 */

export const Button: React.FC<ButtonType> = (props) => (
  <ButtonWrapper activeOpacity={0.8} {...(props as any)}>
    {props.loading && <ActivityIndicator color={Colors.white} />}
    {!props.loading && props.children}
  </ButtonWrapper>
);
export const ButtonText = styled.Text<{ disabled?: boolean; color?: string }>`
  color: ${(props) => (props.disabled ? Colors.white : Colors.white)};
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  text-align-vertical: center;
`;
export const ButtonsContainer = styled.View<
  {
    spaceAround?: boolean;
    marginTop?: number;
    starting?: boolean;
    marginBottom?: number;
    containerWidth?: string | number;
  } & ViewProps
  >`
  justify-content: ${(props) =>
    props.spaceAround ? 'space-around' : 'space-between'};
  margin-bottom: ${(props) => (props.marginTop ? props.marginTop : 40)}px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 10)}px;
  width: ${(props) => props.containerWidth || '100%'};
  max-width: 300px;
  align-items: ${(props) => (!props.starting ? 'center' : 'flex-start')};
  align-self: ${(props) => (!props.starting ? 'center' : 'flex-start')};
`;

/**
 * A button with text
 * marginTop={50} for testing
 * @param props @see {ButtonType}
 */
export const TextButton: React.FC<ButtonType> = (props) => {
  return (
    <ButtonsContainer
      marginTop={props.marginTop || 10}
      containerWidth={props.containerWidth}
      starting={props.alignStart}
      spaceAround={props.spaceAround}
      marginBottom={props.marginBottom || 10}>
      <Button {...props}>
        <ButtonText {...(props as any)}>{props.children}</ButtonText>
      </Button>
    </ButtonsContainer>
  );
};
