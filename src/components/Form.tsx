import {
  Button, Group, TextInput, Container,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import RadioGroupInput from './RadioGroupInput';

export default function Form() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
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
          mt="md"
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <TextInput
          mt="md"
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <TextInput
          mt="md"
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <TextInput
          mt="md"
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <TextInput
          mt="md"
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Container>
  );
}