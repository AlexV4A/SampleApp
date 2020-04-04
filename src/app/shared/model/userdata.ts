export interface UserdataObject {
    id ? : string;
    name ? : string;
}
export interface ActionObject {
    id : string;
    message :string;
}

export interface RSSObject {
    channel : ChannelObject;
}

export interface ChannelObject {
    title : string;
    description : string;
    link : string;
    generator : string;
}