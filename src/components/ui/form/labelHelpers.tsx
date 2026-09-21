import { View } from "react-native";
import type { ReactNode } from "react";
import Typography from "../typography";

interface FileLabelProps {
  name: string;
  fileTypes?: string[];
  required?: boolean;
}

interface InputLabelProps {
  name: string;
  required?: boolean;
}

export const createFileLabel = ({
  name,
  fileTypes,
  required = false,
}: FileLabelProps): ReactNode => {
  const fileTypesStr = fileTypes?.join(", ") || "";

  return (
    <View className="flex-row flex-wrap items-center gap-1">
      <Typography color="white" size="sm" weight="medium">
        {name}
      </Typography>
      {fileTypesStr ? (
        <Typography size="xs" className="text-gray-500">
          ({fileTypesStr}) | max 500kb
        </Typography>
      ) : null}
      {required ? (
        <Typography color="danger" size="sm">
          *
        </Typography>
      ) : null}
    </View>
  );
};

export const createInputLabel = ({
  name,
  required = false,
}: InputLabelProps): ReactNode => (
  <View className="flex-row items-center gap-1">
    <Typography color="white" size="sm" weight="medium">
      {name}
    </Typography>
    {required ? (
      <Typography color="danger" size="sm">
        *
      </Typography>
    ) : null}
  </View>
);
