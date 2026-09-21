import React from 'react'
import { SafeAreaView as RNWSafeAreaView } from 'react-native-safe-area-context'
import { cn } from '@/lib'
import { styled } from 'nativewind'

const StyledSafeAreaView = styled(RNWSafeAreaView)

const SafeArea = ({ children, className }: { children: React.ReactNode,  className?: string }) => {
    return (
        <StyledSafeAreaView className={cn('flex-1', className)}>
            {children}
        </StyledSafeAreaView>
    )
}

export default SafeArea