import { Typography } from '@/components'
import { colors, tabs } from '@/constants'
import { Tabs } from 'expo-router'
import type { BottomTabBarProps } from 'expo-router/tabs'
import { Pressable, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const TabLayout = () => {

    const insets = useSafeAreaInsets()

    const TabBarNavigator = ({ state, navigation }: BottomTabBarProps) => {
        return (
            <View className='absolute inset-x-0 flex-row items-center justify-evenly bg-[#050A11] p-1 px-3' style={{
                bottom: insets.bottom,
            }}>
                { state.routes.map((route, index) => {
                    const tab = tabs.find((item) => item.name === route.name)
                    if (!tab) return null
                    const Icon = tab.icon

                    const isFocused = state.index === index

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        })
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name)
                        }
                    }

                    return (
                        <Pressable className={`bg-brand/10 rounded-[18px] px-5 py-4 items-center gap-y-1 ${isFocused ? 'bg-brand/10' : 'bg-transparent'}`} onPress={onPress}>
                            <Icon color={isFocused ? colors.brand : colors.white} 
                            width={22} height={22} />
                            <Typography className={`text-${isFocused ? 'brand' : 'white'} text-sm`}>
                                {tab.title}
                            </Typography>
                        </Pressable>
                    )
                })}
            </View>
        )
    }

    return (
        <Tabs screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: '#050A11' } }} tabBar={(props) =>
            <TabBarNavigator {...props} />} >
            {tabs.map((tab, index) => (
                <Tabs.Screen options={{ tabBarShowLabel: false }} key={index} name={tab.name} />
            ))}
        </Tabs>
    )
}

export default TabLayout