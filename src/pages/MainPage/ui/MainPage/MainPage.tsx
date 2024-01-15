import { memo } from 'react'
import { Page } from '@/widgets/Page'
import cls from './MainPage.module.scss'
import {Text} from "@/shared/ui/redesigned/Text";

const MainPage = () => (
    <Page className={cls.MainPage} data-testid="MainPage">
        <Text title="Page"/>
    </Page>
)

export default memo(MainPage)
