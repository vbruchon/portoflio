import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export type CloseButtonProps = {
    onClose: () => void
}

export const CloseButton = ({ onClose }: CloseButtonProps) => {
    return (
        <Button
            variant={'outline'}
            className="absolute right-2 top-4 border-none text-primary"
            onClick={onClose}
        >
            <X strokeWidth={4} size={42} />
        </Button>
    )
}
