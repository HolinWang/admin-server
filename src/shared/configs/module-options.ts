// 给configration做一个封装

import { ConfigModuleOptions } from "@nestjs/config";

import configration from "./configration";

export const configModuleOptions : ConfigModuleOptions = {
    envFilePath:'.env',
    load:[configration]
}