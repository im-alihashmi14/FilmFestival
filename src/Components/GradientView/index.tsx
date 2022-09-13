import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import Animated, {AnimateProps} from 'react-native-reanimated';
const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);
export interface GradientViewProps extends AnimateProps<LinearGradientProps> {
  endColor?: string | undefined;
  startColor?: string | undefined;
}
const GradientView = ({
  children,
  endColor,
  startColor,
  style,
  ...rest
}: GradientViewProps) => {
  return (
    <AnimatedGradient
      colors={[
        startColor || 'rgba(249, 249, 249, 0.04)',
        endColor || 'rgba(71, 180, 95, 0.2) ',
      ]}
      useAngle={true}
      angle={180}
      locations={[0, 0.8]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[style]}
      {...rest}>
      {children}
    </AnimatedGradient>
  );
};

export default GradientView;
