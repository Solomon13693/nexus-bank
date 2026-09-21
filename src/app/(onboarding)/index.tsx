import { Button, SafeArea, Typography } from '@/components'
import { useOnboarding } from '@/hooks'
import { useRouter } from 'expo-router'
import { Image, View } from 'react-native'

const OnboardingLayout = () => {
  const router = useRouter()
  const { completeOnboarding } = useOnboarding()

  const handleGetStarted = async () => {
    await completeOnboarding()
    router.replace('/(auth)/signup')
  }

  const handleLogin = async () => {
    await completeOnboarding()
    router.replace('/(auth)/login')
  }

  return (
    <SafeArea className='bg-[#060A11] relative pb-5'>

      <Image source={require('@/assets/img/effects/onboard_line.png')} className='absolute bottom-0 right-0 left-0 top-[25%] w-full' />

      <View className='gap-y-5 p-6'>

        <View>
          <Typography className='text-[32px] font-semibold text-white'>
            Manage
          </Typography>
          <Typography className='text-[32px] font-semibold text-white'>
            Your Finances
          </Typography>
        </View>

        <Typography className='w-50 text-gray-300 text-base font-medium'>
          Banking made easy for you, anytime, anywhere!
        </Typography>

      </View>

      <View className='mx-auto top-16'>
        <Image resizeMode='contain' source={require('@/assets/img/onboarding_card.png')}
          style={{ width: 384, height: 386 }} />
      </View>

      <View className="flex-1" />

      <View className='px-6 gap-y-6'>

        <Button onPress={handleGetStarted} className='rounded-full'>Get Started</Button>

        <View className='flex-row items-center justify-center gap-1.5'>

          <Typography className='text-center text-gray-200 text-base font-medium'>
            Already have an account?
          </Typography>

          <Typography
            onPress={handleLogin}
            className='text-center text-brand text-base font-bold'>
            Login
          </Typography>

        </View>

      </View>

    </SafeArea>
  )
}

export default OnboardingLayout
