export interface ICardProjects{
  img: string,
  h3: string,
  h4: string,
  h5: string,
}
export class CardProjects implements ICardProjects{
  img: string;
  h3: string;
  h4: string;
  h5: string;
  constructor(img:string="", h3:string = "", h4:string = "", h5:string = ""){
    this.img = img;
    this.h3 = h3;
    this.h4 = h4;
    this.h5 = h5;
  }
}
export interface ICardNormal{
  h2: string,
  items: string[],
}
export class CardNormal implements ICardNormal{
  h2: string;
  items: string[];
  constructor(h2:string = "", items:string[]=[]){
    this.h2 = h2;
    this.items = items;
  }
}
