'use client'

import { useState, ChangeEvent } from 'react'
import { PasswordInput, TextInput, Loader } from '@mantine/core'
import { IconAt } from '@tabler/icons-react'

type UserInputProps = {
  label: string
  inputType: 'username' | 'email' | 'password'
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  loading?: boolean
}

export default function UserInput({
  label,
  inputType,
  onChange,
  loading = false,
}: UserInputProps) {
  const [value, setValue] = useState('')
  const icon = <IconAt size={16} />

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputType === 'username' && !/^[a-zA-Z0-9]*$/.test(e.target.value)) {
      return
    }
    setValue(e.target.value)
    onChange?.(e)
  }
  if (loading) {
    return <Loader color={'blue'} type={'bars'} className={'mx-auto'} />
  }

  return (
    <div className={'relative w-full'}>
      {inputType === 'password' ? (
        <PasswordInput
          required
          placeholder={label}
          value={value}
          onChange={handleChange}
          className={'input-style'}
          classNames={{
            input: 'bg-[#0E0E0E] text-white',
          }}
        />
      ) : inputType === 'email' ? (
        <TextInput
          required
          type={'email'}
          leftSectionPointerEvents={'none'}
          leftSection={icon}
          placeholder={label}
          value={value}
          onChange={handleChange}
          className={'input-style'}
        />
      ) : (
        <TextInput
          required
          placeholder={label}
          value={value}
          onChange={handleChange}
          className={'input-style'}
        />
      )}
    </div>
  )
}
