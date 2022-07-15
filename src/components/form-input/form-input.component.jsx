import { FormImputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormImputLabel shrink={otherProps.value.length}>
          {label}
        </FormImputLabel>
      )}
    </Group>
  );
};

export default FormInput;
