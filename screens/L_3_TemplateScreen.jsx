import React, { useRef } from 'react';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { ButtonLearning } from '../components';
import { useEffect, useState } from 'react/cjs/react.development';
import db from '../db/database';
import { ActivityIndicator } from 'react-native';

const createMesive = (number = 1) => {
	let mockMasive = [];

	for (let i = 0; i < number; i++) {
		mockMasive.push('*');
	}

	return mockMasive;
};

const L_3_TemplateScreen = ({ navigation, route }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [currentInfo, setCurrentInfo] = useState({});
	const [taskCount, setTaskCount] = useState(0);
	const [inputValues, setInputValues] = useState({
		1: '',
		2: '',
		3: '',
		4: '',
	});

	useEffect(() => {
		db.find({ path: 'lvl_3' }, (e, d) => {
			setTaskCount(d[0].task.length);

			d[0].task.map((item) => {
				if (item.number === currentPage) {
					setCurrentInfo(item);
				}
			});
		});

		db.find({ path: 'lvl_3_page' }, (e, d) => {
			if (isNaN(d[0].currentPage) || d[0].length === 0) {
				db.update({ path: 'lvl_3_page' }, { $set: { currentPage: 1 } });
				setCurrentPage(1);
			} else {
				setCurrentPage(d[0].currentPage);
			}
		});
		setAllDoneFalse();
	}, []);

	useEffect(() => {
		db.find({ path: 'lvl_3' }, (e, d) => {
			d[0].task.map((item) => {
				if (item.number === currentPage) {
					setCurrentInfo(item);
				}
			});
		});

		clearInputs();
	}, [currentPage]);

	useEffect(() => {
		if (route.params?.cp) {
			clearInputs();
			setCurrentPage(route.params?.cp + 1);
		}
	}, [route.params?.cp]);

	useEffect(() => {
		if (route.params?.cpc) {
			setCurrentPage(route.params?.cpc + 1);
		}
	}, [route.params?.cpc]);

	const clearInputs = () => {
		setInputValues({
			1: '',
			2: '',
			3: '',
			4: '',
		});
	};

	const setDoneTrue = () => {
		db.find({ path: 'lvl_3' }, (e, d) => {
			const TASK = d[0].task.map((item) => {
				if (item.number === currentPage) {
					return { ...item, done: true };
				}
				return { ...item };
			});
			db.update({ path: 'lvl_3' }, { $set: { task: TASK } });
		});
	};

	const setAllDoneFalse = () => {
		db.find({ path: 'lvl_3' }, (e, d) => {
			const TASK = d[0].task.map((item) => {
				return { ...item, done: false };
			});
			db.update({ path: 'lvl_3' }, { $set: { task: TASK } });
		});
	};

	const onChangeText = (e, ind) => {
		setInputValues({ ...inputValues, [ind]: e });
	};

	return (
		<>
			{!('number' in currentInfo) && <ActivityIndicator />}
			{'number' in currentInfo && (
				<>
					<StarContainer>
						{createMesive(currentPage).map((item) => (
							<AntDesign
								name="star"
								style={{ marginRight: 5 }}
								size={24}
								color="rgba(255, 247, 50, 1)"
							/>
						))}
					</StarContainer>
					<LvlContainer>
						<ButtonLearning
							style={{ backgroundColor: 'rgba(255, 253, 203, 1)' }}
							lvlNumber={3}
							title="Typing"
							disabled={true}
						/>
						<TestContainer>
							<EnglishWord>{currentInfo.question}</EnglishWord>
							<FormContainer>
								{currentInfo.correct.map((item, index) => (
									<TestInput
										value={inputValues[index + 1]}
										onChangeText={(e) => onChangeText(e, index + 1)}
										id="item"
										key={item.length}
										placeholderTextColor={'rgba(0 ,0 ,0 , 0.2)'}
										placeholder="type the synonym..."
										style={{ marginBottom: 37 }}
									/>
								))}
								<TestButton>
									<TestButtonText
										onPress={() => {
											if (taskCount === currentPage) {
												setDoneTrue();
												db.update(
													{ path: 'lvl_3_page' },
													{ $set: { currentPage: 1 } },
												);
												navigation.navigate('L_3_Finish');
											} else {
												setDoneTrue();

												let mistakes = false;

												currentInfo.correct.map((item, index) => {
													if (item.trim() !== inputValues[index + 1].trim()) {
														navigation.navigate('L_3_Wrong', {
															currentPage,
															correctAnswers: currentInfo.correct,
															question: currentInfo.question,
														});
														mistakes = true;
														setCurrentPage(currentPage + 1);
													}
												});

												if (!mistakes) {
													navigation.navigate('L_3_Correct', {
														currentPage,
													});
												}
											}
										}}
									>
										Next
									</TestButtonText>
								</TestButton>
							</FormContainer>
						</TestContainer>
					</LvlContainer>
				</>
			)}
		</>
	);
};

const TestButtonText = styled.Text`
	font-weight: 500;
	font-size: 30px;
	text-align: center;
	width: 100%;
`;

const TestButton = styled.Pressable`
	border-radius: 30px;
	background-color: rgba(255, 253, 203, 1);
	border-width: 1px;
	border-color: black;
	padding: 10px 35px;
`;

const TestInput = styled.TextInput`
	color: rgba(0, 0, 0, 0.2);
	font-size: 20px;
	font-weight: 600;
	border-width: 1px;
	border-color: black;
	padding: 5px 14px;
	width: 200px;
`;

const FormContainer = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const EnglishWord = styled.Text`
	font-weight: 700;
	font-size: 24px;
	color: black;
	width: 50%;
	text-align: center;
`;

const TestContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-top: 90px;
`;

const StarContainer = styled.View`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	padding-left: 60%;
	padding-top: 10px;
	padding-bottom: 10px;
`;

const LvlContainer = styled.View`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-left: 40px;
	padding-right: 40px;
`;

export default L_3_TemplateScreen;
