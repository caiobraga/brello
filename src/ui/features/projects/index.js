import { useState } from "react";
import { FaPlus, FaWrench } from "react-icons/fa";
import {
	Box,
	Button,
	ColorModeScript,
	Flex,
	Input,
    Image,
	useBoolean,
	Stack,
	Text,
} from "@chakra-ui/react";
import Navbar from "../../components/navbar";

// import theme from "./theme";

// import "./style.css"; // Import the CSS file

const colors = [
	"lightblue",
	"lightgray",
	"lightgreen",
	"lightpink",
	"lightseagreen",
	"lightskyblue",
	"lightsteelblue",
	"lightyellow",
];

function randomColor1() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function randomColor() {
	const randPixel = () => 127 + Math.random() * 128;

	return `rgb(${randPixel()},${randPixel()},${randPixel()})`;
}

const Card = ({ content }) => {
	const [isHovering, setHovering] = useBoolean();

	return (
		<Flex
			p="14px"
			backgroundColor="lightgray"
			borderRadius="14px"
			justifyContent="space-between"
			onMouseEnter={setHovering.on}
			onMouseLeave={setHovering.off}>
			<Text
				m="0"
				alignSelf="flex-start"
				whiteSpace="nowrap"
				overflow="hidden"
				textOverflow="ellipsis"
				fontSize="18px">
				{content}
			</Text>
			<Button
				border="none"
				borderRadius="14px"
				title="Configurar cartão"
				alt="Configurar cartão"
				display="none"
				style={{ display: isHovering ? "block" : "none" }}>
				<FaWrench></FaWrench>
			</Button>
		</Flex>
	);
};

const Board = ({ name }) => {
	const [isHovering, setHovering] = useBoolean();
	const [cardContent, setCardContent] = useState("");
	const [cardList, setCardList] = useState([]);
	const [backgroundColor, setBackgroundColor] = useState(randomColor());

	function handleInput(e) {
		setCardContent(e.target.value);
	}

	function handleClick() {
		if (cardContent) {
			setCardList(cardList.concat(<Card content={cardContent}></Card>));
			setCardContent("");
		}
	}

	return (
		<Flex
			minW="320px"
			maxW="320px"
			border="2px solid gray"
			borderRadius="14px"
			flexDirection="column"
			overflow="hidden">
			<Flex
				p="8px"
				alignItems="center"
				justifyContent="space-between"
				backgroundColor={backgroundColor}
				onMouseEnter={setHovering.on}
				onMouseLeave={setHovering.off}>
				{/* <Text m='0' textAlign='center' whiteSpace='nowrap' overflow='hidden' textOverflow='ellipsis' title={name} fontSize='22px'>
                    {name}
                </Text> */}
				<Input
					textAlign="center"
					whiteSpace="nowrap"
					overflow="hidden"
					textOverflow="ellipsis"
					placeholder="Quadro sem título"
					backgroundColor="inherit"
					border="none"
					borderRadius="14px"
					fontSize="22px"
					onChange={(e) => {
						e.target.title = e.target.value;
						e.target.alt = e.target.value;
					}}
					title={name}
				/>
				<Button
					w="24px"
					h="24px"
					border="none"
					borderRadius="14px"
					title="Configurar quadro"
					alt="Configurar quadro"
					style={{ display: isHovering ? "block" : "none" }}>
					<FaWrench></FaWrench>
				</Button>
			</Flex>
			<Flex p="8px" overflow="hidden">
				<Input
					value={cardContent}
					border="2px solid lightgray"
					placeholder="novo cartão"
					px="8px"
					height="24px"
					flexGrow={1}
					borderRadius="14px 0px 0px 14px"
					onChange={handleInput}
				/>
				<Button
					backgroundColor="lightgray"
					border="none"
					borderRadius="0px 14px 14px 0px"
					title="Adicionar cartão"
					alt="Adicionar cartão"
					onClick={(e) => {
						handleClick(e);
						e.target.value = "";
					}}>
					<FaPlus></FaPlus>
				</Button>
			</Flex>
			<Stack p="8px">{cardList}</Stack>
		</Flex>
	);
};

const ProjectScreen = () => {
	const [boardlist, setBoardList] = useState([
		<Board name="Quadro sem título"></Board>,
	]);

	function handleClick() {
		setBoardList(
			boardlist.concat(<Board name="Quadro sem título"></Board>)
		);
	}

	return (
		<Box className="App">
			{/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
			<Navbar></Navbar>
			<Flex
				p="14px"
				alignItems="flex-start"
				px="14px"
				gap="14px"
				overflow="auto">
				<Flex alignItems="flex-start" px="14px" gap="14px">
					{boardlist}
				</Flex>
				<Button
					minW="44px"
					minH="44px"
					borderRadius="14px"
					title="Criar quadro"
					alt="Criar quadro"
					onClick={handleClick}>
					<FaPlus></FaPlus>
				</Button>
			</Flex>
		</Box>
	);
};

export default ProjectScreen;
