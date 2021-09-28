import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { ButtonLearning } from '../components';
import { useState } from 'react/cjs/react.development';
import db from '../db/database';
import { ActivityIndicator } from 'react-native';

const createMesive = (number = 1) => {
	let mockMasive = [];

	for (let i = 0; i < number; i++) {
		mockMasive.push('*');
	}

	return mockMasive;
};

const L_2_TemplateScreen = ({ navigation }) => {
	const [btnsStyle, setBtnsStyles] = useState({
		1: false,
		2: false,
		3: false,
		4: false,
	});
	const [currentPage, setCurrentPage] = useState(1);
	const [allInfo, setAllInfo] = useState(false);

	useEffect(() => {
		db.find({ path: 'lvl_2' }, (e, d) => {
			setAllInfo(d[0]);
		});

		db.find({ path: 'lvl_2_page' }, (e, d) => {
			if (!d.length) {
				setCurrentPage(1);
				db.insert({
					path: 'lvl_2_page',
					currentPage: 1,
				});
				return;
			}

			setCurrentPage(d[0].currentPage);
		});
	}, []);

	useEffect(() => {
		setBtnsStyles({
			1: false,
			2: false,
			3: false,
			4: false,
		});
	}, [currentPage]);

	return (
		<>
			<StarContainer>
				{createMesive(currentPage - 1).map((item) => (
					<AntDesign
						name="star"
						style={{ marginRight: 5 }}
						size={24}
						color="#66FF58"
						key={item}
					/>
				))}
			</StarContainer>
			<LvlContainer>
				<ButtonLearning
					style={{ backgroundColor: '#D8FFCB' }}
					lvlNumber={2}
					title="Synonyms"
					disabled={true}
				/>
				{!allInfo && <ActivityIndicator />}
				{allInfo && (
					<TestContainer>
						{allInfo.task
							.filter((item) => item.number === currentPage)
							.map((item, index) => {
								return (
									<>
										<EnglishWord key={index * 12}>{item.question}</EnglishWord>
										<AnswerContainer>
											{item.answers.map((it, ind) => {
												return (
													<>
														<AnswerItem
															onPressIn={() => {
																setBtnsStyles({
																	...btnsStyle,
																	[ind + 1]: 'press',
																});
															}}
															onPressOut={() => {
																let newStyle = {};
																if (currentPage === allInfo.task.length) {
																	db.update(
																		{ path: 'lvl_2' },
																		{ $set: { done: true, lock: false } },
																	);
																	db.find({ path: 'lvl_2' }, (e, d) => {
																		const task = d[0].task.map((ii) => {
																			if (ii.number === currentPage) {
																				return { ...ii, done: true };
																			}
																			return {
																				...ii,
																			};
																		});

																		db.update(
																			{ path: 'lvl_2' },
																			{ $set: { task } },
																		);
																	});
																	navigation.navigate('L_2_Finish');
																	return;
																}

																Object.keys(btnsStyle).map((key) => {
																	if (
																		allInfo.task[
																			currentPage - 1
																		].correct.includes(parseInt(key))
																	) {
																		newStyle[key] = 'correct';
																	} else {
																		newStyle[key] = 'failed';
																	}
																});

																db.find({ path: 'lvl_2' }, (e, d) => {
																	const task = d[0].task.map((ii) => {
																		if (ii.number === currentPage) {
																			return { ...ii, done: true };
																		}
																		return {
																			...ii,
																		};
																	});

																	db.update(
																		{ path: 'lvl_2' },
																		{ $set: { task } },
																	);
																});

																setBtnsStyles(newStyle);

																setTimeout(() => {
																	setCurrentPage(currentPage + 1);
																}, 1000);
															}}
															type={btnsStyle[ind + 1]}
															key={it}
															disabled={
																btnsStyle[ind + 1] === 'correct' ||
																btnsStyle[ind + 1] === 'failed'
																	? true
																	: false
															}
														>
															<ItemCircle type={btnsStyle[ind + 1]}>
																<ItemDoubleCircle />
															</ItemCircle>
															<ItemText>{it}</ItemText>
														</AnswerItem>
													</>
												);
											})}
										</AnswerContainer>
									</>
								);
							})}
					</TestContainer>
				)}
			</LvlContainer>
		</>
	);
};

const ItemText = styled.Text`
	font-size: 20px;
	color: black;
	font-weight: 400;
	padding-right: 15px;
	width: 150px;
`;

const ItemDoubleCircle = styled.View`
	width: 7px;
	height: 7px;
	border-width: 1px;
	border-radius: 100px;
	background-color: white;
`;

const ItemCircle = styled.View`
	width: 30px;
	height: 30px;
	border-width: 2px;
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 13px;
	background-color: ${({ type }) =>
		type === 'correct'
			? 'rgba(140, 255, 100, 1)'
			: type === 'press'
			? 'rgba(102, 218, 255, 1)'
			: type === 'failed'
			? 'red'
			: 'white'};
`;

const AnswerItem = styled.Pressable`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	margin-bottom: 13px;
`;

const AnswerContainer = styled.View`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	height: 100%;
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
	align-items: center;
	height: 70%;
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

export default L_2_TemplateScreen;
