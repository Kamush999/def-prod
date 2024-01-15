import {Profile} from "@/entities/Profile";

export interface Comment {
    id: string
    text: string
    user: Profile
}
