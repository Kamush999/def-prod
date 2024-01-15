import {memo} from "react";
import {DynamicModuleLoader, ReducersList} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {VStack} from "@/shared/ui/redesigned/Stack";
import {UserCard} from "../UserCard/UserCard";
import {classNames} from "@/shared/lib/classNames/classNames";
import {Skeleton} from "@/shared/ui/redesigned/Skeleton";
import cls from "./UserList.module.scss";
import {signUpReducer} from "../../SignUpNewUser/model/slice/signUpSlice";
import {useUsers} from "@/entities/User";

interface UserListProps {
    className?: string;
}

export const UserList = memo((props: UserListProps) => {
    const {
        className
    } = props;
    const {data, isLoading} = useUsers(null);
    const reducers: ReducersList = {
        signUpForm: signUpReducer
    };

    if (isLoading) {
        return (
            <VStack
                gap="8"
                max
                className={classNames(cls.UserList, {}, [className])}
            >
                <Skeleton width="100%" border="12px" height="80px"/>
                <Skeleton width="100%" border="12px" height="80px"/>
                <Skeleton width="100%" border="12px" height="80px"/>
            </VStack>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                gap="8"
                max
                className={classNames(cls.UserList, {}, [className])}
            >
                {data?.map((user) => (
                    (
                        <UserCard user={user} key={user.id}/>
                    )
                ))}
            </VStack>
        </DynamicModuleLoader>
    );
});