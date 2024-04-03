import React from "react";

const sizeClasses = {
  txtPromptMedium1532TealA400: "font-medium font-prompt",
  txtLektonItalic21: "font-lekton font-normal italic",
  txtRobotoRomanMedium1593: "font-medium font-roboto",
  txtPromptBold40: "font-bold font-prompt",
  txtPromptMedium30: "font-medium font-prompt",
  txtPromptSemiBold255Bluegray400: "font-prompt font-semibold",
  txtPromptMedium168: "font-medium font-prompt",
  txtPromptMedium1751: "font-medium font-prompt",
  txtPromptSemiBold364: "font-prompt font-semibold",
  txtPromptSemiBold24Black900: "font-prompt font-semibold",
  txtPromptMedium14Black900: "font-medium font-prompt",
  txtPromptSemiBold21: "font-prompt font-semibold",
  txtPromptSemiBold3502: "font-prompt font-semibold",
  txtPromptSemiBold20: "font-prompt font-semibold",
  txtPromptMedium1593: "font-medium font-prompt",
  txtPromptSemiBold24: "font-prompt font-semibold",
  txtPromptBold20WhiteA700: "font-bold font-prompt",
  txtPromptSemiBold23: "font-prompt font-semibold",
  txtPromptMedium14TealA400: "font-medium font-prompt",
  txtPromptSemiBold24Bluegray90001: "font-prompt font-semibold",
  txtPromptMedium21: "font-medium font-prompt",
  txtPromptMedium20Teal100: "font-medium font-prompt",
  txtPromptBold17: "font-bold font-prompt",
  txtPromptBold16: "font-bold font-prompt",
  txtPromptBold60Teal100: "font-bold font-prompt",
  txtPromptRegular1751: "font-normal font-prompt",
  txtPromptMedium2288: "font-medium font-prompt",
  txtPromptSemiBold17TealA400: "font-prompt font-semibold",
  txtPromptMedium20: "font-medium font-prompt",
  txtPromptMedium1247: "font-medium font-prompt",
  txtPromptSemiBold1332: "font-prompt font-semibold",
  txtPromptRegular18: "font-normal font-prompt",
  txtPromptRegular182: "font-normal font-prompt",
  txtPromptExtraBold2377: "font-extrabold font-prompt",
  txtRobotoRomanMedium1593TealA400: "font-medium font-roboto",
  txtPromptMedium175: "font-medium font-prompt",
  txtPromptSemiBold17: "font-prompt font-semibold",
  txtPromptSemiBold16: "font-prompt font-semibold",
  txtPromptMedium17: "font-medium font-prompt",
  txtPromptRegular24Teal10001: "font-normal font-prompt",
  txtPromptMedium14: "font-medium font-prompt",
  txtPromptBold24: "font-bold font-prompt",
  txtPromptBold20: "font-bold font-prompt",
  txtPromptMedium17TealA400: "font-medium font-prompt",
  txtPromptBoldItalic30: "font-bold font-prompt italic",
  txtPromptMedium1332TealA400: "font-medium font-prompt",
  txtPromptBold60: "font-bold font-prompt",
  txtPromptSemiBold2916: "font-prompt font-semibold",
  txtPromptMedium1593TealA400: "font-medium font-prompt",
  txtPromptRegular24: "font-normal font-prompt",
  txtPromptMedium1532: "font-medium font-prompt",
  txtPromptMedium30Black900: "font-medium font-prompt",
  txtPromptMedium1332: "font-medium font-prompt",
  txtPromptMedium1532Gray600: "font-medium font-prompt",
  txtPromptMedium182: "font-medium font-prompt",
  txtPromptBold20Black900: "font-bold font-prompt",
  txtPromptSemiBold739: "font-prompt font-semibold",
  txtPromptBold30: "font-bold font-prompt",
  txtPromptMedium21Black900: "font-medium font-prompt",
  txtPromptSemiBold16Black900: "font-prompt font-semibold",
  txtPromptSemiBold255: "font-prompt font-semibold",
  txtPromptMedium1142: "font-medium font-prompt",
  txtPromptSemiBold2288: "font-prompt font-semibold",
  txtPromptMedium1142Black900: "font-medium font-prompt",
  txtPromptSemiBold2041: "font-prompt font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
