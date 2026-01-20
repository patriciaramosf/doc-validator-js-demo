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
      ptCC: '',
      ptNIF: '',
      esDNI: '',
      esNIF: '',
      esNIE: '',
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
        {form.values.country === 'pt' || form.values.country === 'all' ? (
          <>
            <TextInput
              mt="md"
              label="CC (Cartão de Cidadão)"
              placeholder="your@email.com"
              key={form.key('ptCC')}
              {...form.getInputProps('ptCC')}
            />
            <TextInput
              mt="md"
              label="NIF (Número de Identificação Fiscal)"
              placeholder="your@email.com"
              key={form.key('ptNIF')}
              {...form.getInputProps('ptNIF')}
            />
          </>
        ) : null}
        {form.values.country === 'es' || form.values.country === 'all' ? (
          <>
            <TextInput
              mt="md"
              label="DNI (Documento Nacional de Identidad)"
              placeholder="your@email.com"
              key={form.key('esDNI')}
              {...form.getInputProps('esDNI')}
            />
            <TextInput
              mt="md"
              label="NIF (Número de Identificación Fiscal)"
              placeholder="your@email.com"
              key={form.key('esNIF')}
              {...form.getInputProps('esNIF')}
            />
            <TextInput
              mt="md"
              label="NIE (Número de Identidad de Extranjero)"
              placeholder="your@email.com"
              key={form.key('esNIE')}
              {...form.getInputProps('esNIE')}
            />
            <TextInput
              mt="md"
              label="Email"
              placeholder="your@email.com"
              key={form.key('email')}
              {...form.getInputProps('email')}
            />
          </>
        ) : null}
        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Container>
  );
}