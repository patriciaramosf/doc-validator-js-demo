import { useState } from 'react';
import {
  Button, Card, Checkbox, Group, TextInput, Container, Radio, RadioGroup,
} from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Form() {
  const countries = [
    { value: 'pt', label: '🇵🇹 Portugal' },
    { value: 'es', label: '🇪🇸 Spain' },
    { value: 'all', label: '🌍 All countries' },
  ];
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  const [selectedOption, setSelectedOption] = useState('pt');

  return (
    <Container className="form-container" p="xl" size="lg">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Card withBorder mb="md">
          <RadioGroup
            label={'Select country to validate its documents' }
            value={selectedOption}
            onChange={setSelectedOption}>
            <Group mt="xs">
              {countries.map((c) => (
                <Radio key={c.value} value={c.value} label={c.label} />
              ))}
            </Group>
          </RadioGroup>
        </Card>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          key={form.key('termsOfService')}
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Container>
  );
}