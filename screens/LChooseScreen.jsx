import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { MenuButton } from '../components';
import db from '../db/database';
import { ActivityIndicator } from 'react-native';
import lvl_1_information from '../info/lelvel_1.json';
import lvl_2_information from '../info/level_2.json';
import lvl_3_information from '../info/level_3.json';

const LChooseScreen = ({ navigation, route }) => {
	const [buttonStyle, setButtonStyle] = useState({
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
	});

	const [level_1_Info, setLevel_1_Info] = useState({});
	const [levle_2_Info, setLevel_2_info] = useState({});
	const [level_3_Info, setLevel_3_info] = useState({});

	useEffect(() => {
		db.find({ path: 'lvl_1' }, (e, d) => {
			if (d.length === 0) {
				setLevel_1_Info(lvl_1_information);
				db.insert(lvl_1_information);
				return;
			}
			setLevel_1_Info(d[0]);
		});

		db.find({ path: 'lvl_2' }, (e, d) => {
			if (d.length === 0) {
				db.insert(lvl_2_information);
				setLevel_2_info(lvl_2_information);
				return;
			}
			setLevel_2_info(d[0]);
		});

		db.find({ path: 'lvl_3' }, (e, d) => {
			if (d.length === 0) {
				db.insert(lvl_3_information);
				setLevel_3_info(lvl_3_information);
				return;
			}
			setLevel_3_info(d[0]);
		});
	}, []);

	useEffect(() => {
		if (route.params?.update) {
			db.find({ path: 'lvl_1' }, (e, d) => {
				setLevel_1_Info(d[0]);
			});
		}
	}, [route.params?.update]);

	useEffect(() => {
		if (route.params?.update_2) {
			db.find({ path: 'lvl_2' }, (e, d) => {
				setLevel_2_info(d[0]);
			});
		}
	}, [route.params?.update_2]);

	useEffect(() => {
		if (route.params?.update_3) {
			db.find({ path: 'lvl_3' }, (e, d) => {
				setLevel_3_info(d[0]);
			});
		}
	}, [route.params?.update_3]);

	return (
		<>
			<LCContainer>
				<LvlRow>
					<LvlButton
						onPressIn={() => {
							setButtonStyle({ ...buttonStyle, 1: true });
							db.find({ path: 'lvl_1' }, (err, newDocs) => {
								navigation.navigate('L_1_Start', newDocs);
							});
						}}
						onPressOut={() => {
							setButtonStyle({ ...buttonStyle, 1: false });
						}}
						style={
							buttonStyle['1']
								? { backgroundColor: 'white' }
								: { backgroundColor: '#BBCAFE' }
						}
					>
						<LvlButtonName>Level 1</LvlButtonName>
					</LvlButton>
					<LvlIndicatorContainer>
						<LvlIndicator>
							{!('path' in level_1_Info) && <ActivityIndicator />}
							{'path' in level_1_Info &&
								level_1_Info.task.map((k, i) => {
									return (
										<LvlNumberContainer
											done={k.done}
											style={i === 0 ? { borderLeftWidth: 0 } : {}}
											key={i * 89}
										>
											<LvlNumber>{i + 1}</LvlNumber>
										</LvlNumberContainer>
									);
								})}
						</LvlIndicator>
					</LvlIndicatorContainer>
				</LvlRow>
				<LvlRow>
					<>
						<LvlButton
							onPressIn={() => {
								setButtonStyle({ ...buttonStyle, 2: true });
							}}
							onPressOut={() => {
								setButtonStyle({ ...buttonStyle, 2: false });

								db.find({ path: 'lvl_2' }, (e, d) => {
									const TASK = d[0].task.map((it) => ({ ...it, done: false }));
									db.update({ path: 'lvl_2' }, { $set: { task: TASK } });
								});

								navigation.navigate('L_2_Template');
							}}
							style={
								buttonStyle['2']
									? { backgroundColor: 'white' }
									: { backgroundColor: '#D8FFCB' }
							}
						>
							<LvlButtonName>Level 2</LvlButtonName>
						</LvlButton>
						{!('path' in level_1_Info) && <ActivityIndicator />}

						{'path' in levle_2_Info && (
							<LvlIndicatorContainer>
								{!level_1_Info.done && (
									<>
										<MaterialIcons name="lock" size={24} color="black" />
									</>
								)}
								{level_1_Info.done && (
									<LvlIndicator>
										{levle_2_Info.task.map((item, index) => (
											<LvlNumberContainer
												key={index * 99}
												style={index === 0 ? { borderLeftWidth: 0 } : {}}
												done={item.done}
											>
												<LvlNumber>{index + 1}</LvlNumber>
											</LvlNumberContainer>
										))}
									</LvlIndicator>
								)}
							</LvlIndicatorContainer>
						)}
					</>
				</LvlRow>
				<LvlRow>
					{!('path' in level_3_Info) && <ActivityIndicator />}
					{'path' in level_3_Info && (
						<>
							<LvlButton
								onPressIn={() => {
									setButtonStyle({ ...buttonStyle, 3: true });
								}}
								onPressOut={() => {
									setButtonStyle({ ...buttonStyle, 3: false });
									navigation.navigate('L_3_Template');
								}}
								style={
									buttonStyle['3']
										? { backgroundColor: 'white' }
										: { backgroundColor: '#FFFDCB' }
								}
							>
								<LvlButtonName>Level 3</LvlButtonName>
							</LvlButton>
							<LvlIndicatorContainer>
								{!levle_2_Info.done && (
									<MaterialIcons name="lock" size={24} color="black" />
								)}
								{levle_2_Info.done && (
									<>
										<LvlIndicator>
											{level_3_Info.task.map((item, index) => (
												<LvlNumberContainer
													key={index * 91}
													style={index === 0 ? { borderLeftWidth: 0 } : {}}
													done={item.done}
												>
													<LvlNumber>{index + 1}</LvlNumber>
												</LvlNumberContainer>
											))}
										</LvlIndicator>
									</>
								)}
							</LvlIndicatorContainer>
						</>
					)}
				</LvlRow>
			</LCContainer>
		</>
	);
};

const LvlNumber = styled.Text`
	font-weight: 700;
	font-size: 16px;
	width: 100%;
	text-align: center;
`;

const LvlNumberContainer = styled.View`
	background-color: ${({ done }) => (done ? '#fff732' : 'white')};
	width: 40px;
	border-left-width: 2px;
	border-left-color: black;
`;

const LvlIndicator = styled.View`
	display: flex;
	flex-direction: row;
	height: 25px;
	border: 2px solid black;
`;

const LvlIndicatorContainer = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
`;

const LvlButtonName = styled.Text`
	font-weight: 600;
	font-size: 22px;
	width: 100%;
	text-align: center;
`;

const LvlButton = styled.Pressable`
	width: 120px;
	border: 1px solid black;
	border-radius: 30px;
	padding: 7px 20px;
`;

const LvlRow = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-left: 40px;
`;

const LCContainer = styled.View`
	padding-top: 150px;
	padding-bottom: 150px;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export default LChooseScreen;
