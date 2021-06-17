export default class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public photo: { name: string },
    public price: number
  ) {}
}
