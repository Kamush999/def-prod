import {UserRoles} from "../..";
import {FeatureFlags} from "@/shared/types/featureFlags";
import {JsonSettings} from "./jsonSettings";
import {Profile} from "@/entities/Profile";

export type UserRole = (typeof UserRoles)[keyof typeof UserRoles]

export interface User {
    id: string;
    username?: string;
    profile?: Profile;
    avatar?: string;
    password?: string;
    features?: FeatureFlags;
    roles?: UserRole[];
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData?: User;
    inited?: boolean;
}
