import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { useAuth } from '../../hooks/auth';

import * as yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import { ControlledInput, Button } from '../../components';

import { colors } from '../../styles/colors';

import { Container, WrapperInput, Footer } from '../styles';
import { Content, IMGSignIn } from './styles';

import { IFormData } from '../../interfaces/form-data';

const signInSchema = yup.object({
	email: yup.string().email("E-mail inválido").required("Informe o seu nome"),
	password: yup.string().min(6, "A senha deve conter no mínimo 6 dígitos").required("Informe seu e-mail")
});

const SignIn = () => {
	const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
		resolver: yupResolver(signInSchema),
	});

	const { signIn, isLogging } = useAuth();

	const handleSignIn = (data: IFormData) => {
		signIn(data.email, data.password);
	};

	return (
		<Container>
			<Content>
				<IMGSignIn source={require('../../assets/poke.png')} />
			</Content>

			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} touchSoundDisabled>
				<Footer>
					<WrapperInput>
						<ControlledInput
							name="email"
							control={control}
							error={errors.email}
							placeholder="Digite seu e-mail"
							placeholderTextColor={`${colors.phTextColor}`}
						/>

						<ControlledInput
							name="password"
							secureTextEntry
							control={control}
							error={errors.password}
							placeholder="Digite sua senha"
							placeholderTextColor={`${colors.phTextColor}`}
						/>
					</WrapperInput>

					<Button
						onPress={handleSubmit(handleSignIn)}
						label="Entrar" />
				</Footer>
			</TouchableWithoutFeedback>
		</Container>
	);
};

export default SignIn;
