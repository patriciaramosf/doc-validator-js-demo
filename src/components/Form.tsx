import {
  Button, Checkbox, Group, TextInput, Container,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import RadioGroupInput from './RadioGroupInput';

export default function Form() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      termsOfService: false,
      country: 'pt',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Container className="form-container" p="xl" size="lg">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <RadioGroupInput
          value={form.values.country}  onChange={(val) => form.setFieldValue('country', val)}/>
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