import React, { memo, useCallback, useState } from 'react'
import { MenuList } from '../MenuList/MenuList'
import cls from './BurgerMenu.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import MyLogo from '@/shared/assets/icons/my-logo.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'
import Close from '@/shared/assets/icons/close.svg'

interface BurgerMenuProps {
    className?: string
}

export const BurgerMenu = memo((props: BurgerMenuProps) => {
    const { className } = props
    const [collapsed, setCollapsed] = useState(false)

    const cn = classNames(cls.BurgerMenu, { [cls.collapsed]: collapsed }, [
        className,
    ])

    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev)
    }, [])

    return (
        <div className={cls.logoWrapper}>
            <MyLogo
                className={cls.logo}
                width={40}
                height={40}
                onClick={onToggle}
            />
            <HStack onClick={onToggle} className={cn}>
                <HStack
                    justify="between"
                    align="start"
                    className={cls.menuList}
                    onClick={(e) => e.stopPropagation()}
                >
                    <VStack gap="16">
                        <MenuList onClick={onToggle} />
                    </VStack>
                    <Icon
                        Svg={Close}
                        clickable
                        onClick={(e) => {
                            e.stopPropagation()
                            onToggle()
                        }}
                        className={cls.btn}
                    />
                </HStack>
            </HStack>
        </div>
    )
})
