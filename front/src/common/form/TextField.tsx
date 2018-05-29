import * as React from 'react'

import TextField from '@material-ui/core/TextField'
import { Field } from 'react-final-form'

interface Props {
    name: string
    label?: string
    className?: string
    type?: string

    validate?: (value: any, allValues: object) => any
}

export default ({ validate, ...props }: Props) =>
    <Field name={props.name} validate={validate}>
        {(fieldProps) =>
            <TextField
                {...props}
                error={!!fieldProps.meta.error && !!fieldProps.meta.touched}
                value={fieldProps.input.value}
                onChange={fieldProps.input.onChange}
            />
        }
    </Field>
