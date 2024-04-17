import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  IconButton
} from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";
import CottageIcon from '@mui/icons-material/Cottage';

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={3}>
      <a href="/" style={{ color: "white", marginLeft: '10px', fontWeight: "bold", fontSize: "2rem" }}><IconButton><CottageIcon sx={{ fontSize: 40 }} style={{ marginTop: '-4rem', marginBottom: '-3rem' }} /></IconButton>  &nbsp; Code Playground</a>
      <Text fontSize="lg" color="green.400">
        Language:
      </Text>
      <Menu isLazy>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList bg="white">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : ""}
              bg={lang === language ? "gray.200" : "transparent"}
              _hover={{
                color: ACTIVE_COLOR,
                bg: "gray.200",
              }}
              onClick={() => onSelect(lang)}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
export default LanguageSelector;
