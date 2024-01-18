import {
  FormControl,
  FormMessage,
  FormField,
  FormLabel,
  FormItem,
  Form
} from '@/shared/components/ui/form'
import { ErrorAlert } from '@/shared/components/ui/error-alert'
import { Separator } from '@/shared/components/ui/separator'
import { Button } from '@/shared/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate, Link } from 'react-router-dom'
import { Input } from '@/shared/components/ui/input'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { useAuthStore } from '../hooks'

const schema = z.object({
  email: z.string().email('invalid email').min(1, 'email is required'),
  password: z.string().min(1, 'password is required')
})

export const SigninForm = () => {
  const navigate = useNavigate()

  const signin = useAuthStore((state) => state.signin)

  const form = useForm<z.infer<typeof schema>>({
    defaultValues: {
      password: '',
      email: ''
    },
    resolver: zodResolver(schema)
  })

  const onSubmit = async (values: z.infer<typeof schema>) => {
    try {
      await signin(values)
      navigate('/')
    } catch (error) {
      if (error instanceof Error) {
        form.setError('root', {
          message: error.message
        })
      }
    }
  }

  return (
    <div className="w-full max-w-sm">
      <h1 className="text-center text-3xl font-semibold">sign in</h1>
      <div className="mt-4 flex flex-col gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
            <FormField
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-base">email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter email"
                      className="rounded-none"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
              name="email"
            />

            <FormField
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-base">password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="enter password"
                      className="rounded-none"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
              name="password"
            />

            <Button
              disabled={form.formState.isSubmitting}
              className="w-full rounded-none"
              type="submit"
            >
              continue
            </Button>

            {form.formState.errors.root && (
              <ErrorAlert message={form.formState.errors.root.message} />
            )}
          </form>
        </Form>
        <div className="flex w-full items-center gap-1">
          <Separator className="flex-1" />
          <span>or</span>
          <Separator className="flex-1" />
        </div>
        <Button className="w-full rounded-none" variant="secondary" asChild>
          <Link to={'/signup'}>sign up</Link>
        </Button>
      </div>
    </div>
  )
}
