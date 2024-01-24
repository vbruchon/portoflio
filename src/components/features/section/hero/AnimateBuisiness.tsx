import { AnimateBusinessItem } from './AnimateBusinessItem'

export type AnimateBusinessProps = {
    text: string
}

export const AnimateBusiness = ({ text }: AnimateBusinessProps) => {
    return text
        .split('')
        .map((char, index) => <AnimateBusinessItem key={index} char={char} />)
}
