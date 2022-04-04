import React from 'react';

import { Container } from './styles';

export interface IInput {
	value?: string;
	placeholder?: string;
	autoCorrect?: boolean;
	secureTextEntry?: boolean;
	placeholderTextColor?: string;
	onChangeText?: (value: string) => void;
	autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
}

const Input = ({
	value,
	placeholder,
	autoCorrect,
	onChangeText,
	autoCapitalize,
	secureTextEntry,
	placeholderTextColor,
	...props
}: IInput) => {
	return (
		<Container
			value={value}
			placeholder={placeholder}
			autoCorrect={autoCorrect}
			onChangeText={onChangeText}
			autoCapitalize={autoCapitalize}
			secureTextEntry={secureTextEntry}
			placeholderTextColor={placeholderTextColor}
			{...props}
		/>
	);
};

export default Input;
