import Icons from '@/assets/icons'
import { Button, Controller, Input, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useRouter } from 'expo-router'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import { z } from 'zod'

const Login = () => {

    const router = useRouter();

    const schema = z.object({
        email: z.email().min(1, 'Email is required'),
        password: z.string().min(8, 'Password is required'),
    });

    type FormValues = z.infer<typeof schema>;

    const { control, handleSubmit } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (data: FormValues) => {
        router.replace('/(tabs)');
    };

    return (
        <>

            <View className='gap-y-3'>

                <Controller control={control} name='email'>
                    <Input label='Email' type='email' name='email' placeholder='Email'  />
                </Controller>

                <Controller control={control} name='password'>
                    <Input label='Password' type='password' name='password' placeholder='Password' />
                </Controller>

            </View>

            <Link href='/' className='self-end'>
                <Typography color='white' size={14} className='text-brand'>
                    Forgot Password?
                </Typography>
            </Link>

            <Button onPress={handleSubmit(onSubmit)}  className='rounded-full my-5'>
                Get Started
            </Button>

            <View className='flex-row items-center justify-center gap-x-5 mb-7'>

                <View className='w-full h-0.5 bg-stroke' />

                <Typography color='white' size={14} className='text-gray-400'>
                    Or
                </Typography>

                <View className='w-full h-0.5 bg-stroke' />

            </View>

            <Button className="rounded-full bg-[#828894]/20"
                textClassName="text-white font-normal"
                startContent={<Icons.GoogleIcon color="white" width={20} height={20} />}>
                Sign in with Google
            </Button>

        </>
    )
}

export default Login