import { prop, Typegoose } from "@hasezoey/typegoose";

export class URL extends Typegoose {
  @prop({ required: true })  
  hash: string

  @prop({ required: true })  
  originURL: string

  @prop({ required: true })  
  shortURL: string
}

export const URlModel = new URL().getModelForClass(URL)