import { Select } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { setAppLanguage } from "@/shared/config/i18n";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <Select
      w={145}
      size="sm"
      label={t("language.label")}
      value={i18n.language}
      leftSection={<IconLanguage size={16} />}
      onChange={(value) => {
        if (value) {
          setAppLanguage(value);
        }
      }}
      data={[
        { value: "kaa", label: "Qaraqalpaq" },
        { value: "uz", label: "O‘zbek" },
        { value: "ru", label: "Русский" }
      ]}
      comboboxProps={{
        transitionProps: {
          transition: "pop",
          duration: 220
        }
      }}
      styles={{
        label: {
          fontSize: "12px",
          marginBottom: "6px",
          color: "#6b7280",
          fontWeight: 600
        },
        input: {
          borderRadius: "10px",
          fontWeight: 500
        }
      }}
    />
  );
}