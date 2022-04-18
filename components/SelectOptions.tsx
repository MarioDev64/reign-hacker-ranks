import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

const SelectOptionStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

interface SelectOptionsProps {
	technology: {
		label: string;
		img: StaticImageData;
		value: string;
	};
}

const SelectOption = ({ technology }: SelectOptionsProps) => {
	return (
		<SelectOptionStyle>
			<Image
				alt={technology.label}
				height={24}
				width={24}
				src={technology.img}
			/>
			<span style={{ marginLeft: 4 }}>{technology.label}</span>
		</SelectOptionStyle>
	);
};

export default SelectOption;
