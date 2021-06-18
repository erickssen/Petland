export class Puppie{
  public PetName: string;
  public Photo: any;
  public BaseUrl: string;
  public Age: any;
  public BreedName: string;
  public Coloring: string;

  public Location: string;
  public Gender: string;
  public PetType: string;
  public PetId: string;


  constructor(PetName: string, Photo: string, BaseUrl:any, Age:any,
    BreedName:string, Coloring: string, Gender: string, PetType: string,
    Location: string, PetId:string){

    this.PetName = PetName;
    this.Photo = Photo;
    this.BaseUrl =  BaseUrl;
    this.Age =  Age;
    this.BreedName = BreedName;
    this.Coloring = Coloring;
    this.PetId = PetId;

    this.Gender = Gender;
    this.PetType = PetType;
    this.Location = Location;

  }
}
