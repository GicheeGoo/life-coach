import { Detail } from "@/utils/generateContent";

import { KidTalentMap } from "./posts/KidTalentMap";
import { GEINAcademy } from "./posts/GeinAcademy";
import { MapForSuccess } from "./posts/MapForSuccess";

import adsImg from './images/ads/ads.png';

export type Post = {
    title: string,
    description: string,
    thumbnail: string,
    createdDate: string,
    to: string,
    author: string,
    details: Detail[]
}

export const posts: Post[] = [
    KidTalentMap,
    GEINAcademy,
    MapForSuccess
]

export const ads = {
    thumbnail: adsImg,
    title: 'Sách Chuyển hóa bản thân – Sống đời ngoại hạng',
    description: 'Cuốn sách cháy hàng liên tục kể từ khi GEIN ra mắt, đã giúp hàng nghìn người thấu hiểu và chuyển hóa chính mình sau khi đọc xong.',
    link: '/sach/sach-chuyen-hoa-ban-than-song-doi-ngoai-hang/'
}