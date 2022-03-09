import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  chakra,
  useClipboard,
} from "@chakra-ui/react";
import Highlight from "@src/components/Typography/Code/highlight";
import scope from "@src/components/Typography/Code/react-live-scope";
import theme from "prism-react-renderer/themes/nightOwl";
import React, { CSSProperties, useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

export const liveEditorStyle: CSSProperties = {
  fontSize: 14,
  overflowX: "auto",
  fontFamily: "SF Mono, Menlo, monospace",
};

export const liveErrorStyle: CSSProperties = {
  fontFamily: "SF Mono, Menlo, monospace",
  fontSize: 14,
  padding: "1em",
  overflowX: "auto",
  color: "white",
  backgroundColor: "red",
};

const LiveCodePreview = chakra(LivePreview, {
  baseStyle: {
    fontFamily: "body",
    mt: 5,
    p: 3,
    borderWidth: 1,
    borderRadius: "12px",
  },
});

const CopyButton = (props: ButtonProps) => (
  <Button
    size="sm"
    position="absolute"
    textTransform="uppercase"
    colorScheme="teal"
    fontSize="xs"
    height="24px"
    top={0}
    zIndex="1"
    right="1.25em"
    {...props}
  />
);

const EditableNotice = (props: BoxProps) => {
  return (
    <Box
      position="absolute"
      width="full"
      top="-1.25em"
      roundedTop="8px"
      bg="#011627"
      py="2"
      zIndex="0"
      letterSpacing="wide"
      color="gray.400"
      fontSize="xs"
      fontWeight="semibold"
      textAlign="center"
      textTransform="uppercase"
      pointerEvents="none"
      {...props}
    >
      Editable Example
    </Box>
  );
};

const CodeContainer = (props: BoxProps) => (
  <Box p={"5"} rounded={"8px"} my={"2"} bg={"#011627"} {...props} />
);

const Code = (props: any) => {
  const {
    className,
    live = false,
    manual,
    render,
    children,
    viewlines,
    ln,
    ...rest
  } = props;
  const [editorCode, setEditorCode] = useState(children.trim());

  const language = className?.replace(/language-/, "");
  const { hasCopied, onCopy } = useClipboard(editorCode);

  const liveProviderProps = {
    theme,
    language,
    code: editorCode,
    scope,
    noInline: manual,
    ...rest,
  };

  const onChange = (newCode: string) => setEditorCode(newCode.trim());

  if (language === "jsx" && live) {
    return (
      <LiveProvider {...liveProviderProps}>
        <LiveCodePreview zIndex="1" />
        <Box position="relative" zIndex="0">
          <CodeContainer>
            <LiveEditor onChange={onChange} style={liveEditorStyle} />
          </CodeContainer>
          <CopyButton onClick={onCopy}>
            {hasCopied ? "copied" : "copy"}
          </CopyButton>
          <EditableNotice />
        </Box>
        <LiveError style={liveErrorStyle} />
      </LiveProvider>
    );
  }

  if (render) {
    return (
      <LiveProvider {...liveProviderProps}>
        <LiveCodePreview zIndex="1" />
        <Box position="relative" zIndex="0">
          <CopyButton onClick={onCopy}>
            {hasCopied ? "copied" : "copy"}
          </CopyButton>
        </Box>
      </LiveProvider>
    );
  }

  return (
    <Box position="relative" zIndex="0">
      <CodeContainer px="0" overflow="hidden">
        <Highlight
          codeString={editorCode}
          language={language}
          metastring={ln}
          showLines={viewlines}
        />
      </CodeContainer>
      <CopyButton top="4" onClick={onCopy}>
        {hasCopied ? "copied" : "copy"}
      </CopyButton>
    </Box>
  );
};

Code.defaultProps = {
  mountStylesheet: false,
};

export default Code;
