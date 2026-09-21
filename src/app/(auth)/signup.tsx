import Icons from '@/assets/icons'
import { Button, Controller, Input, Typography } from '@/components'
import { View } from 'react-native'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.email("Enter a valid email"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormValues = z.infer<typeof schema>;

const Signup = () => {
    
    const { control, handleSubmit } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            password: "",
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <>

            <View className='gap-y-1'>

                <Controller control={control} name="fullName">
                    <Input label='Full Name' type='text' name='fullName' placeholder='Full Name' />
                </Controller>

                <Controller control={control} name="email">
                    <Input label='Email' type='email' name='email' placeholder='Email' />
                </Controller>

                <Controller control={control} name="phoneNumber">
                    <Input label='Phone Number' type='tel' name='phoneNumber' placeholder='Phone Number' />
                </Controller>

                <Controller control={control} name="password">
                    <Input label='Password' type='password' name='password' placeholder='Password' />
                </Controller>

            </View>

            <Button className='rounded-full my-5' onPress={handleSubmit(onSubmit)}>
                Create Account
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

export default Signup
