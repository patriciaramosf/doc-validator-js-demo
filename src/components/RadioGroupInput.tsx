import { Card, Group, Radio, RadioGroup,
} from '@mantine/core';

interface RadioGroupInputProps {
  value: string;
  onChange: (value: string) => void;
};
export default function RadioGroupInput({ value, onChange }: RadioGroupInputProps) {
  const countries = [
    { value: 'pt', label: '🇵🇹 Portugal' },
    { value: 'es', label: '🇪🇸 Spain' },
    { value: 'all', label: '🌍 All countries' },
  ];

  return (
    <Card withBorder mb="md">
      <RadioGroup
        label={'Select country to validate its documents'}
        value={value}
        onChange={onChange}>
        <Group mt="xs">
          {countries.map((c) => (
            <Radio key={c.value} value={c.value} label={c.label} />
          ))}
        </Group>
      </RadioGroup>
    </Card>
  );
}