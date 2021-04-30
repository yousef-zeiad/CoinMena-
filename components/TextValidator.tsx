import React from 'react';
import styled from 'styled-components/native';
import {
  Controller,
  ControllerRenderProps,
  ControllerProps,
} from 'react-hook-form';


type TextValidatorProps = Omit<Partial<ControllerRenderProps>, 'name'> &
  Partial<TextInputProps> &
  Partial<ControllerProps<any>> & {
    onValueChanged?: (value: string) => void;
  };

import Colors from '../Colors';

export const Input = styled.TextInput<{ disabled?: boolean; error?: string }>`
  font-size: 16px;
  margin-bottom: 10px;
  height: 40px;
  color: ${(props) =>
    props.error ? Colors.error : props.disabled ? Colors.inputLabel : 'black'};
`;

const InputLabel = styled.Text`
  color: ${Colors.inputLabel};
  font-size: 16px;
  margin-top: 16px;
`;
const TextInputContaienr = styled.View<{ error: string }>`
  padding-bottom: 6px;
  border-color: ${(props) => (props.error ? Colors.error : Colors.inputLabel)};
  border-bottom-width: 2px
`;
export type TextInputProps = {
  title: string;
  onPress: () => void;
  error: any;
  disabled?: boolean;
};

/**
 * TextInputMask that can be used with subcomponents
 *
 * @example
   * <TextValidator
 *   control={control}
 *   disabled={props.busy}
 *   error={errors.number !== undefined}
 *   keyboardType={'numeric'}
 *   label="Person_number"
 *   name={'personal_number'}
 *   placeholder={'+962'}
 *   rules={{
 *     required: true,
 *   }}
 * />
 *
 * @param props See {@link TextValidatorProps}
 * @returns {React.FC<TextValidatorProps>}
 */
export const TextValidator: React.FC<TextValidatorProps> = (props) => {

  return (
    <Controller
      render={({ onChange, onBlur, value }) => (
        <Input
          autoCorrect={false}
          clearTextOnFocus={false}
          onBlur={onBlur}
          onChangeText={(val) => {
            onChange(val);
            if (props.onValueChanged) {
              props.onValueChanged(val);
            }
          }}
          value={value && value.toString()}
          {...(props as TextInputProps)}
        />
      )}
      {...(props as ControllerRenderProps)}
    />
  );
};
export const TextInputMask: React.FC<TextInputProps> = (props) => (
  <TextInputContaienr error={props.error}>
    <InputLabel onPress={props.onPress}>{props.title}</InputLabel>
    {props.children}
  </TextInputContaienr>
);
