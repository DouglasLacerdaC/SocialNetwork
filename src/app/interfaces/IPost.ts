import { IImage } from "./IImage";
import { IProfile } from "./IProfile";

export interface IPost {
    profile: IProfile,
    comment: string,
    created_at: string,
    images: IImage
}