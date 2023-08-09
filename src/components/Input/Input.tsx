import { Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps {
  label: string;
  textInputConfig: TextInputProps;
}

export const Input: React.FC<InputProps> = ({ label, textInputConfig }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
};
