export class Article {

    title:string;
    link:string;
    votes?:number;

    constructor(title:string, link:string, votes?:number) {
        this.title = title;
        this.link = link;
        this.votes = votes;
    }

    voteUp():boolean {
    this.votes += 1;
    return false;
  }

  voteDown():boolean {
    this.votes -= 1;
      return false;
  }

  onMouseHover(img : string){
    console.log("mouse enter : " + img);
  }

  mouseLeave(img : string){
    console.log("mouse enter : " + img);
  }

  domain():string{
      try {
          const domainAndPath:string = this.link.split('//')[1];
          return domainAndPath.split('/')[0];
      } catch (error) {
          return null;
      }
  }
}