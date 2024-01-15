import {memo, useCallback} from "react";
import {useTranslation} from "react-i18next";
import {Button} from "@/shared/ui/redesigned/Button";
import {Text} from "@/shared/ui/redesigned/Text";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getRouteProfile} from "@/shared/const/router";
import {AppLink} from "@/shared/ui/redesigned/AppLink";
import {HStack} from "@/shared/ui/redesigned/Stack";
import {classNames} from "@/shared/lib/classNames/classNames";
import {Card} from "@/shared/ui/redesigned/Card";
import {User, userDelete} from "@/entities/User";
import cls from "./UserCard.module.scss";
import {Avatar} from "@/shared/ui/redesigned/Avatar";

interface UserItemProps {
    className?: string;
    user: User;
}

export const UserCard = memo((props: UserItemProps) => {
    const {className, user} = props;
    const {t} = useTranslation("");
    const dispatch = useAppDispatch();
    const onDeleteUser = useCallback(() => {
        dispatch(userDelete(user.id));
    }, [user.id, dispatch]);
    const content = (
        <HStack
            className={classNames(cls.UserCard, {}, [className])}
            gap="16"
            justify="between"
        >
            <AppLink to={getRouteProfile(user.id)} className={cls.header}>
                <Card
                    variant="outline"
                >
                    <HStack
                        justify="start"
                        gap="16"
                    >
                        <Avatar size={80} src={user.profile?.avatar}/>
                        <Text title={user.username} text={user.id}/>
                    </HStack>
                </Card>
            </AppLink>
            <Button
                variant="outline"
                onClick={onDeleteUser}
            >
                {t("X")}
            </Button>
        </HStack>
    );

    return content;
});