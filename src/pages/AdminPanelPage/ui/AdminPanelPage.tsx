import React from "react";
import {useTranslation} from "react-i18next";
import {Page} from "@/widgets/Page";
import {UserList} from "@/features/UserList";

const AdminPanelPage = () => {
    const {t} = useTranslation();

    return (
        <Page data-testid="AdminPanelPage">
            <UserList/>
            {/* TODO ADD USER RATING LIST AND ARTICLE RATING LIST  */}
        </Page>
    );
};

export default AdminPanelPage;
