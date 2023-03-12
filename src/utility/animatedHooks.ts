import { useEffect } from "react";
import Animated, { useSharedValue, withTiming, Easing, withRepeat, cancelAnimation } from "react-native-reanimated";

export const useTiming = (value: boolean) => {
    const progress = useSharedValue(0);
    useEffect(() => {
        progress.value = value ? 1 : 0
    }, [value])

    return progress
}


// Better name it useAnimatedOnMount
export const useAnimatedMount = (duration?: number): Animated.SharedValue<number> => {
    const d = duration ?? 1000;
    const progress = useSharedValue(0);
    useEffect(() => {
        progress.value = withTiming(1, { duration: d, easing: Easing.linear });
    }, []);

    return progress;
};

export const useAnimatedMountLoop = (
    duration: number = 1000,
    noOfLoop: number = 5,
    reverse: boolean = true
) => {
    const d = duration ?? 1000
    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withRepeat(
            withTiming(1, { duration: d }),
            noOfLoop,
            reverse
        );

        return () => {
            cancelAnimation(progress)
        }
    }, []);



    return progress
};

