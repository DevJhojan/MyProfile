export interface ICardProjects{
  img: string,
  name: string,
  tool: string,
  state: string,
  url: string
}
export class CardProjects implements ICardProjects{

  img: string;
  name: string;
  tool: string;
  state: string;
  url: string;
  constructor(img:string="", name:string = "", tool:string = "", state:string = "", url: string = ""){
    this.img = img;
    this.name = name;
    this.tool = tool;
    this.state = state;
    this.url = url;
  }
}
export interface ICardNormal{
  h2: string,
  items?: string[],
  itemsObject?:  ItemsObjetc[],
}
export interface ItemsObjetc{
  name: string,
  img: string,
  url?: string,
}
export class CardNormal implements ICardNormal{
  h2: string;
  items: string[];
  itemsObject?: ItemsObjetc[];
  constructor(h2:string = "", items:string[]=[], itemsObject: ItemsObjetc[] = []){
    this.h2 = h2;
    this.items = items;
    this.itemsObject = itemsObject;
  }
}
