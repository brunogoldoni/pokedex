import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import { useDispatch } from 'react-redux';

import { setUser } from '../../store/modules/user/actions';

import { ControlledInput, Button } from '../../components';

import { colors } from '../../styles/colors';

import { Container, Footer, WrapperInput } from '../styles';
import { Content, IMGIntroduction } from './styles';

import { IFormData } from '../../interfaces/form-data';

const userNameSchema = yup.object({
	userName: yup.string().required("Informe o seu nome")
});

const Introduction = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
		resolver: yupResolver(userNameSchema),
	});

	const handleSetUser = (data: IFormData) => {
		dispatch(setUser(data.userName));

		navigation.navigate('SignIn');
	};

	return (
		<Container>
			<Content>
				<IMGIntroduction source={require('../../assets/newtwo.png')} />
			</Content>

			<Footer>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} touchSoundDisabled>
					<WrapperInput>
						<ControlledInput
							autoCapitalize
							name="userName"
							control={control}
							error={errors.userName}
							placeholder="Digite seu apelido"
							placeholderTextColor={`${colors.phTextColor}`}

						/>
					</WrapperInput>
				</TouchableWithoutFeedback>

				<Button
					label="Avançar"
					onPress={handleSubmit(handleSetUser)}
				/>
			</Footer>
		</Container>
	);
};

export default Introduction;
