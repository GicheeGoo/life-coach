import { HTMLMotionProps, motion } from "framer-motion";
import { FC } from "preact/compat";

export type AnimateProps = Omit<HTMLMotionProps<'div'>, 'children'>

export const Animate: FC<AnimateProps> = props =>
{
    const { initial, animate, whileInView, children, ...motionProps } = props;

    return (
        <motion.div
            initial={{ opacity: 0, ...(typeof initial === 'object' && initial) }}
            animate={animate}
            whileInView={{ opacity: 1, ...(typeof whileInView === 'object' && whileInView) }}
            viewport={{ once: true }}
            {...motionProps}
        >
            {children as any}
        </motion.div>
    )
}